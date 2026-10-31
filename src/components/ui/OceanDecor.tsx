import { motion, useReducedMotion } from "framer-motion";

type OceanDecorVariant =
  | "compass"
  | "compass-ribbon"
  | "coordinates"
  | "current"
  | "hero-map"
  | "hero-stars"
  | "project-stars"
  | "ribbon"
  | "wave";

interface OceanDecorProps {
  variant: OceanDecorVariant;
  className?: string;
}

const classNames = (variant: OceanDecorVariant, className?: string) =>
  ["ocean-decor", `ocean-decor-${variant}`, className]
    .filter(Boolean)
    .join(" ");

function WaveDecor({ className }: Pick<OceanDecorProps, "className">) {
  const reduceMotion = useReducedMotion();
  const isHeroWave = className?.includes("hero-waves");

  return (
    <motion.svg
      animate={
        reduceMotion
          ? undefined
          : isHeroWave
            ? { x: [-72, 58, -46, 72, -72], y: [0, -10, 7, -8, 0] }
            : { x: [-18, 14, -10, 18, -18], y: [0, -3, 2, -2, 0] }
      }
      aria-hidden="true"
      className={classNames("wave", className)}
      preserveAspectRatio="none"
      transition={{
        duration: isHeroWave ? 14 : 24,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      viewBox="0 0 1440 260"
    >
      <path d="M0 158C210 82 408 250 720 136S1170 88 1440 158" />
      <path d="M0 194C260 120 486 284 760 182S1165 112 1440 202" />
      <path d="M0 225C220 164 480 270 718 204S1148 144 1440 222" />
    </motion.svg>
  );
}

function CompassDecor({ className }: Pick<OceanDecorProps, "className">) {
  return (
    <svg
      aria-hidden="true"
      className={classNames("compass", className)}
      fill="none"
      viewBox="0 0 240 240"
    >
      <circle cx="120" cy="120" r="91" />
      <circle cx="120" cy="120" r="73" strokeDasharray="3 9" />
      <circle cx="120" cy="120" r="52" />
      <circle cx="120" cy="120" r="29" strokeDasharray="2 6" />
      <path d="m120 58 10 20-10 14-10-14 10-20ZM182 120l-20 10-14-10 14-10 20 10ZM120 182l-10-20 10-14 10 14-10 20ZM58 120l20-10 14 10-14 10-20-10Z" />
      <path d="m120 100 14 20-14 20-14-20 14-20Z" />
      <circle cx="120" cy="120" r="5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function RibbonDecor({ className }: Pick<OceanDecorProps, "className">) {
  return (
    <svg
      aria-hidden="true"
      className={classNames("ribbon", className)}
      fill="none"
      viewBox="0 0 1440 360"
    >
      <path
        className="ribbon-band ribbon-band-shadow"
        d="M-80 270C230 44 510 404 790 176S1210 42 1520 126"
        strokeWidth="72"
      />
      <path
        className="ribbon-band"
        d="M-80 270C230 44 510 404 790 176S1210 42 1520 126"
        strokeWidth="54"
      />
      <path
        className="ribbon-thread"
        d="M-80 270C230 44 510 404 790 176S1210 42 1520 126"
        strokeDasharray="2 18"
        strokeWidth="2"
      />
      <path
        className="ribbon-diamonds"
        d="M105 236l12-12 12 12-12 12-12-12Zm84-57 12-12 12 12-12 12-12-12Zm84-44 12-12 12 12-12 12-12-12Zm84 4 12-12 12 12-12 12-12-12Zm84 65 12-12 12 12-12 12-12-12Zm84 46 12-12 12 12-12 12-12-12Zm84-44 12-12 12 12-12 12-12-12Zm84-70 12-12 12 12-12 12-12-12Zm84-39 12-12 12 12-12 12-12-12Zm84 10 12-12 12 12-12 12-12-12Z"
        fill="currentColor"
      />
      <path
        className="ribbon-chevrons"
        d="m74 230 17 17-17 17m18-17h-39m706-76 17 17-17 17m18-17h-39m588-80 17 17-17 17m18-17h-39M270 142l12 12-12 12m14-12h-28m338 73 12 12-12 12m14-12h-28m358-92 12 12-12 12m14-12h-28"
      />
    </svg>
  );
}

function CompassRibbonDecor({ className }: Pick<OceanDecorProps, "className">) {
  return (
    <svg
      aria-hidden="true"
      className={classNames("compass-ribbon", className)}
      fill="none"
      viewBox="0 0 800 320"
    >
      <path d="M-80 86C92 42 184 194 334 180s122-92 178-66" strokeWidth="54" />
      <path d="M-80 86C92 42 184 194 334 180s122-92 178-66" strokeWidth="40" />
      <path
        d="M-80 86C92 42 184 194 334 180s122-92 178-66"
        strokeDasharray="2 15"
        strokeWidth="2"
      />
      <path
        d="m90 72 11 11-11 11-11-11 11-11Zm76 49 11 11-11 11-11-11 11-11Zm82 43 11 11-11 11-11-11 11-11Zm91 12 11 11-11 11-11-11 11-11Z"
        fill="currentColor"
      />
      <path d="M445 114h61M476 83v62" />
      <g transform="translate(500 154)">
        <circle r="102" />
        <circle r="81" strokeDasharray="3 10" />
        <circle r="57" />
        <circle r="31" strokeDasharray="2 7" />
        <path d="M0-122v41M0 81v41M-122 0h41M81 0h41" />
        <path d="m0-67 12 23-12 16-12-16L0-67ZM67 0 44 12 28 0l16-12L67 0ZM0 67-12 44 0 28l12 16L0 67ZM-67 0l23-12L-28 0l-16 12L-67 0Z" />
        <path d="m0-18 18 18L0 18-18 0 0-18Z" />
        <circle r="5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

function CurrentDecor({ className }: Pick<OceanDecorProps, "className">) {
  return (
    <svg
      aria-hidden="true"
      className={classNames("current", className)}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1440 4000"
    >
      <path d="M-100 460C110 350 330 470 520 600C680 720 800 960 910 1140C1010 1300 1000 1400 900 1500C800 1600 620 1810 520 1920C420 2070 470 2250 600 2370C730 2490 830 2600 910 2680C1020 2800 1010 2960 900 3080C790 3200 630 3320 520 3405C430 3600 610 3860 720 4000" />
      <path d="M-100 500C110 390 330 510 520 640C680 760 800 1000 910 1180C1010 1340 1000 1440 900 1540C800 1640 620 1850 520 1960C420 2110 470 2290 600 2410C730 2530 830 2640 910 2720C1020 2840 1010 3000 900 3120C790 3240 630 3360 520 3445C430 3640 610 3900 720 4040" />
      <path d="M-100 540C110 430 330 550 520 680C680 800 800 1040 910 1220C1010 1380 1000 1480 900 1580C800 1680 620 1890 520 2000C420 2150 470 2330 600 2450C730 2570 830 2680 910 2760C1020 2880 1010 3040 900 3160C790 3280 630 3400 520 3485C430 3680 610 3940 720 4080" />
    </svg>
  );
}

function HeroMapDecor({ className }: Pick<OceanDecorProps, "className">) {
  return (
    <svg
      aria-hidden="true"
      className={classNames("hero-map", className)}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1440 900"
    >
      <circle cx="720" cy="450" r="216" />
      <circle cx="720" cy="450" r="178" strokeDasharray="3 12" />
    </svg>
  );
}

function HeroStarsDecor({ className }: Pick<OceanDecorProps, "className">) {
  const reduceMotion = useReducedMotion();
  const stars = [
    { x: 232, y: 196, size: 34, delay: 0, label: "About", href: "#about" },
    {
      x: 1133,
      y: 150,
      size: 21,
      delay: 0.7,
      label: "Experience",
      href: "#experience",
    },
    {
      x: 1270,
      y: 582,
      size: 28,
      delay: 1.4,
      label: "Projects",
      href: "#projects",
    },
    { x: 352, y: 616, size: 20, delay: 2.1, label: "Skills", href: "#skills" },
    {
      x: 1059,
      y: 664,
      size: 19,
      delay: 2.8,
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <svg className={classNames("hero-stars", className)} viewBox="0 0 1440 900">
      {stars.map((star) => (
        <g
          key={`${star.x}-${star.y}`}
          transform={`translate(${star.x} ${star.y})`}
        >
          <a
            className="hero-star-link"
            href={star.href}
            aria-label={`Go to ${star.label}`}
          >
            <title>Go to {star.label}</title>
            <rect
              className="hero-star-hit-area"
              x={-star.size * 2}
              y={-star.size * 2}
              width={star.size * 4}
              height={star.size * 4}
            />
            <motion.g
              className="hero-star-mark"
              animate={reduceMotion ? undefined : { scale: [1, 1.32, 1] }}
              transition={{
                duration: 3.2,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d={`M0 ${-star.size} ${star.size} 0 0 ${star.size} ${-star.size} 0Z`}
              />
              <path
                d={`M0 ${-star.size * 0.45} ${star.size * 0.45} 0 0 ${star.size * 0.45} ${-star.size * 0.45} 0Z`}
                fill="currentColor"
              />
              <circle r={star.size * 0.14} fill="currentColor" stroke="none" />
            </motion.g>
            <text
              className="hero-star-label"
              y={star.size * 2.3}
              textAnchor="middle"
            >
              {star.label}
            </text>
          </a>
        </g>
      ))}
    </svg>
  );
}

function ProjectStarsDecor({ className }: Pick<OceanDecorProps, "className">) {
  return (
    <svg
      aria-hidden="true"
      className={classNames("project-stars", className)}
      viewBox="0 0 1440 4000"
    >
      <g transform="translate(110 710)">
        <path d="M0-18 18 0 0 18-18 0Z" />
        <path d="M0-8 8 0 0 8-8 0Z" fill="currentColor" />
      </g>
      <g transform="translate(1234 1092)">
        <path d="M0-14 14 0 0 14-14 0Z" />
        <circle r="3" fill="currentColor" />
      </g>
      <g transform="translate(147 1910)">
        <path d="M0-21 21 0 0 21-21 0Z" />
        <path d="M0-9 9 0 0 9-9 0Z" fill="currentColor" />
      </g>
      <g transform="translate(1315 2890)">
        <path d="M0-17 17 0 0 17-17 0Z" />
        <circle r="4" fill="currentColor" />
      </g>
      <g transform="translate(99 3440)">
        <path d="M0-13 13 0 0 13-13 0Z" />
        <path d="M0-5 5 0 0 5-5 0Z" fill="currentColor" />
      </g>
    </svg>
  );
}

function CoordinatesDecor({ className }: Pick<OceanDecorProps, "className">) {
  return (
    <svg
      aria-hidden="true"
      className={classNames("coordinates", className)}
      fill="none"
      viewBox="0 0 360 360"
    >
      <circle cx="180" cy="168" r="112" />
      <circle cx="180" cy="168" r="84" strokeDasharray="3 9" />
      <circle cx="180" cy="168" r="54" />
      <path d="M180 22v50M180 264v50M34 168h50M276 168h50" />
      <path d="m180 90 12 22-12 16-12-16 12-22ZM258 168l-22 12-16-12 16-12 22 12ZM180 246l-12-22 12-16 12 16-12 22ZM102 168l22-12 16 12-16 12-22-12Z" />
      <path d="M14 305c64-38 108 42 172 5s92-50 160 0" />
      <path d="M14 326c60-32 110 44 172 10s96-48 160-4" />
    </svg>
  );
}

export default function OceanDecor({ variant, className }: OceanDecorProps) {
  if (variant === "wave") return <WaveDecor className={className} />;
  if (variant === "compass") return <CompassDecor className={className} />;
  if (variant === "compass-ribbon")
    return <CompassRibbonDecor className={className} />;
  if (variant === "coordinates")
    return <CoordinatesDecor className={className} />;
  if (variant === "current") return <CurrentDecor className={className} />;
  if (variant === "hero-map") return <HeroMapDecor className={className} />;
  if (variant === "hero-stars") return <HeroStarsDecor className={className} />;
  if (variant === "project-stars")
    return <ProjectStarsDecor className={className} />;
  return <RibbonDecor className={className} />;
}
