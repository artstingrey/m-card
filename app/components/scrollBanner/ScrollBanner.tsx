import clsx from 'clsx';
import styles from './ScrollBanner.module.scss';
import LaunchButton from '../core/launchButton/launchButton';
import SectionLabel from '../sectionLabel/SectionLabel';

export default function ScrollBanner () {
    return (
        <section className={styles.scrollBanner}>
            <div>
                <picture className="responsive-image">
                    <source srcSet="/images/bannerMob.avif 2x" media="(max-width: 767px)" type="image/avif" />
                    <source srcSet="/images/bannerMob.webp 2x" media="(max-width: 767px)" type="image/webp" />
                    <source srcSet="/images/bannerMob.jpg 2x" media="(max-width: 767px)" type="image/jpeg" />

                    <source srcSet="/images/banner.avif 1x, /images/banner@2x.avif 2x" media="(min-width: 768px)" type="image/avif" />
                    <source srcSet="/images/banner.webp 1x, /images/banner@2x.webp 2x" media="(min-width: 768px)" type="image/webp" />
                    <source srcSet="/images/banner.jpg 1x, /images/banner@2x.jpg 2x" media="(min-width: 768px)" type="image/jpeg" />

                    <img src="/images/banner@2x.jpg" width="750" height="1624" alt="Section background" decoding="async" loading="lazy"/>
                </picture>
                <div className={styles.scrollBannerWrapper}>
                    <SectionLabel text='Партнёрская программа' decor={false} /> 
                    <div>
                        <h2 className='t-center'>Приводите друзей и<br></br> зарабатывайте</h2>
                        <p className='t-center'>Приглашайте друзей — и зарабатывайте с каждой их карты. Быстро и честно.</p>
                        <LaunchButton text='Узнать подробнее' styles={styles.scrollBannerLink}/>
                    </div>   
                </div>
            </div>
        </section>
    );
}