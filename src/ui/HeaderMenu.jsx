import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { FaRegCircleUser } from "react-icons/fa6";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

const HeaderMenu = () => {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <FaRegCircleUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
