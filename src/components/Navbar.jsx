import Image from "next/image"
import React, { useContext } from "react"
import styles from "../styles/Home.module.scss"
import { signOut } from "firebase/auth"
import { auth } from "@/firebase"
import { AuthContext } from "@/context/AuthContext"
function Navbar() {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className={styles["navbar"]}>
      <span className={styles["logo"]}>Chat App</span>
      <div className={styles["user"]}>
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
