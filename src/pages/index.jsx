import { AuthContext } from "@/context/AuthContext"
import React, { useContext } from "react"
import HomePage from "./HomePage"
import Login from "./Login"

export default function Home() {
  const { currentUser } = useContext(AuthContext)
  console.log("Current USer" + JSON.stringify(currentUser))

  return currentUser ? <HomePage /> : <Login />
}
