import type { FetchedFact, PaginationLink, FilterValues } from '../../types/types'
import useSWR from 'swr'
import fetcher from '../../pages/api/fetcher'
import { List } from 'rsuite'
import FactCard from '../FactCard/FactCard'
import styled from 'styled-components'
import { checkIfLiked } from '../../storage/storage'

const StyledList = styled(List)`
  margin: 18px 0;
`

const FactList = (props: { pageIndex: number, onLinksFetching: Function, filterValues: FilterValues }) => {
  const { pageIndex, onLinksFetching } = props

  function handleLinksFetching(links: PaginationLink[]) {
    onLinksFetching(links)
  }

  const { data } = useSWR(`https://catfact.ninja/facts?page=${pageIndex}`, fetcher)

  if (!data || !data.data) {
    return <h1>Waiting for loading...</h1>
  }

  const facts: string[] = data.data.map((fact: FetchedFact) => fact.fact)

  const fetchedLinks: PaginationLink[] = data.links

  handleLinksFetching(fetchedLinks)

  return (
    <>
      <StyledList>
        {facts.map((fact, i) => <FactCard key={i} text={fact} isLiked={checkIfLiked(fact)} />)}
      </StyledList>
    </>
  )
}

export default FactList
