"use client";
import React, { useEffect, useState } from "react";
import getLocation from "./api/location";
import { getRobot, db } from "./api/firebase";
import Chart from "chart.js/auto";

export default function Home() {
  const [battery, setBattery] = useState(null);
  const [robotLocation, setRobotLocation] = useState(null);
  const [otherData, setOtherData] = useState(null);
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const robotData = await getRobot("Gulf of Syria - Syria", db);
        setBattery(robotData.battery);
        setRobotLocation(robotData.location);
        setOtherData(robotData.data);
        setMeasurements(robotData.data.measurements);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

    getLocation().then((locationArray) => {
      const [latitude, longitude] = locationArray;
      // Do something with latitude and longitude if needed
    });
  }, []);

  // Create a chart when measurements change
  useEffect(() => {
    if (measurements.length > 0) {
      createChart(measurements);
    }
  }, [measurements]);

  // Function to create the chart
  function createChart(measurements) {
    const ctx = document.getElementById("chart").getContext("2d");
    const labels = measurements.map((measurement) => measurement.date);
    const dataSets = [
      {
        label: "pH",
        data: measurements.map((measurement) => measurement.pH),
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "Speed",
        data: measurements.map((measurement) => parseFloat(measurement.speed)),
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "Purity",
        data: measurements.map((measurement) =>
          parseFloat(measurement.purity.replace("%", ""))
        ),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        fill: false,
      },
    ];

    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: dataSets,
      },
      options: {},
    });
  }

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
          backgroundColor: "#010048",
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
      <div
        className="Container"
        style={{
          display: "grid",
          width: "100%",
          height: "60vh",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          alignItems: "center",
          borderRadius: "30px",
          marginTop: "1.5em",
          gap: "20px",
        }}
      >
        <div
          className="dash-member"
          style={{
            display: "flex",
            gridColumn: "1 / 2",
            gridRow: "1 / 3",
            height: "100%",
            width: "100%",
            backgroundColor: "#7BAFD4",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "80" }}>🔋{battery}</p>
        </div>
        <canvas
          style={{
            display: "flex",
            gridColumn: " 2 / 5",
            gridRow: "1 / 3",
            padding: "1.5em ",
            height: "50vh",
          }}
          id="chart"
        ></canvas>
        <div
          className="dash-member"
          style={{
            gridColumn: "1 / 5",
            gridRow: "3 / -1",
            height: "100%",
            backgroundColor: "#eee",
          }}
        ></div>
      </div>

      <div className="text-container">
        <p
          style={{
            fontFamily: "PT Serif, serif",
            fontSize: "30px",
            marginTop: "3.5em",
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
