import { useState } from 'react'
import type { NextPage } from 'next'
import type { PaginationLink, FilterValues, FetchedFact } from '../types/types'
import Head from 'next/head'
import FactList from '../components/FactList/FactList'
import Pagination from '../components/Pagination/Pagination'
import FilterGroup from '../components/Filter/FilterGroup'
import styled from 'styled-components'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const APP_TITLE = 'Cat facts'

const HomeContainer = styled.div`
  padding: 0 2rem;
  max-width: 1000px;
`

export const getStaticProps: GetStaticProps = async () => {
  const fetchedData = await (await fetch('http://localhost:3000/api/fetchData'/* + pageNum */))?.json()
  
  const currentPageData = fetchedData.data.map((item: FetchedFact, i: number) => ({
    id: Number(`${fetchedData.current_page}${i + 1}`),
    text: item.fact
  }))

  return {
    props: {
      currentPageData,
    },
  }
}

const Home: NextPage = ({ currentPageData }: InferGetStaticPropsType <typeof getStaticProps>) => {
  const [pageIndex, setPageIndex] = useState(1)
  const [pageLinks, setPageLinks] = useState([{}])
  const [filterValues, setFilterValues] = useState({filter: 'default', sorting: 'default'})

  function handlePageChange(newPageIndex: number) {
    setPageIndex(newPageIndex)
  }

  /* function handleLinksFetching(links: PaginationLink[]) {
    setPageLinks(links)
  } */

  function handleFiltersChange(values: FilterValues) {
    setFilterValues(values)
  }

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
      </Head>
      <HomeContainer>
        <h1>{APP_TITLE}</h1>
        <div>
          <FilterGroup filterValues={filterValues} onFiltersChange={handleFiltersChange} />
        </div>
        <FactList pageIndex={pageIndex} currentPageData={currentPageData} /* onLinksFetching={handleLinksFetching}  */filterValues={filterValues} />
        <Pagination pageLinks={pageLinks} pageIndex={pageIndex} onPageChange={handlePageChange} />
      </HomeContainer>
    </>
  )
}

export default Home
