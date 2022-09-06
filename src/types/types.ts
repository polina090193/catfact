export type FetchedFact = {
  fact: string,
  length: number,
}

export type FactWithId = {
  id: number,
  text: string,
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