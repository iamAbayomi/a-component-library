import { HTMLAttributes, CSSProperties, ChangeEvent } from "react";

export interface IAppColors {
    primaryColor: string
    secondaryColor: string
}

export interface IItem{
    name: string
    link: string
}

export interface IButtonProps{
    buttonAttributes?: HTMLAttributes<HTMLButtonElement>;
    buttonStyle?: CSSProperties;
}

export interface ICardProps{
    cardAttributes?: HTMLAttributes<HTMLDivElement>
    cardStyle?: CSSProperties
}

export interface IDivProps{
    divAttributes?: HTMLAttributes<HTMLDivElement>
    divStyle?: CSSProperties
}

export interface IInputProps{
    inputAttributes?: HTMLAttributes<HTMLInputElement>
    inputStyle?: CSSProperties
}

export interface ICheckboxProps extends IInputProps{
    id: string;
    name: string;
    checked?: boolean;
    value?: string;
    color?: string;
    onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

export interface IParagraphProps {
    paragraphAttributes?: HTMLAttributes<HTMLParagraphElement>
    paragraphStyle?: CSSProperties
}