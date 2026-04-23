import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Projects from "./pages/Projects"
import CV from "./pages/CV"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Projects />} />
        <Route path="/cv" element={<CV />} />
      </Route>
    </Routes>
  )
}
