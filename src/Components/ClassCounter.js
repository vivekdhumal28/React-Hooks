// import React from "react";
import React, { Component } from "react";

export class ClassCounter extends Component {
  render() {
    return <div>ClassCounter</div>;
  }
}

export default ClassCounter;
// export class ClassCounter extends React.Component {
//   constructor(props) {
//     super(props)(
//       (this.state = {
//         count: 0,
//       })
//     );
//   }

//   incrementCounter() {
//     this.setState(this.state.count + 1);
//   }
// incrementCounter = () => {
//     this.setState(prevState => {
//         return {
//             count: prevState.count + 1;
//         }
//     });
//   }
//   render() {
//     return (
//       <>
//         <div>App</div>
//         <button onClick={this.incrementCounter}>
//           Counter {this.state.count}
//         </button>
//       </>
//     );
//   }
// }
// export default ClassCounter;
