import Head from 'next/head'
import styles from './blah.css'
import Image from "next/image"
import Link from 'next/link'
export default function Home() {
  return (
<div className="idc2">

<div className="idc">


<p><strong>AT --PDFs</strong></p><hr/><br/>
 <Link href='https://drive.google.com/file/d/1wcHgkxipvojZJpQNrMnDzY6Gge5SbhI5/view?usp=sharing' download> 
   <a><strong>No nonsense QM for Aanchal Tyagi</strong><br/><br/><br/></a>
</Link> 


    <hr/>


<img src="/image1.gif" alt="Netlify Logo" classname={styles.logo} />



</div>
</div>

  )
}
