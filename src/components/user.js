// import React from "react";
// import axios from "axios";
// import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// class Users extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         users : []
//       }
//       this.handleSubmit = this.handleSubmit.bind(this);

//     }

//     handleSubmit(event){

//       event.preventDefault();
//       this.setState(prevState=> ({
// users: prevState.users.concate([event.target.elements.userName.value])
//       }))
//       //console.log(event.target.elements.userName.value);
//     }
  
      

  
//       axios.post('http://localhost:3001/users',submitValue).then((response)=> {
//         const newName=[...this.state.users,response.data];
        
//         this.setState(prevState => ({
//           users : newName
//         }))
//       })
//     }
  
   
//     render() {
//       return (
// <Form onSubmit={this.handleSubmit.bind(this)}>
//         <FormGroup>
//           <Label for="exampleEmail">userName</Label>

//           <Input type="text" name="userName" id="userName" placeholder="with a placeholder" value={this.state.userName}/>
//         </FormGroup>

//         {/* <FormGroup>
//           <Label for="examplePassword">Password</Label>

//           <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
//         </FormGroup> */}

//         <input type="Submit" value="submit" />

// </Form>



//       )
//     }
//   }

 // export default Users
