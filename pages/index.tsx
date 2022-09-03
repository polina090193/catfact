import React from 'react'
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Pagination } from 'rsuite'
import FactList from '../components/FactList/FactList'
import styles from '../styles/Home.module.css'
import Filter from '../components/Filter/Filter'

const APP_TITLE = 'Cat facts'

type fetchedFact = {
  fact: string,
  length: number,
}

export type Fact = {
  id: number,
  text: string,
}

export const getStaticProps: GetStaticProps = async () => {
  const fetchedFacts = await (await fetch('https://catfact.ninja/facts'))?.json()
  

  const facts = fetchedFacts.data.map((fact : fetchedFact, i: number): Fact => {
    return { id: i, text: fact.fact }
  })

  return {
    props: {
      facts
    }
  }
}

const Home: NextPage = ({ facts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [activePage, setActivePage] = React.useState(1)

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
        <FactList facts={facts} />
        <Pagination
          prev
          next
          total={4}
          limit={1}
          size="lg"
          activePage={activePage}
          onChangePage={setActivePage}
        />
      </div>
    </>
  )
}

export default Home
