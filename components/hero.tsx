import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/50 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] opacity-30"></div>
            <div className="container px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 pb-2">
                    Expert Local Services, <br />
                    Right at Your Doorstep.
                </h1>
                <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                    Find trusted professionals for home repairs, cleaning, health, and more.
                    Verified reviews, secure booking, and satisfaction guaranteed.
                </p>

                <div className="mt-8 flex w-full max-w-2xl items-center space-x-2 bg-background/80 backdrop-blur-sm p-2 rounded-lg border shadow-lg">
                    <div className="flex-1 flex items-center px-3">
                        <Search className="mr-2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="What do you need help with?"
                            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent h-12 text-base"
                        />
                    </div>
                    <div className="h-8 w-[1px] bg-border hidden sm:block"></div>
                    <div className="flex-1 hidden sm:flex items-center px-3">
                        <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Zip Code or City"
                            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent h-12 text-base"
                        />
                    </div>
                    <Button size="lg" className="h-12 px-8 text-base">
                        Search
                    </Button>
                </div>

                <div className="mt-8 flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="font-medium">Popular:</span>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {["Plumber", "Electrician", "Cleaner", "Painter"].map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-background/50 rounded-full border shadow-sm hover:bg-background cursor-pointer transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
