import Banners from "./components/banners/Banners";
import Commission from "./components/commission/Commission";
import Hero from "./components/hero/Hero";
import HowItWork from "./components/howItWork/HowItwork";
import RunningLine from "./components/runningLine/RunningLine";

export default function Home() {
  return (
    <main role="main">
      <Hero />
      <RunningLine />
      <HowItWork />
      <Banners />
      <Commission />
    </main>
  );
}