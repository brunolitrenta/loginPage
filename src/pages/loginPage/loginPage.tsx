import { useRef, useState } from 'react'
import { FooterComponent } from '../../components/footerComponent/footerComponent'
import lightImage from '../../assets/light-svgrepo-com.svg'
import moonImage from '../../assets/moon-svgrepo-com.svg'
import eyeBlack from '../../assets/eye-solid-black.svg'
import eyeWhite from '../../assets/eye-solid-white.svg'
import eyeSlashedBlack from '../../assets/eye-slash-solid-black.svg'
import eyeSlashedWhite from '../../assets/eye-slash-solid-white.svg'
import styles from './loginPage.module.scss'

interface IProps {
  loginAction: (switchPage: boolean) => void
}

export function LoginPage(props: IProps) {

  const [switchTheme, setSwitchTheme] = useState<string>('dark')

  const [themeImage, setThemeImage] = useState<string>(lightImage)

  const [buttonPasswordImage, setButtonPasswordImage] = useState<string>(eyeWhite)

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const userInput = useRef<HTMLInputElement>(null)

  const loginCheck = useRef<HTMLInputElement>(null)

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

  function login() {
    localStorage.setItem("Usuário", userInput.current!.value)

    if (loginCheck.current!.checked == true) {
      localStorage.setItem("keepLogin", "true")
    }
    else {
      localStorage.setItem("keepLogin", "false")
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
            <input ref={userInput} className={styles.input} type="email" />
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
          <div className={styles.checkInput}>
            <input ref={loginCheck} type="checkbox" className={styles.checkbox} />
            <label>Keep logged in?</label>
          </div>
          <button onClick={() => { login(); props.loginAction(false) }}>Enter</button>
        </section>
        <FooterComponent className={switchTheme == 'light' ? 'light' : 'dark'} />
      </div>
    </div>
  )
}