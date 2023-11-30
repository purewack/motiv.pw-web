import clsx from "clsx";
import { CSSProperties } from "react";
import bar from './bar.module.css'

const motivLongText = "M O T I V - P W - M O T I V - P W - M O T I V - P W - M O T I V - P W - M O T I V - P W - M O T I V - P W - M O T I V - P W - M O T I V - P W - M O T I V - P W - M O T I V - P W - M O T I V - P W - M O T I V - P W - "

export default function LogoBar({className, style, text } : {
  className?: string,
  text?: string,
  style?: CSSProperties
}) {
  const longText = text ? [...Array(40).fill(text + " ")] : motivLongText;

  return (
    <div style={style} className={clsx([bar.logo, className])}>
      <div className="object bar font heading">
        <div className="face">{longText}</div>
        <div className="face">{longText}</div>
        <div className="face">{longText}</div>
        <div className="face">{longText}</div>
      </div>
    </div>
  );
}
