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
                        <h3 className={cx('services__title')}>Website <br></br> Thiết kế</h3>
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
                                    Cải thiện hiệu suất và trải nghiệm người dùng
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Lập trình tương tác người dùng web.
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
                                    Thiết kế giao diện hiện đại và responsive.
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

                        <ul className={cx('services__modal-services', 'grid')}>
                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể design những mẫu giao diện hiện đại nhất.
                                </p>
                            </li>
                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tôi có thể tối ưu hóa giao diện.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tăng trải nghiệm người dùng.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Định hướng theo thói quen người dùng.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Khả năng tùy chỉnh và mở rộng.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Cải thiện thương hiệu và giá trị.
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

                        <ul className={cx('services__modal-services', 'grid')}>
                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Xây dựng hệ thống nhận diện trực quan.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tối ưu hóa trải nghiệm thị giác.
                                </p>
                            </li>

                            <li className={cx('services__modal-service')}>
                                <i className={cx('uil', 'uil-check-circle', 'services__modal-icon')}/>
                                <p className={cx('services__modal-info')}>
                                    Tăng tính độc đáo.
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
                                    Truyền tải thông điệp qua hình ảnh.
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