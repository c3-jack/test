function slugify(input) {
  var slug = input.replace(/[^a-zA-Z0-9]+/g, '-');

  // Strip leading/trailing hyphens left over from non-alphanumeric runs at either end.
  slug = slug.replace(/^-+/, '').replace(/-+$/, '');

  return slug.toLowerCase();
}
