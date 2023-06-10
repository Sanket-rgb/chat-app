import Chat from "@/components/Chat"
import Sidebar from "@/components/Sidebar"
import React from "react"
import styles from "../styles/Home.module.scss"
function HomePage() {
  return (
    <div className={styles["home"]}>
      <div className={styles["container"]}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default HomePage
