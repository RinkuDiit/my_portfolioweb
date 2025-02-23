import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX + 20, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return(
    <>
    <div className="cursor-dot" style={{ left: position.x, top: position.y}} > 
    </div>

 </>
  )
 
};

export default CursorFollower;
