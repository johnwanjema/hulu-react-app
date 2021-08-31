import Head from 'next/head'
import Header from '../components/header'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div  >
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>      
      <Nav/>      
    </div>
  )
}
    