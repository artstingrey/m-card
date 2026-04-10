import clsx from 'clsx';
import styles from './Banners.module.scss';
import Banner from './banner/Banner';

export default function Banners () {
    const bannersList = [
        {
            title: 'Пополняйте криптой',
            text: 'Отправляйте USDT или другую поддерживаемую криптовалюту и начните тратить всего за несколько секунд',
            color: '#F4EFE8',
            image: {
                src: 'images/banners/banner1.png',
                width: 1840,
                height: 834,
                alt: 'Banner image'
            },
            imagePos: 'center',
            wordType: 'topUpp',
            wordColor: '#ECE3DB'
        },
        {
            title: 'Пополняйте карту рублями через СБП',
            text: 'Переведите рубли через СБП — и баланс вашей карты будет пополнен мгновенно',
            color: '#EEC9F5',
            image: {
                src: 'images/banners/banner2.png',
                width: 1440,
                height: 816,
                alt: 'Banner image'
            },
            imagePos: 'center',
            wordType: 'topUpp',
            wordColor: '#ECB9EB'
        },
        {
            title: 'Тратьте по всему миру',
            text: 'Ваша карта работает за границей так же просто, как дома',
            color: 'rgba(0, 180, 255, 0.5)',
            image: {
                src: 'images/banners/banner3.png',
                width: 1840,
                height: 1800,
                alt: 'Banner image'
            },
            imagePos: 'bottom',
            wordType: 'spend',
            wordColor: '#73CCF7'
        },
        {
            title: 'Работает c Apple Pay & Google Pay',
            text: 'От подписок на стриминг до бронирования путешествий — всё оплачивается без проблем.',
            color: '#F4EFE8',
            image: {
                src: 'images/banners/banner4.png',
                width: 1840,
                height: 1800,
                alt: 'Banner image'
            },
            imagePos: 'bottom',
            wordType: 'spend',
            wordColor: '#ECE3DB'
        },
        {
            title: 'личное остаётся личным',
            text: 'Мы не собираем больше информации, чем необходимо. Без долгих проверок — ваша карта готова всего за 60 секунд.',
            color: '#EEC9F5',
            image: {
                src: 'images/banners/banner5.png',
                width: 1287,
                height: 821,
                alt: 'Banner image'
            },
            imagePos: 'center',
            wordType: 'ownIt',
            wordColor: '#ECB9EB'
        },
        {
            title: 'Поддержка 24/7',
            text: 'Помощь всегда рядом — наша команда на связи днём и ночью.',
            color: '#1E1E1E',
            image: {
                src: 'images/banners/banner6.png',
                width: 1840,
                height: 1800,
                alt: 'Banner image'
            },
            imagePos: 'center',
            wordType: 'getHelp',
            wordColor: '#1E1E1E'
        }
    ];
    return (
        <section className={clsx("section-v-gap-0-64",styles.banners)}>
            {bannersList.map((option, index) => {
                return <Banner key={'banner-' + index} title={option.title} text={option.text} color={option.color} image={option.image} imagePos={option.imagePos} wordType={option.wordType} wordColor={option.wordColor}/>
            })}
        </section>
    );
}