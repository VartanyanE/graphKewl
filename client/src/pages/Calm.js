import React, { Component } from "react";

class Calm extends React.Component {
  state = {
    compliments: [],
  };

  shouldComponentUpdate() {
    return true;
  }

  fetchCompliments = async () => {
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
  };

  render() {
    // const randComp = this.state.compliments.map((item) =>
    //   // item.compliment[Math.floor(Math.random() * item.compliment.length)]

    //   // item.compliment ? item.compliment[0] : ""
    // );
    // console.log(randComp);

    return (
      <div>
        <button onClick={this.fetchCompliments}>GIVE ME A COMPLIMENT</button>
        {this.state.compliments.map((item) => (
          <h5>{item.compliment}</h5>
        ))}
        {/* <h5>{randComp}</h5> */}
      </div>
    );
  }
}
export default Calm;
