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
    
    <Link href='https://abnv.ml/cv'> 
<a>Here is my CV for now.</a>
</Link> 



<p><strong>IDC_ENG502</strong></p>
 <Link href='https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/lit%20and%20sci%20matt%20ar.pdf'> 
<a>Matthew Arnold: Literature and Science</a>
</Link> 
 

</main>

     
    </div>

  )
}
