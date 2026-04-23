import { useState } from "react"
import { Outlet } from "react-router-dom"
import Nav from "./Nav"

export default function Layout() {
  const [display, setDisplay] = useState(0)

  return (
    <div className="flex gap-20 m-4">
      <Nav setDisplay={setDisplay} />
      <div className="flex-1">
        <Outlet context={{ display, setDisplay }} />
      </div>
    </div>
  )
}
