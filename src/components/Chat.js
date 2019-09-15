import React, { Component } from 'react';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {};
    this.focusTextInput = this.focusTextInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind( this );
  }
  focusTextInput() {
    this.textInput.current.focus();
  }
  handleFormSubmit(e) {
    e.preventDefault();
    let text = this.refs.textInput.current.value;
    this.props.actions.send(text)
  }
    render() {
        // let i = 0,
        //     datas = this.props.datas.map( item => {
        //         return <li className="list-items" key={i++}>Speed:{item}</li>
        //   });
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" ref={this.textInput} />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
          <button type="submit" className="button">
            Send
          </button>
            </form>
            <ul className="list">{this.props.datas}</ul>
      </div>
    );
  }
}
