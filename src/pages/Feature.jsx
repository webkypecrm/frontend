import { useState } from "react"
import Sidebar from "../components/Sidebar/Sidebar"
import Header from "../components/Header/Header"

// import SalesDashboard from "../components/Content/SalesDashboard"
import { Outlet } from "react-router-dom"
import ThemeSettings from "../components/ThemeSetting/ThemeSetting"


const Feature = () => {
    const [miniSidebar, setMiniSidebar] = useState(false)
    const [expandMenu, setExpandMenu] = useState(false)

    return <>
        <div className={`
      ${miniSidebar ? "mini-sidebar" : ""}
      ${expandMenu ? "expand-menu" : ""}`}>
            <div className="main-wrapper ">
                {/* <div
                className={`main-wrapper 
        ${headerCollapse ? "header-collapse" : ""} 
        ${mobileSidebar ? "slide-nav" : ""}`}
            > */}
                <Header setMiniSidebar={setMiniSidebar} setExpandMenu={setExpandMenu} />
                <Sidebar setExpandMenu={setExpandMenu} />
                <Outlet />
                <ThemeSettings />

                {/* </div>
            <div className="sidebar-overlay"></div> */}
            </div>
        </div>
    </>
}


export default Feature