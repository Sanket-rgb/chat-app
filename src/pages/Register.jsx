import React from "react"
import styles from "../styles/Home.module.scss"
import addAvatar from "../../public/images/addAvatar.png"
import Image from "next/image"
function Register() {
  return (
    <div className={styles["formContainer"]}>
      <div className={styles["formWrapper"]}>
        <span className={styles["logo"]}>Chat App</span>
        <span className={styles["title"]}>Register</span>
        <form>
          <input type="text" placeholder="display name"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <Image width={32} src={addAvatar} alt=""></Image>
            <span>Add an avatar</span>
          </label>
          <button> Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
