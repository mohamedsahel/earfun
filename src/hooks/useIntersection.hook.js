import { useState, useEffect } from 'react'

export default function useInersection(ref, options) {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        if(ref === null) return
        const target = ref.current
        const func = enteries => {
        enteries.forEach(entery => setIntersecting(entery.isIntersecting))
        } 

        let observer = new IntersectionObserver(func, {...options})
        if(target) observer.observe(target)

        return () => observer.unobserve(target)
    }, [ref, options])

    return isIntersecting
}