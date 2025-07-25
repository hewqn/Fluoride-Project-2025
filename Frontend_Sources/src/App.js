import React from "react";
import Header from "./components/Header";
import Teeth from "./components/Teeth";
import Visualizations from "./components/Visualizations";
import Footer from "./components/Footer";

import "./App.css";
import "./project.css";

import pieImg from "./assets/fluoride-chart.png";
import barImg from "./assets/bar-chart.png";

function App() {
  const names = [
    "HEWAN",
    "LIELT",
    "ANGEL",
    "FRANCES😝",
    "OSAS",
    "MELODY",
  ];

  return (
    <div className="App">
      <Header
        title="FLUORIDE PROJECT"
        names={names}
        intro="This project is designed to enlighten the public on the effects of fluoride on the human dental structure."
      />

      <Teeth/>

      <section className="content-section1">
        <p className="explanation1">
          Research on fluoride has long focused on its benefits in dental health,
          particularly its role in preventing tooth decay. Studies dating back to
          the mid-20th century showed that communities with fluoridated water
          supplies had significantly lower rates of cavities compared to those
          without. This led to widespread public health policies promoting the
          addition of fluoride to drinking water and dental products. Today,
          fluoride is a key ingredient in most toothpastes, and its use is
          supported by major health organizations such as the World Health
          Organization and the American Dental Association for its proven
          ability to strengthen enamel and reduce the risk of dental caries.
        </p>
        <img
          src={pieImg}
          alt="Distribution of fluoride by continent"
          className="pie-chart"
        />
      </section>


      <section className="content-section2">
        <img
          src={barImg}
          alt="Fluoride content bar chart for various samples"
          className="bar-chart"
        />
        <p className="explanation2">
          However, more recent research has raised questions about potential
          health risks associated with excessive fluoride exposure. Some studies
          suggest a link between high fluoride levels and conditions such as
          dental fluorosis, skeletal fluorosis, and possible neurodevelopmental
          effects, especially in young children. These findings have sparked
          debates about the appropriate levels of fluoride in public water
          systems and the need for careful monitoring. As a result, ongoing
          research now balances fluoride’s benefits in oral health with growing
          concerns about its long-term effects on other systems in the body,
          particularly in regions where natural fluoride levels are already
          high.
        </p>
      </section>


      <Visualizations />

      <Footer
        conclusion={<p>In conclusion, we put in a lot of effort into this project with the aim
          that we are able to create awareness on the effects of fluoride.</p>}
        sources={[
        ]}
      />
    </div>
  );
}

export default App;
