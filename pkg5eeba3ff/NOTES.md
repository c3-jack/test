# Notes

- `AfNet.JoinUrl` — stateless utility service with `join(base, path)` for concatenating a base URL and a relative path with exactly one `/` separator.
- `AfNet.ParseUrlHost` — stateless utility service with `parse(url)` for extracting the lower-cased hostname from an absolute or protocol-relative URL, stripping scheme, userinfo, port, path, query, and fragment, and returning `""` when no host can be determined.
- `AfNet.PathJoin` (`src/AfNet.PathJoin.c3typ` / `.js`) — service type with a `join(parts)` function that joins an array of path segments into a single forward-slash-delimited path, collapsing redundant slashes and preserving a leading absolute slash.
