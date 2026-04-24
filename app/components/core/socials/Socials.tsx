import clsx from "clsx";
import { InstagramIcon, TelegramIcon } from "./Icons";
import styles from "./Socials.module.scss";

type SocialsType = {
    style?: string;
    color?: string;
};

export default function Socials({style = "", color = ''}:SocialsType) {
    return (
       <div className={clsx(styles.socials, style)}>
            <a href="#" className="svg" target="_blank" rel="noreferrer noopener">
                <InstagramIcon />
            </a>
            <a href="#" className="svg" target="_blank" rel="noreferrer noopener">
                <TelegramIcon />
            </a>
        </div>
    );
}