import { Component, ErrorInfo } from 'react'
import styles from '../styles/Error.module.css'
import type { Props, State } from '../types'

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    console.error(_)
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorPage}>
          <div className={styles.errorMessageContainer}>
            <div className={styles.errorImage}></div>
            <h1>Oh no!</h1>
            <h2>Something went wrong</h2>
            <p>
              We&apos;re unable to render your page at the moment :( Please
              reach out to us over customer support for assistance
            </p>
            <a href={'/'}>Back to homepage</a>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
