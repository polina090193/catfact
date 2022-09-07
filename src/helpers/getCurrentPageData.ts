import { FactWithId } from './../types/types'

export const getCurrentPageData = (
  allData: FactWithId[],
  pageNum: number = 1,
  perPage: number = 10
  ): FactWithId[] => {
    
  const firstOnPage: number = (pageNum - 1) * perPage
  const lastOnPage: number = firstOnPage + 10

  const pageData = allData.slice(firstOnPage, lastOnPage)

  return pageData
}

export default getCurrentPageData
