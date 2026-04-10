import Banners from "./components/banners/Banners";
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
    </main>
  );
}