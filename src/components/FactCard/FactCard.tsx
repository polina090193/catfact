import { useState } from 'react'
import { List } from 'rsuite'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import styled, { css } from 'styled-components'
import { checkIfLiked, toggleLike } from '../../storage/storage'

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

const FactCard = (props: { text: string, isliked: boolean }) => {
  const { text, isliked } = props
  const [liked, setLiked] = useState(checkIfLiked(text))

  // let liked = checkIfLiked(text)

  const handleLike = () => {
    toggleLike(text)
    setLiked(checkIfLiked(text))
  }

  return (
    <StyledListItem>
      {text} {liked ? <LikeFill onClick={() => handleLike()} /> : <Like onClick={() => handleLike()} />}
    </StyledListItem>
  )
}

export default FactCard
