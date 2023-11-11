import React from 'react'
interface Props{
    name: string;
    stId: number;
}
export const Info = ({name, stId}: Props) => {


const cardStyle = {
     width: '25rem'
    };

  return (
    <div className="card" style={cardStyle}>
  
        <div className="card-body">
            <h4 className="card-title">FullStack Development 1</h4>
            <h6 className="card-title">React JS Programming Week09 Lab Exercise</h6>
            <h6>{name}</h6>
            <h6>{stId}</h6>
            <h6>George Brown College, Toronto</h6>
           
        </div>
    </div>
  )
}
