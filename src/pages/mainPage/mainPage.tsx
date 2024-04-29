import { useEffect, useState } from "react"
import { LoginPage } from "../loginPage/loginPage.tsx"
import LoggedPage from "../secondaryPage/secondaryPage.tsx"

export default function MainPage() {

    const keepLogin = localStorage.getItem('keepLogin')

    const [switchPage, setSwitchPage] = useState<boolean>(true)

    useEffect(() => {
        changePages()
    }, [])

    function changePages() {
        if (keepLogin == "true") {
            setSwitchPage(switchPage == false)
        }
        else if (keepLogin == "false") {
            setSwitchPage(switchPage == true)
        }
    }

    function loginAtButtonClick(switchPage: boolean) {
        setSwitchPage(switchPage)
    }

    return (
        <div>
            {
                switchPage
                    ?
                    <LoginPage loginAction={loginAtButtonClick} />
                    :
                    <LoggedPage loginAction={loginAtButtonClick} />
            }
        </div>
    )
}