import React from 'react'

const Prohibition = (props) => {
  return(
    <ul style={{listStyle: "none"}}>
      {props.proList.map((list, index) => {
        return(
          <li key={index}>
            {list}
            <input type="button" value="削除" onClick={(e) => props.handleDeleteClick(index, e)} />
          </li>
        )
      })}
    </ul>
  )
}

export default Prohibition