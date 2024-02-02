import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaCar } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { GiCartwheel } from "react-icons/gi";
import { HiOutlineCalendarDays, HiOutlineHomeModern } from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  @media (max-width: 1050px) {
    width: 10rem;
  }
  @media (max-width: 1050px) {
    width: 9rem;
  }
  @media (max-width: 750px) {
    width: 9rem;
    transform: translateX(-1rem);
  }
  @media (max-width: 600px) {
    width: 6.5rem;
    transform: translateX(-1.2rem);
  }
  @media (max-width: 500px) {
    transform: translateX(-1.3rem);
  }
  @media (max-width: 450px) {
    transform: translateX(-1rem);
  }
`;

const StyledNavLink = styled(NavLink)`
  span {
    display: block;
    @media (max-width: 1050px) {
      display: none;
    }
  }
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const MainNav = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHomeModern />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cars">
            <FaCar />
            <span>Cars</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <TbSteeringWheel />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <GiCartwheel />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNav;
