'use client';
import clsx from "clsx";
import { useContactFormStore } from "@/app/stores/useContactFormStore";
import { useTranslations } from "next-intl";
import styles from "./Footer.module.scss";

export default function OpenForm() {
    const openContactForm = useContactFormStore((s) => s.open);
    const fFooterMain = useTranslations("footer.footerMain");

    const mainText = fFooterMain.raw('text') as string[];
    const linkVisible = fFooterMain.raw('textLinkVisible') as string[];
    const linkHover = fFooterMain.raw('textLinkInVisible') as string[];
    
    return (
        <button className={clsx(styles.linkPart, styles.footerHoverPart)} onClick={openContactForm}>
            <p>{mainText[0]}<br/>{mainText[1]}<br/> <span className={styles.footerHoverPartLink}><span className={styles.footerHoverPartLinkTextIn}><span>{linkVisible[0]}</span> <span>{linkVisible[1]}</span></span><span className={styles.footerHoverPartLinkTextOut}><span>{linkHover[0]}</span> <span>{linkHover[1]}</span> <span>{linkHover[2]}</span></span></span></p>
            <span className={clsx("svg", styles.rowIcon)} >
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66154 34L0 30.3385L25.1077 5.23077H2.61538V0H34V31.3846H28.7692V8.89231L3.66154 34Z" fill="white"/>
                </svg>
            </span>
        </button>
    );
}