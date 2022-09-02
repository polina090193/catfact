import { List } from 'rsuite'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import styled from 'styled-components'

interface FactCardProps {
    text: string,
}

const StyledListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
`

const FactCard = (props: FactCardProps) => {
  const { text } = props;
  return (
    <StyledListItem>
      {text} <BsHeart />{/* <BsHeartFill /> */}
    </StyledListItem>
  )
}

export default FactCard
