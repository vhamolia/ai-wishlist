import "server-only";

const REQUIRED_SERVER_ENV_KEYS = [
  "SUPABASE_SERVICE_ROLE_KEY",
  "GEMINI_API_KEY",
  "RESEND_API_KEY",
] as const;

export function getServerEnv() {
  const missingKeys = REQUIRED_SERVER_ENV_KEYS.filter((key) => !process.env[key]);

  if (missingKeys.length > 0) {
    throw new Error(`Missing required server environment variables: ${missingKeys.join(", ")}`);
  }

  return {
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY as string,
    RESEND_API_KEY: process.env.RESEND_API_KEY as string,
  };
}
