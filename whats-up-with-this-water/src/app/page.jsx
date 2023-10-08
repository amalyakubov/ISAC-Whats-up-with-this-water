"use client";
import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";
import React from "react";
import getLocation from "./api/location";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div
        style={{
          color: "white",
          height: "50vh",
          width: "100%",
          border: "4px solid black",
          backgroundColor: "#010048  ",
        }}
      ></div>
      <button
        onClick={handldeClick}
        style={{
          color: "black",
          width: "300px",
          height: "100px",
          border: "5px solid black",
        }}
      >
        cd Click me /
      </button>
    </main>
  );
}

function handldeClick() {
  getLocation();
}
