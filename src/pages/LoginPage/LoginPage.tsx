import { useState } from 'react'
import { FooterComponent } from '../../components/footerComponent/footerComponent'
import lightImage from '../../assets/light-svgrepo-com.svg'
import moonImage from '../../assets/moon-svgrepo-com.svg'
import eyeBlack from '../../assets/eye-solid-black.svg'
import eyeWhite from '../../assets/eye-solid-white.svg'
import eyeSlashedBlack from '../../assets/eye-slash-solid-black.svg'
import eyeSlashedWhite from '../../assets/eye-slash-solid-white.svg'
import styles from './LoginPage.module.scss'

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
    if (themeImage == lightImage && !showPassword) {
      setThemeImage(moonImage)
      setButtonPasswordImage(eyeBlack)
      return
    }
    else if (themeImage == lightImage && showPassword) {
      setThemeImage(moonImage)
      setButtonPasswordImage(eyeSlashedBlack)
      return
    }
    else if (themeImage == moonImage && !showPassword) {
      setThemeImage(lightImage)
      setButtonPasswordImage(eyeWhite)
      return
    }
    else {
      setThemeImage(lightImage)
      setButtonPasswordImage(eyeSlashedWhite)
    }
  }

  function makePasswordVisible() {
    setShowPassword(!showPassword)
  }

  function changePassButtonImage() {
    if (showPassword && switchTheme == 'dark') {
      setButtonPasswordImage(eyeWhite)
      return
    }
    else if (showPassword && switchTheme == 'light') {
      setButtonPasswordImage(eyeBlack)
      return
    }
    else if (!showPassword && switchTheme == 'dark') {
      setButtonPasswordImage(eyeSlashedWhite)
      return
    }
    else if (!showPassword && switchTheme == 'light') {
      setButtonPasswordImage(eyeSlashedBlack)
    }
  }

  return (
    <div className={switchTheme == 'light' ? styles.light : styles.dark}>
      <div className={styles.screenBox}>
        <button className={styles.themeButton} onClick={() => { changeTheme(); changeThemeButton() }}><img src={themeImage} alt="" /></button>
        <h1>Sign in</h1>
        <section className={styles.loginBlock}>
          <div className={styles.userInput}>
            <label>User or E-mail</label>
            <input className={styles.input} type="email" />
          </div>
          <div className={styles.keyInput}>
            <div className={styles.senhaLabel}>
              <label>Password</label>
              <a href="#######">Forgot password?</a>
            </div>
            <div className={styles.showSenha}>
              {
                !showPassword
                  ?
                  <input className={styles.input} type="password" />
                  :
                  <input className={styles.input} type="text" />
              }
              <button className={styles.showPassButton} onClick={() => { makePasswordVisible(); changePassButtonImage() }}><img className={styles.showPassImg} src={buttonPasswordImage} alt="" /></button>
            </div>
          </div>
          <button>Enter</button>
        </section>
        <FooterComponent className={switchTheme == 'light' ? 'light' : 'dark'} />
      </div>
    </div>
  )
}