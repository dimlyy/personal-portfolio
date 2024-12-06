import { useState } from 'react';
import styles from './Portfolio.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Portfolio() {
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    const handleWorkFilter = (item) => {

    }

    return ( 
        <section id='Portfolio' className={cx('section', 'Portfolio')}>
            <h2 className={cx('section__title')}>Project</h2>
            <span className={cx('section__subtitle')}>Project của tôi</span>

            <div className={cx('container', 'portfolio__container')}>
                {['UI/UX', 'Web App', 'Reac JS', 'All'].map((item,index) => {
                    <div
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={cx('app__work-filter-item', 'app__flex', 'p-text', {'active': activeFilter === item})}
                    >
                        
                    </div>
                })}
            </div>
        </section>
     );
}

export default Portfolio;