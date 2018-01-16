import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: '#82E0AA',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '.8rem 1rem'
        
      }}
    >
      <h1 style={{ margin: 0, fontFamily: 'Cabin Sketch' }}>
        <Link
          to="/"
          style={{
            color: '#2E4053',
            textDecoration: 'none'
          }}
        >
          <span style={{ fontWeight: '400' }}>
            viren
          </span> 
          <span style={{ fontWeight: '700' }}>
            bhagat
          </span>
        </Link>
        <ul style={{ listStyle: 'none', float: 'right', fontFamily: 'BlinkMacSystemFont', fontSize: '1rem', lineHeight: '2.5rem' }}>
          <li style={{ display: 'inline-block', marginRight: '1rem' }}>
            <Link style={{ color: '#2E4053', textDecoration: 'none' }}  to="/">about</Link>
          </li>
          <li style={{ display: 'inline-block', marginRight: '1rem' }}>
            <Link style={{ color: '#2E4053', textDecoration: 'none' }}  to="/work">work</Link>
          </li>          
        </ul>
      </h1>
    </div>
  </div>
)

export default Header
