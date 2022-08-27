import React from 'react'

function Pagination({nextPage}) {
  return (
    <div>
        <button onClick={()=>nextPage()}>Launch Eden</button>
    </div>
  )
}

export default Pagination