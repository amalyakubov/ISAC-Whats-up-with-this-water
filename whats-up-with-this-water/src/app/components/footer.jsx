"use client";
import React, { Component } from "react";
import Link from "next/link";

const footer = () => {
  const current_year = new Date().getFullYear();
  return (
    <div id="section_footer">
      <div className="text-center py-4">
        <ol>
          <p>
            Created for International Space Apps Competition in 2023 by Mr. Bugs
            team
          </p>
        </ol>
      </div>
    </div>
  );
};

export default footer;
