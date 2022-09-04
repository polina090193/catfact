import { useState } from 'react'
import type { NextPage } from 'next'
import type { PaginationLink } from '../types/types'
import Head from 'next/head'
import FactList from '../components/FactList/FactList'
import Pagination from '../components/Pagination/Pagination'
import Filter from '../components/Filter/Filter'
import styled from 'styled-components'

const APP_TITLE = 'Cat facts'

const HomeContainer = styled.div`
  padding: 0 2rem;
  max-width: 1000px;
`

const Home: NextPage = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const [pageLinks, setPageLinks] = useState([{}])

  function handlePageChange(newPageIndex: number) {
    setPageIndex(newPageIndex)
  }

  function handleLinksFetching(links: PaginationLink[]) {
    setPageLinks(links)
  }

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
      </Head>
      <HomeContainer>
        <h1>{APP_TITLE}</h1>
        <div>
          <Filter />
        </div>
        <FactList pageIndex={pageIndex} onLinksFetching={handleLinksFetching} />
        <Pagination pageLinks={pageLinks} pageIndex={pageIndex} onPageChange={handlePageChange} />
      </HomeContainer>
    </>
  )
}

export default Home
