import classNames from "classnames/bind";
import styles from "./Skills.module.scss";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";

const cx = classNames.bind(styles);
function Skills() {
    return ( 
        <section id="skills" className={cx('skills', 'section')}>
            <h2 className={cx('section__title')}>Kĩ năng</h2>
            <div className={cx('skills__container', 'container', 'grid')}>
                <FrontEnd/>
                <BackEnd/>
            </div>
        </section>
     );
}

export default Skills;