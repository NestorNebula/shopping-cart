import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
      <h1>Error</h1>
      <div>Sorry, it seems you landed on a page that does'nt exist!</div>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
}

export default ErrorPage;
