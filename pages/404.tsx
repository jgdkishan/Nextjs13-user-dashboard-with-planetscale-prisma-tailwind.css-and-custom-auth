import styles from '../styles/Error.module.css'

export default function Custom404() {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorMessageContainer}>
        <div className={styles.errorImage}></div>
        <h1>404</h1>
        <h2>Oops! Page Not Be Found</h2>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed. name changed or is temporarily unavailable
        </p>
        <a href={process.env.NEXT_PUBLIC_GV_APP_URL}>Back to homepage</a>
      </div>
    </div>
  )
}
