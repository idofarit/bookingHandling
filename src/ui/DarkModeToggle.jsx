import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";
import { BsMoonStars, BsSun } from "react-icons/bs";
const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <BsSun /> : <BsMoonStars />}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
