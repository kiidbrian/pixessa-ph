type InputProps = {
  type: "text" | "password" | "number" | "email";
  className: string;
  placeholder?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ className, type, placeholder, onChange }: InputProps) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
