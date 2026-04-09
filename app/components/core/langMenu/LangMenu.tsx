
'use client';
import { Link, usePathname } from "@/i18n/navigation";
import clsx from "clsx";
import {useLocale} from 'next-intl';
import styles from "./LangMenu.module.scss";

type LangMenuProps = {
  className?: string;
};

export default function LangMenu({className = ''}:LangMenuProps) {
    const currentLocale = useLocale();
    const pathname = usePathname();
    const nextLocale = currentLocale == 'en' ? 'ru' : 'en';
    const lang = currentLocale == 'en' ? 'RU' : 'EN';
    

    return (
        <Link href={pathname} locale={nextLocale} className={clsx(styles.langLink, className)}>{lang}</Link>
    );
}