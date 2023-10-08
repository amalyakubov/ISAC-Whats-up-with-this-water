"use client";

import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";
import React, { useSyncExternalStore } from "react";
import getLocation from "./api/location";
import { useState } from "react";

let latitude;
let longitude;

window.onload = function () {
  getLocation().then((locationArray) => {
    latitude = locationArray[0];
    longitude = locationArray[1];
  });
};

export default function Home() {
  const [location, setLocation] = useState([]);
  const fetchLocation = async () => {
    const response = await fetch(
      `https://api-bdc.net/data/reverse-geocode?lattitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=[bdc_26a76091b81b433e91648ad1b8684b5f]`
    );
    const data = await response.json();
    setLocation(data);
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          height: "50vh",
          width: "100%",
          border: "4px solid black",
          backgroundColor: "#010048  ",
          borderRadius: "30px",
          marginTop: "1.5em",
          padding: "3em",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "60px",
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          What's Up With With This Water?
        </p>
      </div>

      <div className="text-container">
        <p
          style={{
            fontFamily: "PT Serif, serif",
            fontSize: "30px",
            marginTop: "1.5em",
            lineHeight: "150%",
          }}
        >
          An endangered species is any species of a living organism that is
          under threat of extinction. <br /> According to the World Wildlife
          Fund, about one third of all freshwater fish are threatened with the
          possibility of extinction. <br /> Since 1970, the number of fish
          weighing over 66 lbs (about 29.9 kilograms) has declined by 94%,{" "}
          <br /> and the number of migratory fish declined by 76%. <br /> If we
          are to continue to enjoy the benefits provided by freshwater
          ecosystems, we must keep them healthy. <br /> Fish are vital to ensure
          this; an example includes fish in the amazon helping to disperse the
          seeds of tropical floodplain trees. <br />
          Additionally, according to the WWF, 200 million people rely on
          freshwater fish as a major source of protein, <br /> and 60 million
          rely on them for their livelihoods. <br />
        </p>
      </div>
    </main>
  );
}
