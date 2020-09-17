import React, { useState, useEffect } from "react";
// import axios from 'axios'

function EventsPage() {
    const [comp, setComp] = useState({});


    useEffect(() => {
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

}
export default EventsPage;
