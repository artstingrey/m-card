'use client';

import clsx from 'clsx';
import styles from './Banners.module.scss';
import Banner from './banner/Banner';
import { useCallback, useEffect, useRef, useState } from 'react';

const BANNERS_LIST = [
    {
        title: 'Пополняйте криптой',
        text: 'Отправляйте USDT или другую поддерживаемую криптовалюту и начните тратить всего за несколько секунд',
        color: '#F4EFE8',
        image: {
            src: '/images/banners/banner1.png',
            width: 1840,
            height: 834,
            alt: 'Banner image'
        },
        imageMobPos: 0, 
        imagePos: 'center' as const,
        wordType: 'topUp' as const,
        wordColor: '#ECE3DB'
    },
    {
        title: 'Пополняйте карту рублями через СБП',
        text: 'Переведите рубли через СБП — и баланс вашей карты будет пополнен мгновенно',
        color: '#EEC9F5',
        image: {
            src: '/images/banners/banner2.png',
            width: 1840,
            height: 1800,
            alt: 'Banner image'
        },
        imageMobPos: 80, 
        imagePos: 'center' as const,
        wordType: 'topUp' as const,
        wordColor: '#ECB9EB'
    },
    {
        title: 'Тратьте по всему миру',
        text: 'Ваша карта работает за границей так же просто, как дома',
        color: 'rgba(0, 180, 255, 1)',
        image: {
            src: '/images/banners/banner3.png',
            width: 1840,
            height: 1800,
            alt: 'Banner image'
        },
        imageMobPos: 40, 
        imagePos: 'bottom' as const,
        wordType: 'spend' as const,
        wordColor: '#73CCF7'
    },
    {
        title: 'Работает c Apple Pay & Google Pay',
        text: 'От подписок на стриминг до бронирования путешествий — всё оплачивается без проблем.',
        color: '#F4EFE8',
        image: {
            src: '/images/banners/banner4.png',
            width: 1840,
            height: 1800,
            alt: 'Banner image'
        },
        imageMobPos: 40, 
        imagePos: 'bottom' as const,
        wordType: 'spend' as const,
        wordColor: '#ECE3DB'
    },
    {
        title: 'личное остаётся личным',
        text: 'Мы не собираем больше информации, чем необходимо. Без долгих проверок — ваша карта готова всего за 60 секунд.',
        color: '#EEC9F5',
        image: {
            src: '/images/banners/banner5.png',
            width: 1840,
            height: 1800,
            alt: 'Banner image'
        },
        imageMobPos: 84, 
        imagePos: 'center' as const,
        wordType: 'ownIt' as const,
        wordColor: '#ECB9EB'
    },
    {
        title: 'Поддержка 24/7',
        text: 'Помощь всегда рядом — наша команда на связи днём и ночью.',
        color: '#1E1E1E',
        textColor: 'white' as const,
        image: {
            src: '/images/banners/banner6.png',
            width: 1840,
            height: 1800,
            alt: 'Banner image'
        },
        imageMobPos: 0,
        imagePos: 'center' as const,
        wordType: 'getHelp' as const,
        wordColor: '#353535'
    }
];

const BANNER_COUNT = BANNERS_LIST.length;

const ZEROS = Array.from({ length: BANNER_COUNT }, () => 0);

export default function Banners () {
    const sectionRef = useRef<HTMLDivElement>(null);

    const [progressList, setProgressList] = useState<number[]>(() => [...ZEROS]);

    const resetProgress = useCallback(() => {
        setProgressList((prev) => {
            const same = prev.every((value, index) => value === ZEROS[index]);
            return same ? prev : [...ZEROS];
        });
    }, []);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        let rafId = 0;
        let scrollAttached = false;

        const updateProgress = () => {
            rafId = 0;
            const rect = section.getBoundingClientRect();
            const vh = window.innerHeight;

            // Секция не пересекает viewport — не считаем
            if (rect.bottom <= 0 || rect.top >= vh) {
                resetProgress();
                return;
            }

            // Видно секцию, но верх ещё не у верха экрана — sticky не начался
            if (rect.top > 0) {
                resetProgress();
                return;
            }

            // На всякий случай: низ ушёл вверх (секция не видна)
            if (rect.bottom <= 0) {
                resetProgress();
                return;
            }

            const computed = window.getComputedStyle(section);
            const paddingTop = Number.parseInt(computed.paddingTop, 10) || 0;
            const scrolledPastTop = Math.abs(rect.top);
            const sectionHeight = (rect.height - paddingTop) / BANNER_COUNT;

            const nextProgress = BANNERS_LIST.map((_, index) => {
                if (index === BANNER_COUNT - 1) {
                    return 0;
                }

                const rawProgress = scrolledPastTop / sectionHeight - index;

                if (rawProgress <= 0) {
                    return 0;
                }

                if (rawProgress >= 1) {
                    return 1;
                }
                
                if(rawProgress < 0.3) {
                    return 0;
                } else {
                    return Number((rawProgress - 0.3).toFixed(3));
                }

                return Number(rawProgress.toFixed(3));
            });

            setProgressList((prevProgress) => {
                const hasChanges = prevProgress.some((value, index) => value !== nextProgress[index]);
                return hasChanges ? nextProgress : prevProgress;
            });
        };

        const handleScroll = () => {
            if (rafId) {
                return;
            }

            rafId = window.requestAnimationFrame(updateProgress);
        };

        const attachScroll = () => {
            if (scrollAttached) {
                return;
            }

            scrollAttached = true;
            updateProgress();
            window.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('resize', handleScroll);
        };

        const detachScroll = () => {
            if (!scrollAttached) {
                return;
            }

            scrollAttached = false;
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);

            if (rafId) {
                window.cancelAnimationFrame(rafId);
                rafId = 0;
            }

            resetProgress();
        };

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (!entry) {
                    return;
                }

                if (entry.isIntersecting) {
                    attachScroll();
                } else {
                    detachScroll();
                }
            },
            { root: null, threshold: 0 }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
            detachScroll();
        };
    }, [resetProgress]);

    return (
        <section
            ref={sectionRef}
            data-header-color-class="header--white-transparent"
            className={clsx("section-v-gap-0-64","m-container",styles.banners)}
        >
            {BANNERS_LIST.map((option, index) => {
                return <Banner key={'banner-' + index} progress={progressList[index]} index={index} title={option.title} text={option.text} color={option.color} textColor={option?.textColor} image={option.image} imageMobPos={option.imageMobPos} imagePos={option.imagePos} wordType={option.wordType} wordColor={option.wordColor}/>
            })}
        </section>
    );
}
