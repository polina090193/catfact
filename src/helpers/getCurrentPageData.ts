import { FactWithId } from './../types/types';

const PER_PAGE = 10

export const getCurrentPageData = (allData: FactWithId[], pageNum: number = 1): FactWithId[] => {
  const firstOnPage: number = (pageNum - 1) * PER_PAGE
  const lastOnPage: number = firstOnPage + 10

  const pageData = allData.slice(firstOnPage, lastOnPage)

  return pageData
}

export default getCurrentPageData
