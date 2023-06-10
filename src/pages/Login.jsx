import React from "react"
import styles from "../styles/Home.module.scss"
import addAvatar from "../../public/images/addAvatar.png"
import Image from "next/image"
function Login() {
  return (
    <div className={styles["formContainer"]}>
      <div className={styles["formWrapper"]}>
        <span className={styles["logo"]}>Chat App</span>
        <span className={styles["title"]}>Login</span>
        <form>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>

          <button> Sign In</button>
        </form>
        <p>Do you have an account? Register</p>
      </div>
    </div>
  )
}

export default Login
