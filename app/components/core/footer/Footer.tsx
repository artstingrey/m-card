import clsx from "clsx";
import Link from "next/link";
import { mainMenu } from "@/app/config/menu.main";
import { MailIcon, TelegramGreyIcon } from "../socials/Icons";
import { FooterLogo } from "../Logo";
import { secondMenu } from "@/app/config/menu.footer";
import styles from "./Footer.module.scss";
import Socials from "../socials/Socials";
import LaunchButton from "../launchButton/LaunchButton";



export default function Footer() {
    
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerHeader}>
                    <div className={clsx("svg", styles.footerLogo)}>
                        <FooterLogo />
                    </div>
                    <Socials style={styles.footerSocials} />
                </div>
                <div className={styles.footerMiddle}>
                    <div className={styles.footerTitle}>
                        <h2>Трать так,  будто никто не<br></br> смотрит</h2>
                        <LaunchButton text="Запустить MCard" />
                    </div>
                    <div className={styles.footerMenuWrapper}>
                        <div className={styles.footerMenuColumn}>
                            <p>О нас</p>
                            <nav>
                                <ul>
                                    <li><a href="#">Где работает карта</a></li>
                                    <li><a href="#">KYC</a></li>
                                    <li><a href="#">Партнёрская программа</a></li>
                                    <li><a href="#">Поддержка</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.footerMenuColumn}>
                            <p>Узнать больше</p>
                            <nav>
                                <ul>
                                    <li><a href="#">Как это работает</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Комиссии</a></li>
                                    <li><a href="#">Безопасность</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.footerMenuColumn}>
                            <p>Следите за нами</p>
                            <nav>
                                <ul>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">Telegram</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className={styles.footerFooter}>
                    <nav className={styles.terms}>
                        <ul>
                            <li><Link href="#">Terms of Service</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </nav>
                    <p className={styles.copy}>© {year} MCards. All rights reserved.</p>
                </div>    
            </div>    
        </footer>
    );
}