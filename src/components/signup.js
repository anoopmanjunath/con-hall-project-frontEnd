import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';


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
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
         this.handleMobile = this.handleMobile.bind(this);
         this.handlePassword = this.handlePassword.bind(this);

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
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/users" exact />
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                <input type='text' onChange={this.handleName} value={this.state.Name} errortext={this.state.nameError} />
                    </label> <span>{this.state.nameError}</span><br />
                    <label>Email
                    <input type='text' onChange={this.handleEmail} value={this.state.Email} errortext={this.state.emailError} />
                    </label> <span>{this.state.emailError}</span><br />
                    <label>Mobile
                    <input type='number' onChange={this.handleMobile} value={this.state.Mobile} errortext={this.state.phoneNumError} />
                    </label> <span>{this.state.mobileError}</span><br />
                    <label>Password
                    <input type='text' onChange={this.handlePassword} value={this.state.Password} errortext={this.passwordError} />
                    </label> <span>{this.state.passwordError}</span><br />

                   
                    <input type="submit" value='signup' />
                </form>
                <Link to="/login">Already a User</Link>
            </div>
        )
    }
}
export default SignUp;