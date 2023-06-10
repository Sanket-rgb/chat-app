import React from "react"
import styles from "../styles/Home.module.scss"
function Chats() {
  return (
    <div className={styles["chats"]}>
      <div className={styles["userChat"]}>
        <img
          src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
          alt=""
        />
        <div className={styles["userChatInfo"]}>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles["userChat"]}>
        <img
          src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
          alt=""
        />
        <div className={styles["userChatInfo"]}>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles["userChat"]}>
        <img
          src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
          alt=""
        />
        <div className={styles["userChatInfo"]}>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles["userChat"]}>
        <img
          src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
          alt=""
        />
        <div className={styles["userChatInfo"]}>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
