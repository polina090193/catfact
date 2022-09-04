import type { PaginationLink } from '../../types/types';
import NavLink from './NavLink'
import { Nav } from 'rsuite'
import styled from 'styled-components';

const PaginationNav = styled(Nav)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
`

const Pagination = (props: { pageIndex: number, onPageChange: Function, pageLinks: PaginationLink[] }) => {
  const { pageIndex, onPageChange, pageLinks } = props

  return (
    <>
      <PaginationNav>
        {pageLinks.map((link: PaginationLink, i: number) => <NavLink key={i} link={link} pageIndex={pageIndex} onPageChange={onPageChange} />)}
      </PaginationNav>
    </>
  )
}

export default Pagination
