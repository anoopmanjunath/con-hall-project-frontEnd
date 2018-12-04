import React from 'react';
import {Link} from 'react-router-dom';

class ViewOneVendor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vendor: this.props.location.state.vendor_details
        }
    }

    render() {
        //console.log(this.props.location);
        return (
            <div>
                <table border= '2'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>company</th>
                            <th>email</th>
                            <th>address</th>
                            <th>mobile</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>{this.state.vendor._id}</td>
                                <td>{this.state.vendor.name}</td>
                                <td>{this.state.vendor.company}</td>
                                <td>{this.state.vendor.email}</td>
                                <td>{this.state.vendor.mobile}</td>
                                <td>{this.state.vendor.address}</td>
                                
                                
                            </tr>
                        }
                    </tbody>
                </table><br/>
                <Link to='/vendors'>back</Link>
            </div>
        )
    }
}

export default ViewOneVendor;