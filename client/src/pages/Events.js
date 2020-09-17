import React, { Component } from "react";

class EventsPage extends React.Component {
  state = {
    compliments: [],
  };
  componentDidMount() {
    this.fetchCompliments();
  }
  async fetchCompliments() {
    let requestBody = {
      query: `
      query {
        compliments {
          compliment
        }
      }
          `,
    };

    await fetch("http://localhost:8000/graphql", {
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
        this.setState({ compliments: resData.data.compliments });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {this.state.compliments.map((item) => (
          <h1>{item.compliment}</h1>
        ))}
      </div>
    );
  }
}
export default EventsPage;
