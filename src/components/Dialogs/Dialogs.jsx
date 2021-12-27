import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { TextArea } from '../Common/FormsControls/FormsControls'
import s from "./Dialog.module.css"
import DialogItem from './DialogItem/DIalogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  let state = props.messagesPage

  let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id}id={dialog.id} />)
  let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} id={message.id} />)

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          {dialogsElement}
        </div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

let maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={TextArea} validate={[required, maxLength100]} placeholder="введите сообщение" name="newMessageBody" />
      </div>
      <div><button>Отправить</button></div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs