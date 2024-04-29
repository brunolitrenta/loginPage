import styles from "../loggedPage/loggedPage.module.scss"

interface IProps {
    loginAction: (switchPage: boolean) => void
}

export default function LoggedPage(props: IProps) {

    const userName = localStorage.getItem("Usuário")

    return (
        <div className={styles.screenBox}>
            <h1>Main</h1>
            <p>Username: {userName}</p>
            <button onClick={() => props.loginAction(true)}>Sair</button>
        </div>
    )
}