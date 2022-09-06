import type { FactWithId, PaginationLink, FilterValues } from '../../types/types'
import useSWR from 'swr'
// import fetchHandler from '../../pages/api/fetchData'
import { List } from 'rsuite'
import FactCard from '../FactCard/FactCard'
import styled from 'styled-components'
import { checkIfLiked } from '../../storage/storage'

const StyledList = styled(List)`
  margin: 18px 0;
`



const FactList = (/* { currentPageData }: InferGetStaticPropsType <typeof getStaticProps> */props: {  pageIndex: number,/* , onLinksFetching: Function, */ filterValues: FilterValues,  currentPageData: FactWithId[] }) => {
  const { pageIndex, currentPageData } = props
  

  // function handleLinksFetching(links: PaginationLink[]) {
  //   onLinksFetching(links)
  // }

  // const { data } = useSWR(`https://catfact.ninja/facts?page=${pageIndex}`, fetchData)
  // const data = fetchData()
  // console.log(data)
  
  /* if (!data || !data.data) {
    return <h1>Waiting for loading...</h1>
  }

  const facts: string[] = data.data.map((fact: FetchedFact) => fact.fact)

  const fetchedLinks: PaginationLink[] = data.links

  handleLinksFetching(fetchedLinks) */

  return (
    <>
      <StyledList>
        {currentPageData.map((fact: FactWithId) => <FactCard key={fact.id} fact={fact} isLiked={checkIfLiked(fact.id)} />)}
      </StyledList>
    </>
  )
}

export default FactList
