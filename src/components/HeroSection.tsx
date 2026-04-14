import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code2 } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground mb-6"
        >
          <Code2 size={14} className="text-primary" />
          <span>Available for freelance opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 max-w-4xl"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">polished</span> web products that work flawlessly.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
        >
          I'm Jayesh, a Web Developer and QA Tester. I turn ideas into reliable, high-performance interfaces with rigorous quality engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button asChild size="lg" className="h-12 px-8 text-base font-medium">
            <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer">
              Contact via WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-medium border-border hover:bg-secondary">
            <a href="#portfolio">
              View My Work
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <a href="#services" className="text-muted-foreground hover:text-white transition-colors">
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
