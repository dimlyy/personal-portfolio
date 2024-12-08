import {  useState } from 'react';
import styles from './Services.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Services() {
    const [toggleState, setToggleState] = useState(0);

  
    return ( 
        <section id='services' className={cx('services', 'section')}>
            <h2 className={cx('section__title')}>Dịch vụ cung cấp</h2>

            <div className={cx('services__container', 'container', 'grid')}>
                <div className={cx('services__content')}>
                    <div>
                        <i className={cx('uil', 'uil-web-grid', 'services__icon')}/>
                        <h3 className={cx('services__title')}>Sản phẩm <br></br> Thiết kế</h3>
                    </div>
                

                    <span className={cx('services__button')}
                    onClick={() => setToggleState(1)}
                    >Xem thêm
                    <i className={cx('uil', 'uil-arrow-right', 'services__button-icon')} />
                    </span>

                <div className={cx('services__modal', {'active': toggleState === 1})}>
                    <div className={cx('services__modal-content')}>
                        <i className={cx('uil', 'uil-times', 'services__modal-close')}
                            onClick={() => setToggleState(0)}>
                        </i>
                        <h3 className={cx('services__modal-title')}>Sản phẩm</h3> 
                        <p className={cx('services__modal-description')}>2 năm kinh nghiệm 
                            thực chiến với khách hàng
                        </p>                   

                        <ul className={cx('services__modal-services', 'grid')}>
                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể lập trình ra giao diện cho người dùng.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể lập trình giao diện web.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể lập trình ra tương tác người dùng web.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể tạo ra thương hiệu cho brand của bạn.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể design những mẫu giao diện hiện đại nhất.
                                </p>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* services content 2 */}
                <div className={cx('services__content')}>
                    <div>
                        <i className={cx('uil', 'uil-arrow', 'services__icon')}/>
                        <h3 className={cx('services__title')}>UI/UX <br/> Thiết kế</h3>
                    </div>
                

                <span className={cx('services__button')}
                onClick={()=> setToggleState(2)}
                >Xem thêm
                    <i className={cx('uil', 'uil-arrow-right', 'services__button-icon')} />
                </span>

                <div className={cx('services__modal', {'active': toggleState === 2})}>
                    <div className={cx('services__modal-content')}>
                        <i
                        onClick={()=>setToggleState(0)}
                        className={cx('uil', 'uil-times', 'services__modal-close')}></i>
                        <h3 className={cx('services__modal-title')}>UI/UX Designer</h3> 
                        <p className={cx('services__modal-description')}>2 năm kinh nghiệm 
                            thực chiến với khách hàng
                        </p>                   

                        <ul className={cx('services__modal-services', 'grid')}>
                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể lập trình ra giao diện cho người dùng.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể lập trình giao diện web.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể lập trình ra tương tác người dùng web.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể tạo ra thương hiệu cho brand của bạn.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể design những mẫu giao diện hiện đại nhất.
                                </p>
                            </li>
                            </ul>
                        </div>
                    
                    </div>
                </div>

                {/* services content 3 */}
                <div className={cx('services__content')}>
                    <div>
                        <i className={cx('uil', 'uil-edit', 'services__icon')}/>
                        <h3 className={cx('services__title')}>Visual <br/> 
                        Thiết kế</h3>
                    </div>
                

                <span
                onClick={()=> setToggleState(3)}
                className={cx('services__button')}>Xem thêm
                    <i className={cx('uil', 'uil-arrow-right', 'services__button-icon')} />
                </span>

                <div className={cx('services__modal', {'active': toggleState === 3})}>
                    <div className={cx('services__modal-content')}>
                        <i
                        onClick={()=>setToggleState(0)}
                        className={cx('uil', 'uil-times', 'services__modal-close')}></i>
                        <h3 className={cx('services__modal-title')}>Visual Designer</h3> 
                        <p className={cx('services__modal-description')}>2 năm kinh nghiệm 
                            thực chiến với khách hàng
                        </p>                   

                        <ul className={cx('services__modal-services', 'grid')}>
                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể lập trình ra giao diện cho người dùng.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể lập trình giao diện web.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể lập trình ra tương tác người dùng web.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể tạo ra thương hiệu cho brand của bạn.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể design những mẫu giao diện hiện đại nhất.
                                </p>
                            </li>
                            </ul>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;