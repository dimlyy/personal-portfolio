import { useState } from 'react';
import styles from './Portfolio.module.scss';
import classNames from 'classnames/bind';
import proJectImg1 from '../../assets/img/profile.jpg';

const cx = classNames.bind(styles);

const worksData = [
    {
        title: 'Project 1',
        description: 'Description for project 1',
        imgUrl: proJectImg1,
        projectLink: 'https://project1.com',
        codeLink: 'https://github.com/user/project1',
        tags: ['UI/UX', 'Web App'],
    },
    {
        title: 'Project 2',
        description: 'Description for project 2',
        imgUrl: 'path/to/image2.jpg',
        projectLink: 'https://project2.com',
        codeLink: 'https://github.com/user/project2',
        tags: ['Mobile App', 'React JS'],
    },
];

function Portfolio() {
    const [filterWork, setFilterWork] = useState(worksData);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animate, setAnimate] = useState(false);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimate(true);

        setTimeout(() => {
        const filtered = item === 'All' ? worksData : worksData.filter((work) => work.tags.includes(item));
        setFilterWork(filtered);
        setAnimate(false); // Kết thúc animation sau khi filter hoàn tất
        }, 300); // Thời gian trễ tương ứng với thời gian của animation
    };

    return (
        <section id='portfolio' className={cx('section', 'Portfolio')}>
            <h2 className={cx('section__title')}>Sản phẩm</h2>

            <div className={cx('container', 'app__work-filter')}>
                {['Web App', 'React JS', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={cx('app__work-filter-item', 'app__flex', 'p-text', { 'active': activeFilter === item })}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className={cx('app__work-portfolio', { 'animate': animate })}>
                {filterWork.map((work, index) => (
                    <div className={cx('app__work-item', 'app__flex')} key={index}>
                        <div className={cx('app__work-img', 'app__flex')}>
                            <img src={work.imgUrl} alt={work.title} />
                        </div>

                        <div className={cx('app__work-content', 'app__flex')}>
                            <h4 className={cx('bold-text')}>{work.title}</h4>
                            <p className={cx('p-text', 'work__subtitle')}>{work.description}</p>

                            <div className={cx('app__work-tag', 'app-flex')}>
                                <p className={cx('p-text')}>{work.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;