import React, { useState } from "react";
import Game from "./components/Game";
import Letters from "./components/Letters";
import palavras from "./palavras";

import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

let word = [];
let select = "";
let restart = false;

const [stateWord, setStateWord] = useState("");
const [error, setError] = useState(0);
const [start, setStart] = useState(true);
const [nivelGame, setnivelGame] = useState("");
const [kick, setKick] = useState("");
const [imageFirst, setImageFirst] = useState(forca0);

const mix = () => Math.random() - 0.5;


export default function App () {

   function mixPage() {
    
   if (restart) {
      restart = true;
      setStateWord('');
      setError(0);
      setnivelGame('');
      setKick('');
      setImageFirst(forca0);
    }

      playGame();
   }
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
