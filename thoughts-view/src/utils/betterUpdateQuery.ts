import { QueryInput, Cache } from "@urql/exchange-graphcache";

export function betterUpdateQuery<Result, Query>(cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (rn: Result, q: Query) => Query) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}
