"use client";

import { useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import  logo  from "../../../public/Images/Logo1.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-8">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <Image
              alt=""
              src={logo}
              className="object-cover"
              height={40}
              width={40}
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
                borderRadius: "20%",
              }}
            />
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <div className="hidden space-x-6 md:block">
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#inicio"
              >
                Inicio
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#projects"
              >
                Projects
              </a>
            </div>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-10 md:justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="bg-[#0f1d29] text-[#ffff]"
              align="end"
            >
              <DropdownMenuItem asChild>
                <a href="#inicio">inicio</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#skills">Skills</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#experience">Experience</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#projects">Projects</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
