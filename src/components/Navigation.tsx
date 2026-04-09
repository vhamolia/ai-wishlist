import { useDictionary } from "@/hooks/useDictionary";
import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";

export default function Navigation() {
  const { getTranslation } = useDictionary("Navigation");

  return (
    <div className="bg-slate-850">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div>
          <Link href="/">{getTranslation("home")}</Link>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
