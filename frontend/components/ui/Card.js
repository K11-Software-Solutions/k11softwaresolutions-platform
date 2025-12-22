// components/ui/Card.tsx
import React from "react";
import { styles } from "./styles";

export function Card(props) {
  const { className = "", ...rest } = props;
  return <div className={`${styles.card} ${className}`} {...rest} />;
}

export function CardBody(props) {
  const { className = "", ...rest } = props;
  return <div className={`${styles.cardPad} ${className}`} {...rest} />;
}
