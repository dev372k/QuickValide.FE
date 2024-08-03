import {useState, useEffect} from 'react'

function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(function() {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    }, [windowWidth])

    return windowWidth;
}

export default useWindowWidth