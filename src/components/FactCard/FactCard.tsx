import { useState } from 'react'
import { List } from 'rsuite'
import styled, { css } from 'styled-components'
import { checkIfLiked, toggleLike } from '../../storage/storage'
import { FactWithId } from '../../types/types'
import { Heart, HeartFill } from '@styled-icons/bootstrap'
import { useLoaded } from '../../storage/storage'

const StyledListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
  min-height: 5em;
`

const HEART_SIZE = '24px'

const likeStyles = css`
  min-width: ${HEART_SIZE};
  min-height: ${HEART_SIZE};
  max-width: ${HEART_SIZE};
  max-height: ${HEART_SIZE};
  margin-left: 18px;
  cursor: pointer;
`

const Like = styled.div`
  ${likeStyles}
`

const FactCard = (props: { fact: FactWithId, isLiked: boolean }) => {
  const loaded = useLoaded()

  const { fact, isLiked } = props
  const [liked, setLiked] = useState(isLiked)

  const handleLike = () => {
    toggleLike(fact.id)
    setLiked(checkIfLiked(fact.id))
  }

  return (
    <>
      {loaded &&
        <StyledListItem>
          <div>{fact.text}</div>
          <Like>
            {liked ? <HeartFill onClick={() => handleLike()} /> : <Heart onClick={() => handleLike()} />}
          </Like>
        </StyledListItem>
      }
    </>
  )
}

export default FactCard
