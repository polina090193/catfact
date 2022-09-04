import { List } from 'rsuite'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import styled, { css } from 'styled-components'

const StyledListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
`

const HEART_SIZE = '24px'

const heartStyles = css`
  min-width: ${HEART_SIZE};
  min-height: ${HEART_SIZE};
  margin-left: 18px;
`

const Like = styled(BsHeart)`
  ${heartStyles}
`

const LikeFill = styled(BsHeartFill)`
  ${heartStyles}
`

const FactCard = (props: { text: string }) => {
  const { text } = props;
  return (
    <StyledListItem>
      {text} <Like />{/* <LikeFill /> */}
    </StyledListItem>
  )
}

export default FactCard
