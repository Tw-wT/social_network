import React from 'react'
import s from "./Dialog.module.css"
import DialogItem from './DialogItem/DIalogItem'
import Message from './Message/Message'


const Dialogs = (props) => {    
  let state = props.messagesPage
  
  let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
  let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} id={message.id} />)
  let newMessageBody = state.newMessageBody
  
  let onSendMessageClick = () => {
    props.sendMessage()
  }

  let onNewMessageChange = (e) => {
    let body =  e.target.value
    props.updateNewMessageBody(body)    
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