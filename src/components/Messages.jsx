import React from "react"
import Message from "./Message"
import styles from "../styles/Home.module.scss"
function Messages() {
  return (
    <div className={styles["messages"]}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages
