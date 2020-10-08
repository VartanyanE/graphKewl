import React, { Component } from "react";

class Horoscope extends Component {
  shouldComponentUpdate() {
    return true;
  }
  SubmitHandler = async (event) => {
    event.preventDefault();
    await fetch(
      "https://horoscopeapi-horoscope-v1.p.rapidapi.com/daily?date=today",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "horoscopeapi-horoscope-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "a55981e29amsh474209918c2f0eap1b8fb4jsn84b08394e42a",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.SubmitHandler}>GET</button>
        <h1>Horoscope</h1>
      </div>
    );
  }
}

export default Horoscope;
