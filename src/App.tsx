import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const options = [
  {
    text: "Czy chcesz się ożenić?",
    answer1: "Tak",
    answer2: "Nie",
    next1: "Toś przepadł",
    next2: "Pójdziesz do wojska?",
  },
  {
    text: "Pójdziesz do wojska?",
    answer1: "Tak",
    answer2: "Nie",
    next1: "Czy będzie wojna?",
    next2: "Toś przepadł",
  },
  {
    text: "Czy będzie wojna?",
    answer1: "Tak",
    answer2: "Nie",
    next1: "Czy Cię zastrzelą?",
    next2: "Toś przepadł",
  },
  {
    text: "Czy Cię zastrzelą?",
    answer1: "Tak",
    answer2: "Nie",
    next1: "Pochowają Cię na piasku?",
    next2: "Toś przepadł",
  },
  {
    text: "Pochowają Cię na piasku czy w lasku?",
    answer1: "na piasku",
    answer2: "w lasku",
    next1: "Toś przepadł",
    next2: "Wyrośnie z Ciebie drzewo?",
  },
  {
    text: "Wyrośnie z Ciebie drzewo czy kwiatek?",
    answer1: "drzewo",
    answer2: "kwiatek",
    next1: "Zrobią z Ciebie deskę?",
    next2: "Toś przepadł",
  },
  {
    text: "Zrobią z Ciebie deskę czy papier?",
    answer1: "deskę",
    answer2: "papier",
    next1: "Toś przepadł",
    next2: "Trafisz do męskiej czy damskiej ubikacji?",
  },
  {
    text: "Trafisz do męskiej czy damskiej ubikacji?",
    answer1: "męskiej",
    answer2: "damskiej",
    next1: "Toś przepadł",
    next2: "Wykorzystają Cię od przodu czy od tyłu?",
  },
  {
    text: "Wykorzystają Cię od przodu czy od tyłu?",
    answer1: "przodu",
    answer2: "tyłu",
    next1: "Zupełnie tak, jakbyś się ożenił",
    next2: "Toś przepadł",
  },
];

const App = () => {
  const [step, setStep] = useState(0);
  const [wrongOption, setwrongOption] = useState(null);

  const handleChoice = (choice: any) => {
    const currentOption = options[step];

    const nextStepText =
      choice === "answer1" ? currentOption.next1 : currentOption.next2;

    if (nextStepText === "Toś przepadł") {
      setwrongOption(choice);
      toast.warn("Toś przepadł!");
    } else if (nextStepText === "Zupełnie tak, jakbyś się ożenił") {
      toast.success("Zupełnie tak, jakbyś się ożenił!", { autoClose: 3500 });
      setTimeout(() => {
        setwrongOption(null);
        setStep(0);
      }, 4000);
      return;
    } else {
      setStep(step + 1);
      setwrongOption(null);
    }
  };

  const btn1 = {
    width: "100px",
    height: "50px",
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "8px",
    margin: "5px",
  };

  const buttonWrongStyle = {
    ...btn1,
    border: "2px solid red",
    backgroundColor: "rgba(255, 0, 0, 0.1)",
  };
  const buttonGoodStyle = {
    ...btn1,
    border: "2px solid green",
    backgroundColor: "rgb(9 255 0 / 10%)",
  };

  return (
    <div className="App">
      <h1>Decyzja Góralska</h1>
      <div className="question">
        <p>{options[step].text}</p>
      </div>
      <div className="buttons">
        <button
          style={
            !!wrongOption
              ? wrongOption === "answer1"
                ? buttonWrongStyle
                : buttonGoodStyle
              : btn1
          }
          onClick={() => handleChoice("answer1")}
        >
          {options[step].answer1}
        </button>
        <button
          style={
            !!wrongOption
              ? wrongOption === "answer2"
                ? buttonWrongStyle
                : buttonGoodStyle
              : btn1
          }
          onClick={() => handleChoice("answer2")}
        >
          {options[step].answer2}
        </button>
        <ToastContainer position="top-center" autoClose={2000} stacked />
      </div>
    </div>
  );
};

export default App;
