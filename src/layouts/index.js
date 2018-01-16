import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Viren Bhagat"
      meta={[
        { name: 'description', content: 'viren, portfolio' },
        { name: 'keywords', content: 'webdev, developer, portfolio' },
      ]}
    />
    
    <div
      style={{
        margin: '0 auto',
        maxWidth: 660,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: '2em',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
