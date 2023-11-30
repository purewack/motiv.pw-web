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
    <div style={style} className={clsx([bar.scene, className])}>
      <section>
        <figure >{longText}</figure>
        <figure >{longText}</figure>
        <figure >{longText}</figure>
        <figure >{longText}</figure>
      </section>
    </div>
  );
}
