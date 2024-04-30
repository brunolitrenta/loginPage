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
            <button onClick={() => props.pageAction(true)}>Sair</button>
        </div>
    )
}