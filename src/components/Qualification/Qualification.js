import { useState } from 'react';
import styles from './Qualification.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Qualification() {
    const [toggleState, setToggleState] = useState(1);

    return ( 
        <section className={cx('qualification', 'section')}>
             <h2 className={cx('section__title')}>Khả năng chuyên môn</h2>

             <div className={cx('container', 'qualification__container')}>
                <div className={cx('qualification__tabs')}>
                    <div
                    onClick={() => setToggleState(1)}
                    className={cx('qualification__button', 'button--flex', {'active': toggleState === 1} )}>
                        <i className={cx('uil', 'uil-graduation-cap', 'qualification__icon')}></i>
                        Học vấn
                    </div>

                    <div
                    onClick={() => setToggleState(2)}
                    className={cx('qualification__button', 'button--flex', {'active': toggleState === 2})}>
                        <i className={cx('uil', 'uil-briefcase-alt', 'qualification__icon')}></i>
                        Kinh nghiệm
                    </div>
                </div>

                <div className={cx('qualification__sections')}>
                    <div className={cx('qualification__content', {'active': toggleState === 1})}>
                        <div className={cx('qualification__data')}>
                            <div>
                                <h3 className={cx('qualification__title')}>Học vấn</h3>
                                <span className={cx('qualification__subtitle')}>THPT Tam Phú
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className={cx('uil', 'uil-calendar-alt')}></i>
                                    2019 - 2021
                                </div>
                            </div>
                        
                            <div>
                                <span className={cx('qualification__rounder')}></span>
                                <span className={cx('qualification__line')} ></span>
                            </div>
                        </div>

                        <div className={cx('qualification__data')}>
                            <div>
                            </div>
                            <div>
                                <span className={cx('qualification__rounder')}></span>
                                <span className={cx('qualification__line')} ></span>
                            </div>

                            <div>
                                <h3 className={cx('qualification__title')}>Học vấn</h3>
                                <span className={cx('qualification__subtitle')}>Đại học Công Nghiệp
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className={cx('uil', 'uil-calendar-alt')}></i>
                                    2021 - Hiện tại
                                </div>
                            </div>
                        </div>

                        <div className={cx('qualification__data')}>
                            <div>
                                <h3 className={cx('qualification__title')}>Web Development</h3>
                                <span className={cx('qualification__subtitle')}>F8 Web Developer
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className={cx('uil', 'uil-calendar-alt')}></i>
                                    2023
                                </div>
                            </div>
                        
                            <div>
                                <span className={cx('qualification__rounder')}></span>
                                <span className={cx('qualification__line')} ></span>
                            </div>
                        </div>

                        <div className={cx('qualification__data')}>
                            <div>

                            </div>
                            <div>
                                <span className={cx('qualification__rounder')}></span>
                                <span className={cx('qualification__line')} ></span>
                            </div>

                            <div>
                                <h3 className={cx('qualification__title')}>UI/UX</h3>
                                <span className={cx('qualification__subtitle')}>
                                        Độc lập
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className={cx('uil', 'uil-calendar-alt')}></i>
                                    2023 - 2024
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('qualification__content', {'active': toggleState === 2})}>
                        <div className={cx('qualification__data')}>
                            <div>
                                <h3 className={cx('qualification__title')}>UI/UX Design</h3>
                                <span className={cx('qualification__subtitle')}>Blossom Spa
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className={cx('uil', 'uil-calendar-alt')}></i>
                                    2023
                                </div>
                            </div>
                        
                            <div>
                                <span className={cx('qualification__rounder')}></span>
                                <span className={cx('qualification__line')} ></span>
                            </div>
                        </div>

                        <div className={cx('qualification__data')}>
                            <div>

                            </div>
                            <div>
                                <span className={cx('qualification__rounder')}></span>
                                <span className={cx('qualification__line')} ></span>
                            </div>

                            <div>
                                <h3 className={cx('qualification__title')}>Web Developern</h3>
                                <span className={cx('qualification__subtitle')}>Công nghệ Việt Tín
                                </span>
                                <div className={cx('qualification__calendar')}>
                                    <i className={cx('uil', 'uil-calendar-alt')}></i>
                                    2024 - Hiện tại
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
             </div>
        </section>
     );
}

export default Qualification;