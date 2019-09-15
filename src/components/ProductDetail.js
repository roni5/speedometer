import React from 'react';
import Websocket from 'react-websocket';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: null,
    };
  }

  handleData(data) {
    let result = JSON.parse(data);
    this.setState({ speed: this.state.speed + result });
  }

  render() {
    return (
      <div>
        Speed: <strong>{this.state.speed}</strong>
        <Websocket
          url="http://localhost:8080"
          onMessage={this.handleData.bind(this)}
        />
      </div>
    );
  }
}

export default ProductDetail;
