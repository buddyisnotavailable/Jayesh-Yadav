import React from "react";
import { motion } from "framer-motion";
import { MonitorSmartphone, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    title: "Website Development",
    description: "Building responsive, highly performant websites using modern technologies like React, Node.js, and Tailwind CSS.",
    icon: MonitorSmartphone,
  },
  {
    title: "QA Testing",
    description: "Rigorous manual and automated testing to ensure your product is bug-free, accessible, and works flawlessly across all devices.",
    icon: ShieldCheck,
  },
  {
    title: "Landing Pages",
    description: "High-converting, fast-loading landing pages designed to capture attention and drive business goals effectively.",
    icon: Zap,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            Delivering end-to-end web solutions with a focus on code quality, performance, and rigorous testing.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 border border-border/50">
                    <service.icon className="text-primary w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground/80 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
