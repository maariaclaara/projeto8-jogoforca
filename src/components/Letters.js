/* RENDERIZANDO CONJUNTO DE BOTÕES COM AS LETRAS */

import React, { useState } from "react";


export default function Letters (clickLetter, play) {
    
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    return (
            <div className="container-buttons">
                {alfabeto.map((selectButton) => (

                    <Buttons
                        click = {() => clickLetter(selectButton)}
                        start = {play}
                        buttons = {selectButton}
                        key = {selectButton}
                    />
                ))}
             </div>
    );
}


/* INICIAR COM LETRAS DESABILITADAS */

function Buttons ({click, start, buttons}){

    const [disabledLetter, setDisabledLetter] = useState(false);

    function disabled () {
        setDisabledLetter(true)
    }

    return (
        <button data-test="letter"
            
            onClick={() => {
                click();
                disabled();
            }} 

            className = {
                start || disabledLetter
                  ? "button-click"
                  : "button-unclick"
              }

              disabled = {start || disabledLetter}
            >
              {buttons}
            </button>
          );
        }          
       
