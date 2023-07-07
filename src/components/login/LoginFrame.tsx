import React from 'react'
import "./style-login.css"

const LoginFrame = () => {
  return (
    <div className='login__component-frame'>
        <p className="login__component-subcomponent" id="login__component-text">Sign in to your account</p>
        <input className="login__component-subcomponent" id="login__component-user" placeholder="Your login" type='text'></input>
        <input className="login__component-subcomponent" id="login__component-password" placeholder="Your password" type='password'></input>
        <button className="login__component-subcomponent" id="login_component-login">Sign in</button>
    </div>
  )
}

export default LoginFrame