import React from 'react';
import logo from './logo.svg';
import './App.css';

class ResultComponent extends React.Component {

  render() {
    let { result } = this.props;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    )
      ;
  }
}

class KeyPadComponent extends React.Component {

  render() {
    return (
      <div className="button">
        <button name="AC" onClick={e => this.props.onClick(e.target.name)}>AC</button><br />

        <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
        <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
        <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
        <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br />

        <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
        <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
        <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
        <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br />

        <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
        <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
        <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
        <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br />

        <button name="." onClick={e => this.props.onClick(e.target.name)}>,</button>
        <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
        <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
        <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br />
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if (button === "=") {
      this.calculate()
    }

    else if (button === "AC") {
      this.backspace()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };


  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "erro"
      })

    }
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Calculadora (sem memória)</h1>
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
export default App;
