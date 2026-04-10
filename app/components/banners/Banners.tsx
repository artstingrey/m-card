import clsx from 'clsx';
import styles from './Banners.module.scss';
import Banner from './banner/Banner';

export default function Banners () {
    const bannersList = [];
    return (
        <section className={clsx("section-v-gap-0-64",styles.banners)}>
            <Banner />
        </section>
    );
}