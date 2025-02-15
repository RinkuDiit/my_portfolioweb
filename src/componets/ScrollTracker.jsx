import { useState, useEffect } from "react";

const ScrollTracker = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY; // Current scroll position
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = Math.ceil((scrollTop / scrollHeight) * 100);

        setScrollPercentage(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return (() => {
            window.removeEventListener('scroll', handleScroll)
        })


    }, []);

    const scrollwindow = () =>{
        window.scroll(0,0)
    }

    return (
        <section id="home">
        <div className="scroll_0" style={{ backgroundImage: `conic-gradient(#8750f7 ${scrollPercentage}%,rgba(0, 0, 255, 0.247) 0%)` }} onClick={() => scrollwindow()}>
            <i class="fa fa-long-arrow-up " aria-hidden="true"></i>
        
        </div>
        </section>
    );
};

export default ScrollTracker;
