import { useEffect, useState } from "react"
import { LoginPage } from "../loginPage/loginPage.tsx"
import LoggedPage from "../secondaryPage/secondaryPage.tsx"

export default function MainPage() {

    const keepLogin = localStorage.getItem('keepLogin')

    const [switchPage, setSwitchPage] = useState<boolean>(true)

    useEffect(() => {
        changePagesAtStartup()
    }, [])

    function changePagesAtStartup() {
        if (keepLogin == "true") {
            setSwitchPage(switchPage == false)
        }
        else if (keepLogin == "false") {
            setSwitchPage(switchPage == true)
        }
    }

    function switchPages(switchPage: boolean) {
        setSwitchPage(switchPage)
    }

    return (
        <div>
            {
                switchPage
                    ?
                    <LoginPage pageAction={switchPages} />
                    :
                    <LoggedPage pageAction={switchPages} />
            }
        </div>
    )
}