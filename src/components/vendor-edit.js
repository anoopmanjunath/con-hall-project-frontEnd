import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class EditVendors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: this.props.location.state.vendor_details.name,
            nameError: '',
            Company: this.props.location.state.vendor_details.company,
            companyError: '',
            Email: this.props.location.state.vendor_details.email,
            emailError: '',
           
            Address: this.props.location.state.vendor_details.address,
            addressError: '',
            Mobile: this.props.location.state.vendor_details.mobile,
            mobileError: '',
            
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleCompany=this.handleCompany.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleMobile = this.handleMobile.bind(this);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleName(e) {
        e.preventDefault();
        this.setState({
            Name: e.target.value
        })
    }



    handleCompany(e) {
        e.preventDefault();
        this.setState({
            Company: e.target.value
        })
    }



    handleEmail(e) {
        e.preventDefault();
        this.setState({
            Email: e.target.value
        })
    }

    handleAddress(e) {
        e.preventDefault();
        this.setState({
            Address: e.target.value
        })
    }

    handleMobile(e) {
        e.preventDefault();
        this.setState({
            Mobile: e.target.value
        })
    }

    

    validate = () => {
        let isError = false;
        const errors = {
            nameError: '',
            companyError: '',
            emailError: '',
            addressError: '',
            mobileError: '',
            
        };
       // console.log(errors);
        if (this.state.Name.length < 5) {
            isError = true;
            errors.nameError = 'Enter Atleast 5 Letters.'
        }


        if (this.state.Company.length < 5) {
            isError = true;
            errors.companyError = 'Company Name atleast be more than five characters.'
        }


        
        if (!this.state.Email.includes('@')) {
            isError = true;
            errors.emailError = 'Enter a valid email address.'
        }

        if (this.state.Address.length < 10) {
            isError = true;
            errors.addressError = "Enter a valid address."
        }

        if (this.state.Mobile.length !== 10) {
            isError = true;
            errors.mobileError = "Enter a valid mobile number";
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
            this.setState({
                nameError: '',
                companyError: '',
                emailError: '',
                addressError: '',
                mobileError: '',
                
            });
        
        let submitValue = {
            name: this.state.Name,
            company: this.state.Company,
            email: this.state.Email,
            address: this.state.Address,
            mobile_number: this.state.Mobile,
           
        }
        axios.put(`http://localhost:3001/vendors/${this.props.match.params.id}`, submitValue).then((response) => {
            this.setState({vendors: response.data})
            this.setState({
                redirect: true
            })
        })
    }
}

    handleDelete(e) {
        e.preventDefault();
//console.log(this.match.params.id,"id");
        axios.delete(`http://localhost:3001/vendors/${this.props.match.params.id}`).then((response) => {

        console.log(response);    

        this.setState({vendors: response.data})
        this.setState({redirect: true});
        })
    }

    render() {

        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/vendors" exact />
        }
    
        return (
            <div className="row justify-content-md-center">
                <Form onSubmit={this.handleSubmit}>

                <FormGroup>
                    <Label>Name
                    <Input type='text' onChange={this.handleName} value={this.state.Name} errortext={this.state.nameError} />
                    </Label><span>{this.state.nameError}</span><br />
                  </FormGroup>

                  <FormGroup>
                    <Label>Company
                    <Input type="text" onChange={this.handleCompany} value={this.state.Company} errortext={this.state.companyError} />
                    </Label><span>{this.state.companyError}</span><br />
                   </FormGroup>
                  
                  <FormGroup>
                    <Label>Email
                    <Input type="text" onChange={this.handleEmail} value={this.state.Email} errortext={this.state.emailError} />
                    </Label><span>{this.state.emailError}</span><br />
                    </FormGroup>

                    <FormGroup>
                    <Label>Address
                    <Input type="textArea" onChange={this.handleAddress} value={this.state.Address} errortext={this.state.addressError} />
                    </Label><span>{this.state.addressError}</span><br />
                    </FormGroup>

                    <FormGroup>
                    <Label>Mobile
                    <Input type='text' onChange={this.handleMobile} value={this.state.Mobile} errortext={this.state.mobileError} />
                    </Label><span>{this.state.mobileError}</span><br />
                     </FormGroup>
                    

                    
                    <Input type="submit" value='Edit vendors' />
                    <br/>

                   
                    

<Button><Link to= {`vendors/delete/${this.props.match.params.id}`} onClick = {this.handleDelete}>Delete</Link></Button>

<br/>
<br/>


<Button> <Link to="/vendors">back</Link></Button>
                </Form>
                
                
            </div>
        )
    }
}

export default EditVendors;