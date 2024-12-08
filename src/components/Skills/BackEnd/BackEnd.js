import styles from '../Skills.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function BackEnd() {
    return ( 
        <div className={cx('skills__content')}>
        <h3 className={cx('skills__title')}>Backend developer</h3>

        <div className={cx('skills__box')}>
            <div className={cx('skills__group')}>
                <div className={cx('skills__data')}>
                    <i className={cx('bx', 'bx-badge-check', 'skills__icon')}/>

                    <div>
                        <h3 className={cx('skills__name')}>PHP</h3>
                        <span className={cx('skills__level')}>Intermediate</span>
                    </div>
                </div>

                <div className={cx('skills__data')}>
                    <i className={cx('bx', 'bx-badge-check', 'skills__icon')}/>

                    <div>
                        <h3 className={cx('skills__name')}>NodeJS</h3>
                        <span className={cx('skills__level')}>Basic</span>
                    </div>
                </div>

                <div className={cx('skills__data')}>
                    <i className={cx('bx', 'bx-badge-check', 'skills__icon')}/>

                    <div>
                        <h3 className={cx('skills__name')}>Python</h3>
                        <span className={cx('skills__level')}>Basic</span>
                    </div>
                </div>
            </div>

            <div className={cx('skills__group')}>
                <div className={cx('skills__data')}>
                    <i className={cx('bx', 'bx-badge-check', 'skills__icon')}/>

                    <div>
                        <h3 className={cx('skills__name')}>MySql</h3>
                        <span className={cx('skills__level')}>Intermediate</span>
                    </div>
                </div>

                <div className={cx('skills__data')}>
                    <i className={cx('bx', 'bx-badge-check', 'skills__icon')}/>

                    <div>
                        <h3 className={cx('skills__name')}>Sql Server</h3>
                        <span className={cx('skills__level')}>Basic</span>
                    </div>
                </div>
            
                <div className={cx('skills__data')}>
                    <i className={cx('bx', 'bx-badge-check', 'skills__icon')}/>

                    <div>
                        <h3 className={cx('skills__name')}>FireBase</h3>
                        <span className={cx('skills__level')}>Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default BackEnd;