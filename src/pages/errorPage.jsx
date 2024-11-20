import { useRouteError } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src="./notfound.jpg" alt="404 page" /> {/* sizes="" srcset=""  */}
    </div>
  );
}

export default ErrorPage;
