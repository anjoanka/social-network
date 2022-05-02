import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div >
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    const dialogs = [
        { id: 1, name: 'Andriana' },
        { id: 2, name: 'Dimych' },
        { id: 3, name: 'Olya' },
        { id: 4, name: 'Nastia' },
        { id: 5, name: 'Andriy' },
        { id: 6, name: 'Ivan' }
    ]

    const messages = [
        { id: 1, message: 'hello' },
        { id: 2, message: 'hi' },
        { id: 3, message: ':)' },
    ]

    const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    const messagesELements = messages.map(m => <Message message={m.message} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
               {messagesELements}
            </div>
        </div>
    )
}

export default Dialogs;