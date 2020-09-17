import React, { useState, useEffect } from "react";
// import axios from 'axios'

<<<<<<< HEAD
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
=======
function EventsPage() {
    const [comp, setComp] = useState({});


    useEffect(() => {
        let requestBody = {
            query: `
>>>>>>> 3b295ac04d06deb03a52ed94b37410366916fd27
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

<<<<<<< HEAD
  render() {
    return (
      <div>
        {this.state.compliments.map((item) => (
          <h1>{item.compliment}</h1>
        ))}
      </div>
    );
  }
=======
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

                setComp(resData);
                console.log(comp);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [])


















    return (
        <div>
            {/* {this.state.compliments.map((item) => (
                    <h1>{item.compliment}</h1>
                ))} */}
        </div>
    );

>>>>>>> 3b295ac04d06deb03a52ed94b37410366916fd27
}
export default EventsPage;
