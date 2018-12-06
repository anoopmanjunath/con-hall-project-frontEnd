// import React from 'react';
// import axios from 'axios';
// //import VendorTable from './vendor-table';
// import { Link } from 'react-router-dom';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle,Button } from 'reactstrap';
  

// class HallPage extends React.Component {
//     constructor(props) {
//       super(props); 
//         this.state = {
//           halls: []
//       }
//     }
  
//     componentDidMount() {
//       axios.get('http://localhost:3001/halls').then((response) => {
//         this.setState({halls: response.data});
//       });
//     }
  
//     render() {
//       return (
        
// <div>
//         <Card>
//         <CardImg top width="100%" src="https://media.weddingz.in/images/38592bf8be9cdac03d869c671c4c52b3/nche.jpg" alt="Card image cap" />


        
//         <CardBody>
//           <CardTitle></CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          
//           <CardImg top width="100%" src="https://www.hkcec.com/sites/default/files/imce/CHall3.jpg" alt="Card im" />


//           <CardTitle>Card title</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

//         </CardBody>
//       </Card>
//     </div>
//       )
//     }
//   } 
// export default HallPage