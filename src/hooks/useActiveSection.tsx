import { useEffect, useRef, useState } from "react";

export function useActiveSection (sectionsids: string[], rootMargin="-20% 0px -40% 0px"){
    const [active, setActive] = useState<string>(sectionsids[0])
    const visibleSection = useRef<Record<string,boolean>>({})
        useEffect(()=>{
            visibleSection.current = {}
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry)=>{
                        visibleSection.current[entry.target.id] = entry.isIntersecting;
                    })
                    const currentactive = sectionsids.find((id)=>visibleSection.current[id])
                    if(currentactive){
                        setActive(currentactive)
                    }
                },
                {rootMargin, threshold: 0.1}
            )
            const observedElements: HTMLElement[] = []
            sectionsids.forEach((id)=>{
        const el = document.getElementById(id)
        if(el){
            observer.observe(el)
            observedElements.push(el)
        } 
        })
        return () => {
        observedElements.forEach((el)=> observer.unobserve(el))
        observer.disconnect()
        }
    }, [sectionsids, rootMargin])
    return active
}