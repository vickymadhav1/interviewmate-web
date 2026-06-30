import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-48 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[180px]" />

        <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <HeroLeft />

        <HeroRight />

      </div>

    </section>
  );
}