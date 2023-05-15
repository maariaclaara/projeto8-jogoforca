import React, {useState} from "react";
import Game from "./components/Game";
import Letters from "./components/Letters";
import palavras from "./palavras";

import forca0 from "../src/assets/image/forca0.png";
import forca1 from "../src/assets/image/forca1.png";
import forca2 from "../src/assets/image/forca2.png";
import forca3 from "../src/assets/image/forca3.png";
import forca4 from "../src/assets/image/forca4.png";
import forca5 from "../src/assets/image/forca5.png";
import forca6 from "../src/assets/image/forca6.png";

let word = [];
let select = "";
let restart = false;

export default function App () {

   const [stateWord, setStateWord] = useState("");
   const [error, setError] = useState(0);
   const [start, setStart] = useState(true);
   const [nivelGame, setnivelGame] = useState("");
   const [imageFirst, setImageFirst] = useState(forca0);

   const mix = () => Math.random() - 0.5;

   function mixPage() {
    
   if (restart) {
      restart = true;
      setStateWord('');
      setError(0);
      setnivelGame('');
      setImageFirst(forca0);
    }

      playGame();
   }


   function playGame() {
      palavras.sort(mix);
      word = Array.from(palavras[palavras.length - 1].normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''));
      setStart(false);
      select = "";
      for (let i = 0; i < word.length; i++) {
         select += "_";
      }
      setStateWord(select);
   }

   function letterSelected(click) {
      
      const startingPosition = [];
      
      for (let i = 0; i < word.length; i++) {

        if (click === word[i]) {
         startingPosition.push(i);
        }
      }

      if (startingPosition.length !== 0) {

        const underline = Array.from(select);
        for (let j = 0; j < startingPosition.length; j++) {
         underline[startingPosition[j]] = click;
        }
        select = underline.join("");
        setStateWord(select);
      } else {
        setError(error + 1);
        gameState();
      }
        finishGame();
    }

    function gameState() {

      const gameImage = [
        forca0,
        forca1,
        forca2,
        forca3,
        forca4,
        forca5,
        forca6,
      ];
      
      setImageFirst(gameImage [error + 1]);
      finishGame();
    }

    function finishGame() {

      if (error > 5 && select !== word.join("")) {
         setnivelGame("userLost");
        setStart(true);
        setStateWord(word);
        setError(6);
        setImageFirst(forca6);
        restart = true;
      } else if (select === word.join("")) {
        setnivelGame("userWon");
        setStart(true);
        restart = true;
      }
   }

   function changeInput() {

    return (
      <>
        <Game
          gameStart={mixPage}
          condition={stateWord}
          play={!start}
          otherItem={word.join("")}
          nivel={nivelGame}
          errorNumbers={error}
          figureGame={imageFirst}
        />
        <Letters play={start} clickLetter={letterSelected}/>
      </>
    );
    }
}


