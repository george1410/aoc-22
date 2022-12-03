export default <T>(xs: Iterable<T>) => [...new Set(xs)];
