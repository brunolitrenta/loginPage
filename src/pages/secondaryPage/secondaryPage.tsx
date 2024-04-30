import chickenImage from "../../assets/Chicken_JE2_BE2.webp"
import styles from "../secondaryPage/secondaryPage.module.scss"

interface IProps {
    pageAction: (switchPage: boolean) => void
}

export default function LoggedPage(props: IProps) {

    const userName = localStorage.getItem("Usuário")

    return (
        <div className={styles.screenBox}>
            <h1>Main</h1>
            <p>Username: {userName}</p>
            <img src={chickenImage} alt="" />
            <button onClick={() => props.pageAction(true)}>Logout</button>
        </div>
    )
}