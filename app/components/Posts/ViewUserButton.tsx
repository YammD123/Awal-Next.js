"use client"

import React from "react"

interface ViewUserButtonProps {
  userId: number
}

const ViewUserButton:React.FC<ViewUserButtonProps> = ({userId}) => {
    const handeClick = ()=>{
    alert(userId)
    }
  return (
    <div>
      <button onClick={handeClick}>ihat User</button>
    </div>
  )
}

export default ViewUserButton
