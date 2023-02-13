import { HTMLAttributes, CSSProperties } from "react";

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