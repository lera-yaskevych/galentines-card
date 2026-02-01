import '../App.css';

type Button = {
  children: string;
  onClick: () => void;
};

const Button = ({ children, onClick }: Button) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
