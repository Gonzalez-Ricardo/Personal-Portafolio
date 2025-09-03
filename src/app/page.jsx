"use client";
import Header from '@/components/component/header'
import {Inicio}  from "@/components/component/inicio"
import Projects from '@/components/component/Projects'
import Footer from '@/components/component/footer'
import Skills from '@/components/component/skills'
import Experience from '@/components/component/experience'
import { GlobeDemo } from "@/components/component/world";
import React from "react";
import { StarsBackground } from '@/components/ui/stars-background';

export default function Home() {
  return (
    <div  className="relative">
      {/* StarsBackground como fondo global */}
      <StarsBackground className="fixed top-0 left-0 w-full h-full z-0" />
      {/* Contenido principal */}
      <div className="relative z-10 mx-auto">
        <Header />
        <Inicio />
        <Skills />
        <Experience />
        <Projects />
        <GlobeDemo />
        <Footer />
      </div>
    </div>
  );
}
