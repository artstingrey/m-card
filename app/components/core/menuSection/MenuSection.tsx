import { ACTIVE_CLASS, TG_BOT_URL } from "@/app/utils/constants";
import Link from "next/link";
import { LogoBlack } from "../Logo";
import { mainMenu } from "@/app/config/menu.main";


type MenuSectionProps = {
 isActive: boolean;
 closeMenu?: () => void;
};

export default function MenuSection({isActive, closeMenu}:MenuSectionProps) {
    
    return (
        <div className={`mobile-menu-section ${isActive ? ACTIVE_CLASS : ''}`} onClick={closeMenu}>
            <div className="mobile-menu-section-wrapper">
                <div className="mobile-menu__header">
                    <Link className="mobile-menu__logo svg" href="/">
                        <LogoBlack />
                    </Link>    
                    <button className="mobile-menu__close" onClick={closeMenu}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_213_3371" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                            <rect width="32" height="32" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_213_3371)">
                            <path d="M8.53391 24.8716L7.12891 23.4666L14.5956 16L7.12891 8.5333L8.53391 7.1283L16.0006 14.595L23.4672 7.1283L24.8722 8.5333L17.4056 16L24.8722 23.4666L23.4672 24.8716L16.0006 17.405L8.53391 24.8716Z" fill="#1C1B1F"/>
                            </g>
                        </svg>
                    </button>
                </div>

                <nav className="mobile-menu__list">
                    <ul>
                        {mainMenu.map((item) => {
                            return <li key={item.key}><Link href={item.href}>{item.labelKey}</Link></li>
                        })}
                    </ul>
                </nav>

                <div className="mobile-menu__footer">
                    <a href={TG_BOT_URL} target="_blank" className="s-button" rel="nonoopener nofollow">Запустить MCard</a>
                </div>
            </div>    
        </div>
    );
}