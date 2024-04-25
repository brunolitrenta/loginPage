import { useState } from 'react'
import { FooterComponent } from '../../components/footerComponent/footerComponent'
import lightImage from '../../assets/light-svgrepo-com.svg'
import moonImage from '../../assets/moon-svgrepo-com.svg'
import './LoginPage.css'

export function LoginPage() {

  const [switchTheme, setSwitchTheme] = useState<string>('dark')

  const [themeImage, setThemeImage] = useState<string>(lightImage)

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
    }
    else {
      setThemeImage(lightImage)
    }
  }

  return (
    <div className={switchTheme}>
      <div className='screenBox'>
        <button className='themeButton' onClick={() => { changeTheme(); changeThemeButton() }}><img src={themeImage} alt="" /></button>
        <h1>Sign in</h1>
        <section className='loginBlock'>
          <div className='userInput'>
            <label>Usuário ou E-mail</label>
            <input type="email" />
          </div>
          <div className='keyInput'>
            <div className='senhaLabel'>
              <label>Senha</label>
              <a href="#######">Esqueceu a senha?</a>
            </div>
            <input type="password" />
          </div>
          <button>Entrar</button>
        </section>
        <FooterComponent />
      </div>
    </div>
  )
}