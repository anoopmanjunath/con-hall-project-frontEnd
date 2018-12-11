import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Name:'',
            nameError:'',
            Email:'',
            emailError:'',
            Mobile:'',
            mobileError:'',
            Password:'',
            passwordError:'',
            //redirect: false

            modal:false
        }
        this.toggle = this.toggle.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
         this.handleMobile = this.handleMobile.bind(this);
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
            nameError: '',
            emailError: '',
            mobileError: '',
            passwordError: ''
            
        };
        //console.log(errors);
        if (this.state.Name.length < 5) {
            isError = true;
            errors.nameError = 'Username must atleast be 5 characters long.'
        }

        if (!this.state.Email.includes('@')) {
            isError = true;
            errors.emailError = 'Enter a valid email address.'
        }

        if (this.state.Mobile.length !== 10) {
            isError = true;
            errors.mobileError = "Enter a valid mobile number";
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
            nameError: '',
            emailError: '',
            mobileError: '',
            passwordError: '',
            });

            let submitValue = {
                name: this.state.Name,
                email: this.state.Email,
                mobile: this.state.Mobile,
                password: this.state.Password
            }
            axios.post('http://localhost:3001/Signup /', submitValue).then((response) => {
                console.log(response.data.Signup);
                this.setState({
                    redirect: true
                })

            })
        }

    }

    handleName(e) {
        e.preventDefault();
        this.setState({
            Name: e.target.value
        })
    }


    handleEmail(e) {
        e.preventDefault();
        this.setState({
            Email: e.target.value
        })
    }


    handleMobile(e) {
        e.preventDefault();
        this.setState({
            Mobile: e.target.value
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
        return (
            <div className="row justify-content-md-center">


            
        
                <Form onSubmit={this.handleSubmit}>

                   <FormGroup>
                    <Label>Name

                <Input type='text' onChange={this.handleName} value={this.state.Name} errortext={this.state.nameError} />
                    </Label> <span>{this.state.nameError}</span><br />

                    </FormGroup>


                    <FormGroup>
                   
                    <Label>Email
                    <Input type='text' onChange={this.handleEmail} value={this.state.Email} errortext={this.state.emailError} />
                    </Label> <span>{this.state.emailError}</span><br />
                    </FormGroup>

                    <FormGroup>
                    <Label>Mobile
                    <Input type='number' onChange={this.handleMobile} value={this.state.Mobile} errortext={this.state.phoneNumError} />
                    </Label> <span>{this.state.mobileError}</span><br />
                      </FormGroup>


                      <FormGroup>
                    <Label>Password
                    <Input type='text' onChange={this.handlePassword} value={this.state.Password} errortext={this.passwordError} />
                    </Label> <span>{this.state.passwordError}</span><br />
                    </FormGroup>

                   
                    <input type="submit" value='signup' />
                    <br/>

                     <Link to="/login">Already a User</Link>
                </Form>
                

                
                  
            </div>
        )
    }
}
export default SignUp;