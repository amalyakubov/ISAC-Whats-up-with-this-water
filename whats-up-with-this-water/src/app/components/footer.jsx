"use client";
import React, { Component } from "react";
import Link from "next/link";

const footer = () => {
  return (
    <div
      id="section_footer"
      style={{
        marginTop: "1.5em",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        color: "white",
      }}
    >
      <div className="text-center py-4">
        <ol>
          <p>
            Created for International Space Apps Competition in 2023 by Mr. Bugs
            team
          </p>
          <p>
            Photo by{" "}
            <a href="https://unsplash.com/@toddcravens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Todd Cravens
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/QnBrjY-nFUs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </p>
        </ol>
      </div>
    </div>
  );
};

export default footer;
