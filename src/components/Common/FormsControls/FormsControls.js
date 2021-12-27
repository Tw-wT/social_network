import React from "react"
import s from "./FormsControls.module.css"

const FormControl = ({input, meta, ...props}) => {
  const hasError = meta.error && meta.touched

  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        {props.children}
      </div>
      <div>
        { hasError && <span className={s.error}>{meta.error}</span>}
      </div>
    </div>
  )
}

export const TextArea = (props) => {
  const { input, meta, child, ...restProps } = props
  return <FormControl {...props}><textarea {...props.input} {...restProps}/></FormControl>
}

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props
  return <FormControl {...props}><input {...props.input} {...restProps} /></FormControl>
}