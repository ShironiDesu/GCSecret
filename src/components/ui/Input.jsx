import FadeUp_block from "./FadeUp-block";

// import "./button.scss"
export default function Input({
  children,
  className,
  type,
  name,
  id,
  text,
  required,
  onChange,
  accept,
  animationOff
}) {
  return (
    <FadeUp_block animationOff={animationOff}>
      <div className={`input-wrapper ${className}`}>
        <input
          type={type}
          id={id}
          name={name}
          placeholder=" "
          required={required}
          onChange={onChange}
          accept={accept}
        />
        <label htmlFor={name}>{text}</label>
        {children}
      </div>
    </FadeUp_block>
  );
}
