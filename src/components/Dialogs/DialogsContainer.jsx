import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messages-reducer'
import DialogItem from './DialogItem/DIalogItem'
import Message from './Message/Message'
import Dialogs from "./Dialogs"
import StoreContext from '../../StoreContext'

const DialogsСontainer = (props) => {    

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().messagesPage
  
          let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
          let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id} />)
          let newMessageBody = state.newMessageBody

          let onSendMessageClick = () => {
            store.dispatch(sendMessageCreator())
          }

          let onNewMessageChange = (body) => {    
            store.dispatch(updateNewMessageBodyCreator(body))
          }
          return (
            <Dialogs 
              updateNewMessageBody={onNewMessageChange}
              sendMessage={onSendMessageClick}
              messagesPage={state}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsСontainer