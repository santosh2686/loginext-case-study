import React from 'react'

import Icon from '@components/icon'

import './style.scss'

const Header = () => (
  <header className="header">
    <h4>LOGINEXT Case Study</h4>
    <a target="_blank" rel="noreferrer" title="GitHub" href="https://github.com/santosh2686/loginext-case-study">
      <Icon name="github" color="white" />
    </a>
  </header>
)

export default Header
