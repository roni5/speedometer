import { Componet } from "react";
class Example extends React.Component {
  constructor(props) {
    super(props);
    //setting a default value
    this.state = {
      data: [
        { time: 23.3, value: 288.65 },
        { Energy: 0, value: 0.0 },
      ],
    };
  }

  componentDidMount() {
    const that = this;

    that.connection = new WebSocket(
      'ws://next-gen-rz.hs-harz.de:8080/fhem_prototyp2/Test',
    );

    that.connection.onopen = function() {
      that.connection.send('day');
    };
    // Log errors
    that.connection.onerror = function(error) {
      console.log('WebSocket Error ' + error);
    };

    // Log messages from the server
    that.connection.onmessage = function(e) {
      console.log('Server: ' + e.data);
      that.setState({ data: e.data });
    };
  }

  componentWillUnmount() {
    this.connection && this.connection.close();
  }

  render() {
    return (
      <BarChart
        width={800}
        height={500}
        data={this.state.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" tick={{ fill: 'white' }} />
        <YAxis
          tick={{ fill: 'white' }}
          label={{ value: 'kWh', angle: -90, position: 'insideLeft' }}
        />
        <Bar name="Wochenverbrauch" dataKey="value" fill="#f59f4a">
          <LabelList dataKey="value" position="top" fill="white" />
        </Bar>
      </BarChart>
    );
  }
}

// You should open the websocket connection only once in the componentDidMount method lifecycle.
// To update the state, you should call the setState function
// You also need to close the websocket connection in the componentWillUnmount method to avoid memory leaks