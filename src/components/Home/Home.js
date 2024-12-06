import React, { useEffect, useRef } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const cx = classNames.bind(styles);

function Home() {

        
    return ( 
        <section className={cx('home', 'section')} id='home'>
            <div className={cx('home__container', 'container', 'grid')}>
                <div className={cx('home__content', 'grid')}>
                    <Social/>
                    
                    <div className={cx('home__img')} >
                        {/* Hình ảnh sẽ được hiển thị ở đây */}
                    </div>

                    <Data/>
                </div>
                <ScrollDown/>
            </div>
        </section>
    );
}

export default Home;