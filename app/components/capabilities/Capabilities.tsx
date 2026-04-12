import clsx from 'clsx';
import styles from './Capabilities.module.scss';


export default function Capabilities () {
    return (
        <section className={styles.fixedSection}>
             <picture className="section-bg">
                <source srcSet="/images/capability-mob.avif 2x" media="(max-width: 767px)" type="image/avif" />
                <source srcSet="/images/capability-mob.webp 2x" media="(max-width: 767px)" type="image/webp" />
                <source srcSet="/images/capability-mob.png 2x" media="(max-width: 767px)" type="image/png" />

                <source srcSet="/images/section-bg.avif 1x, /images/section-bg@2x.avif 2x" media="(min-width: 768px)" type="image/avif" />
                <source srcSet="/images/section-bg.webp 1x, /images/section-bg@2x.webp 2x" media="(min-width: 768px)" type="image/webp" />
                <source srcSet="/images/capability.png 1x, /images/capability@2x.png 2x" media="(min-width: 768px)" type="image/png" />

                <img src="/images/section-bg-mob@2x.jpg" width="750" height="2160" alt="Section background" decoding="async" loading="lazy"/>
            </picture>
            <div className={styles.fixedSectionWrapper}>
                
            </div>
        </section>
    );
}