'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import QrButton from "../qrButton/QrButton";
import { mainMenu } from "@/app/config/menu.main";
import MenuSection from "../menuSection/MenuSection";
import { Logo } from "../Logo";
import clsx from "clsx";
import { styleText } from "util";

type HeaderProps = {
  color?: "black" | "white" | "";
};

export default function Header({ color = '' }: HeaderProps) {
  const [isActive, seActive] = useState(false);
  const [headerColorClass, setActiveColor] = useState<string>(color);
  const scrolled = false;
  
  const openMenu = () => {
    seActive(true);
  }

  const closeMenu = () => {
    seActive(false);
  };

  let tempHeaderColorClass = "";

  if(color == "black") {
    tempHeaderColorClass = 'header--black';
  }

  if(scrolled) {
    tempHeaderColorClass = 'header--change';
  }

  // useEffect(() => {
  //   if(color == 'black') {
  //     setActiveColor('header--black');
  //   }

  //   if (scrolled) {
  //     setActiveColor('header--scrolled');
  //   }
  // }, [color,scrolled]);

  return (
    <>
      <MenuSection isActive={isActive} closeMenu={closeMenu}/>
      <header className={clsx("header header--normal", tempHeaderColorClass)}>
          <div className="header-wrapper">
            <div className="header-main">
                <div className="header__left_part">
                  <Link href="/" className="logo svg">
                    <svg className="logo-m" width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M36.8363 30L36.8354 29.9995L27.9062 24.8474V5.65336L36.8363 0.500854V30Z" fill="url(#paint0_linear_166_24660)"/>
                      <path d="M18.418 20.9317V10.6267L36.8357 0V10.305L18.4188 20.9312L18.418 20.9317Z" fill="url(#paint1_linear_166_24660)"/>
                      <path d="M-0.000351906 30L0.000502586 29.9995L8.92969 24.8474L8.92969 5.65337L-0.000351906 0.500862L-0.000351906 30Z" fill="url(#paint2_linear_166_24660)"/>
                      <path d="M18.418 20.9318V10.6268L0.000232697 9.91821e-05L0.000232697 10.3051L18.4171 20.9313L18.418 20.9318Z" fill="url(#paint3_linear_166_24660)"/>
                      <defs>
                      <linearGradient id="paint0_linear_166_24660" x1="32.3713" y1="0.500854" x2="32.3713" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3223FA"/>
                      <stop offset="1" stopColor="#23DBE1"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_166_24660" x1="27.6268" y1="0" x2="27.6268" y2="20.9317" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#19D6F1"/>
                      <stop offset="1" stopColor="#3433FF"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_166_24660" x1="4.46467" y1="30" x2="4.46467" y2="0.500862" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#19C8F3"/>
                      <stop offset="1" stopColor="#3433FF"/>
                      </linearGradient>
                      <linearGradient id="paint3_linear_166_24660" x1="9.2091" y1="20.9318" x2="9.2091" y2="9.91821e-05" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6564FF"/>
                      <stop offset="1" stopColor="#18EDDC"/>
                      </linearGradient>
                      </defs>
                    </svg>
                    <Logo />
                  </Link>
                  <nav className="main-menu">
                    <ul>
                      {mainMenu.map((item) => {
                          return <li key={item.key}><Link href={item.href}>{item.labelKey}</Link></li>
                      })}
                    </ul>
                  </nav>
                </div>

                <div className="header__right_part"> 
                  <div className="s-button-launch-wrapper-reverse">
                    <Link href="#" className="s-button s-button--small">Запустить MCard</Link>
                    <QrButton isSmall={true} clickEvent={openMenu}/>
                  </div>
                </div>
              </div>
          </div>
      </header>
    </>
  );
}
