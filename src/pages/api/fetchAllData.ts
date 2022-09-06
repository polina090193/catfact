import type { NextApiRequest, NextApiResponse } from 'next'
import { FetchedFact } from '../../types/types';

type Data = {
  name: string
}

const PER_PAGE = 10

export async function fetchAllData(pageNum: number = 1) {
  const response = await fetch(`https://catfact.ninja/facts?page=${pageNum}`)
  const jsonData = await response.json()
  let factsData: FetchedFact[] = []

  if (jsonData?.data?.length) {
    const preprocessedData = jsonData.data.map((item: FetchedFact, i: number) => ({
      id: Number(`${jsonData.current_page}${i + 1}`),
      text: item.fact
    }))
    factsData = [...factsData, ...preprocessedData]
  }
  if (jsonData?.next_page_url) {
    const tempData = await fetchAllData(jsonData.current_page + 1)
    if (tempData?.length) {
      factsData = [...factsData, ...tempData]
    }
  }

  return factsData
}

export const fetchAllHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  // const { pid } = req.query
  
  // if (pid === 'saveAllData') {
    const fetchedData = await fetchAllData()

    res.statusCode = 200
    res.end(JSON.stringify(fetchedData))

  /* } else if (pid === 'getByPage') {
    const pageNum: number = Number(req.query.page) ?? 1
    const firstOnPage: number = (pageNum - 1) * PER_PAGE + 1
    const lastOnPage: number = firstOnPage + 10

    const pageData = allData.slice(firstOnPage, lastOnPage)

    res.statusCode = 200
    res.end(JSON.stringify(pageData))
  } */
}


export default fetchAllHandler
