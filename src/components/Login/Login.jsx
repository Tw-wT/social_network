import React from "react"
import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Логин"} name={"login"} component={"input"} />
      </div>
      <div>
      <Field placeholder={"Пароль"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type="checkbox" /> запомнить меня
      </div>
      <div>
        <button>Войти</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return(
    <div>
      <h1>Авторизация</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login