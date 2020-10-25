import React from "react";
import "./Calm.css";
import logo from "../logo.png";

import ballClack from "../ball-clack.wav";
import { motion } from "framer-motion";
import SimpleBottomNavigation from "../components/BottomNav";

import SimpleCard from "../components/Card";

class Calm extends React.Component {
  state = {
    signs: "",
    compliments: [],
    randomComp: [],
    compToggle: false,
    horoscope: [],
    horoscopeToggle: false,
    joke: [],
    jokeToggle: false,
    toggle: false,
    quote: [],
    author: [],
    quoteToggle: false,
  };

  fetchCompliments = async () => {
    await fetch(`https://complimentr.com/api`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        this.setState({ compliments: [res.compliment] });
        console.log(this.state.compliments);
        this.setState({ compToggle: !this.state.compToggle });

        this.setState({ jokeToggle: false });
        this.setState({ quoteToggle: false });
        this.setState({ horoscopeToggle: false });
      })
      .catch((err) => {
        console.log(err);
      });
    // this.state.randomComp();

    // let requestBody = {
    //   query: `
    //   query {
    //     compliments {
    //       compliment
    //     }
    //   }
    //       `,
    // };

    // await fetch("http://localhost:8000/graphql", {
    //   method: "POST",
    //   body: JSON.stringify(requestBody),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     if (res.status !== 200 && res.status !== 201) {
    //       throw new Error("Failed!");
    //     }
    //     return res.json();
    //   })
    //   .then((resData) => {
    //     this.setState({ compliments: resData.data.compliments });
    //     this.setState({ compToggle: !this.state.compToggle });
    //     this.setState({ jokeToggle: false });
    //     this.setState({ quoteToggle: false });
    //     this.setState({ horoscopeToggle: false });
    //     // console.log(this.state.compliments);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     return;
    //   });

    // this.randomComp();
  };
  randomComp = async () => {
    this.state.compliments.map((items) => {
      this.state.compliments
        .sort(() => Math.random() - Math.random())
        .find(() => true);

      return this.setState({ randomComp: [items] });
      // console.log(this.state.randomComp);
    });
  };
  selectSign = async () => {
    const sign = document.getElementById("signs");
    const selectedSign = sign.options[sign.selectedIndex].value;
    await this.setState({ signs: selectedSign });
    console.log(selectedSign);
    console.log(this.state.signs);
    this.fetchHoroscope();
    this.setState({ toggle: !this.state.toggle });
  };

  showSelect = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  fetchHoroscope = async () => {
    await fetch(
      `https://horoscope5.p.rapidapi.com/general/daily?sign=${this.state.signs}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "horoscope5.p.rapidapi.com",
          "x-rapidapi-key":
            "a55981e29amsh474209918c2f0eap1b8fb4jsn84b08394e42a",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.setState({ horoscope: [res.result.description] });
        this.setState({ horoscopeToggle: !this.state.horoscopeToggle });
        this.setState({ jokeToggle: false });
        this.setState({ quoteToggle: false });
        this.setState({ compToggle: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchJoke = () => {
    fetch("https://rapidapi.p.rapidapi.com/v1/joke", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "joke3.p.rapidapi.com",
        "x-rapidapi-key": "a55981e29amsh474209918c2f0eap1b8fb4jsn84b08394e42a",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        this.setState({ joke: [res.content] });
        this.setState({ compToggle: false });
        this.setState({ jokeToggle: !this.state.jokeToggle });
        this.setState({ quoteToggle: false });
        this.setState({ horoscopeToggle: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchMotivational = () => {
    fetch("https://rapidapi.p.rapidapi.com/quote?token=ipworld.info", {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
        "x-rapidapi-key": "a55981e29amsh474209918c2f0eap1b8fb4jsn84b08394e42a",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        console.log(resData);
        this.setState({ quote: [resData.text] });
        this.setState({ author: [resData.author] });
        this.setState({ quoteToggle: !this.state.quoteToggle });
        this.setState({ jokeToggle: false });
        this.setState({ compToggle: false });

        this.setState({ horoscopeToggle: false });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    const pageTransition = {
      // type: "tween",
      // ease: "anticipate",
      duration: 0.5,
    };
    return (
      <motion.div
        initial={{
          opacity: 0,
          background: "linear-gradient( to right, #0f0c29, #302b63, #24243e)",
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={pageTransition}
        className="container"
      >
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="card-style">
          {this.state.compToggle === true ? (
            <SimpleCard
              fetch={this.state.compliments.map((item, index) => (
                <span
                  style={{ display: "flex", justifyContent: "center" }}
                  key={index}
                >
                  {" "}
                  {item}
                </span>
              ))}
            />
          ) : (
            ""
          )}
        </div>
        <div className="card-style">
          {this.state.jokeToggle === true ? (
            <SimpleCard
              fetch={this.state.joke.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            />
          ) : (
            ""
          )}
        </div>
        <div className="card-style">
          {this.state.quoteToggle === true ? (
            <SimpleCard
              fetch={this.state.quote.map((item, index) => (
                <span key={index}>{item}"</span>
              ))}
              author={this.state.author.map((item, index) => (
                <h5 key={index}>{item}</h5>
              ))}
            />
          ) : (
            ""
          )}
        </div>
        <div className="card-style">
          {this.state.horoscopeToggle === true ? (
            <SimpleCard
              fetch={this.state.horoscope.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            />
          ) : (
            ""
          )}
        </div>

        <div className="signs">
          {this.state.toggle === true ? (
            <select name="signs" id="signs" onChange={this.selectSign}>
              <option value="">Select Sign</option>
              <option value="aquarius">Aquarius</option>
              <option value="pisces">Pisces</option>
              <option value="aries">Aries</option>
              <option value="taurus">Taurus</option>
              <option value="gemini">Gemini</option>
              <option value="cancer">Cancer</option>
              <option value="leo">Leo</option>
              <option value="virgo">Virgo</option>
              <option value="libra">Libra</option>
              <option value="scorpio">Scorpio</option>
              <option value="sagittarius">Sagittarius</option>
              <option value="capricorn">Capricorn</option>
            </select>
          ) : (
            ""
          )}
        </div>
        <div className="bottomNav">
          <SimpleBottomNavigation
            compliment={this.fetchCompliments}
            joke={this.fetchJoke}
            horoscope={this.showSelect}
            sign={this.selectSign}
            motivate={this.fetchMotivational}
          />
        </div>
        {/* <button onClick={this.fetchCompliments}>GIVE ME A COMPLIMENT</button>

        
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
