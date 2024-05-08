import { useRef, useState, useEffect } from 'react'
import { FooterComponent } from '../../components/footerComponent/footerComponent'
import lightImage from '../../assets/light-svgrepo-com.svg'
import moonImage from '../../assets/moon-svgrepo-com.svg'
import eyeBlack from '../../assets/eye-solid-black.svg'
import eyeWhite from '../../assets/eye-solid-white.svg'
import eyeSlashedBlack from '../../assets/eye-slash-solid-black.svg'
import eyeSlashedWhite from '../../assets/eye-slash-solid-white.svg'
import styles from './loginPage.module.scss'
import { useNavigate } from 'react-router-dom'

export function LoginPage() {

  const navigate = useNavigate()

  const savedTheme = localStorage.getItem("theme")

  const isLogged = localStorage.getItem("keepLogin")

  const [switchTheme, setSwitchTheme] = useState<string>('dark')

  const [themeImage, setThemeImage] = useState<string>('')

  const [buttonPasswordImage, setButtonPasswordImage] = useState<string>('')

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const userInput = useRef<HTMLInputElement>(null)

  const loginCheck = useRef<HTMLInputElement>(null)

  useEffect(() => {
    changeThemeAtStartup()
  }, [])

  useEffect(() => {
    if (isLogged == "true") {
      navigate("/home")
    }
  }, [])

  function changeThemeAtStartup() {
    if (savedTheme == 'light') {
      setSwitchTheme('light')
      setThemeImage(moonImage)
      setButtonPasswordImage(eyeBlack)
      return
    }
    else {
      setSwitchTheme('dark')
      setThemeImage(lightImage)
      setButtonPasswordImage(eyeWhite)
    }
  }

  function changeTheme() {
    if (switchTheme != 'light') {
      setSwitchTheme('light')
      localStorage.setItem("theme", "light")
    }
    else {
      setSwitchTheme('dark')
      localStorage.setItem("theme", "dark")
    }
  }

  function changeThemeButton() {
    if (switchTheme == "dark" && !showPassword) {
      setThemeImage(moonImage)
      setButtonPasswordImage(eyeBlack)
      return
    }
    else if (switchTheme == "dark" && showPassword) {
      setThemeImage(moonImage)
      setButtonPasswordImage(eyeSlashedBlack)
      return
    }
    else if (switchTheme == "light" && !showPassword) {
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
    localStorage.setItem("username", userInput.current!.value)

    if (loginCheck.current!.checked == true) {
      localStorage.setItem("keepLogin", "true")
    }
    else {
      localStorage.setItem("keepLogin", "false")
    }
    navigate("/home")
  }

  return (
    <div className={switchTheme == 'light' ? styles.light : styles.dark}>
      <div className={styles.screenBox}>
        <button className={styles.themeButton} onClick={() => { changeTheme(); changeThemeButton() }}><img src={themeImage} alt="" /></button>
        <h1>Sign in</h1>
        <section className={styles.loginBlock}>
          <div className={styles.userInput}>
            <label htmlFor='usernameInput'>User or E-mail</label>
            <input id='usernameInput' ref={userInput} className={styles.input} type="email" />
          </div>
          <div className={styles.keyInput}>
            <div className={styles.senhaLabel}>
              <label htmlFor='passwordInput'>Password</label>
              <a href="#######">Forgot password?</a>
            </div>
            <div className={styles.showSenha}>
              {
                !showPassword
                  ?
                  <input id='passwordInput' className={styles.input} type="password" />
                  :
                  <input id='passwordInput' className={styles.input} type="text" />
              }
              <button className={styles.showPassButton} onClick={() => { makePasswordVisible(); changePassButtonImage() }}><img className={styles.showPassImg} src={buttonPasswordImage} alt="" /></button>
            </div>
          </div>
          <div className={styles.checkInput}>
            <input id='loginCheckbox' ref={loginCheck} type="checkbox" className={styles.checkbox} />
            <label htmlFor='loginCheckbox'>Keep logged in?</label>
          </div>
          <button onClick={() => { login() }}>Enter</button>
        </section>
        <FooterComponent className={switchTheme == 'light' ? 'light' : 'dark'} />
      </div>
    </div>
  )
}