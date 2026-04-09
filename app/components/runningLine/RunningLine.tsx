import clsx from 'clsx';
import styles from './RunningLine.module.scss';

export default function RunningLine () {

    const logos = [
        {src: "/images/logos/airbnb.svg", alt: "airbnb", width: "161px"},
        {src: "/images/logos/aliexpress.svg", alt: "aliexpress", width: "185px"},
        {src: "/images/logos/amazon.svg", alt: "amazon", width: "120px" },
        {src: "/images/logos/booking.svg", alt: "booking", width: "189px"},
        {src: "/images/logos/spotifiy.svg", alt: "spotifiy", width: "167px"},
        {src: "/images/logos/uber.svg", alt: "uber", width: "116px" },
        {src: "/images/logos/wizz.svg", alt: "uber", width: "87px" },
        {src: "/images/logos/youtube.svg", alt: "youtube", width: "180px" },
        {src: "/images/logos/zara.svg", alt: "zara", width: "96px" },


        {src: "/images/logos/airbnb.svg", alt: "airbnb", width: "161px"},
        {src: "/images/logos/aliexpress.svg", alt: "aliexpress", width: "185px"},
        {src: "/images/logos/amazon.svg", alt: "amazon", width: "120px" },
        {src: "/images/logos/booking.svg", alt: "booking", width: "189px"},
        {src: "/images/logos/spotifiy.svg", alt: "spotifiy", width: "167px"},
        {src: "/images/logos/uber.svg", alt: "uber", width: "116px" },
        {src: "/images/logos/wizz.svg", alt: "wizz", width: "87px" },
        {src: "/images/logos/youtube.svg", alt: "youtube", width: "180px" },
        {src: "/images/logos/zara.svg", alt: "zara", width: "96px" },
    ];

    return (
        <section className={styles.runningLine}>
            <h2 className={styles.runningLineTitle}>Платите везде, где<br/> принимают Mastercard</h2> 

            <div className={clsx('running-line', styles.runningLineWrapper)}>
                <div className="running-line-wrap">
                    <div className={clsx('initial-child-container', styles.runningLineInitial)}>
                        {logos.map((logo, index) => (
                            <div key={index + "logo1"} className={clsx('running-line-item', styles.runningLineItem)} style={{width: logo.width}}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    loading="lazy"
                                    decoding="async"
                                    // width={96} height={32}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="running-line-wrap">
                    <div className={clsx('initial-child-container', styles.runningLineInitial)}>
                        {logos.map((logo, index) => (
                            <div key={index + "logo2"} className={clsx('running-line-item', styles.runningLineItem)} style={{width: logo.width}}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    loading="lazy"
                                    decoding="async"
                                    // width={96} height={32}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>    
        </section>
    );
}