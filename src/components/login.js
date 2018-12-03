// // import React from 'react';
// // import axios from 'axios';
// // import {Redirect} from 'react-router-dom';
// // import {Link} from 'react-router-dom';


// // class Login extends React.Component {
// //     constructor(props){
// //         super(props);
// //         this.state={
// //             Email:'',
// //             Password:'',
// //             redirect: false
// //         }
// //         this.handleSubmit = this.handleSubmit.bind(this);
// //         this.handleEmail = this.handleEmail.bind(this);
// //          this.handlePassword = this.handlePassword.bind(this);
// //     }

// //     handleSubmit(e) {
// //         e.preventDefault();
// //         let submitValue = {
            
// //             email: this.state.Email,
// //             password: this.state.Password
// //         }
// //         axios.post('http://localhost:3001/ /', submitValue).then((response) => {
// //            console.log(response.data.login);
// //            this.setState({
// //                redirect: true
// //            })
          
// //         })
// // }
// // handleEmail(e) {
// //     e.preventDefault();
// //     this.setState({
// //         Email: e.target.value
// //     })
// // }

// // handlePassword(e) {
// //     e.preventDefault();
// //     this.setState({
// //         Password: e.target.value
// //     })
// // }
// // render() {
// //     const { redirect } = this.state;
// //     if (redirect) {
// //         return <Redirect to= "/login" exact/>
// //     }
// //     return (
// //         <div>
// //         <form onSubmit = {this.handleSubmit}>
            
// //             <label>Email
// //                 <input type = 'text' onChange = {this.handleEmail} value = {this.state.Email}/>
// //             </label><br/>
// //             <label>Password
// //                 <input type = 'number' onChange = {this.handlePassword} value = {this.state.Password}/>
// //             </label><br/>
            
            
// //             <input type = "submit" value = 'add user'/>
// //         </form>
// //         <Link to="/SignUp">Not an</Link>
// //         </div>
// //     )
// // }
// // }
// // export default Login;



// import React from 'react';
// import axios from 'axios';
// import {Redirect} from 'react-router-dom';
// import {Link} from 'react-router-dom';


// class SignUp extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
            
//             Email:'',
//             emailError:'',
           
//             Password:'',
//             passwordError:'',
//             redirect: false
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
       
//         this.handleEmail = this.handleEmail.bind(this);
         
//          this.handlePassword = this.handlePassword.bind(this);

//     }
//     validate = () => {
//         let isError = false;
//         const errors = {
            
//             emailError: '',
           
//             passwordError: ''
            
//         };
//         //console.log(errors);
        

//         if (!this.state.Email.includes('@')) {
//             isError = true;
//             errors.emailError = 'Enter a valid email address.'
//         }

        

       

        
//         if (this.state.Password === '') {
//             isError = true;
//             errors.passwordError = "Please Enter Correct Password."
//         }

        
//         this.setState({
//             ...this.state,
//             ...errors
//         })

//         return isError;
//     }


//     handleSubmit(e) {
//         e.preventDefault();
//         const err = this.validate();
//         if (!err) {
//             // clear errors
//             this.setState({
           
//             emailError: '',
//             passwordError: ''
//             });

//             let submitValue = {
               
//                 email: this.state.Email,
                
//                 password: this.state.Password
//             }
//             axios.post('http://localhost:3001/Login /', submitValue).then((response) => {
//                 console.log(response.data.Login);
//                 this.setState({
//                     redirect: true
//                 })

//             })
//         }

//     }

   

//     handleEmail(e) {
//         e.preventDefault();
//         this.setState({
//             Email: e.target.value
//         })
//     }

//     handlePassword(e) {
//         e.preventDefault();
//         this.setState({
//             Password: e.target.value
//         })
//     }



//     render() {
//         const { redirect } = this.state;
//         if (redirect) {
//             return <Redirect to="/users" exact />
//         }
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
                    
//                     <label>Email
//                     <input type='text' onChange={this.handleEmail} value={this.state.Email} errortext={this.state.emailError} />
//                     </label> <span>{this.state.emailError}</span><br />
                    
//                     <label>Password
//                     <input type='text' onChange={this.handlePassword} value={this.state.Password} errortext={this.passwordError} />
//                     </label> <span>{this.state.passwordError}</span><br />

                   
//                     <input type="submit" value='login' />
//                 </form>
//                 <Link to="/signUp">Not An User</Link>
//             </div>
//         )
//     }
// }
// export default SignUp;
