import React from 'react';
import { Link } from 'react-router-dom';

const VendorTable = (props) => (
    <table border = '2'>
          <thead>
              <tr>                  
                  <th>name</th>
                  <th>company</th>
                  <th>email</th>
                 <th>address</th>
                  <th>mobile </th>
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
          </table>
)

export default VendorTable;