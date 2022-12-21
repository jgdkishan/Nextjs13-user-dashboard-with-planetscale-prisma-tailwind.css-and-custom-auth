import { Component } from 'react'
import Router from 'next/router'
import styles from '../styles/Error.module.css'

export default class _error extends Component {
  componentDidMount = () => {
    Router.push('/')
  }

  render() {
    return (
      <div className={styles.errorPage}>
        <div className={styles.errorMessageContainer}>
          <div className={styles.errorImage}></div>
          <h1>Oh no!</h1>
          <h2>Something went wrong</h2>
          <p>
            We&apos;re unable to render your page at the moment :( Please reach
            out to us over customer support for assistance
          </p>
          <a href={'/'}>Back to homepage</a>
        </div>
      </div>
    )
  }
}
