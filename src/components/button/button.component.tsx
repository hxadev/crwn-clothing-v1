import './button.styles.scss';

const BUTTON_TYPE_CLASSES: any = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

interface Props{
  buttonType: string
  children?: React.ReactNode
  type: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}

const Button = ({ children, buttonType, type, onClick }: Props) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;