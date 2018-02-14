// Items page to display all items
import React, { Component } from 'react';
import {Grid, Col, Thumbnail, Row, Button} from "react-bootstrap"
class MyItemsPage extends Component {
 constructor() {
   super();
   this.state = {
     items: []
   }
 }

 componentDidMount() {
   fetch('/items/myitems')
   .then(res => console.log(res.json()))
   .then(items => this.setState({items}, () => console.log('Got items...',
   items)))
 }
 render() {
   return (

     <Grid>
       <Row>{this.state.items.map(item =>
         <Col xs={6} md={4}>
           <Thumbnail src={item.picture} alt="242x200">
             {console.log(item)}
             <center>
               {/* <h3> {this.state.item.description}</h3> */}
               <Button href={"/items/" + item._id} bsStyle="default">View Item</Button>
             </center>
           </Thumbnail>
         </Col>)}
       </Row>
     </Grid>
   );
 }
}


export default MyItemsPage;
