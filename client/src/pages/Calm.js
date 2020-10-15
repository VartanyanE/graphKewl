import React, { Component } from "react";
import "./Calm.css";
import video from "./rain.mp4";
import { AnimatePresence, motion } from "framer-motion";
import SimpleBottomNavigation from "../components/BottomNav";

class Calm extends React.Component {
  state = {
    signs: "",
    compliments: [],
    randomComp: [],
    horoscope: [],
    joke: [],
  };

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
      })
      .catch((err) => {
        console.log(err);
      });

    this.state.compliments.map((item) => {
      this.state.compliments
        .sort(() => Math.random() - Math.random())
        .find(() => true);

      this.setState({ randomComp: [item] });
    });
  };

  selectSign = () => {
    const sign = document.getElementById("signs");
    const selectedSign = sign.options[sign.selectedIndex].value;
    this.setState({ signs: selectedSign });
    console.log(selectedSign);
    this.fetchHoroscope();
  };

  fetchHoroscope = async () => {
    console.log(this.state);

    // await fetch(`https://horoscope5.p.rapidapi.com/general/daily?sign=${this.state.signs}`, {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "horoscope5.p.rapidapi.com",
    //     "x-rapidapi-key": "a55981e29amsh474209918c2f0eap1b8fb4jsn84b08394e42a"
    //   }
    // })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(res => {
    //     this.setState({ horoscope: [res.result.description] });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  fetchJoke = () => {
    fetch(
      "https://webknox-jokes.p.rapidapi.com/jokes/random?maxLength=100&minRating=8",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "webknox-jokes.p.rapidapi.com",
          "x-rapidapi-key":
            "a55981e29amsh474209918c2f0eap1b8fb4jsn84b08394e42a",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.setState({ joke: [res.joke] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const pageTransition = {
      type: "tween",
      ease: "anticipate",
      duration: 2.5,
    };
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={pageTransition}
      > <div className="bottomNav">
          <SimpleBottomNavigation />
        </div>
        {/* <button onClick={this.fetchCompliments}>GIVE ME A COMPLIMENT</button>

        {this.state.randomComp.map((item, index) => (
          <h5 key={index} >{item.compliment}</h5>
        ))}
        <div> <label htmlFor="signs">What is your sign?:</label>

          <select name="signs" id="signs" onChange={this.selectSign}>
            <option value=""></option>
            <option value="aquarius"  >Aquarius</option>
            <option value="pisces"  >Pisces</option>
            <option value="aries"  >Aries</option>
            <option value="taurus"  >Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo"  >Virgo</option>
            <option value="libra"  >Libra</option>
            <option value="scorpio">Scorpio</option>
            <option value="sagittarius"  >Sagittarius</option>
            <option value="capricorn"  >Capricorn</option>
          </select>

          <button onClick={this.fetchHoroscope}>GIVE ME MY HOROSCOPE</button>
          {this.state.horoscope.map((item, index) => (
            <h5 key={index} >{item}</h5>
          ))}
          <button onClick={this.fetchJoke}>TELL ME A JOKE</button>
          {this.state.joke.map((item, index) => (
            <h5 key={index}>{item}</h5>

          ))}

        </div> */}
      </motion.div>
    );
  }
}
export default Calm;
