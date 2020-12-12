import "../css/App.css";
import React, { Component } from "react";
import AddAppointments from "./AddAppointments";
import SearchAppointments from "./SearchAppointments";
import ListAppointments from "./ListAppointments";

class App extends Component {
  // Constructor is where we initialize things.
  constructor() {
    // Super allows us to get informationl
    super();
    this.state = {
      myName: "Sky",
      myAppointments: [],
    };
  }

  // Use React lifecycle method componentDidMount to collect data.json info.
  componentDidMount() {
    fetch("./data.json")
      .then((response) => response.json())
      .then((result) => {
        // using JS map function here
        const apts = result.map((item) => {
          return item;
        });
        this.setState({
          myAppointments: apts,
        });
      });
  }

  render() {
    const listItems = this.state.myAppointments.map((item) => (
      <div>
        <div>{item.petName}</div>
        <div>{item.ownerName}</div>
      </div>
    ));

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                {/* <div>Add Appointments</div> 
                    <div>Search Appointments</div>
                    <div>List Appointments</div> */}
                {/* {this.state.myName} */}
                {listItems}
                <AddAppointments />
                <SearchAppointments />
                <ListAppointments />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
