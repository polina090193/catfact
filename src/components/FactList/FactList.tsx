import type { FactWithId, FilterValues } from '../../types/types'
import { checkIfLiked } from '../../storage/storage'
import { List } from 'rsuite'
import styled from 'styled-components'
import FactCard from '../FactCard/FactCard'

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
