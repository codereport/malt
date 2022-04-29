import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Demo from "./Demo";

class App extends React.Component {
  //   getInitialState: function() {
  //     return this.props.userData;
  //   },
  constructor(props) {
    super(props);
    this.state = {
      // ...this.props.userData
    };
  }
  render() {
    Demo.init();
    return <div><strong><center><p>MALT: Multidirectional Array Language Transpiler </p></center></strong></div>;
  }
}

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code> src / App.js </code> and save to reload.{" "}
//         </p>{" "}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React{" "}
//         </a>{" "}
//       </header>{" "} */}
//       {/* <Demo /> */}
//     </div>
//   );
// }

export default App;
