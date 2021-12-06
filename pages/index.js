import Head from 'next/head'
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
        <p className="description">
          So many things to do... so little time.
        </p>
      </main>

     
    </div>
<script>
         setTimeout(function(){
            window.location.href = 'https://www.tutorialspoint.com/javascript/';
         }, 5000);
</script>
  )
}
