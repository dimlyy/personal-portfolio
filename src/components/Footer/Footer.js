import styles from './Footer.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer__container', 'container')}>
                <h1 className={cx('footer__title')}>Trần Ánh Dương</h1>

                <ul className={cx('footer__list')}>
                    <li>
                        <a href="#home" className={cx('footer__link')}>Trang chủ</a>
                    </li>

                    <li>
                        <a href="#about" className={cx('footer__link')}>Tóm tắt</a>
                    </li>

                    <li>
                        <a href="#portfolio" className={cx('footer__link')}>Sản phảm</a>
                    </li>
                </ul>

                <div className={cx('footer__social')}>
                    <a href='tel:0378808834' className={cx('footer__social-link')} target="_blank">
                        <i className={cx('uil', 'uil-phone')}/>
                    </a>

                    <a href='https://www.facebook.com/profile.php?id=100093223491246' className={cx('footer__social-link')} target="_blank">
                        <i className={cx('uil', 'uil-facebook-f')}/>
                    </a>

                    <a href='https://www.instagram.com/dimlyyyyy/' className={cx('footer__social-link')} target="_blank">
                        <i className={cx('uil', 'uil-instagram')}/>
                    </a>

                    <a href='' className={cx('footer__social-link')} target="_blank">
                        <i className={cx('uil', 'uil-github')}/>
                    </a>
                </div>

                <span className={cx('footer__copy')}>&#169; Trần Ánh Dương portfolio 2024</span>
            </div>
        </footer>
    );
}

export default Footer;