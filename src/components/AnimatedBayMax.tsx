import React from "react";
import style from "./AnimatedBayMax.module.css";
import { cn } from "./MaxWidthWrapper";
const AnimatedBayMax = () => {
  return (
    <div id={style.baymax}>
      <div className={style.head}>
        <div className={cn(style.left, style.eye)}></div>
        <div className={cn(style.right, style.eye)}></div>
        <div className={style.mouth}></div>
      </div>
      <div className={style.body}>
        <div className={style.chest}>
          <i></i>
        </div>
        <div className={style.belly}></div>
        <div className={cn(style.left, style.arm)}>
          <div className={style.fingers}></div>
        </div>
        <div className={cn(style.right, style.arm)}>
          <div className={style.fingers}></div>
        </div>
      </div>
      <div className={cn(style.left, style.leg)}></div>
      <div className={cn(style.right, style.leg)}></div>
    </div>
  );
};

export default AnimatedBayMax;
