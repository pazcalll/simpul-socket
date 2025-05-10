import { useState } from "react";
import Balloon from "./Balloon";

export default function Chat() {
  let loop = [];
  for (let i = 0; i < 100; i++) {
    loop.push(i);
  }
  return (
    <div className="w-full h-full space-y-2 gap-2">
      {loop.map((i) => (
        <Balloon sender={"sender"+i} message={"text "+i} isRTL={i % 2 == 0 ? true : false} key={i} />
      ))}
    </div>
  );
}
