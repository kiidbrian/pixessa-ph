type InputProps = {
  type: "text" | "password" | "number" | "email";
  className: string;
  placeholder?: string;
  id?: string;
};

const Input = ({ className, type, placeholder }: InputProps) => {
  return <input type={type} className={className} placeholder={placeholder} />;
};

export default Input;
