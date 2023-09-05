import { forwardRef, useState } from "react";

export const DivResponder = forwardRef(
  ({ onStart, onDuring, onEnd, children, className, ...restProps }, ref) => {
    const [state, setState] = useState("idle");
    const [count, setCount] = useState({
      up: 0,
      down: 0,
      enter: 0,
      leave: 0,
      out: 0,
      over: 0,
      cancel: 0
    });
    const [move, setMove] = useState({ dx: 0, dy: 0, rx: 0, ry: 0 });
    const [isPress, setIsPress] = useState(false);

    return (
      <div
        ref={ref}
        className={`DivResponder ${state} ${className}`}
        {...restProps}
        onPointerDown={(ev) => {
          setState("down");
          setIsPress(true);
          setCount((c) => {
            return { ...c, down: c.down + 1 };
          });
          setMove({
            dx: 0,
            dy: 0,
            rx: 0,
            ry: 0,
            px: 0,
            py: 0,
            ix: ev.clientX,
            iy: ev.clientY
          });
          onStart?.();
        }}
        // onPointerOver={()=>{
        //   setState('over')
        //   setCount(c => {return {...c, over:c.over+1}})
        // }}

        onPointerEnter={(ev) => {
          setState("enter");
          setCount((c) => {
            return { ...c, enter: c.enter + 1 };
          });
          setMove({
            dx: 0,
            dy: 0,
            rx: 0,
            ry: 0,
            px: 0,
            py: 0,
            ix: ev.clientX,
            iy: ev.clientY
          });
        }}
        onPointerLeave={(ev) => {
          setState("leave");
          setCount((c) => {
            return { ...c, leave: c.leave + 1 };
          });
          setIsPress(false);
        }}
        onPointerUp={(ev) => {
          setState("up");
          setCount((c) => {
            return { ...c, up: c.up + 1 };
          });
          setIsPress(false);
        }}
        onPointerOut={(ev) => {
          setState("out");
          setCount((c) => {
            return { ...c, out: c.out + 1 };
          });
          setIsPress(false);
          onEnd?.();
        }}
        onPointerMove={(ev) => {
          if (isPress) setState("drag");
          else setState("move");
          setMove((m) => {
            const nm = {
              rx: ev.clientX - m.ix,
              ry: ev.clientY - m.iy,
              px: m.rx,
              py: m.ry
            };

            return {
              ...m,
              ...nm,
              dx: nm.rx - m.px,
              dy: nm.ry - m.py
            };
          });
          onDuring?.(ev);
        }}
      >
        {children}
        {restProps?.debug && (
          <span className={"debugInfo"}>
            <br />
            state: {state}
            <br />
            isPress: {isPress ? "true" : "false"}
            <br />
            {JSON.stringify(count, undefined, 4)}
            <br />
            {JSON.stringify(move, undefined, 4)}
          </span>
        )}
      </div>
    );
  }
);
