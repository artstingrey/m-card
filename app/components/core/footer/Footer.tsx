import clsx from "clsx";
import Link from "next/link";
import { mainMenu } from "@/app/config/menu.main";
import { MailIcon, TelegramGreyIcon } from "../socials/Icons";
import { FooterLogo } from "../Logo";
import { secondMenu } from "@/app/config/menu.footer";
import styles from "./Footer.module.scss";



export default function Footer() {
    
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerHeader}>
                    <div className={clsx("svg", styles.footerLogo)}>
                        <FooterLogo />
                    </div>
                    
                </div>    
            </div>    
        </footer>
    );
}