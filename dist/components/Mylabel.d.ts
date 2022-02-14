/// <reference types="react" />
import "./mylable.css";
export interface MylabelProps {
    /**
     * Todo en mayusculas
     */
    allCaps?: boolean;
    /**
     * Todo en mayusculas
     */
    backgroundColor?: string;
    /**
     * Color de la etiqueta
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Color de fuente personalizado
     */
    fontColor?: string;
    /**
     * El contenido de la etiqueta
     */
    label: string;
    /**
     * El tamaño de la etiqueta
     */
    size: "normal" | "h1" | "h2" | "h3";
}
export declare const Mylabel: ({ allCaps, backgroundColor, color, fontColor, label, size, }: MylabelProps) => JSX.Element;
