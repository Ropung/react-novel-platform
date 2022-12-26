import { HTMLProps as Props } from "react";

type InitProps = Props<HTMLElement>;
export default InitProps;

export type CommonInputProps = Omit<Props<HTMLInputElement>, "classID">;

export type CommonDivProps = Omit<Props<HTMLDivElement>, "classID">;

export type CommonLabelProps = Props<HTMLLabelElement>;

export type CommonButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
