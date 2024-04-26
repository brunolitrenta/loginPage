import styles from './footerComponent.module.scss'

interface IProps {
    className: string
}

export function FooterComponent(props: IProps) {

    return (
        <footer className={props.className == 'light' ? styles.light : styles.dark}>
            <ul>
                <li><a href="#">Terms</a></li>
                <li><a href="##">Privacy</a></li>
                <li><a href="###">Documents</a></li>
                <li><a href="####">Support</a></li>
                <li><a href="#####">Cookies</a></li>
                <li><a href="######">Block Trackers</a></li>
            </ul>
        </footer>
    )
}