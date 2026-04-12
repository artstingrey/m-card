import clsx from 'clsx';
import styles from './Commission.module.scss';
import { createKey } from 'next/dist/shared/lib/router/router';
import SectionLabel from '../sectionLabel/SectionLabel';


export default function Commission () {
    return (
        <section className={clsx("section-v-gap-80-112","m-container")}>
            <SectionLabel />
            <h2 className="t-center">Вы всегда знаете,<br></br> за что платите</h2>
            <div className={styles.commissionsContainer}>
                <div className={styles.commissionItem}></div>
                <div className={styles.commissionItem}></div>
                <div className={styles.commissionItem}></div>
                <div className={styles.commissionItem}></div>
                <div className={styles.commissionItem}></div>
                <div className={styles.commissionItem}></div>        
            </div>
        </section>
    );
}