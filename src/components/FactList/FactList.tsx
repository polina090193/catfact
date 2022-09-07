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

const FactList = (props: { filterValues: FilterValues,  currentPageData: FactWithId[] }) => {
  const { currentPageData } = props
  
  return (
    <>
      <StyledList>
        {currentPageData.map((fact: FactWithId) => <FactCard key={fact.id} fact={fact} isLiked={checkIfLiked(fact.id)} />)}
      </StyledList>
    </>
  )
}

export default FactList
