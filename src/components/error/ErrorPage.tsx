import { Link, useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  interface RouteError {
    error: {
      message: string;
    };
    status: number;
  }

  const error: any = useRouteError();
  const isRouteError = (error: unknown): error is RouteError => {
    return !!(error as RouteError).status && !!(error as RouteError).status;
  };
  const err = isRouteError(error)
    ? { status: error.status, message: error.error.message }
    : { status: 400, message: error.message };

  return (
    <div className={styles.errorPage}>
      <>
        <h1>Error {err.status}</h1>
        {err.status === 404 ? (
          <div>Sorry, it seems you landed on a page that does'nt exist!</div>
        ) : (
          <div>{err.message}</div>
        )}
      </>
      <Link className={styles.returnLink} to="/">
        Return to Homepage
      </Link>
    </div>
  );
}

export default ErrorPage;
