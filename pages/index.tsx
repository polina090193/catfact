import React from 'react'
import type { NextPage } from 'next'
import { Pagination } from 'rsuite'
import FactList from '../components/FactList/FactList'
import styles from '../styles/Home.module.css'

const MockFacts = [
  { "fact": "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.", "length": 114 },
  { "fact": "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.", "length": 97 },
  { "fact": "The technical term for a cat\u2019s hairball is a \u201cbezoar.\u201d", "length": 54 },
  { "fact": "A group of cats is called a \u201cclowder.\u201d", "length": 38 },
]

export type Fact = {
  id: number,
  text: string,
}

const facts: Fact[] = MockFacts.map((fact, i) => {
  return {id: i, text: fact.fact}
})

const Home: NextPage = () => {
  const [activePage, setActivePage] = React.useState(5);

  return (
    <div className={styles.container}>
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
  )
}

export default Home
