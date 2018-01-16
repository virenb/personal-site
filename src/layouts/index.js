import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="virenb"
      meta={[
        { name: 'description', content: 'viren, portfolio' },
        { name: 'keywords', content: 'webdev, developer, portfolio' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 600,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
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
