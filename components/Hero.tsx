"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ⭐ Star background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      o: Math.random(),
      s: Math.random() * 0.5,
    }));

    const animate = () => {
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.o})`;
        ctx.fill();

        star.o += (Math.random() - 0.5) * 0.05;
        star.o = Math.min(1, Math.max(0.1, star.o));

        star.y += star.s;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Nebula Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-purple-900/10 to-black/50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-blue-500/20 rounded-full blur-[120px]" />

      {/* Orbiting Satellites (responsive!) */}
      <motion.div
        className="absolute top-1/2 left-1/2"
        style={{
          width: "80vw",
          height: "80vw",
          maxWidth: "600px",
          maxHeight: "600px",
          marginLeft: "-40vw",
          marginTop: "-40vw",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg" />
        <div className="absolute w-full h-full border border-cyan-500/20 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2"
        style={{
          width: "55vw",
          height: "55vw",
          maxWidth: "450px",
          maxHeight: "450px",
          marginLeft: "-27.5vw",
          marginTop: "-27.5vw",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-blue-400 rounded-full shadow-lg" />
        <div className="absolute w-full h-full border border-blue-500/20 rounded-full" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">
              Powered by Google Earth Engine
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-bold text-white mb-6 leading-tight text-[clamp(2rem,6vw,5rem)]">
            Explore Earth from <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Outer Space
            </span>
          </h1>

          <p className="text-gray-400 mb-12 leading-relaxed max-w-xl mx-auto text-[clamp(1rem,2.2vw,1.5rem)] px-3">
            Access real-time satellite data through our powerful API. Transform
            Earth observation into actionable insights.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg flex items-center gap-2">
              Launch Dashboard
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>

            <button className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center gap-2 backdrop-blur-sm">
              <Play size={20} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-10 text-gray-400 text-center text-sm flex-wrap">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                500+
              </div>
              Active Users
            </div>
            <div className="h-10 w-px bg-cyan-500/30 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                50M+
              </div>
              API Calls/Month
            </div>
            <div className="h-10 w-px bg-cyan-500/30 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                99.9%
              </div>
              Uptime
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
