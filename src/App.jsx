import React from 'react'
import './App.css'
import './media.css'
import htmlcss from './assets/img/section/htmlcss.png'
import js from './assets/img/section/js.png'
import jsplus from './assets/img/section/jsplus.png'
import git from './assets/img/section/git.png'
import framework from './assets/img/section/framework.png'
import vid30fps from './assets/vid/videobg1.mp4'

function App() {


  return (
    <>
    <header className='header'>
      <h2>Frontend Roadmap 2024</h2>
    </header>
    <main>
      <section className='hero'>

        <video className='video' src={vid30fps} autoPlay muted loop></video>
        <div className='inner'>
          <span>Become a Frontend Developer today!
            
           Follow the roadmap outlined below to master the essential skills and tools needed in 2024.

</span>
        </div>
      </section>



      <section className='start'>
          <div className="left">
            <span className='section__title'>HTML/CSS</span>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Flexbox</li>
              <li>Grid Layout</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="center"></div>
          <div className="right">
            <img src={htmlcss} alt="" />
            </div>
      </section>
      <section className='second'>
      <div className="left">
        <img src={js} alt="" />
      </div>
          <div className="center"></div>
          <div className="right">
            <span className='section__title'>JavaScript basics</span>
            <ul>
              <li>Data types and data structures</li>
              <li>Basic Operators and Constructs</li>
              <li>Functions and scopes</li>
              <li>Asynchronous programming (Promises, async/await)</li>
              <li>DOM Basics</li>
            </ul>
            </div>
      </section>
      <section className='third'>
      <div className="left">
        <span className="section__title">
          Advanced JavaScript
        </span>
        <ul>
          <li>EcmaScript 6 and newer(Arrow Functions, Destructuring, Spread/Rest)</li>
          <li>Modules of import and export</li>
          <li>Web API</li>
          <li>Event Loop and understanding asynchrony</li>
        </ul>
      </div>
          <div className="center"></div>
          <div className="right">
        <img src={jsplus} alt="" />
            </div>
      </section>
      <section className='fourth'>
      <div className="left">
        <img src={git} alt="" />
      </div>
          <div className="center"></div>
          <div className="right">
            <span className='section__title'>Version Control</span>
            <ul>
              <li>Git</li>
              <li>Github/ Gitlab/ Bitbucket</li>
              <li>Basic commands and workflows</li>
            </ul>
            </div>
      </section>
      <section className='fiveth'>
      <div className="left">
        <span className="section__title">
          Frameworks and libraries (React)
        </span>
        <ul>
          <li>Basics (JSX, Components, Props, State)</li>
          <li>Hooks (useState, useEffect, useContext)</li>
          <li>Routing</li>
          <li>State Management</li>
        </ul>
        <ul>
          <b>Other fremeworks</b> (optionally)
          <li>Vue.js</li>
          <li>Angular</li>
        </ul>
      </div>
          <div className="center"></div>
          <div className="right">
<img src={framework} alt="" />
            </div>
      </section>
      <section className='sixth'>
      <div className="left"></div>
          <div className="center"></div>
          <div className="right">
            <span className='section__title'>Stylization</span>
            <ul>
              <li>CSS Preprocessors (SASS, Less)</li>
              <li>CSS in JS (Styled Components, Emotion)</li>
              <li>UI Libraries (Bootstrap, Tailwind CSS, Material UI)</li>
            </ul>
            </div>
      </section>

      </main>
      <footer>
        <div className="footer__start">
        <span>
        Aibek Everon
        </span>
        <a href="https://www.github.com/gridxprime">Github</a>
        <a href="https://www.t.me/till_morning_comes">Telegram</a>
        </div>
        <div className="footer__bottom">
          <span>2024</span>
        </div>
      </footer>
    </>
  )
}

export default App
