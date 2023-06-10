import React from "react"
import styles from "../styles/Home.module.scss"
import Chats from "./Chats"
import Navbar from "./Navbar"
import Search from "./Search"

function Sidebar() {
  return (
    <div className={styles["sidebar"]}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar
