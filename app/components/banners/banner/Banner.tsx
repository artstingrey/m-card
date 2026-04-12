import clsx from 'clsx';
import styles from './Banner.module.scss';
import Image from "next/image";
import { BaseImage } from '@/app/config/types';
import { GetHelp, OwnIt, Spend, TopUp } from '../wordsSVG';
import LaunchButton from '../../core/launchButton/launchButton';

type BannerType = {
    title: string;
    text: string;
    color: string;
    textColor?: 'black' | 'white';
    image: BaseImage;
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

export default function Banner ({title,text,color,textColor = 'black',image,imagePos = "center", wordType, wordColor}:BannerType) {
    const WordComponent = wordsComponent[wordType];
    return (
        <div className={styles.banner} style={{ backgroundColor: color }}>
            <div className={styles.bannerHeading}>
                <WordComponent color={wordColor} />
            </div>
            <div className={styles.bannerWrapper}>
                <div className={clsx(styles.image, imagePos == "bottom" ? styles.imageBottom : '')}>
                    <Image src={image.src}  alt={image.alt || "Banner image"} quality={100} width={image.width} height={image.height}/>    
                </div>
                <div className={clsx(styles.textPart, textColor == 'white' ? styles.textPartWhite : '')}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <LaunchButton text='Запустить MCard' styles={styles.launch} />
                </div>
            </div>
        </div>
    );
}