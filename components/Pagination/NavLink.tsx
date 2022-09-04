import type { PaginationLink } from '../../types/types';
import { Button } from 'rsuite'
import styled from 'styled-components';

const PREVIOUS_TEXT = 'Previous'
const NEXT_TEXT = 'Next'

const InactiveButton = styled(Button)`
  &[disabled] {
    background-color: transparent;
    cursor: default;
  }
`

const NavLink = (props: { link: PaginationLink, pageIndex: number, onPageChange: Function }) => {
  const { url, label, active } = props.link
  const { onPageChange, pageIndex } = props
  const labelToNumber = Number(label)

  function handlePageChange(newPageIndex: number) {
    onPageChange(newPageIndex)
  }

  if (url && !active) {
    let newPage: number = pageIndex

    if (!isNaN(labelToNumber)) {
      newPage = labelToNumber

    } else if (label === PREVIOUS_TEXT) {
      newPage = pageIndex - 1

    } else if (label === NEXT_TEXT) {
      newPage = pageIndex + 1
    }
    return <Button onClick={() => handlePageChange(newPage)}>{label}</Button>
  }

  return <InactiveButton disabled>{label}</InactiveButton>
}

export default NavLink
