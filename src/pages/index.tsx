import { useState } from 'react'
import type { NextPage } from 'next'
import type { PaginationLink, FilterValues, FetchedFact, FactWithId } from '../types/types'
import Head from 'next/head'
import FactList from '../components/FactList/FactList'
import Pagination from '../components/Pagination/Pagination'
import FilterGroup from '../components/Filter/FilterGroup'
import styled from 'styled-components'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import getCurrentPageData from '../helpers/getCurrentPageData'

const APP_TITLE = 'Cat facts'

const HomeContainer = styled.div`
  padding: 0 2rem;
  max-width: 1000px;
`

/* export async function getStaticPaths(props) {

  //  help of pick get require filter value
   const posts = allPosts.map((post) => pick(post, ["title", "date", "slug", "description", "summary", "draft", "image", "images", "tags", "categories"]));
 
  
   // count how many pages
   let totalPostCount = pageCount(allPosts.length)
 
 
 // totalPostCount number convert into a array
   let pageIntoArray = Array.from(Array(totalPostCount).keys())
 
 
   let paths=[]
 
   pageIntoArray.map(
     path =>   paths.push({ 
       params: { page: `${path + 1}` } 
     })
   )
 
 
   return {
     paths,
     fallback: false,
   }
   
 
 } */

export const getStaticProps: GetStaticProps = async () => {
  let allData = await(await fetch('http://localhost:3000/api/fetchAllData')).json()
    // .then(() => fetch('http://localhost:3000/api/fetchAllData/getByPage'/* + pageNum */)
    // .then(res => res.json()))

  return {
    props: {
      allData,
    },
  }
}

const Home: NextPage = ({ allData }: InferGetStaticPropsType <typeof getStaticProps>) => {
  const [pageIndex, setPageIndex] = useState(1)
  const [pageLinks, setPageLinks] = useState([{}])
  const [filterValues, setFilterValues] = useState({filter: 'default', sorting: 'default'})

  const currentPageData: FactWithId[] = getCurrentPageData(allData, 1)
  

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
        <FactList pageIndex={pageIndex} currentPageData={currentPageData/* currentPageData */} /* onLinksFetching={handleLinksFetching}  */filterValues={filterValues} />
        <Pagination pageLinks={pageLinks} pageIndex={pageIndex} onPageChange={handlePageChange} />
      </HomeContainer>
    </>
  )
}

export default Home
