import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";

const projects = [
  {
    title: "Nexus Analytics Dashboard",
    description: "A dark-themed data visualization dashboard for tracking SaaS metrics with real-time updates.",
    image: project1,
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    link: "#",
  },
  {
    title: "Aura E-Commerce",
    description: "Premium e-commerce storefront featuring a minimal cinematic design and smooth page transitions.",
    image: project2,
    tags: ["Next.js", "Node.js", "Framer Motion"],
    link: "#",
  },
  {
    title: "Vortex Landing Page",
    description: "High-converting landing page for a modern API service, optimized for performance and accessibility.",
    image: project3,
    tags: ["React", "Tailwind", "Vite", "Playwright"],
    link: "#",
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

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-start mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            A showcase of recent web applications built with precision and tested thoroughly.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className="overflow-hidden border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <CardHeader className="flex-none">
                  <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
