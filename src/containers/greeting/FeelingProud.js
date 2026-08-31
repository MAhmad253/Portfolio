// import React from "react";
// import myPhoto from "../../assets/images/ML.mp4";

// class FeelingProud extends React.Component {
//   render() {
//     return (
//       <img
//         src={myPhoto}
//         alt="My profile"
//         style={{
//           width: "100%",
//           height: "auto",
//         }}
//       />
//     );
//   }
// }

// export default FeelingProud;



// For Video 
import React from "react";

import myVideo from "../../assets/images/0828.mp4";

class FeelingProud extends React.Component {
  render() {
    return (
      <video
        src={myVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    );
  }
}

export default FeelingProud;