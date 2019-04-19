import React, { Component } from 'react'
import PropTypes from 'prop-types'

const historyPush = path => {
    window.history.pushState({}, null, path)
  }
  
  const historyReplace = path => {
    window.history.replaceState({}, null, path)
  }

export class Link extends Component {
    static propTypes = {
      to: PropTypes.string.isRequired,
      replace: PropTypes.bool,
    }
    handleClick = event => {
      const { replace, to } = this.props
      event.preventDefault()
  
      replace ? historyReplace(to) : historyPush(to)
    }
  
    render() {
      const { to, children } = this.props
  
      return (
        <a href={to} onClick={this.handleClick}>
          {children}
        </a>
      )
    }
  }