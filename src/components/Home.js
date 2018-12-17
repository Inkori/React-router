// import React, { Component } from "react";
// import Users from "./Users";

// const URL = "https://jsonplaceholder.typicode.com";

// class Home extends Component {
//   state = {
//     users: []
//   };
//   // addUsers = () => {
//   //   fetch(`${URL}/todos/`).then(response => {
//   //     response.json().then(data => {
//   //       this.setState(state => ({ users: [...state.users, ...data] }));
//   //     });
//   //   });
//   // };
//   addUsers() {
//     fetch(`${URL}/users/`).then(response => {
//       response.json().then(data => {
//         this.setState(state => ({ users: [...state.users, ...data] }));
//       });
//     });
//   }
//   componentDidMount() {
//     this.addUsers();
//   }

//   render() {
//     return (
//       <div>
//         {this.state.users.map(data => {
//           return (
//             <div key={data.id}>
//               <img
//                 src="http://placehold.it/50x50"
//                 className="avatar"
//                 alt="#"
//               />
//               <span>{data.username}</span>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default Home;
