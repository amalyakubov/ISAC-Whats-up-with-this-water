import React from "react";
import "./App.css";

function App() {
  const facts = [
    {
      title: "Whale Shark",
      description:
        "The whale shark is the largest living non-mammalian vertebrate, with the largest individual having a length of 18.8 meters. However, it is currently classified as endangered.",
    },
    {
      title: "Steller’s Sea Cow",
      description:
        "According to the Natural History Museum, the first marine creature confirmed to have been hunted to extinction by humans was the Steller’s sea cow, with its population being wiped out by 1768.",
    },
    {
      title: "Vaquita",
      description:
        "Currently, the rarest marine mammal in the wild is the Vaquita, with an estimated 10 individuals remaining. It is classified as critically endangered.",
    },
    {
      title: "Access to Clean Water",
      description:
        "According to the United Nations World Water Development Report, about 2 billion people lack access to clean and safe drinking water.",
    },
    {
      title: "Endangered Rivers",
      description:
        "Rivers can be endangered too - the most endangered river in the USA is the Colorado River. An endangered river is a river that could partially or fully dry up.",
    },
    {
      title: "Drinking Water Quality",
      description:
        "Western and Northern European countries are considered to have the purest and best drinking water in the world.",
    },
  ];

  return (
    <div className="App">
      <header>
        <h1>Marine Facts</h1>
      </header>
      <div className="facts-container">
        {facts.map((fact, index) => (
          <section key={index} className="fact">
            <h2>{fact.title}</h2>
            <p>{fact.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
