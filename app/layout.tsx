import {inter, bion} from './fonts';
import "@/app/styles/global.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCard — Виртуальная карта Mastercard для оплаты криптой и рублями",
  description: "Получите виртуальную карту Mastercard за 60 секунд прямо в Telegram. Пополняйте криптовалютой (USDT) или рублями через СБП. Работает с Apple Pay, Google Pay, Amazon, Booking, Spotify и тысячами других сервисов по всему миру.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const className = `${inter.variable} ${bion.variable}`;

  return (
    <html lang="en" className={className}>
      <body>
        {children}
      </body>
    </html>
  );
}
