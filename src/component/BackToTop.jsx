import React, { useEffect, useState } from 'react'
import { GoChevronUp } from 'react-icons/go';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="back-to-top">
            {isVisible && (
                <button onClick={scrollToTop}>
                    <GoChevronUp />
                </button>
            )}
        </div>
    )
}

export default BackToTop