import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
const UseAnalytics = () => {
    const [initializes, setInitializes] = useState(false)

    useEffect(() => {
        if (window.location.href.includes('devamchaudhari.vercel.app')) { ReactGA.initialize('G-8864FG6VR3'); } setInitializes(true);
    }, [])

    return {
        initializes
    }
}

export default UseAnalytics