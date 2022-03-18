import {Navigate} from "react-router-dom";

const RequireAuth = ({children}) => {
  const auth = true;

  if(!auth) {
      return <Navigate to='/' />
  }

    return children;
}

export default RequireAuth;
