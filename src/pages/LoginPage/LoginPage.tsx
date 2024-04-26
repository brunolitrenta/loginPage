import { useState } from 'react'
import { FooterComponent } from '../../components/footerComponent/footerComponent'
import lightImage from '../../assets/light-svgrepo-com.svg'
import moonImage from '../../assets/moon-svgrepo-com.svg'
import eyeBlack from '../../assets/eye-solid-black.svg'
import eyeWhite from '../../assets/eye-solid-white.svg'
import eyeSlashedBlack from '../../assets/eye-slash-solid-black.svg'
import eyeSlashedWhite from '../../assets/eye-slash-solid-white.svg'
import './LoginPage.css'

export function LoginPage() {



  const [switchTheme, setSwitchTheme] = useState<string>('dark')

  const [themeImage, setThemeImage] = useState<string>(lightImage)

  const [buttonPasswordImage, setButtonPasswordImage] = useState<string>(eyeWhite)

  const [showPassword, setShowPassword] = useState<boolean>(false)

  function changeTheme() {
    if (switchTheme != 'light') {
      setSwitchTheme('light')
    }
    else {
      setSwitchTheme('dark')
    }
  }

  function changeThemeButton() {
    if (themeImage == lightImage) {
      setThemeImage(moonImage)
      setButtonPasswordImage(eyeBlack)
    }
    else {
      setThemeImage(lightImage)
      setButtonPasswordImage(eyeWhite)
    }
  }

  function makePasswordVisible(){
    setShowPassword(!showPassword)
  }

  function changePassButtonImage(){
    if(showPassword && switchTheme == 'dark'){
      setButtonPasswordImage(eyeWhite)
      return
    }
    else if(showPassword && switchTheme == 'light'){
      setButtonPasswordImage(eyeBlack)
      return
    }
    else if(!showPassword && switchTheme == 'dark'){
      setButtonPasswordImage(eyeSlashedWhite)
      return
    }
    else if(!showPassword && switchTheme == 'light'){
      setButtonPasswordImage(eyeSlashedBlack)
    }
  }

  return (
    <div className={switchTheme}>
      <div className='screenBox'>
        <button className='themeButton' onClick={() => { changeTheme(); changeThemeButton() }}><img src={themeImage} alt="" /></button>
        <h1>Sign in</h1>
        <section className='loginBlock'>
          <div className='userInput'>
            <label>User or E-mail</label>
            <input className='input' type="email" />
          </div>
          <div className='keyInput'>
            <div className='senhaLabel'>
              <label>Password</label>
              <a href="#######">Forgot password?</a>
            </div>
            <div className='showSenha'>
              {
                !showPassword 
                ?
                <input className='input inputSenha' type="password" />
                :
                <input className='input inputSenha' type="text" />
              }
              <button className='showPassButton' onClick={() => {makePasswordVisible(); changePassButtonImage()}}><img src={buttonPasswordImage} alt="" /></button>
            </div>
          </div>
          <button>Entrar</button>
        </section>
        <FooterComponent />
      </div>
    </div>
  )
}