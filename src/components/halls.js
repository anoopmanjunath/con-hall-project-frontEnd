import React from 'react';
import axios from 'axios';
//import VendorTable from './vendor-table';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Button,Col,Row } from 'reactstrap';
  

class HallPage extends React.Component {
    constructor(props) {
      super(props); 
        this.state = {
          halls: []
      }
    }
  
    componentDidMount() {
      axios.get('http://localhost:3001/halls').then((response) => {
        console.log(response.data);
        this.setState({halls: response.data});
      }).catch((err) => {
        console.log(err)
      })
    }
  
    render() {
      return (
          <div>
            <h1>Halls List</h1>

              {this.state.halls.map((hall, index) => {
                console.log(hall, "hall")
                   return (<Row key={index} className="row justify-content-md-center">
                   <Col sm="6">
                      <Card body>
                      <CardTitle className="row justify-content-md-center"> <h5>Name : </h5> {hall.name.toUpperCase()}</CardTitle>
                      <CardText className="row justify-content-md-center"> <h5>Ceremonies : </h5>{hall.ceremonies}</CardText>
                      {/* <CardText className="row justify-content-md-center"> Category: {hall.category}</CardText> */}
                      <CardText className="row justify-content-md-center"> <h5>BasePrice : </h5>{hall.basePrice}</CardText>
                      <CardText className="row justify-content-md-center"><h5> Capacity : </h5>{hall.capacity}</CardText>
                      {/* <CardText className="row justify-content-md-center"><h5> Parking : </h5>{hall.parking}</CardText> */}
                      <CardText className="row justify-content-md-center"><h5> Description : </h5>{hall.description}</CardText>
                      <Button color="white">
                          <Link to={{pathname:`/halls/${hall._id}`, state:{hall: hall}}  }>
                          </Link>
                      </Button>
                      </Card>
                   </Col>
               </Row>)
              })}
             
              <Link to="/halls"></Link>
          </div>
      )
}
  } 
export default HallPage