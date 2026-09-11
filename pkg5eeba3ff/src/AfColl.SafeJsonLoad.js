function parse(input, fallback) {
  if (typeof input !== 'string' || input.length === 0) {
    return fallback;
  }
  try {
    return JSON.parse(input);
  } catch (e) {
    return fallback;
  }
}
