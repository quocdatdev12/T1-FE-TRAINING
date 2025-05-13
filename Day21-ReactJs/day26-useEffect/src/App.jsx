import { useState } from "react";
import "./App.css";
import { ClearUpFun } from "./components/ClearUpFun";
import { DemoUseEffect } from "./components/DemoUseEffect";
import { EventListenerDemo } from "./components/EventListenerDemo";

function App() {
  const [isCheck, setIsCheck] = useState(true);
  return (
    <>
      <DemoUseEffect/>
      {/* {isCheck && <EventListenerDemo />}
      <button onClick={() => setIsCheck(!isCheck)}>Ẩn ClearUpFun</button>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
        blanditiis nesciunt. Excepturi culpa eveniet placeat error voluptates
        voluptatem est, similique molestias maiores natus. Optio itaque, ullam
        sunt temporibus at non. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolorum, blanditiis nesciunt. Excepturi culpa eveniet
        placeat error voluptates voluptatem est, similique molestias maiores
        natus. Optio itaque, ullam sunt temporibus at non. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolorum, blanditiis nesciunt.
        Excepturi culpa eveniet placeat error voluptates voluptatem est,
        similique molestias maiores natus. Optio itaque, ullam sunt temporibus
        at non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorum, blanditiis nesciunt. Excepturi culpa eveniet placeat error
        voluptates voluptatem est, similique molestias maiores natus. Optio
        itaque, ullam sunt temporibus at non. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolorum, blanditiis nesciunt. Excepturi
        culpa eveniet placeat error voluptates voluptatem est, similique
        molestias maiores natus. Optio itaque, ullam sunt temporibus at non.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
        blanditiis nesciunt. Excepturi culpa eveniet placeat error voluptates
        voluptatem est, similique molestias maiores natus. Optio itaque, ullam
        sunt temporibus at non.
      </h1> */}
    </>
  );
}

export default App;
