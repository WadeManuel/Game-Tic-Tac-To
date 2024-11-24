import { WINNER_COMBOS } from "../contantes"

export const checkWinner=(boardToCheck)=>{
    
    // Revisamos todas las combinaciones ganadoras
    // Para ver si X o O ganó
    for (const combo of WINNER_COMBOS){
      const [a,b,c]=combo
      if (boardToCheck[a] && //--> X u O
        boardToCheck[a]==boardToCheck[b] &&  boardToCheck[a]==boardToCheck[c]){
        return boardToCheck[a]
      }
    }
    //Si nadie ganó
    return null

  }