import Image from "next/image"
import React from "react"
import styles from "../styles/Home.module.scss"

function Message() {
  return (
    <div className={`${styles["message"]} ${styles["owner"]}`}>
      <div className={styles["messageInfo"]}>
        <img
          src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className={styles["messageContent"]}>
        <p>Hello</p>
        <img
          src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Message
