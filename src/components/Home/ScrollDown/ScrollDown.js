import classNames from "classnames/bind";
import styles from '../Home.module.scss';

const cx = classNames.bind(styles);
function ScrollDown() {
    return ( 
        <div className={cx('home__scroll')}>
            <a href="#about" className={cx('home__scroll-button', 'button--flex')}>
            <svg
                width="32px"
                height="32px"
                className={cx('home__scroll-mouse')}
                viewBox="0 0 247 390"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: 1.5,
                }}
                >
                <path
                    className={cx('wheel')}
                    d="M123.359,79.775l0,72.843"
                    style={{
                    fill: 'none',
                    stroke: 'currentColor',  // Màu viền sẽ theo màu chữ hiện tại
                    strokeWidth: '20px',
                    }}
                />
                <path
                    id="mouse"
                    d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                    style={{
                    fill: 'none',
                    stroke: 'currentColor',  // Màu viền sẽ theo màu chữ hiện tại
                    strokeWidth: '20px',
                    }}
                />
                </svg>

            <span className={cx('home__scroll-name')}>Kéo xuống</span>
            <i className={cx('uil', 'uil-arrow-down', 'home__scroll-arrow')}></i>
            </a>
        </div>
    );
}

export default ScrollDown;