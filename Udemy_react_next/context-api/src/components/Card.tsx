import type { ReactNode } from "react"

interface Props {
    children?: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className="card mb-3 mx-5 my-5">
        <div className="card-body">{children}</div>
    </div>
  )
}
export default Card