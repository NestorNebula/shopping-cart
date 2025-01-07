import { Link, useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  interface RouteError {
    status: number;
    message: string;
  }

  const error = useRouteError();
  const isRouteError = (error: unknown): error is RouteError => {
    return !!(error as RouteError).status && !!(error as RouteError).message;
  };

  return (
    <div className={styles.errorPage}>
      {isRouteError(error) && (
        <>
          <h1>Error {error.status}</h1>
          {error.status === 404 ? (
            <div>Sorry, it seems you landed on a page that does'nt exist!</div>
          ) : (
            <div>{error.message}</div>
          )}
        </>
      )}
      <Link className={styles.returnLink} to="/">
        Return to Homepage
      </Link>
    </div>
  );
}

export default ErrorPage;
