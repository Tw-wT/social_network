import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messages-reducer'
import DialogItem from './DialogItem/DIalogItem'
import Message from './Message/Message'
import Dialogs from "./Dialogs"
import { connect } from 'react-redux'



let mapStateToProps = (state) => {  
  return {
    messagesPage: state.messagesPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}

const DialogsСontainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsСontainer