import { SelectedPage } from "./types";
import { useNavigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  const navigate = useNavigate();

  return (
    <button
      className="rounded-md bg-secondary-400 px-10 py-2 hover:bg-secondary-500 hover:text-white text-md font-semibold"
      onClick={() => {
        setSelectedPage(SelectedPage.SignUp);
        navigate('/signup');
      }}
    >
      {children}
    </button>
  );
}

export default ActionButton;
