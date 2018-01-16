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
      <p>Here are a few personal projects I've built.</p>

    <h3>Contact Me</h3>
      <p>Let's connect!</p>
      <ul style={{ listStyleType: 'none' }}>
        <li><a style={{ color: 'black' }} href="mailto:virenb@gmail.com?subject=Hello!" target="_blank">Email</a></li>
        <li><a style={{ color: 'black' }} href="https://www.linkedin.com/in/virenbhagat" target="_blank">LinkedIn</a></li>
        <li><a style={{ color: 'black' }} href="https://www.github.com/virenb" target="_blank">GitHub</a></li>
        <li><a style={{ color: 'black' }} href="https://www.twitter.com/virengb" target="_blank">Twitter</a></li>                        
      </ul>
    
  </div>
)

export default IndexPage
