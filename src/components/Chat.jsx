import React from "react"
import styles from "../styles/Home.module.scss"
import Cam from "../../public/images/cam.png"
import More from "../../public/images/more.png"
import Add from "../../public/images/add.png"
import Image from "next/image"
import Messages from "./Messages"
import Input from "./Input"

function Chat() {
  return (
    <div className={styles["chat"]}>
      <div className={styles["chatInfo"]}>
        <span>Jane</span>
        <div className={styles["chatIcons"]}>
          <div className={styles["chatIcons"]}>
            <Image height={24} src={Cam} alt="" />
            <Image height={24} src={Add} alt="" />
            <Image height={24} src={More} alt="" />
          </div>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
