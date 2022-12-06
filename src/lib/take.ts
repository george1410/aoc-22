export default <T>(count: number, xs: Iterable<T>) => [...xs].slice(0, count);
