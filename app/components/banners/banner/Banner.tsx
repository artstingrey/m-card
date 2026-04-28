import clsx from 'clsx';
import styles from './Banner.module.scss';
import Image from "next/image";
import { BaseImage } from '@/app/config/types';
import { GetHelp, OwnIt, Spend, TopUp } from '../wordsSVG';

import type { CSSProperties } from 'react';
import LaunchButton from '../../core/launchButton/LaunchButton';

type BannerType = {
    index: number;
    progress?: number;
    title: string;
    text: string;
    color: string;
    textColor?: 'black' | 'white';
    image: BaseImage;
    imageMob: BaseImage;
    imageMobPos?: number;
    imagePos?: "center" | "bottom"
    wordType: "topUp" | "spend" | "ownIt" | "getHelp";
    wordColor: string;
};

const wordsComponent = {
    topUp: TopUp,
    spend: Spend,
    ownIt: OwnIt,
    getHelp: GetHelp
};

export default function Banner ({index,progress = 0,title,text,color,textColor = 'black',image,imageMob,imageMobPos = 0,imagePos = "center", wordType, wordColor}:BannerType) {
    const WordComponent = wordsComponent[wordType];
    const rotateEnd = index % 2 === 0 ? 10 : -10;
    const translateKoef = progress > 0.9 ? 200 : 100;
    const progresStart = progress > 0.1 ? true : false;

    const bannerStyle: CSSProperties = {
        backgroundColor: color,
        ['--banner-progress' as string]: progress,
        ['--banner-rotate-end' as string]: index % 2 === 0 ? -10 : 10,
        transform: "rotate(" + progress * rotateEnd * 1 + "deg) scale(" + (1 - progress / 2) + ") translateY(" + progress * translateKoef + "px)",
    };

    return (
        <div className={clsx(styles.banner, progresStart ? styles.bannerRound : "")} style={bannerStyle} data-header-color-class="header--white-transparent">
            <div className={styles.bannerHeading}>
                <WordComponent color={wordColor} />
            </div>
            <div className={styles.bannerWrapper}>
                <div className={clsx(styles.image, imagePos == "bottom" ? styles.imageBottom : '')}>
                    <Image src={imageMob.src} alt={imageMob.alt || "Banner image"} quality={100} width={imageMob.width} height={imageMob.height} style={{bottom: -imageMobPos + "px"}}/>
                    <Image src={image.src} alt={image.alt || "Banner image"} quality={100} width={image.width} height={image.height}/>    
                </div>
                <div className={clsx(styles.textPart, textColor == 'white' ? styles.textPartWhite : '')}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <LaunchButton text='Запустить MCard' labelPosition='top-left' styles={styles.launch} />
                </div>
            </div>
        </div>
    );
}