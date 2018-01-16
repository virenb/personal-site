import React from 'react'

const IndexPage = () => (
  <div>
  <h1 style={{ margin: '1em 0', fontSize: '3em' }}>Hi everyone, I'm Viren.</h1>
    <h3>Who Am I</h3>
      <p>I am a web developer based out of the New York / New Jersey area.
        I create web applications and enjoy learning new technologies. As you can see from this page,
        I like simplistic designs &#9786;. Other than technology, I am an avid soccer fan and enjoy reading.
      </p>
    <h3>What Do I Use</h3>
      <p>These are the technologies I usually work with. I am always looking to further my knowledge with these or learn using new languages, frameworks, tools, etc.</p>  
      <div style={{ display: 'inline-block', width: '330px' }}>
        <ul style={{ listStyleType: 'circle' }}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Git</li>
        </ul>
      </div>
      <div style={{ display: 'inline-block' }}>
        <ul style={{ listStyleType: 'circle' }}>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>jQuery</li>
        </ul>
      </div>

    <h3>What I've Worked On</h3>
      <p>Here are a few personal projects I've built:</p>
      <div>
        <a href="https://forex-tracker-d1cdb.firebaseapp.com/" target="_blank" style={{ fontWeight: '600', color: 'black' }}>Forex Tracker</a>
        <br />
        <a href="https://github.com/virenb/forex-tracker" target="_blank" style={{ color: 'black' }}>GitHub</a>
        <br />
        <p>Application which allows a user to find foreign exchange rates (EURO based) of the current day or historical rates. The ForEx API used is from Fixer.io. It was built with React.js. React-DOM, React Router (v4), Reactstrap, Babel, and Webpack. (Need to load unsafe scripts to access app).</p>
      </div>
      <div>
        <a href="https://virenb.github.io/sun-api/" target="_blank" style={{ fontWeight: '600', color: 'black' }}>Sunrise / Sunset API Project</a>
        <br />
        <a href="https://github.com/virenb/sun-api" target="_blank" style={{ color: 'black' }}>GitHub</a>
        <br />
        <p>Application displaying sunrise and sunset times as the user hovers over map locations. Used Sunrise-Sunset API, jQuery, Bootstrap, and Leaflet.js.</p>
      </div>
      <div>
        <a href="https://fast-hamlet-85700.herokuapp.com/" target="_blank" style={{ fontWeight: '600', color: 'black' }}>Recipe Search</a>
        <br />
        <a href="https://github.com/virenb/recipe-search" target="_blank" style={{ color: 'black' }}>GitHub</a>
        <br />
        <p>Application which allows a user to search for recipe ideas based on ingredient he or she inputs into the search. The Food API used was from Spoonacular. Other technologies used included jQuery, Node.js, HTML, CSS, JS, Bootstrap, and MongoDB.
        </p>
      </div>

    <h3>Contact Me</h3>
      <p>Let's connect!</p>
      <ul style={{ listStyleType: 'none' }}>
        <li><a style={{ color: 'black' }} href="mailto:virenb@gmail.com?subject=Hello!" target="_blank">Email</a></li>
        <li><a style={{ color: 'black' }} href="https://www.linkedin.com/in/virenbhagat" target="_blank">LinkedIn</a></li>
        <li><a style={{ color: 'black' }} href="https://www.github.com/virenb" target="_blank">GitHub</a></li>
        <li><a style={{ color: 'black' }} href="https://www.twitter.com/virengb" target="_blank">Twitter</a></li>                        
        <li><a style={{ color: 'black' }} href="https://medium.com/@virenb" target="_blank">Medium</a></li>                                
      </ul>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '-40px' }}>
        <p style={{ fontSize: '.6rem' }}>Made with <a href="https://www.gatsbyjs.org" target="_blank" style={{ textDecoration: 'none' }}>GatsbyJS</a></p>
      </div>
  </div>
)

export default IndexPage
