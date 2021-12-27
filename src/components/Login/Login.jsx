import React from "react"
import { Field, reduxForm } from "redux-form"
import { required } from "../../utils/validators/validators"
import { Input } from "../Common/FormsControls/FormsControls"
import { connect } from "react-redux"
import { login } from "../../redux/auth-reducer"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import s from "../Common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>        
        <Field placeholder="Логин" name={"email"} validate={[required]} component={Input} />
      </div>
      <div>
        <Field placeholder="Пароль" validate={[required]} name={"password"} type={"password"} component={Input} />
      </div>
      <div>
        <Field type="checkbox" component={Input} name={"rememberMe"} />remember me
      </div>
      { props.error &&
        <div className={s.formSummaryError}>
        {props.error}
      </div>
      }
      <div>
        <button>Войти</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }  

  if(props.isAuth) {
    return <Redirect to="/profile"/>
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect( mapStateToProps, {login} )(Login)