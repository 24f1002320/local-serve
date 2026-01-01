import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-10">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="mb-4 flex items-center space-x-2">
                            <span className="font-bold text-xl text-primary">LocalServe</span>
                        </Link>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            Connect with trusted local professionals for all your home service needs. Fast, reliable, and secure.
                        </p>
                        <div className="mt-4 flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h4 className="font-medium">Company</h4>
                        <Link href="/about" className="text-sm text-muted-foreground hover:underline">About Us</Link>
                        <Link href="/careers" className="text-sm text-muted-foreground hover:underline">Careers</Link>
                        <Link href="/blog" className="text-sm text-muted-foreground hover:underline">Blog</Link>
                        <Link href="/press" className="text-sm text-muted-foreground hover:underline">Press</Link>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h4 className="font-medium">Services</h4>
                        <Link href="/services/carpentry" className="text-sm text-muted-foreground hover:underline">Carpentry</Link>
                        <Link href="/services/plumbing" className="text-sm text-muted-foreground hover:underline">Plumbing</Link>
                        <Link href="/services/electrical" className="text-sm text-muted-foreground hover:underline">Electrical</Link>
                        <Link href="/services/cleaning" className="text-sm text-muted-foreground hover:underline">Cleaning</Link>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h4 className="font-medium">Support</h4>
                        <Link href="/help" className="text-sm text-muted-foreground hover:underline">Help Center</Link>
                        <Link href="/safety" className="text-sm text-muted-foreground hover:underline">Safety</Link>
                        <Link href="/terms" className="text-sm text-muted-foreground hover:underline">Terms of Service</Link>
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">Privacy Policy</Link>
                    </div>
                </div>
                <div className="mt-10 border-t pt-6 flex flex-col items-center justify-between sm:flex-row">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} LocalServe Inc. All rights reserved.
                    </p>
                    <div className="mt-4 flex space-x-4 sm:mt-0 text-xs text-muted-foreground">
                        <Link href="/terms" className="hover:underline">Terms</Link>
                        <Link href="/privacy" className="hover:underline">Privacy</Link>
                        <Link href="/cookies" className="hover:underline">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
