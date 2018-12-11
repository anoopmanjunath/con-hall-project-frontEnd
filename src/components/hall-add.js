import React from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';


class HallAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ``,
            nameError: ``,
            description: ``,
            descriptionError: ``,
            ceremonies:``,
            ceremoniesError:``,
            yearOfExperience:``,
            yearOfExperienceError:``,
            capacity:``,
            capacityError:``,
            parking:``,
            parkingError:``,
            basePrice:``,
            basePriceError:``,
            address:``,
            addressError:``,
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeAbout = this.handleChangeAbout.bind(this);
    }

    validate = () => {
        let isError = false;
        const errors = {
            nameError: ``,
            descriptionError: ``, 
            ceremoniesError:``,
        
            yearOfExperienceError:``,
            
            capacityError:``,
    
            parkingError:``,
        
            basePriceError:``,
        
            addressError:``,

        }

        if(this.state.name.length < 3){
            isError = true;
            errors.nameError = 'name of the hall should be atleast 3 characters long';
        }

        if(this.state.description.length < 10){
            isError = true;
            errors.descriptionError = 'information about the hall should be atleast 10 characters long';
        }  

        if(this.state.ceremonies.length < 5){
            isError = true;
            errors.ceremoniesError = 'information about the ceremonies should be atleast 10 characters long';
        }
        if(this.state.yearOfExperience.length >= 1){
            isError = true;
            errors.yearOfExperienceError = 'information about the ceremonies should be atleast 10 characters long';
        } 
        if(this.state.capacity.length >= 2){
            isError = true;
            errors.capacityError = 'information about the ceremonies should be atleast 10 characters long';
        } 
        if(this.state.parking.length >= 2){
            isError = true;
            errors.parkingError = 'information about the ceremonies should be atleast 10 characters long';
        } 



        this.setState({
            ...this.state,
            ...errors
        })

        return isError;
    }

    handleChangeText(event) {
        event.preventDefault();
        this.setState({
            name: event.target.value
        })
    }

    handleChangeAbout(event) {
        event.preventDefault();
        this.setState({
            aboutTheDepartment: event.target.value   
        })
    }
    handleChangeText(event) {
        event.preventDefault();
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const err = this.validate();
        console.log(err,"err");
        if(!err){
            this.setState({
                nameError: ``,
                aboutError: ``
            })
            let submitValue = {
                name: this.state.name,
                about: this.state.aboutTheDepartment
            }
            axios.post('http://localhost:3001/halls', submitValue).then((response) => {
                this.setState({
                    redirect: true
                });
            })      
        } 
    }

   
   
    render() {
        //redirecting to departments page after adding a department
        const { redirect } = this.state;
        if(redirect){
            return <Redirect to="/departments/" exact />
        }
        return (
            <div className="row justify-content-md-center"> 
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name"> Name</Label>
                        <Input type="text" errortext={this.state.nameError} id="name" name="name" onChange={this.handleChangeText} value={this.state.departmentName}/><br/>
                    </FormGroup>
                    {this.state.nameError?<Alert color="primary">{this.state.nameError}</Alert>: ``}
                    <FormGroup>
                    <Label for="about">About</Label>     
                        <Input type="textarea" errortext={this.state.aboutError} onChange={this.handleChangeAbout} value={this.state.about}/><br/>
                    </FormGroup> 
                    {this.state.aboutError?<Alert color="primary">{this.state.aboutError}</Alert>: ``}

                    <Button type="submit" color="primary" value="submit">submit</Button><br/><br/>
                    <Link to="/departments">back</Link>
                </Form> 
            </div>
        )
        
    }
}

export default HallAdd;