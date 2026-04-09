import clsx from 'clsx';
import { FacebookIcon, TelegramIcon, XIcon } from './Icons';
import styles from './ShareButtons.module.scss';


type ShareButtonsProps = {
  url: string;        
  shareTitle?: string; 
  className?: string;
  title?: string;
};

function encode(v: string) {
  return encodeURIComponent(v ?? '');
}

export default function ShareButtons({ url, shareTitle = '', className = '', title = 'Share' }: ShareButtonsProps) {
    const shareUrl = encode(url);
    const shareText = encode(shareTitle);   
    const color = '#5229C5';
    const colorBg = '#F5F5F5';

    const links = [
        {
            key: 'x',
            href: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
            label: 'Share on X',
            renderIcon: () => <XIcon color={color} colorBg={colorBg} />
        },
        {
            key: 'facebook',
            href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
            label: 'Share on Facebook',
            renderIcon: () => <FacebookIcon color={color} colorBg={colorBg} />,
        },
        {
            key: 'telegram',
            href: `https://t.me/share/url?url=${shareUrl}&text=${shareText}`,
            label: 'Share on Telegram',
            renderIcon: () => <TelegramIcon color={color} colorBg={colorBg} />
        }
  ];

  return (
    <div className={className}>
      <p className={styles.title}>{title}</p>
      <div className={styles.shares}>
        {links.map(({key, href, label, renderIcon}) => (
          <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="svg">
            {renderIcon()}
          </a>
        ))}
      </div>
    </div>
  );
}