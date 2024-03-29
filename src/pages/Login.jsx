import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  padding-top: 10rem;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Login = () => {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4" style={{ paddingBottom: "3rem", paddingTop: "2rem" }}>
        Log in to Your Account
      </Heading>
      <LoginForm />
    </LoginLayout>
  );
};

export default Login;
