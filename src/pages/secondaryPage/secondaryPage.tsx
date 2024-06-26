import { FooterComponent } from "../../components/footerComponent/footerComponent"
import { ContentChoice } from "../../components/choiceComponent/choiceComponent"
import styles from "../secondaryPage/secondaryPage.module.scss"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useChoice } from "../../hooks/choiceContext"

export default function LoggedPage() {

    const { setChangeContent } = useChoice()

    const navigate = useNavigate()

    const theme = localStorage.getItem("theme")

    const userName = localStorage.getItem("username")

    useEffect(() => {
        document.title = "Home"
    }, [])

    function exit() {
        localStorage.removeItem("keepLogin")
        localStorage.removeItem("username")
        navigate("/")
    }

    return (
        <div className={theme == "light" ? styles.light : styles.dark}>
            <div className={styles.screenBox}>
                <h1>Main</h1>
                <header>
                    <button onClick={() => setChangeContent(1)}>Chicken</button>
                    <button onClick={() => setChangeContent(2)}>Axolotl</button>
                    <button onClick={() => setChangeContent(3)}>Turtle</button>
                    <button onClick={() => setChangeContent(4)}>Llama</button>
                </header>
                <p>Username: {userName}</p>
                <ContentChoice />
                <button className={styles.logoutButton} onClick={() => exit()}>Logout</button>
                <FooterComponent className={theme!} />
            </div>
        </div>
    )
}