import React, { Component } from 'react';
import {Grid, Col, Thumbnail, Row, Button} from "react-bootstrap"

class ProfilePage extends Component {

  constructor() { 
    super();
    this.state = {
      currentUserEmail: '',
      currentUserName: '',
    }
  }

  componentDidMount() { 
    fetch('/users/profile')
    .then(res => res.json())
    .then(res => res[0])
    .then(res => {
      
      this.setState({
        currentUserEmail:res.email,
        currentUserName:res.username
      })
  
    })
  } 
  render() {
    return ( 
      <div>
        <center>
          <Grid>   
            <Row>
              <Col xs={6} md={4}> 
                {/* <h2> {this.state.currentUser[0].email} </h2> */}
                <Thumbnail src={this.state.currentUser} alt="242x200">
                  <h3> {this.state.currentUserEmail}</h3>  
                  <center>
                    <Button href="" bsStyle="default">Trade currentUser</Button> 
                  </center>
                </Thumbnail> 
              </Col>  
            </Row>
          </Grid>
        </center>
      </div>
    );
  }
}

export default ProfilePage;


