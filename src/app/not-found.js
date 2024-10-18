import styles from "./not-found.module.css"

function NotFoundPage() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>404 Not Found</h1>
            <p className={styles.description}>This page does not exist. Please check the URL and try again.</p>
        </div>
    )
}

export default NotFoundPage;