import React, { Component } from 'react';
import {Grid, Col, Thumbnail, Row, Button} from "react-bootstrap"

class ProfilePage extends Component {

  constructor() {
    super();
    this.state = {
      currentUserEmail: '',
      currentUserName: '',
      currentUserPicture: ''
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
        currentUserPicture:res.picture
      })
      console.log(this.state.currentUserName)
    })
  }
  render() {
    return (
      <div>
        <center>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail src={this.state.currentUserPicture} alt="242x200"></Thumbnail>
                  <h3> {this.state.currentUserEmail}</h3>
              </Col>
            </Row>
          </Grid>
        </center>
      </div>
    );
  }
}

export default ProfilePage;
