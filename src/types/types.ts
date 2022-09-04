export type FetchedFact = {
  fact: string,
  length: number,
}

export type PaginationLink = {
  url?: string | null,
  label?: string,
  active?: boolean,
}

export type FilterValues = {
  filter: string,
  sorting: string,
}