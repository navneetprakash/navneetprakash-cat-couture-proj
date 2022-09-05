import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Loader from "./Loader";

const StyledLoginButton = styled.button`
  background-color: #0ea68c;
  border: none;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  font-size: 1rem;
  color: white;
`;

const StyledLogoutButton = styled.button`
  background-color: #d22d5c;
  border: none;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  font-size: 1rem;
  color: white;
`;

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <button>
        <Loader />
      </button>
    );
  }

  if (isAuthenticated) {
    return (
      <StyledLogoutButton
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </StyledLogoutButton>
    );
  }

  return (
    <StyledLoginButton onClick={() => loginWithRedirect()}>
      Log In
    </StyledLoginButton>
  );
};

export default LoginButton;
