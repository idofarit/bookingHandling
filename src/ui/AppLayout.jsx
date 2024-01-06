import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  width: 100%;
`;

const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Sidebar />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
