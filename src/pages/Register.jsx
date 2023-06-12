import React, { useState } from "react"
import styles from "../styles/Home.module.scss"
import addAvatar from "../../public/images/addAvatar.png"
import Image from "next/image"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, storage, db } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"
import { useRouter } from "next/router"
import Link from "next/link"

function Register() {
  const [err, setErr] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password)

      //Create a unique image name
      const date = new Date().getTime()
      const storageRef = ref(storage, `${displayName + date}`)

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {})
            router.push("/")
          } catch (err) {
            console.log(err)
            setErr(true)
            // setLoading(false)
          }
        })
      })
    } catch (err) {
      setErr(true)
      // setLoading(false)
    }
  }
  return (
    <div className={styles["formContainer"]}>
      <div className={styles["formWrapper"]}>
        <span className={styles["logo"]}>Chat App</span>
        <span className={styles["title"]}>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <Image width={32} src={addAvatar} alt=""></Image>
            <span>Add an avatar</span>
          </label>
          <button> Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Do you have an account? <Link href="/Login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
