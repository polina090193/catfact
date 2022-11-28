import { useState } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import type { NextPage } from 'next'
import type { FilterValues, FactWithId } from '../types/types'
import Head from 'next/head'
import styled from 'styled-components'
import FilterGroup from '../components/Filter/FilterGroup'
import FactList from '../components/FactList/FactList'
import { Pagination } from 'rsuite'
import getCurrentPageData from '../helpers/getCurrentPageData'
import getFilteredData from '../helpers/getFilteredData'

const APP_TITLE = 'Cat facts'
const PER_PAGE = 10

const HomeContainer = styled.div`
  padding: 0 2rem;
  max-width: 1000px;
`

const Navigation = styled.div`
  max-width: 400px;
`

export const getStaticProps: GetStaticProps = async () => {
  let allData = await (await fetch('http://localhost:3000/api/fetchAllData')).json()
  return {
    props: {
      allData,
    },
  }
}

const Home: NextPage = ({ allData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  const [pageIndex, setPageIndex] = useState(1)
  const [filterValues, setFilterValues] = useState({ filter: 'default', sorting: 'default' })
  
  const defaultData = allData
  let currentData = [...allData]
  
  function handlePageChange(newPageIndex: number) {
    setPageIndex(newPageIndex)
  }
  
  function handleFiltersChange(values: FilterValues) {
    setFilterValues(values)
    handlePageChange(1)
  }
  
  currentData = [...getFilteredData(currentData, defaultData, filterValues)]
  const currentPageData: FactWithId[] = getCurrentPageData(currentData, pageIndex, PER_PAGE)
  const totalPages = Math.ceil(currentData.length / PER_PAGE)
  
  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
      </Head>

      <HomeContainer>
        <h1>{APP_TITLE}</h1>

        <Navigation>
          <FilterGroup filterValues={filterValues} onFiltersChange={handleFiltersChange} />

          <Pagination
            prev
            last
            next
            first
            ellipsis
            maxButtons={4}
            size="md"
            total={totalPages}
            limit={1}
            activePage={pageIndex}
            onChangePage={handlePageChange}
          />
        </Navigation>

        <FactList currentPageData={currentPageData} filterValues={filterValues} />
      </HomeContainer>
    </>
  )
}

export default Home
