import styles from '../styles/Error.module.css'

export default function Custom500() {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorMessageContainer}>
        <div className={styles.errorImage}></div>
        <h1>500</h1>
        <h2>Oops! We're unable to connect to our servers</h2>
        <p>
          Sorry but we're unable to reach our servers at the moment. Please
          check back after sometime.
        </p>
        <a href={process.env.NEXT_PUBLIC_GV_APP_URL}>Back to homepage</a>
      </div>
    </div>
  )
}
