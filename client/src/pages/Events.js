import React, { Component } from "react";

class EventsPage extends Component {
  componentDidMount() {
    this.state = [{}];
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
        this.setState({ compliments: resData.data });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.compliments.map((item) => ({
          item,
        }))}
      </div>
    );
  }
}
export default EventsPage;
