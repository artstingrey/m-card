import clsx from "clsx";
import styles from './Rules.module.scss';
import LaunchButton from "../core/launchButton/LaunchButton";
import { TG_BOT_URL } from "@/app/utils/constants";

export default function Rules () {
    return (
        <section className={styles.rules}>
            <div className={clsx("m-container-80", styles.rulesWrapper)}>
                <div className={styles.loaderWrapper}>    
                    <div className={styles.loader}>
                        <p>БЕЗ</p>
                        <div className={styles.words}>
                            <div className={styles.wordsWrapper}>
                                <span className={styles.word}>блокировок</span>
                                <span className={styles.word}>границ</span>
                                <span className={styles.word}>ожидания</span>
                                <span className={styles.word}>блокировок</span>
                                <span className={styles.word}>границ</span>
                                <span className={styles.word}>ожидания</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.divider}>
                    <div></div>
                </div>
                <div className={styles.textPart}>
                    <h2>
                        Твои деньги — твои правила.<br></br> Трать где угодно
                    </h2>
                    <p>Оформите за секунды в Telegram — платите везде, где есть Mastercard.</p>
                    <LaunchButton text="Открыть MCard" color="white" qrColor="white-transparent" labelPosition="bottom" href={TG_BOT_URL} target="_blank" styles={styles.rulesButton}/>    
                </div>
            </div>
        </section>
    );
}