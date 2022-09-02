import type { Fact } from '../../pages/index'
import { List } from 'rsuite'
import FactCard from '../FactCard/FactCard'
import styled from 'styled-components'

interface FactListProps {
    facts: Fact[],
}

const StyledList = styled(List)`
  width: 50%;
`

const FactList = (props: FactListProps) => {
  const { facts } = props;
  return (
    <StyledList>
      {facts.map((fact) => <FactCard key={fact.id} text={fact.text} />)}
    </StyledList>
  )
}

export default FactList
