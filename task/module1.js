function normalizeJsBasicsLabel(label) {
const prefix = "js-basic";
  const normalized = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace special chars/spaces with -
    .replace(/^-+|-+$/g, "");    // remove starting/ending -
  return normalized ? `${prefix}-${normalized}` : prefix;
}