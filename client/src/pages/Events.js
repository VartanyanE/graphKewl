import React, { Component } from "react";

class EventsPage extends Component {
  state = {
    compliments: "",
  };
  submitHandler = (event) => {
    event.preventDefault();

    let requestBody = {
      query: `
      query {
        compliments {
          compliment
        }
      }
          `,
    };

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then((resData) => {
        this.setState({ compliments: resData.data.compliments[0].compliment });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <button onClick={this.submitHandler}>{this.state.compliments}</button>
    );
  }
}

export default EventsPage;
