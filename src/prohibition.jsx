import React from 'react'

const Prohibition = (props) => {
  return(
    <ul style={{listStyle: "none"}}>
      {props.proList.map((list, index) => {
        return(
          <li key={index}>
            {list}
          </li>
        )
      })}
    </ul>
  )
}

export default Prohibition