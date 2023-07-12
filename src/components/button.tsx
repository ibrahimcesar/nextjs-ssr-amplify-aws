
import Link from "next/link"

const Button = () => {
  return (
    <Link href="/random">
      <button className="pushable">
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">
          Surprise Me!
        </span>
      </button>
    </Link>
  )
}

export default Button