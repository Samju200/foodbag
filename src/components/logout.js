import { useAuth0 } from '@auth0/auth0-react';
import './login.css';

function Logout() {
  const { logout } = useAuth0();

  return (
    <div className="login">
      <h1>Logout</h1>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </div>
  );
}
export default Logout;
