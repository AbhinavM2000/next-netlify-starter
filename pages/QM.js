import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import image1 from '/image1.gif';
import image1 from 'image1.gif';
export default function Home() {
  return (
<div className="idc2">

<div className="idc">


<p><strong>AT --PDFs</strong></p><hr/><br/>
 <Link href='https://drive.google.com/file/d/1wcHgkxipvojZJpQNrMnDzY6Gge5SbhI5/view?usp=sharing' download> 
   <a><strong>No nonsense QM for Aanchal Tyagi</strong><br/><br/><br/></a>
</Link> 

<Image src={image1} />
    <hr/>


<Image src={image1} />



</div>
</div>

  )
}
