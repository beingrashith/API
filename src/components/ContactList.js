import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {
    console.log(props)

    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }

    const renderContactList = props.contacts.map((contacts) => (
        <div key={contacts.id}>
            <ContactCard contacts={contacts} clickHandler={deleteContactHandler} />
        </div>
    ))
    return (
        <div>
            <div>{renderContactList}</div>

        </div>
    )
}

export default ContactList