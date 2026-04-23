import type { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"

export default function Nav({ setDisplay }: { setDisplay: Dispatch<SetStateAction<number>> }) {
  return (
    <div className="flex flex-col gap-5 w-fit max-w-[30vw]">
      <Link to="/" className="w-fit"><b>Emma de Castro</b></Link>
      <div className="flex flex-col text-justify gray">
        <p>Emma de Castro is a fine art and portrait photographer currently working towards her
        Bachelor's of Fine Arts at the Fashion Institute of Technology in New York City.
        Her photography explores the multifaceted nature of multiracial and multicultural identities
        in the wake of the hyper-digital era of today.</p>
      </div>
      <div className="flex flex-col w-fit">
        <a href="mailto:edecastro123@gmail.com">Email</a>
        <Link to="/cv">CV</Link>
        <div className="flex">
          <a href="https://instagram.com/ec.file" className="flex items-center">
            Instagram <svg fill="none" viewBox="0 0 32 32" height="20" width="20" part="svg"><path part="base-color" fill="currentColor" d="M 6.70 23.72 L 8.28 25.30 L 20.50 13.08 L 22.48 10.93 L 22.24 14.02 L 22.19 20.14 L 24.36 20.14 L 24.52 7.49 L 11.86 7.64 L 11.88 9.83 L 18.01 9.75 L 21.10 9.53 L 18.92 11.50 L 6.70 23.72 Z"/></svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <p>Work</p>
        <ol className="list-decimal list-inside pl-4 gray">
          <li onClick={() => setDisplay(0)} className="cursor-pointer">Thesis</li>
          <li onClick={() => setDisplay(1)} className="cursor-pointer">Family</li>
          <li onClick={() => setDisplay(2)} className="cursor-pointer">Grand Central</li>
          <li onClick={() => setDisplay(3)} className="cursor-pointer">Instant Photographs</li>
          <li onClick={() => setDisplay(4)} className="cursor-pointer">Video</li>
        </ol>
      </div>
      <p className="absolute bottom-5 left-5 gray">
        &copy;2026 Emma de Castro
      </p>
    </div>
  )
}
