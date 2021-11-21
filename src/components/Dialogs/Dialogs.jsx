import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state'
import s from "./Dialog.module.css"
import DialogItem from './DialogItem/DIalogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

  let state = props.store.getState().messagesPage
  
  let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
  let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id} />)
  let newMessageBody = state.newMessageBody
  
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChange = (e) => {
    let body =  e.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          {dialogsElement}
        </div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <div>
            <div><textarea onChange={onNewMessageChange} placeholder="Введите сообщение" value={newMessageBody}></textarea></div>
            <div><button onClick={onSendMessageClick}>Отправить</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs