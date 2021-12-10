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



<br>
<p><strong>IDC_ENG502</strong></p>

  <a
    href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/lit%20and%20sci%20matt%20ar.pdf"
    rel="noopener noreferrer"
    target="_blank"
    style="color: blue;">"Matthew Arnold: Literature and Science"</a>

  <a href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/huxx.pdf"
    rel="noopener noreferrer"
    target="_blank"
    style="color: blue;"
    >"T.H. Huxley: Science and Culture"</a>

  <a
    href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/khun.pdf"
    rel="noopener noreferrer"
    target="_blank"
    style="color: blue;">"T.S. Kuhn: The Nature and Necessity of Scientific Revolution"</a>
<br>

  <a
    href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/snow_1959.pdf"
    rel="noopener noreferrer"
    target="_blank"
    style="color: blue;">"C.P. Snow: “The Two Cultures"</a>
<a href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/poe.pdf"
    rel="noopener noreferrer"
    target="_blank"
    style="color: blue;">"Edgar Allan Poe: To Science"</a>

  <a
    href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/RICHARD%20P.%20FEYNMAN-SURELY%20YOU'RE%20JOKING%20MR.%20FEYNMAN.PDF"
    rel="noopener noreferrer"
    target="_blank"
    style="color: blue;"
    >"Richard Feynman: Surely You’re Joking Mr. Feynman"</a>

  <a href="https://github.com/AbhinavM2000/next-netlify-starter/raw/main/public/Connie%20Willis%20-%20Bellwether%20%20-Spectra%20(2009).pdf" rel="noopener noreferrer" target="_blank" style="color: blue;" >"Connie Willis: Bellwether"</a>



      </main>

     
    </div>

  )
}
