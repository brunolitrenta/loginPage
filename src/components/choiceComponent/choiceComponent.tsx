import styles from "./choiceComponent.module.scss"
import chickenImage from '../../assets/Chicken_JE2_BE2.webp'
import axolotlImage from '../../assets/Lucy_Axolotl_JE2.webp'
import turtleImage from '../../assets/1597671100_13809.png'
import llamaImage from '../../assets/1597671383_63187.png'
import { useChoice } from "../../hooks/choiceContext"

export function ContentChoice() {

    const { changeContent } = useChoice()

    return (
        <div className={styles.changecontent}>
            {
                {
                    1: <img className={styles.chicken} src={chickenImage} alt="" />,

                    2: <img className={styles.axolotl} src={axolotlImage} alt="" />,

                    3: <img className={styles.turtle} src={turtleImage} alt="" />,

                    4: <img className={styles.llama} src={llamaImage} alt="" />
                }[changeContent]
            }
        </div>
    )
}
