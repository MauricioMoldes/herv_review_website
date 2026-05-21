// Module-level cache — lives for the entire browser session.
// Keyed by serialized search params so each unique query is cached independently.
export const primerCache = new Map();