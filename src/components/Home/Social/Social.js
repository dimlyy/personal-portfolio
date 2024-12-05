import styles from '../Home.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Social() {
    return (
        <div className={cx('home__social')}>
            <a href='https://www.instagram.com/dimlyyyyy/' className={cx('home__social-icon')} target="_blank">
                 <i className={cx('uil', 'uil-instagram')}/>
            </a>

            {/* <a href='' className={cx('home__social-icon')} target="_blank">
                <i className={cx('uil', 'uil-dribbble')}/>
            </a> */}

            <a href='https://www.facebook.com/profile.php?id=100093223491246' className={cx('home__social-icon')} target="_blank">
                <i className={cx('uil', 'uil-facebook-f')}/>
            </a>


            <a href='tel:0378808834' className={cx('home__social-icon')} target="_blank">
                <i className={cx('uil', 'uil-phone')}/>
            </a>
        </div>
    );
}

export default Social;