import "./mylable.css";

export interface MylabelProps {
  /**
   * Todo en mayusculas
   */
  allCaps?: boolean;

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

export const Mylabel = ({
  allCaps = false,
  color = "primary",
  fontColor,
  label = " No label",
  size = "normal",
}: MylabelProps) => {
  return (
    <span
      className={`label ${size} 
  text-${color}`}
      style={{ color: fontColor }}
    >
      {!allCaps ? label : label.toUpperCase()}
    </span>
  );
};
