import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export async function fetchData(pageNum: number = 1) {
  const response = await fetch(`https://catfact.ninja/facts?page=${pageNum}`)
  return response
}

export const fetchHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const jsonData = await (await fetchData())?.json()
  res.status(200).json(jsonData)
}

export default fetchHandler
