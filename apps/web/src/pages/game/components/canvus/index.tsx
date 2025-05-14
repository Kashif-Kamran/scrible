import { useEffect, useRef } from "react";

function Canvus() {
  const canvusRef = useRef<HTMLCanvasElement | null>(null);
  let mousePressedStatus = false;
  useEffect(() => {
    const canvas = canvusRef?.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");

    function drawOnCanvus() {
      if (!context) return;
      context.fillStyle = "red";
      context.fillRect(666, 515, 700, 600);
    }

    function handleMouseEvent(event: MouseEvent) {
      if (mousePressedStatus)
        console.log("Mouse Position : ", {
          x: event.clientX,
          y: event.clientY,
        });
    }
    function handleMouseDownEvent() {
      drawOnCanvus();
      mousePressedStatus = true;
    }
    function handleMouseUpEvent() {
      mousePressedStatus = false;
    }

    canvas.addEventListener("mousedown", handleMouseDownEvent);
    canvas.addEventListener("mouseup", handleMouseUpEvent);
    canvas.addEventListener("mousemove", handleMouseEvent);
    return () => {
      canvas.addEventListener("mousedown", handleMouseDownEvent);
      canvas.addEventListener("mousemove", handleMouseEvent);
    };
  }, []);

  return (
    <div className="border-2 border-blue-300 w-full h-full p-2 flex flex-col gap-2">
      <canvas
        id="canvus"
        ref={canvusRef}
        className="bg-white w-full h-full rounded-lg"
      ></canvas>
    </div>
  );
}

export default Canvus;
