import type { NextApiRequest, NextApiResponse } from 'next'
import { FetchedFact } from '../../types/types';

type Data = {
  name: string
}

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
    const fetchedData = await fetchAllData()

    res.statusCode = 200
    res.end(JSON.stringify(fetchedData))
}


export default fetchAllHandler
