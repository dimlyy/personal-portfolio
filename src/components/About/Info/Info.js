import styles from '../About.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Info() {
    return (
        <div className={cx('about__info', 'grid')}>
            <div className={cx('about__box')}>
                <i className={cx('bx', 'bx-award','about__icon')}></i>
                <h3 className={cx('about__title')}>Kinh nghiệm</h3>
                <span className={cx('about__subtitle')}>2+ Years Study</span>
            </div>

            <div className={cx('about__box')}>
                <i className={cx('bx', 'bx-briefcase-alt-2','about__icon')}></i>
                <h3 className={cx('about__title')}>Completed</h3>
                <span className={cx('about__subtitle')}>4 project</span>
            </div>

            <div className={cx('about__box')}>
                <i className={cx('bx', 'bx-support','about__icon')}></i>
                <h3 className={cx('about__title')}>Support</h3>
                <span className={cx('about__subtitle')}>Online 24/7</span>
            </div>
        </div>
    );
}

export default Info;