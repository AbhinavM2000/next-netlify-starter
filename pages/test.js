export default function MyComponent(props) {
  return (
    <>
     
<div id="header"></div>
<div class="left"></div>
<div class="stuff">

  <h1>Resume</h1>
  <h2>Emily</h2>
  <hr />
 
  <p class="head">Interests</p>
  <ul>
    <li>Drawing</li>
    <li>Photography</li>
    <li>Design</li>
    <li>Programming</li>
    <li>Computer Science</li>
  </ul>
  <p class="head">Skills</p>
  <ul>
    <li>Web Design with HTML & CSS</li>
  </ul>
  <p class="head">Education</p>
  <ul>
    <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
      <li>Wilton High School</li>
    </a>
 
    <a href="https://www.silvermineart.org/">
      <li>Silvermine School of Arts</li>
    </a>
    <li>Codeacademy</li>
  </ul>
  <p class="head">Experience</p>
  <ul>
    <li>Student Technology Intern for Wilton School District</li>
    <li>Babysitter</li>
  </ul>
  <p class="head">Extracurriculars</p>
  <ul>
    <li>Recycling Club</li>
    <li>Gardening Club</li>
    <li>Book Club</li>
  </ul>
</div>
<div class="right"></div>
<div id="footer">
  <h2 id="name">Emily</h2></div>
<style>
* {
  max-width: 700px;
  margin: auto;
}


/*body {
    min-width: 500px;
}*/

div {
  border-radius: 5px;
}

#header {
  height: 40px;
  width: 100%;
  background-color: #ffcccc;
  position: fixed;
  z-index: 1;
}

#title {
  margin-left: 3%;
}

#footer {
  height: 50px;
  width: 100%;
  background-color: #ffcccc;
  clear: both;
  position: relative;
}

.left {
  height: 1000px;
  width: 45px;
  background-color: #e0eeee;
  float: left;
  position: fixed;
}

.right {
  height: 1000px;
  width: 45px;
  background-color: #e0eeee;
  float: right;
  position: inherit;
}

.stuff {
  display: inline-block;
  margin-top: 6px;
  margin-left: 55px;
  width: 75%;
  height: 1000px;
}

p,
li {
  font-family: 'Cormorant Garamond';
}

.head {
  font-size: 20px;
}

#name {
  font-family: Sacramento;
  float: right;
  margin-top: 10px;
  margin-right: 4%;
}

a {
  color: black;
  text-decoration: none;
}

@media only screen and (max-width: 430px) {
  .left,
  .right {
    display: none;
  }
  .stuff {
    width: 100%;
    margin-left: 10px;
  }
}
</style>
    </>
  );
}
