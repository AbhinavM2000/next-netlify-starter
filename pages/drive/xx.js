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


<p><strong>IDC_ENG502</strong></p>
 <Link href='https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/lit%20and%20sci%20matt%20ar.pdf'> 
<a>Matthew Arnold: Literature and Science</a>
</Link> 
 
<Link href='https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/huxx.pdf'> 
<a>T.H. Huxley: Science and Culture</a>
</Link> 
    
    
    <Link href='https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/khun.pdf'> 
<a>T.S. Kuhn: The Nature and Necessity of Scientific Revolution</a>
</Link> 
    
    
    <Link href='https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/snow_1959.pdf'> 
<a>C.P. Snow: The Two Cultures </a>
</Link> 
    
    
    <Link href='https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/poe.pdf'> 
<a>Edgar Allan Poe: To Science</a>
</Link> 
    
    
    <Link href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/RICHARD%20P.%20FEYNMAN-SURELY%20YOU'RE%20JOKING%20MR.%20FEYNMAN.PDF"> 
<a>Richard Feynman: Surely You’re Joking Mr Feynman</a>
</Link> 
    
    
    <Link href='https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/Connie%20Willis%20-%20Bellwether%20%20-Spectra%20(2009).pdf'> 
<a>Connie Willis: Bellwether </a>
</Link> 
</main>

     
    </div>

  )
}
