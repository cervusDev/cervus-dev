import "../global.css";
import { logos } from "@/constants/logos";

export default function LogosSlider() {
  return (
    <div className="relative mt-68 overflow-hidden py-16 bg-white whitespace-nowrap">
      <div className="logos-slide inline-block animate-slide hover:[animation-play-state:paused]">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-12 mx-10 inline-block"
          />
        ))}
      </div>
    </div>
  );
}
