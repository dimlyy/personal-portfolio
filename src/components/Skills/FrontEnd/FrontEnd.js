import styles from '../Skills.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function FrontEnd() {
    return ( 
        <div className={cx('skills__content')}>
            <h3 className={cx('skills__title')}>FrontEnd developer</h3>

            <div className={cx('skills__box')}>
                <div className={cx('skills__group')}>
                    <div className={cx('skills__data')}>
                        <i className={cx('bx', 'bx-badge-check', 'skills__icon')}/>

                        <div>
                            <h3 className={cx('skills__name')}>HTML</h3>
                            <span className={cx('skills__level')}>Basic</span>
                        </div>
                    </div>

                    <div className={cx('skills__data')}>
                        <i className={cx('bx', 'bx-badge-check', 'skills__icon')}/>

                        <div>
                            <h3 className={cx('skills__name')}>CSS</h3>
                            <span className={cx('skill__level')}>Advance</span>
                        </div>
                    </div>

                    <div className={cx('skills__data')}>
                        <i className={cx('bx', 'bx-badge-check', 'skills__icon')}/>

                        <div>
                            <h3 className={cx('skills__name')}>JavaScript</h3>
                            <span className={cx('skill__level')}>Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className={cx('skills__group')}>
                    <div className={cx('skills__data')}>
                        <i className={cx('bx', 'bx-badge-check', 'skills__icon')}/>

                        <div>
                            <h3 className={cx('skills__name')}>Bootsrap</h3>
                            <span className={cx('skills__level')}>Intermediate</span>
                        </div>
                    </div>

                    <div className={cx('skills__data')}>
                        <i className={cx('bx', 'bx-badge-check', 'skills__icon')}/>

                        <div>
                            <h3 className={cx('skills__name')}>Git</h3>
                            <span className={cx('skills__level')}>Intermediate</span>
                        </div>
                    </div>
                
                    <div className={cx('skills__data')}>
                        <i className={cx('bx', 'bx-badge-check', 'skills__icon')}/>

                        <div>
                            <h3 className={cx('skills__name')}>React</h3>
                            <span className={cx('skills__level')}>Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrontEnd;