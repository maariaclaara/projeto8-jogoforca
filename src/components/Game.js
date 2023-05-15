/* RENDERIZANDO IMAGEM DA FORCA, BOTÃO DE INICIAR E PALAVRA DO JOGO */

export default function Game ({figureGame, gameStart, play, otherItem, nivel, condition}) {

   
    return (
       
        <div className = "container-game">
            <div>
                <div className="image-game">
                    <img data-test="game-image" src= {figureGame}></img>
                </div>
            </div>

            <div className="div-button-word">
                <div className="clickButton">
                    <button 
                        data-test="choose-word" 
                        className = "buttonInicial"
                        onCLick= {gameStart}
                        disabled= {play}> 

                        Escolher Palavra 
                    </button>
                </div>

                <div className="div-word">
                    <p 
                        data-test="word"
                        className={`underline-word ${nivel}`}
                        answer={otherItem}
                    >
                        {condition}
                    </p>
            </div>
        </div>
    </div>
  );
}
