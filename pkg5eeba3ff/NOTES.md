<<<<<<< HEAD
- `AfNet.ParseUrlHost` — stateless utility service with `parse(url)` for extracting the lower-cased hostname from a URL, ignoring scheme, userinfo, port, path, query, and fragment.
- `AfNet.PortOf` — stateless utility service with `port(url)` for determining the numeric port of a URL, using an explicit `:port` if present, else the scheme's default port, else `-1`.
||||||| 83008f3
=======
- `AfNet.ParseUrlHost` — stateless utility service with `parse(url)` for extracting the lower-cased hostname from an absolute or protocol-relative URL, stripping scheme, userinfo, port, path, query, and fragment, and returning `""` when no host can be determined.
>>>>>>> origin/main
