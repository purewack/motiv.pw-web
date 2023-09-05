import { useState } from "react";
import './Styles/FlipCard.css'

/* <FlipCard title={"Testing"}>
  <img
    alt="cat"
    src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
  />
</FlipCard> */
export function FlipCard({ title, children }) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div
      className={"FlipCard"}
      onPointerEnter={() => {
        setIsFocus(true);
      }}
      onPointerLeave={() => {
        setIsFocus(false);
      }}
    >
      <div className={isFocus ? "Title Focus" : "Title"} debug>
        {[...title].map((c) => (
          <span>{c}</span>
        ))}
      </div>

      <div className="Content">{children}</div>
    </div>
  );
}
