
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Globe2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";


const particles = Array.from({ length: 34 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  delay: `${(i * 0.37) % 5}s`,
  duration: `${3 + (i % 5)}s`,
  size: 3 + (i % 4) * 2,
  color: ["#67e8f9", "#f9d78c", "#5eead4", "#ffffff"][i % 4],
}));

const confetti = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  left: `${(i * 43 + 7) % 100}%`,
  delay: `${(i % 12) * 0.085}s`,
  duration: `${2.5 + (i % 5) * 0.35}s`,
  color: [
    "#f8d88d",
    "#5eead4",
    "#67e8f9",
    "#ffffff",
    "#f9a8d4",
  ][i % 5],
  rotate: `${(i * 73) % 360}deg`,
}));

export default function LaunchWelcome({ onEnter }) {
  const [count, setCount] = useState(1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setCount(2), 950),
      setTimeout(() => setCount(3), 1900),
      setTimeout(() => setReady(true), 2850),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main className="launch-screen relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#061c2a] px-4 py-5 text-white sm:px-6 lg:px-10">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,#18546a_0%,#0c3447_43%,#061c2a_85%)]" />

      <div className="launch-glow pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px]" />

      <div className="launch-glow pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-teal-400/10 blur-[100px]" />

      {/* Decorative rings */}
      <div className="launch-spin pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10 sm:h-[650px] sm:w-[650px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 sm:h-[500px] sm:w-[500px]" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            className="launch-particle absolute bottom-[-15px] rounded-full"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow: `0 0 12px ${p.color}`,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Celebration confetti */}
      {ready && (
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
          {confetti.map((item) => (
            <span
              key={item.id}
              className="launch-confetti absolute -top-5 h-3 w-1.5 rounded-sm"
              style={{
                left: item.left,
                backgroundColor: item.color,
                animationDelay: item.delay,
                animationDuration: item.duration,
                transform: `rotate(${item.rotate})`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1250px] flex-col items-center justify-center text-center">

        {/* Logo */}
        <div className="launch-appear mb-4 flex items-center justify-center rounded-2xl border border-white/20 bg-white/95 px-4 py-2 shadow-[0_12px_50px_rgba(0,0,0,0.2)] sm:mb-5">
          <img
            src="/logo.png"
            alt="Akeso Global Medical"
            className="h-14 w-auto max-w-[300px] object-contain sm:h-14"
          />
        </div>

        {/* Launch badge */}
        <div className="launch-appear mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-cyan-200 backdrop-blur-md sm:mb-5 sm:text-xs sm:tracking-[0.2em]">
          <Sparkles size={15} className="shrink-0 text-amber-200" />
          A New Era of Global Healthcare
          <Sparkles size={15} className="hidden shrink-0 text-amber-200 sm:block" />
        </div>

        {/* Heading */}
        <h1 className="launch-appear max-w-5xl text-[clamp(2rem,5.4vw,4.8rem)] font-semibold leading-[1.12] tracking-tight">
          Your Health.{" "}
          <span className="launch-shimmer bg-gradient-to-r from-white via-cyan-200 to-teal-300 bg-clip-text text-transparent">
            Our World.
          </span>
        </h1>

        {/* Description */}
        <p className="launch-appear mt-3 max-w-2xl text-xs leading-6 text-slate-200 sm:mt-4 sm:text-base sm:leading-7">
          Connecting you to trusted healthcare, across borders.
          <span className="hidden sm:inline">
            {" "}Your journey towards better health begins here.
          </span>
        </p>

        {/* Countdown / Celebration */}
        <div className="mt-5 flex h-[115px] flex-col items-center justify-center sm:mt-6 sm:h-[130px]">

          {!ready ? (
            <div
              key={count}
              className="launch-count flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 shadow-[0_0_50px_rgba(94,234,212,0.2)] sm:h-28 sm:w-28"
            >
              <span className="text-6xl font-light tabular-nums text-cyan-100 sm:text-7xl">
                {count}
              </span>
            </div>
          ) : (
            <div className="launch-celebrate flex flex-col items-center gap-3">
              <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-amber-200/40 bg-amber-200/10 shadow-[0_0_55px_rgba(251,191,36,0.18)]">
                <HeartPulse size={34} className="text-teal-200" />

                <Star
                  size={17}
                  className="launch-twinkle absolute -right-4 -top-2 fill-amber-200 text-amber-200"
                />

                <Sparkles
                  size={19}
                  className="launch-twinkle absolute -bottom-2 -left-5 text-amber-200"
                />
              </div>

              <h2 className="text-lg font-semibold tracking-wide text-white sm:text-2xl">
                Welcome to Akeso!
              </h2>
            </div>
          )}
        </div>

        {/* Button */}
        <div className="mt-3 flex min-h-[58px] items-center justify-center">
          {ready ? (
            <button
              type="button"
              onClick={onEnter}
              className="launch-button group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#6de4e6] via-[#43cecb] to-[#2db4ad] px-9 py-3 text-sm font-bold text-[#052a35] shadow-[0_10px_35px_rgba(45,212,191,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_15px_45px_rgba(45,212,191,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 sm:px-12 sm:text-base"
            >
              Enter Website
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          ) : (
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200/80 sm:text-xs">
              Preparing Your Experience...
            </p>
          )}
        </div>

        {/* Progress indicators */}
        <div className="mt-5 flex items-center gap-2">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-1 rounded-full transition-all duration-500 ${
                count >= step
                  ? "w-8 bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.5)]"
                  : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>

        {/* Footer features */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] text-slate-300 sm:mt-7 sm:text-xs">
          <span className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-teal-300" />
            Trusted Healthcare
          </span>

          <span className="flex items-center gap-2">
            <Globe2 size={15} className="text-teal-300" />
            Global Connections
          </span>
        </div>

        <p className="mt-4 text-[9px] uppercase tracking-[0.22em] text-slate-400 sm:text-[10px]">
          AKESO GLOBAL MEDICAL SERVICES PVT. LTD
        </p>
      </div>

      <style>{`
        @keyframes launchFloat {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          15% { opacity: 0.8; }
          85% { opacity: 0.65; }
          100% {
            transform: translateY(-110vh) translateX(35px);
            opacity: 0;
          }
        }

        @keyframes launchConfetti {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes launchCount {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-12deg);
          }
          55% {
            opacity: 1;
            transform: scale(1.12) rotate(3deg);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes launchAppear {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes launchCelebrate {
          from {
            opacity: 0;
            transform: scale(0.65);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes launchGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes launchTwinkle {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @keyframes launchShimmer {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }

        .launch-particle {
          animation: launchFloat linear infinite;
        }

        .launch-confetti {
          animation: launchConfetti ease-in forwards;
        }

        .launch-count {
          animation: launchCount 0.7s ease-out both;
        }

        .launch-appear {
          animation: launchAppear 0.8s ease-out both;
        }

        .launch-celebrate {
          animation: launchCelebrate 0.7s
            cubic-bezier(0.2, 1.4, 0.4, 1) both;
        }

        .launch-glow {
          animation: launchGlow 5s ease-in-out infinite;
        }

        .launch-twinkle {
          animation: launchTwinkle 1.6s ease-in-out infinite;
        }

        .launch-shimmer {
          animation: launchShimmer 3s ease-in-out infinite;
        }

        .launch-button {
          animation: launchCelebrate 0.6s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .launch-screen *,
          .launch-screen *::before,
          .launch-screen *::after {
            animation: none !important;
            transition: none !important;
          }
        }

        @media (max-height: 650px) and (min-width: 640px) {
          .launch-screen {
            padding-top: 8px;
            padding-bottom: 8px;
          }

          .launch-screen .launch-appear {
            margin-bottom: 8px;
          }
        }
      `}</style>
    </main>
  );
}
