import React from "react"
import styles from "../styles/Home.module.scss"
function Search() {
  return (
    <div className={styles["search"]}>
      <div className={styles["searchForm"]}>
        <input type="text" placeholder="Find a user" />
      </div>
      <div className={styles["userChat"]}>
        <img src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg" />
        <div className={styles["userChatInfo"]}>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
