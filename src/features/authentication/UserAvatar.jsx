import styled from "styled-components";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import { useEffect, useRef, useState } from "react";
import { BsSun, BsThreeDotsVertical } from "react-icons/bs";

import { GrLogout } from "react-icons/gr";
import { HiPencil, HiUserCircle } from "react-icons/hi2";

import ButtonIcon from "../../ui/ButtonIcon";
import { useDarkMode } from "../../context/DarkModeContext";

import { BsMoonStars } from "react-icons/bs";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
  position: relative;
  @media (max-width: 550px) {
    font-size: 1.2rem;
    gap: 0.5rem;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
  @media (max-width: 550px) {
    width: 2.8rem;
  }
  @media (max-width: 450px) {
    width: 2rem;
    margin-left: 8px;
  }
`;

const ModContainer = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 8px;
  z-index: 1;
`;

const ModHolder = styled.div`
  padding: 10px;
  margin: 10px;
  width: 150px;
  border: 1px solid var(--color-grey-100);
  background: var(--color-grey-50);
  box-shadow: var(--shadow-lg);
  @media (max-width: 550px) {
    width: 110px;
    font-size: 1rem;
    padding: 5px;
  }
`;

const Mod = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin: 7px;
  }
`;

const ModList = styled.li`
  list-style: none;
  cursor: pointer;
  color: var(--color-grey-500);
  :hover {
    color: var(--color-grey-800);
    transition: all 0.2s ease-in-out;
  }
`;

const UserAvatar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const ref = useRef();
  const navigate = useNavigate();
  const { logout, isLoading } = useLogout();
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  const showName = fullName.split(" ");
  for (let i = 0; i < showName.length; i++) {
    var name = showName[0];
    break;
  }

  useEffect(() => {
    const hadleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("mousedown", hadleClick);

    return () => document.removeEventListener("mousedown", hadleClick);
  });

  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "default-user.png"}
        alt={`Avatar of ${fullName}`}
      />
      <span>{name}</span>

      <ButtonIcon>
        <BsThreeDotsVertical onClick={() => setIsOpen(!isOpen)} />
      </ButtonIcon>

      {isOpen && (
        <ModContainer ref={ref}>
          <ModHolder>
            <Mod>
              <HiUserCircle className="icon" />
              <ModList onClick={() => navigate("/account")}>
                <span>Profile</span>
              </ModList>
            </Mod>
            <Mod>
              <HiPencil className="icon" />
              <ModList onClick={() => navigate("/account")}>
                <span>Update profile</span>
              </ModList>
            </Mod>
            <Mod>
              <GrLogout className="icon" />
              <ModList onClick={logout}>
                {!isLoading ? <span>LogOut</span> : <SpinnerMini />}
              </ModList>
            </Mod>
            <Mod>
              {isDarkMode ? (
                <BsSun className="icon" />
              ) : (
                <BsMoonStars className="icon" />
              )}
              <ModList onClick={toggleDarkMode}>
                {isDarkMode ? (
                  <span>Switch to light</span>
                ) : (
                  <span>Switch to Dark</span>
                )}
              </ModList>
            </Mod>
          </ModHolder>
        </ModContainer>
      )}
    </StyledUserAvatar>
  );
};

export default UserAvatar;
