import { useEffect, useRef, useState } from "react"

function useHover() {

    const [hovered, setHovered] = useState(false)
    const hoverRef = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }
    
    useEffect(() => {
        const ref = hoverRef.current
        ref.addEventListener("mouseenter",enter)
        ref.addEventListener("mouseleave",leave)
        
        return () => {
            ref.removeEventListener("mouseenter",enter)
            ref.removeEventListener("mouseleave",leave)
        }
    },[])

    return [hovered, hoverRef]
}
export default useHover