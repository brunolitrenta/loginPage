import { FooterComponent } from "../../components/footerComponent/footerComponent"
import { ContentChoice } from "../../components/choiceComponent/choiceComponent"
import styles from "../secondaryPage/secondaryPage.module.scss"
import { useState } from "react"

interface IProps {
    pageAction: (switchPage: boolean) => void
}

export default function LoggedPage(props: IProps) {

    const theme = localStorage.getItem("theme")

    const userName = localStorage.getItem("Usuário")

    const [changeContent, setChangeContent] = useState<number>(1)


    return (
        <div className={theme == "dark" ? styles.dark : styles.light}>
            <div className={styles.screenBox}>
                <h1>Main</h1>
                <header>
                    <button onClick={() => setChangeContent(1)}>Chicken</button>
                    <button onClick={() => setChangeContent(2)}>Axolotl</button>
                    <button onClick={() => setChangeContent(3)}>Turtle</button>
                    <button onClick={() => setChangeContent(4)}>Llama</button>
                </header>
                <p>Username: {userName}</p>
                <ContentChoice contentShowed={changeContent} />
                <button className={styles.logoutButton} onClick={() => props.pageAction(true)}>Logout</button>
                <FooterComponent className={theme!} />
            </div>
        </div>
    )
}