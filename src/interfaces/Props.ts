import { TextAlign } from "../types/TextAlign";
import { ReactNode } from "react";

export interface CardProductProps {
  price: number;
  description: string;
  title: string;
  image: string;
  rank: number;
  onClick: () => void;
}

export interface TitleProps {
  fontSize: number;
  title: string;
  mt?: string;
  mx?: string;
  color?: string;
  textAlign?: TextAlign;
}

export interface HrProps {
  my?: string;
  color?: string;
  bgcolor?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
}

export interface DetailProps {
  title: string;
  description: string;
  rank: number;
}

export interface DescriptionProps {
  description: string;
  color: string;
  fontSize?: string;
  mx?: string;
  my?: string;
  textAlign: TextAlign;
}

export interface ButtonProps {
  onClick: () => void;
}

export interface AppContextProviderProps {
  children: ReactNode;
}
