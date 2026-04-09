import clsx from "clsx";
import Link from "next/link";
import { mainMenu } from "@/app/config/menu.main";
import { MailIcon, TelegramGreyIcon } from "../socials/Icons";
import { FooterLogo } from "../Logo";
import SButton from "../buttons/sButton";
import { MainLink, TelegramLink } from "../../mailLink/MailLink";
import { secondMenu } from "@/app/config/menu.footer";
import { useTranslations } from "next-intl";
import OpenForm from "./OpenForm";
import styles from "./Footer.module.scss";



export default function Footer() {
    
    const year = new Date().getFullYear();

    const tMenu = useTranslations('mainMenu');
    const tSecondMenu = useTranslations("secondMenu");
    
    const tFooter = useTranslations("footer");
    const fFooterportfolio = useTranslations("footer.portfolio");

    const copyText = "© " + year + " MaxDev. " + tFooter('copy');

    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.topPart}>
                    <OpenForm />
                    <div className={clsx(styles.footerHoverPart, styles.footerPorfolioPart)}>
                        <div className="subtitle pusle-dot pusle-dot--inner-pulse">{fFooterportfolio("subTitle")}</div>
                        <div className={styles.footerPorfolioPartBottom}>
                            <p>{fFooterportfolio("text")}</p>
                            <SButton text={fFooterportfolio("linkTex")} url="#how-we-work" typeLink="link" icon={true} />
                        </div>    
                    </div>
                </div>
                <div className={styles.bottomPart}>
                    <div className={styles.footerMenuPart}>
                        <div className={styles.footerContacts}>
                            <nav className={styles.footerMenu}>
                                <ul>
                                    {mainMenu.map((menuItem) => {
                                        return (
                                        <li key={menuItem.key}>
                                            <Link href={menuItem.href}>
                                            {tMenu(menuItem.key)}
                                            <span>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0_94_559" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                                    <rect x="7.86806e-07" y="18" width="18" height="18" transform="rotate(-90 7.86806e-07 18)" fill="#D9D9D9"/>
                                                    </mask>
                                                    <g mask="url(#mask0_94_559)">
                                                    <path d="M3.375 9.5625L12.4703 9.5625L8.19806 13.8347L9 14.625L14.625 9L9 3.375L8.19806 4.16531L12.4703 8.4375L3.375 8.4375L3.375 9.5625Z" fill="white"/>
                                                    </g>
                                                </svg>
                                            </span>
                                            </Link>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </nav>

                            <div className={styles.contactIcons}>
                                <a href="#" className="contact-button">
                                    <span className="icon svg">
                                        <MailIcon />
                                    </span>
                                </a> 
                                <a href="#" className="contact-button">
                                    <span className="icon svg">
                                        <TelegramGreyIcon />
                                    </span>
                                </a>
                                
                                <MainLink text="hello@maxdev.io" className={styles.footerMailLink} />
                                <div className={styles.mailDelimiter}></div>
                                <TelegramLink text="Telegram" className={styles.footerMailLink} />
                            </div>
                        </div>
                        <div className={styles.termsPart}>
                            <p className={styles.copy}>{copyText}</p>
                            <div className={styles.termsLinks}>
                                {secondMenu.map((menuItem) => {
                                    return <Link key={menuItem.key} href={menuItem.href}>{tSecondMenu(menuItem.key)}</Link>
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={styles.footerLogoPart}>
                        <div className="footer-logo svg">
                            <FooterLogo />
                        </div>
                        <div className={styles.termsPart}>
                            <div className={styles.termsLinks}>
                                {secondMenu.map((menuItem) => {
                                    return <Link key={menuItem.key} href={menuItem.href}>{tSecondMenu(menuItem.key)}</Link>
                                })}
                            </div>
                            <p className={styles.copy}>{copyText}</p>
                        </div>
                    </div>

                </div>    
            </div>
        </footer>
    );
}