import "./Button.css";

export interface IButton{
    info:string
    buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>
    size?:"sm"|"md"|"lg"
}

export default function Button({
    info,
    buttonProps
}:IButton) {
  return (
    <>
      <button
      {...buttonProps}
      >{info}</button>
    </>
  );
}
