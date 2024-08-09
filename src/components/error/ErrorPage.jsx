import { Link, useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className={styles.errorPage}>
      <h1>Error {error.status}</h1>
      {error.status === 404 && (
        <div>Sorry, it seems you landed on a page that does'nt exist!</div>
      )}
      <Link className={styles.returnLink} to="/">
        Return to Homepage
      </Link>
    </div>
  );
}

export default ErrorPage;
