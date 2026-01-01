import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-4 md:px-6">
                <div className="mr-8 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block text-xl tracking-tight text-primary">
                            LocalServe
                        </span>
                    </Link>
                    <div className="flex gap-6 text-sm font-medium">
                        <Link
                            href="/services"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Find Services
                        </Link>
                        <Link
                            href="/pro"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            For Professionals
                        </Link>
                    </div>
                </div>

                {/* Mobile View Logo */}
                <Link href="/" className="mr-auto flex items-center md:hidden">
                    <span className="font-bold text-lg text-primary">LocalServe</span>
                </Link>

                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="hidden sm:flex">
                            Log In
                        </Button>
                        <Button size="sm">Join as Pro</Button>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </nav>
                </div>
            </div>
        </nav>
    );
}
