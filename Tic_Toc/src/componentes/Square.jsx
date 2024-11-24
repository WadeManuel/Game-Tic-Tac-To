export const Square=({children,isSelect,updateBoard,index})=>{
    const className= `square ${isSelect ? 'is-selected':''}`
     
    const hanleClick=()=>{
      updateBoard(index)
    }
    return (
      <div className={className} onClick={hanleClick}>
        {children}
      </div>
          
    )
  }
  