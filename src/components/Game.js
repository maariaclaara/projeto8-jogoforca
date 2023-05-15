/* RENDERIZANDO IMAGEM DA FORCA, BOTÃO DE INICIAR E PALAVRA DO JOGO */

export default function Game ({figureGame, gameStart, play, otherItem, nivel, condition}) {

   
    return (
       
        <div className = "container-game">
            <div>
                <div className="image-game">
                    <img data-test="game-image" src= {figureGame}></img>
                </div>
            </div>

            <div className="select-word">
                <div>
            <button className = "buttonSelect"> Escolher Palavra </button>
                </div>
        </div>
    </div>

    )
};
