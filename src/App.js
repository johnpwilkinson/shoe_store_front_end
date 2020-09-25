import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/shoe/")
      .then((response) => response.json())
      .then((data) => this.setState({ shoes: data }));
  }

  render() {
    return (
      <>
        <h1>Shoe Store Demo</h1>
        <h2>Inventory System</h2>
        {this.state.shoes.map((shoe) => (
          <div
            key={shoe.id}
            style={{border: "black 2px solid", marginBottom: 10}}
          >
            <h3>Inventory number : {shoe.id}</h3>
            <h4>Model : {shoe.brand_name}</h4>
            <h4>Made By : {shoe.manufacturer}</h4>
            <h4>Color : {shoe.color}</h4>
            <h4>Size : {shoe.size}</h4>
            <h4>Material : {shoe.material}</h4>
            <h4>Type : {shoe.shoe_type}</h4>
            <h4>Fastener : {shoe.fasten_type}</h4>
          </div>
        ))}
      </>
    );
  }
}

export default App;
