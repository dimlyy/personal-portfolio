import { useState } from 'react';
import styles from './Portfolio.module.scss';
import classNames from 'classnames/bind';
import proJectImg1 from '../../assets/img/project-1.jpg';
import proJectImg2 from '../../assets/img/project-2.jpg';
import proJectImg3 from '../../assets/img/project-3.jpg';

const cx = classNames.bind(styles);

const worksData = [
    {
        title: 'Sản phẩm 1',
        description: 'Description for project 1',
        imgUrl: proJectImg1,
        projectLink: 'https://vrtechvn.com/',
        codeLink: 'https://github.com/user/project1',
        tags: ['Web App', 'Trang 1'],
    },
    {
        title: 'Sản phẩm 2',
        description: 'Description for project 2',
        imgUrl: proJectImg2,
        projectLink: 'https://vrtechvn.xyz/',
        codeLink: 'https://github.com/user/project2',
        tags: ['Web App', 'Trang 1'],
    },
    {
        title: 'Sản phẩm 3',
        description: 'Description for project 2',
        imgUrl: proJectImg3,
        projectLink: 'http://nubesnails.com/',
        codeLink: 'https://github.com/user/project2',
        tags: ['Web App', 'Trang 2'],
    },
];

function Portfolio() {
    const [filterWork, setFilterWork] = useState(worksData);
    const [activeFilter, setActiveFilter] = useState('Tất cả');
    const [animate, setAnimate] = useState(false);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimate(true);

        setTimeout(() => {
        const filtered = item === 'Tất cả' ? worksData : worksData.filter((work) => work.tags.includes(item));
        setFilterWork(filtered);
        setAnimate(false); // Kết thúc animation sau khi filter hoàn tất
        }, 300); // Thời gian trễ tương ứng với thời gian của animation
    };

    return (
        <section id='portfolio' className={cx('section', 'Portfolio')}>
            <h2 className={cx('section__title')}>Sản phẩm</h2>

            <div className={cx('container', 'app__work-filter')}>
                {['Trang 1', 'Trang 2', 'Tất cả'].map((item, index) => (
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
                            <a target='_blank' href={work.projectLink} className={cx('app__work-btn')}>
                                <i className={cx('uil', 'uil-globe', 'app__work-icon')}/>
                                <span className={cx('app__work-subtitle')}>Website</span>
                            </a>

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