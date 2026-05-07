// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import LocaleSwitcher from "./LocaleSwitcher";
import { useRouter } from "@/i18n/navigation";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useParams: vi.fn(() => ({ someParam: "value" })),
}));

// Mock next-intl
vi.mock("next-intl", () => ({
  useLocale: vi.fn(() => "en"),
}));

// Mock @/hooks/useDictionary
vi.mock("@/hooks/useDictionary", () => ({
  useDictionary: vi.fn(() => ({
    getTranslation: (key: string, values?: Record<string, unknown>) => {
      if (key === "label") return "Language switcher";
      if (key === "locale" && values?.locale === "en") return "English";
      if (key === "locale" && values?.locale === "de") return "German";
      return key;
    },
  })),
}));

// Mock @/i18n/navigation
vi.mock("@/i18n/navigation", () => ({
  usePathname: vi.fn(() => "/test-path"),
  useRouter: vi.fn(() => ({
    replace: vi.fn(),
  })),
}));

// Mock @/i18n/routing
vi.mock("@/i18n/routing", () => ({
  routing: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
}));

// Mock react's useTransition
vi.mock("react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react")>();
  return {
    ...actual,
    useTransition: vi.fn(() => [false, (cb: () => void) => cb()]),
  };
});

describe("LocaleSwitcher", () => {
  const mockReplace = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useRouter).mockReturnValue({ replace: mockReplace } as unknown as ReturnType<
      typeof useRouter
    >);
  });

  it("renders the language switcher with correct options", () => {
    render(<LocaleSwitcher />);

    // Check label
    expect(screen.getByText("Language switcher")).toBeInTheDocument();

    // Check options
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(2);
    expect(options[0]).toHaveValue("en");
    expect(options[0]).toHaveTextContent("English");
    expect(options[1]).toHaveValue("de");
    expect(options[1]).toHaveTextContent("German");
  });
});
