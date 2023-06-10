import Image from "next/image"
import React from "react"
import styles from "../styles/Home.module.scss"
function Navbar() {
  return (
    <div className={styles["navbar"]}>
      <span className={styles["logo"]}>Chat App</span>
      <div className={styles["user"]}>
        <img
          src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
