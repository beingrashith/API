import React from 'react'

export default function ContactCard(props) {
    const {id, name, email, mobile } = props.contacts
    return (

        <div><span style={{ fontSize: "30px" }}>&#9924;</span>
            <div> Name:{name}</div>
            <div>Mail:{email}</div>
            <div>Mobile:{mobile}</div>
            <button onClick={()=>{props.clickHandler(id)}} style={{ fontSize: "20px", color: "red" }}>&#9932;</button>

            <hr />
        </div>
    )
}
