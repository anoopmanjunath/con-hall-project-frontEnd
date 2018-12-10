import React from 'react';
import { Link } from 'react-router-dom';

import { Table } from 'reactstrap';


// class FilterList extends React.Component {
//     render () {
//       const { elements } = this.props;
//       const { filterStr } = this.state;
  
//       const filteredElements = elements
//         .filter(e => e.includes(filterStr))
//         .map(e => <li>{ e }</li>)
  
//       return (
//         <div>
//           <input
//             type="text"
//             value={ filterStr }
//             onChange={ e => this.setState({ filterStr: e.target.value }) } />
//           <ul>
//             { filteredElements }
//           </ul>
//         </div>
//       );
//     }
//   }

const VendorTable = (props) => (
    <Table>
          <thead>
              <tr>                  
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                 <th>Address</th>
                  <th>Mobile </th>
              </tr>
          </thead>
          
          <tbody>
              {
                  props.vendor_details.map((vendor, index) => (
                      <tr key = {index}>
                      <td>{vendor.name}</td>
                      <td>{vendor.company}</td>
                      <td>{vendor.email}</td>
                      <td>{vendor.address}</td>
                      <td>{vendor.mobile}</td>
                      
                      
                      <td><Link to= {{pathname: `vendors/${vendor._id}`, state: {vendor_details: vendor}}}>View</Link></td>
                      
                      
                      <td><Link to= {{pathname: `vendors/edit/${vendor._id}`, state: {vendor_details: vendor}}}>Edit</Link></td>
                      </tr>
                  ))
              }
          </tbody>
          </Table>
)

export default VendorTable;

