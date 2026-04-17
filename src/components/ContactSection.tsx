import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center border border-border/50 bg-card/30 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Let's work together</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm currently available for freelance projects. Whether you need a robust web application built from scratch or comprehensive QA testing for your existing product, I can help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-14 px-8 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-xl transition-all"
            >
              <a href="https://wa.me/+919930078380" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-14 px-8 font-medium rounded-xl border-border/50 hover:bg-secondary transition-all"
            >
              <a href="mailto:jayeshyadav.jr@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                jayeshyadav.jr@gmail.com
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
