import React, { useState } from "react"
import styles from "../styles/Home.module.scss"
import addAvatar from "../../public/images/addAvatar.png"
import Image from "next/image"
import { useRouter } from "next/router"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase"
import Link from "next/link"

function Login() {
  const [err, setErr] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push("/")
    } catch (err) {
      setErr(true)
      // setLoading(false)
    }
  }
  return (
    <div className={styles["formContainer"]}>
      <div className={styles["formWrapper"]}>
        <span className={styles["logo"]}>Chat App</span>
        <span className={styles["title"]}>Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>

          <button> Sign In</button>
        </form>
        <p>
          You don&apos;t have an account? <Link href="/Register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
