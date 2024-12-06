import classNames from "classnames/bind";
import styles from './Cloud.module.scss'

const cx = classNames.bind(styles);

function Cloud() {
    return ( 
        <div>
            <div class={cx('center')}>
            <div class={cx('Cloud')}></div>
            <ul class={cx('Sun')}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            </div>
        </div>
     );
}

export default Cloud;