import Footer from '../components/core/footer/Footer';
import Header from '../components/core/header/Header';

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header color='black-text' />
      {children}
      <Footer />
    </>
  );
}
