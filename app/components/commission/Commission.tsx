import clsx from 'clsx';
import styles from './Commission.module.scss';
import { createKey } from 'next/dist/shared/lib/router/router';
import SectionLabel from '../sectionLabel/SectionLabel';


export default function Commission () {
    return (
        <section className={clsx("section-v-gap-80-112","m-container")}>
            <SectionLabel text="комиссии" color="black"/>
            <h2 className="t-center">Вы всегда знаете,<br></br> за что платите</h2>
            <div className={styles.commissionsContainer}>
                <div className={styles.commissionItem}>
                    <h3>Выпуск<br></br> карты</h3>
                    <div className={styles.commissionItemText}>
                        <p>Единоразовая плата за мгновенную активацию вашей виртуальной Mastercard</p>
                        <p className={styles.commissionPrice}>25$</p>
                    </div>
                </div>
                <div className={styles.commissionItem}>
                    <h3>Первый<br></br> депозит</h3>
                    <div className={styles.commissionItemText}>
                        <p>Минимальная сумма для старта — пополните рублями или криптой</p>
                        <p className={styles.commissionPrice}><span>мин.</span> 25$</p>
                    </div>
                </div>
                <div className={styles.commissionItem}>
                    <h3>Комиссия<br></br> за пополнение</h3>
                    <div className={styles.commissionItemText}>
                        <p>Покрывает быстрое и безопасное зачисление средств</p>
                        <p className={styles.commissionPrice}><span>фикс.</span> 4%</p>
                    </div>
                </div>
                <div className={styles.commissionItem}>
                    <h3>Комиссия<br></br> за транзакцию</h3>
                    <div className={styles.commissionItemText}>
                        <p>Небольшая плата за каждый платёж</p>
                        <p className={styles.commissionPrice}>$0.25 <span>+.4%</span></p>
                    </div>
                </div>
                <div className={clsx(styles.commissionItem, styles.commissionItemCard)}>
                    <img src="/svg/Card.svg" alt="card" width={698} height={485} loading='lazy' decoding='async'/>
                </div>
                <div className={styles.commissionItem}>
                    <h3>Ежемесячная<br></br> плата</h3>
                    <div className={styles.commissionItemText}>
                        <p>Никаких регулярных списаний — платите только за то, чем пользуетесь</p>
                        <p className={styles.commissionPrice}>0$</p>
                    </div>
                </div>        
            </div>
        </section>
    );
}