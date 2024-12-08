import { useRef, useEffect, useState } from 'react';
import styles from './ScrollUp.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ScrollUp() {
    const scrollUpRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 560) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a 
            ref={scrollUpRef} 
            href="#" 
            className={cx('scrollup', { 'show-scroll': isVisible })}
        >
            <i className={cx('uil', 'uil-arrow-up', 'scrollup__icon')}></i>
        </a>
    );
}

export default ScrollUp;