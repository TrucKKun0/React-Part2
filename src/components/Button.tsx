import type { ReactNode } from "react"

type ButtonProps = {
    children : ReactNode
}

export function Button({children} : ButtonProps) {
    return <button className="bg-violet-500 hover:bg-violet-400 transition-colors rounded px-2 py-1
    disabled:opacity-50 disabled:cursor-not-allowed"
    >{children}</button>
}