import React, { Component } from 'react';
import {Grid, Col, Thumbnail, Row, Button} from "react-bootstrap"

class ProfilePage extends Component {

  constructor() {
    super();
    this.state = {
      currentUserEmail: '',
      currentUserName: '',
      currentUserPicture: '',
      currentUserBio: ''
    }
  }

  componentDidMount() {
    fetch('/users/profile')
    .then(res => res.json())
    .then(res => res[0])
    .then(res => {

      this.setState({
        currentUserEmail:res.email,
        currentUserName:res.username,
        currentUserPicture:res.picture,
        currentUserBio:res.bio,
      })
      console.log(this.state.currentUserName)
    })
  }
  render() {
    return (
      <center>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={this.state.currentUserPicture} alt="242x200">
                <h2> {this.state.currentUserName} </h2>
                <h3> {this.state.currentUserEmail}</h3>
                <h3> {this.state.currentUserBio}</h3>
                  <Button bsStyle="default">Edit</Button>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </center>
    );
  }
}

export default ProfilePage;
