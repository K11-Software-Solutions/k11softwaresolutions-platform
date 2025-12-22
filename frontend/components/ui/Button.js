// components/ui/Button.tsx
import React from "react";
import { styles } from "./styles";


export function Button(props) {
  const {
    as: Comp = "button",
    variant = "primary",
    className = "",
    ...rest
  } = props;
  let variantClass;
  if (variant === "primary") variantClass = styles.btnPrimary;
  else if (variant === "secondary") variantClass = styles.btnSecondary;
  else variantClass = styles.btnGhost;
  return (
    <Comp className={`${styles.btnBase} ${variantClass} ${className}`} {...rest} />
  );
}
