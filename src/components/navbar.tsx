"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    name: "Products",
    href: "https://www.aidenlabs.ai/#products",
    variant: "ghost",
    className: "",
  },
  {
    name: "Blog",
    href: "https://www.aidenlabs.ai/blog",
    variant: "ghost",
    className: "",
  },
  {
    name: "Whitepaper",
    href: "https://aiden-labs.gitbook.io/aiden-labs",
    variant: "ghost",
    className: "",
  },
  {
    name: "10M $ADN AIRDROP",
    href: "https://maiden.aidenlabs.ai/quests",
    variant: "ghost",
    className: "",
  },
  {
    name: "M. aiden NFT",
    href: "https://maiden.aidenlabs.ai/",
    variant: "ghost",
    className: "",
  },
  {
    name: "Try Lunar!",
    href: "https://t.me/Lunar_ADN_Bot",
    variant: "default",
    className: "",
  },
  {
    name: "Claim Center",
    href: "https://claim-center.aidenlabs.ai/",
    variant: "secondary",
    className: "bg-white text-black hover:bg-white/90",
  },
] as const;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-40 mx-auto w-full max-w-5xl p-4 sm:p-6">
      <div className="flex items-center justify-between rounded-md border bg-muted p-2 backdrop-blur-sm dark:bg-black">
        <Link
          href="https://www.aidenlabs.ai/"
          className="flex flex-grow items-center"
        >
          <Image
            src="/logo.avif"
            alt="Aiden"
            width={512}
            height={137}
            className="h-7 w-auto"
          />
        </Link>

        <span className="flex-1" />

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <Button
              asChild
              key={item.name}
              variant={item.variant}
              className={item.className}
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </Button>
          ))}
        </div>

        <Button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          variant="ghost"
          size="icon"
        >
          <Menu size={24} />
        </Button>
      </div>

      {/* Mobile menu - Extension of current menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-0 z-50 p-4 sm:p-6 md:hidden">
          <div className="mx-auto max-w-4xl rounded-md border bg-muted p-2 shadow-lg dark:bg-black">
            <div className="mb-2 flex items-center justify-between pb-2">
              <Link
                href="https://www.aidenlabs.ai/"
                className="flex items-center"
              >
                <Image
                  src="/logo.avif"
                  alt="Aiden"
                  width={512}
                  height={137}
                  className="h-7 w-auto"
                />
              </Link>

              <Button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                variant="ghost"
                size="icon"
              >
                <X size={24} />
              </Button>
            </div>

            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant={item.variant}
                  className={cn("w-full justify-center", item.className)}
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
