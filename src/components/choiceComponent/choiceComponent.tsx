import styles from "./choiceComponent.module.scss"
import chickenImage from '../../assets/Chicken_JE2_BE2.webp'
import axolotlImage from '../../assets/Lucy_Axolotl_JE2.webp'
import turtleImage from '../../assets/1597671100_13809.png'
import llamaImage from '../../assets/1597671383_63187.png'

interface IProps {
    contentShowed: number
}

export function ContentChoice(props: IProps) {
    if (props.contentShowed == 1) {
        return (
            <img className={styles.chicken} src={chickenImage} alt="" />
        )
    }
    else if (props.contentShowed == 2) {
        return (
            <img className={styles.axolotl} src={axolotlImage} alt="" />
        )
    }
    else if (props.contentShowed == 3) {
        return (
            <img className={styles.turtle} src={turtleImage} alt="" />
        )
    }
    else {
        return (
            <img className={styles.llama} src={llamaImage} alt="" />
        )
    }
}
