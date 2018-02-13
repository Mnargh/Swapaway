import React, { Component } from "react";
import {Grid, Col, Thumbnail, Row, Button} from "react-bootstrap"

class ItemPage extends Component {

  constructor() {
    super();
    this.state = {
      item: []
    }
  }

  componentDidMount() {
    fetch('/items/' + this.props.match.params._id)
    .then(res => res.json())
    .then(item => this.setState({item}))
  }


  render() {
    return (
      <div className="ItemPage">
        <center>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <h2> {this.state.item.name} </h2>
                <Thumbnail src={this.state.item.picture} alt="242x200">
                  <h3> {this.state.item.description}</h3>
                  <center>
                    <Button href={"/items/" + this.state.item._id} bsStyle="default">Trade Item</Button>
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


export default ItemPage;
