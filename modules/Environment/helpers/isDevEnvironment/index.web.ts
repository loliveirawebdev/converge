export function isDevEnvironment(): boolean {
  if (!process) {
    return false;
  }

  return process.env.NODE_ENV === "development";
}
