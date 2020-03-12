// import React, { useState } from "react";
// import { useSpring, animated, useTrail } from "react-spring";

// const config = { mass: 5, tension: 2000, friction: 200 };

// export default function TextFade(props) {
//     const [toggle, setToggle] = useState(false);

//     const trail = useTrail(props.text.length, {
//         config,
//         opacity: toggle ? 1 : 0,
//         x: toggle ? 0 : 20,
//         height: toggle ? 80 : 0,
//         from: { opacity: 0, x: 20, height: 0 },
//     });

//     const handleClick = () => {
//         setToggle(!toggle);
//     };

//     return (
//         <div className="trails-main" onClick={handleClick}>
//             <div>
//                 {trail.map(({ x, height, ...rest }, index) => (
//                     <animated.div
//                         key={changeText[index]}
//                         className="trails-text"
//                         style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}
//                     >
//                         <animated.div style={{ height }}>{changeText[index]}</animated.div>
//                     </animated.div>
//                 ))}
//             </div>
//         </div>
//     );
// }
