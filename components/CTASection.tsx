"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 text-sm font-medium">
            Start Your Journey
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Explore
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            From Space?
          </span>
        </h2>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Join hundreds of developers and organizations using our platform to
          build the future with satellite data.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 flex items-center gap-2">
            Create Free Account
            <ArrowRight className="group-hover:translate-x-1 transition" />
          </button>
          <p className="text-gray-500 text-sm">
            No credit card required • 1,000 free API calls
          </p>
        </div>
      </div>
    </section>
  );
}
