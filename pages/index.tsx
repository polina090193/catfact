import React, { useState } from 'react'
import type { NextPage } from 'next'
import type { PaginationLink } from '../types/types'
import Head from 'next/head'
import FactList from '../components/FactList/FactList'
import Pagination from '../components/Pagination/Pagination'
import styles from '../styles/Home.module.css'
import Filter from '../components/Filter/Filter'

const APP_TITLE = 'Cat facts'

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
      <div className={styles.container}>
        <h1>{APP_TITLE}</h1>
        <div>
          <Filter />
        </div>
        <FactList pageIndex={pageIndex} onLinksFetching={handleLinksFetching} />
        <Pagination pageLinks={pageLinks} pageIndex={pageIndex} onPageChange={handlePageChange} />
      </div>
    </>
  )
}

export default Home
