import { useNavigate } from "react-router-dom";

type NavigationButtonTypes = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const NavigationButton = ({
  to,
  children,
  className,
}: NavigationButtonTypes) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  const textChildren = children as string;

  return (
    <button onClick={handleClick} className={className}>
      {textChildren}
    </button>
  );
};

export default NavigationButton;
