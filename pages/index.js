import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="I need to set this up !" />
       
<Link href='https://abnv.ml'> 
<p class='description'>So many things to do... so little time.</p>
</Link> 
    
    <Link href='https://abnv.ml'> 
<a>Here is my resume for now.</a>
</Link> 
      </main>

     
    </div>

  )
}
