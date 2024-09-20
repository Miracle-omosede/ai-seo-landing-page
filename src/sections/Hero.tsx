import Button from "@/components/Button";
import starsBg from "@/assets/stars.png"

export const Hero = () => {
  return(
    <section className="h-[492px] flex items-center" style={{
      backgroundImage: `url(${starsBg.src})`
    }}>
      <div className="absolute h-64 w-64 bg-purple-500 rounded-full border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgba(184,148,277)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5), -20px_-20px_80px_rgb(255,255,255,.1)]"></div>
    <div className="container relative">
      <h1 className="text-7xl font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-white text-transparent bg-clip-text text-center">AI SEO</h1>
      <p className="text-lg text-white/70 mt-5 text-center">Elevate your site&apos;s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
      <div className="flex justify-center mt-5">
      <Button>Join waitlist</Button>
      </div>
    </div>
    </section>
  );
};
