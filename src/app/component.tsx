
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"

export default function Component() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-[#1a1a1a] text-[#00ffff]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <BoltIcon  />
            <span className="sr-only">Cyberpunk Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold bg-[#00ffff]/10 rounded-lg px-4"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold bg-[#00ffff]/10 rounded-lg px-4"
              prefetch={false}
            >
              Features
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold bg-[#00ffff]/10 rounded-lg px-4"
              prefetch={false}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold bg-[#00ffff]/10 rounded-lg px-4"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-[150px]">
        <Link href="#" className="mr-6 hidden lg:flex items-center gap-2" prefetch={false}>
          <BoltIcon  />
          <span className="sr-only">Cyberpunk Inc</span>
        </Link>
      </div>
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-lg bg-[#00ffff]/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-[#00ffff]/20 hover:text-[#00ffff] focus:bg-[#00ffff]/20 focus:text-[#00ffff] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#00ffff]/30 data-[state=open]:bg-[#00ffff]/30"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="group inline-flex h-9 w-max items-center justify-center rounded-lg bg-[#00ffff]/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-[#00ffff]/20 hover:text-[#00ffff] focus:bg-[#00ffff]/20 focus:text-[#00ffff] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#00ffff]/30 data-[state=open]:bg-[#00ffff]/30">
                Features
                <ChevronDownIcon  />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-lg bg-[#00ffff]/10 p-4 text-sm font-medium transition-colors hover:bg-[#00ffff]/20 hover:text-[#00ffff] focus:bg-[#00ffff]/20 focus:text-[#00ffff] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#00ffff]/30 data-[state=open]:bg-[#00ffff]/30"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">Cybersecurity</div>
                      <div className="line-clamp-2 text-sm leading-snug text-[#00ffff]/70">
                        Protect your data with our advanced security features.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-lg bg-[#00ffff]/10 p-4 text-sm font-medium transition-colors hover:bg-[#00ffff]/20 hover:text-[#00ffff] focus:bg-[#00ffff]/20 focus:text-[#00ffff] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#00ffff]/30 data-[state=open]:bg-[#00ffff]/30"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">AI Integration</div>
                      <div className="line-clamp-2 text-sm leading-snug text-[#00ffff]/70">
                        Leverage the power of AI to enhance your applications.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-lg bg-[#00ffff]/10 p-4 text-sm font-medium transition-colors hover:bg-[#00ffff]/20 hover:text-[#00ffff] focus:bg-[#00ffff]/20 focus:text-[#00ffff] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#00ffff]/30 data-[state=open]:bg-[#00ffff]/30"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Blockchain Integration
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-[#00ffff]/70">
                        Integrate blockchain technology into your applications.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-lg bg-[#00ffff]/10 p-4 text-sm font-medium transition-colors hover:bg-[#00ffff]/20 hover:text-[#00ffff] focus:bg-[#00ffff]/20 focus:text-[#00ffff] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#00ffff]/30 data-[state=open]:bg-[#00ffff]/30"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">Quantum Computing</div>
                      <div className="line-clamp-2 text-sm leading-snug text-[#00ffff]/70">
                        Leverage the power of quantum computing in your applications.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-lg bg-[#00ffff]/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-[#00ffff]/20 hover:text-[#00ffff] focus:bg-[#00ffff]/20 focus:text-[#00ffff] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#00ffff]/30 data-[state=open]:bg-[#00ffff]/30"
                prefetch={false}
              >
                Pricing
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-lg bg-[#00ffff]/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-[#00ffff]/20 hover:text-[#00ffff] focus:bg-[#00ffff]/20 focus:text-[#00ffff] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#00ffff]/30 data-[state=open]:bg-[#00ffff]/30"
                prefetch={false}
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto w-[150px] flex justify-end">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <BoltIcon />
          <span className="text-[#00ffff] font-semibold">Cyberpunk Inc</span>
        </Link>
      </div>
    </header>
  )
}

function BoltIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}