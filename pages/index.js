import Head from 'next/head'
import Header from '../components/header'
import Nav from '../components/Nav'
import Results from '../components/Results'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const request = await fetch(``)
    .then(
      (res) => res.json()
    );

  return {
    props: {
      results: request.results
    }
  }

}
