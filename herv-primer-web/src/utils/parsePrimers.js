export function safeParsePrimerList(x) {
  if (!x) return [];

  if (Array.isArray(x)) return x;

  if (typeof x === "string") {
    try {
      return JSON.parse(x);
    } catch (e) {
      console.error("Failed to parse JSON:", e, x);
      return [];
    }
  }

  return [];
}