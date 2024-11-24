import { Children, useState } from 'react'
import './App.css'

import { Square } from './componentes/Square.jsx'
import {TURNS,WINNER_COMBOS} from './contantes.js'
import { checkWinner } from './login/board.js'
import { WinnerModal } from './componentes/WinnerModal.jsx' 



function App() {
  const [board,setBoard]=useState(Array(9).fill(null))

  const [turn,setTurn]=useState(TURNS.X)
  //null es que no hay ganador y false es que hay un empate
  const [winner,setWinner]=useState(null)
  
  const checkEndGame=(newBoard)=>{
    //Revisamos su hay un empate
    //si no hay mas espacio
    //vació en tablero
    return newBoard.every((square)=> square != null)//Si Todos son diferentes de null sig que se terminó el juego 
  }

  function updateBoard(index){
   
    //No Actualizamos esta posicion si ya tine algo
    // actualizar el tablero
    if (board[index]  || winner ) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //Cambiar el Turno
    const newTurn=turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

     //Revisando si hay algun ganador 
     const newWinner=checkWinner(newBoard)

     if (newWinner){
       setWinner(newWinner)
      }else if(checkEndGame(newBoard)){
        setWinner(false)//Empate
    }
  }

  
  const resetGame=()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }


   
 
 
  return (
    <main className='board'>
        <h1> Juego Tic Tac Toe</h1>
        <button onClick={resetGame}>Reset the Game</button>
        <section className='game'>
            {
               board.map((square,index)=>{
                return (
                  <Square key={index} index={index} updateBoard={updateBoard}>
                      {board[index]}
                  </Square>
                )
               })
            }
        </section>

        <section className='turn'>
              <Square isSelect={turn==TURNS.X}>
                    {TURNS.X}
              </Square>
              <Square  isSelect={turn==TURNS.O}>
                    {TURNS.O}
              </Square>
        </section>


      
        <WinnerModal resetGame={resetGame} winner={winner} />
          
         
    </main>
)

}

export default App
