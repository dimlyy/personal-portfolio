import { useState } from 'react';
import styles from './Portfolio.module.scss';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

const worksData = [
    {
        title: 'Project 1',
        description: 'Description for project 1',
        imgUrl: 'path/to/image1.jpg', // Replace with actual image path
        projectLink: 'https://project1.com',
        codeLink: 'https://github.com/user/project1',
        tags: ['UI/UX', 'Web App'],
    },
    {
        title: 'Project 2',
        description: 'Description for project 2',
        imgUrl: 'path/to/image2.jpg', // Replace with actual image path
        projectLink: 'https://project2.com',
        codeLink: 'https://github.com/user/project2',
        tags: ['Mobile App', 'React JS'],
    },
    // Add more projects here
];

function Portfolio() {
    const [works, setWorks] = useState(worksData); // Initialize with worksData
    const [filterWork, setFilterWork] = useState(worksData);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard({ y: 100, opacity: 0 });

        setTimeout(() => {
            setAnimateCard({ y: 0, opacity: 1 });

            if (item === 'All') {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500);
    };

    return (
        <section id='Portfolio' className={cx('section', 'Portfolio')}>
            <h2 className={cx('section__title')}>Project</h2>
            <span className={cx('section__subtitle')}>Project của tôi</span>

            <div className={cx('container', 'app__work-filter')}>
                {['UI/UX', 'Web App', 'React JS', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={cx('app__work-filter-item', 'app__flex', 'p-text', { 'active': activeFilter === item })}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;