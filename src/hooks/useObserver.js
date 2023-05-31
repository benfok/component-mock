import { useRef, useEffect, useState } from 'react';

// custom hook for adding intersecting observer to component to determine when it is in the viewport
const useObserver = (options) => {
    const containerRef = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {

        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) {observer.observe(containerRef.current)}

        return () => {
            if(containerRef.current) {observer.unobserve(containerRef.current)}
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
  };

export default useObserver;