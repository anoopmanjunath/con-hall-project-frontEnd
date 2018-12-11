import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {  Form, FormGroup, Label, Input, FormText, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';


class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
            Email:'',
            emailError:'',
           
            Password:'',
            passwordError:'',
           // redirect: false,

            modal: false
        }

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
        this.handleEmail = this.handleEmail.bind(this);
         
         this.handlePassword = this.handlePassword.bind(this);

    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    
    validate = () => {
        let isError = false;
        const errors = {
            
            emailError: '',
           
            passwordError: ''
            
        };
        //console.log(errors);
        

        if (!this.state.Email.includes('@')) {
            isError = true;
            errors.emailError = 'Enter a valid email address.'
        }

        
        if (this.state.Password === '') {
            isError = true;
            errors.passwordError = "Please Enter Correct Password."
        }

        
        this.setState({
            ...this.state,
            ...errors
        })

        return isError;
    }


    handleSubmit(e) {
        e.preventDefault();
        const err = this.validate();
        if (!err) {
            // clear errors
            this.setState({
           
            emailError: '',
            passwordError: ''
            });

            let submitValue = {
               
                email: this.state.Email,
                
                password: this.state.Password
            }
            axios.post('http://localhost:3001/LogIn /', submitValue).then((response) => {
                console.log(response.data.Login);
                this.setState({
                    redirect: true
                })

            })
        }

    }

   

    handleEmail(e) {
        e.preventDefault();
        this.setState({
            Email: e.target.value
        })
    }

    handlePassword(e) {
        e.preventDefault();
        this.setState({
            Password: e.target.value
        })
    }



    render() {
        // const { redirect } = this.state;
        // if (redirect) {
        //     return <Redirect to="/users" exact />
        // }

        
       // const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        return (
            <div className="row justify-content-md-center">
        
         
       
        
                <Form onSubmit={this.handleSubmit.toggle}>                    
                    
                    <FormGroup>
                    <Label>Email
                    <Input type='text' onChange={this.handleEmail} value={this.state.Email} errortext={this.state.emailError} />
                    </Label> <span>{this.state.emailError}</span><br />
                    </FormGroup>
                    
                    <FormGroup>
                    <Label>Password
                    <Input type='text' onChange={this.handlePassword} value={this.state.Password} errortext={this.passwordError} />
                    </Label> <span>{this.state.passwordError}</span><br />
                    </FormGroup>
                    

              
                   
                    <input type="submit" value='login' />
                    <br/>

                    <Link to="/signUp">Not An User</Link>
                </Form>
               
            
                
            </div>
        )
    }
}
export default LogIn;
