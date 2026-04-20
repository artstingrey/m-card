'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ScrollBanner.module.scss';
import LaunchButton from '../core/launchButton/LaunchButton';
import SectionLabel from '../sectionLabel/SectionLabel';

export default function ScrollBanner () {
    const sectionRef = useRef<HTMLElement>(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        let rafId = 0;

        const updateScale = () => {
            rafId = 0;

            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const scrollProgress = Math.abs(Math.min(rect.top, 0)) / (viewportHeight / 2);
            const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);
            const nextScale = 1 - clampedProgress * 0.1;

            setScale((prev) => {
                const rounded = Number(nextScale.toFixed(4));
                return prev === rounded ? prev : rounded;
            });
        };

        const handleViewportChange = () => {
            if (rafId) {
                return;
            }

            rafId = window.requestAnimationFrame(updateScale);
        };

        updateScale();

        window.addEventListener('scroll', handleViewportChange, { passive: true });
        window.addEventListener('resize', handleViewportChange);

        return () => {
            window.removeEventListener('scroll', handleViewportChange);
            window.removeEventListener('resize', handleViewportChange);

            if (rafId) {
                window.cancelAnimationFrame(rafId);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={styles.scrollBanner}>
            <div style={{ transform: `scale(${scale})` }}>
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
