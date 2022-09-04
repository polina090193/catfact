export type FetchedFact = {
  fact: string,
  length: number,
}

export type PaginationLink = {
  url?: string | null,
  label?: string,
  active?: boolean,
}
