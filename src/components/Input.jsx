import Image from "next/image"
import React from "react"
import styles from "../styles/Home.module.scss"
import Img from "../../public/images/img.png"
import Attach from "../../public/images/attach.png"
function Input() {
  return (
    <div className={styles["input"]}>
      <input type="text" placeholder="Type something..." />
      <div className={styles["send"]}>
        <Image src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <Image src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
