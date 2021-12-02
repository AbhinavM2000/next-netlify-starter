export default function MyComponent(props) {
  return (
    <>
     
<style>
* {
  box-sizing: border-box
}

html {
  background: url(//css-tricks.com/examples/OnePageResume/images/noise.jpg)
}

body {
  margin: 2.2rem
}

div#resume {
  min-width: 310px;
  font: 16px Helvetica, Avernir, sans-serif;
  line-height: 24px;
  color: #000
}

div#resume h1 {
  margin: 0 0 16px 0;
  padding: 0 0 16px 0;
  font-size: 42px;
  font-weight: bold;
  letter-spacing: -2px;
  border-bottom: 1px solid #999;
  line-height: 50px
}

div#resume h2 {
  font-size: 20px;
  margin: 0 0 6px 0;
  position: relative
}

div#resume h2 span {
  position: absolute;
  bottom: 0;
  right: 0;
  font-style: italic;
  font-family: Georgia, serif;
  font-size: 16px;
  color: #999;
  font-weight: normal
}

div#resume p {
  margin: 0 0 16px 0
}

div#resume a {
  color: #999;
  text-decoration: none;
  border-bottom: 1px dotted #999
}

div#resume a:hover {
  border-bottom-style: solid;
  color: #000
}

div#resume p.objective {
  font-family: Georgia, serif;
  font-style: italic;
  color: #666
}

div#resume dt {
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  text-align: right;
  padding: 0 26px 0 0;
  width: 150px;
  border-right: 1px solid #999
}

div#resume dl {
  display: table-row
}

div#resume dl dt,
div#resume dl dd {
  display: table-cell;
  padding-bottom: 20px
}

div#resume dl dd {
  width: 500px;
  padding-left: 26px
}

div#resume img {
  float: right;
  padding: 10px;
  background: #fff;
  margin: 0 30px;
  transform: rotate(-4deg);
  box-shadow: 0 0 4px rgba(0, 0, 0, .3);
  width: 30%;
  max-width: 220px
}

@media screen and (max-width:1100px) {
  div#resume h2 span {
    position: static;
    display: block;
    margin-top: 2px
  }
}

@media screen and (max-width:550px) {
  body {
    margin: 1rem
  }
  div#resume img {
    transform: rotate(0deg)
  }
}

@media screen and (max-width:400px) {
  div#resume dl dt {
    border-right: none;
    border-bottom: 1px solid #999
  }
  div#resume dl,
  div#resume dl dd,
  div#resume dl dt {
    display: block;
    padding-left: 0;
    margin-left: 0;
    padding-bottom: 0;
    text-align: left;
    width: 100%
  }
  div#resume dl dd {
    margin-top: 6px
  }
  div#resume h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 18px
  }
  div#resume dt {
    font-size: 20px
  }
  h1 {
    font-size: 36px;
    margin-right: 0;
    line-height: 0
  }
  div#resume img {
    margin: 0
  }
}

@media screen and (max-width:320px) {
  body {
    margin: 0
  }
  img {
    margin: 0;
    margin-bottom: -40px
  }
  div#resume {
    width: 320px;
    padding: 12px;
    overflow: hidden
  }
  p,
  li {
    margin-right: 20px
  }
}
</style>




<div id="resume">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/james-moriarty.jpg" alt="James Moriarty">
  <h1>James Moriarty</h1>
  <p>Cell: <a href=#>555-666-7777</a>
  <p>Web: <a href=#>moriarty.com</a>
  <p>Email: <a href=#>napoleon@crime.com</a>
  <p id="objective">I am a reserved but ambitious young professional seeking a career that fits my professional skills, personality, and murderous tendencies. My good birth, excellent education and phenomenal mathematical faculty have allowed me to advance the prospects of several criminal enterprises.
<dl>
  <dt>Education
  <dd>
    <h2>Oxford University</h2>
    <p><strong>Major:</strong> Applied Mathematics<br/>
    <strong>Minor:</strong> Romance Languages</p>
</dl>
<dl>
<dt>Skills
<dd>
<h2>Office Skills</h2>
<p>Office and records management, database administration, event organization, customer support, travel coordination
<h2>Computer skills</h2>
<p>Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows
</dl>
<dl>
<dt>Experience
<dd>
<h2>Consulting Criminal<span>London 1892 – present</span></h2>
<ul>
<li>Development within the criminal underworld
<li>Conducted negotiations with several rogue governments
</ul>
<h2>The Coldstream Guards<span>Army Coach, London 1889 – 1888</span></h2>
<ul>
<li>Recruiting, training and terrorizing young men.
</ul>
<h2>Oxford University<span>Professor of Mathematics 1885 – 1888</span></h2>
<ul>
<li>Published papers in binomials, asteroid dynamics and game theory
<li>Intimidated students
</ul>
</dd>
</dl>
<dl>
<dt>Hobbies
<dd>World domination, Social Manipulation, Murder Most Foul
</dl>
<dl>
<dt>References
<dd>Available on request
</dl>
<p class="objective" style="margin-top:2rem;">(<a href="http://thenewcode.com/553/Build-A-Responsive-Web-Résumé">Return to the original blog article</a>.)
</div>
    </>
  );
}
