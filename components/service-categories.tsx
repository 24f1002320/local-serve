import {
    Hammer,
    Wrench,
    Zap,
    PaintBucket,
    Car,
    HardHat,
    Sparkles,
    Tv2
} from "lucide-react";
import Link from "next/link";

const categories = [
    { name: "Carpenter", icon: Hammer, href: "/services/carpentry", color: "text-amber-600 bg-amber-100" },
    { name: "Plumber", icon: Wrench, href: "/services/plumbing", color: "text-blue-600 bg-blue-100" },
    { name: "Electrician", icon: Zap, href: "/services/electrical", color: "text-yellow-600 bg-yellow-100" },
    { name: "Painter", icon: PaintBucket, href: "/services/painting", color: "text-pink-600 bg-pink-100" },
    { name: "Mechanic", icon: Car, href: "/services/mechanic", color: "text-slate-600 bg-slate-100" },
    { name: "Construction", icon: HardHat, href: "/services/construction", color: "text-orange-600 bg-orange-100" },
    { name: "Cleaning", icon: Sparkles, href: "/services/cleaning", color: "text-cyan-600 bg-cyan-100" },
    { name: "Appliance Repair", icon: Tv2, href: "/services/appliances", color: "text-purple-600 bg-purple-100" },
];

export function ServiceCategories() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Categories</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Browse our wide range of professional services to find exactly what you need.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid grid-cols-2 gap-4 mt-8 sm:grid-cols-3 md:grid-cols-4 lg:gap-8 max-w-5xl">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={category.href}
                            className="group flex flex-col items-center justify-center p-6 bg-card hover:bg-muted/50 rounded-xl border transition-all hover:shadow-md hover:-translate-y-1"
                        >
                            <div className={`p-4 rounded-full mb-3 ${category.color} group-hover:bg-primary group-hover:text-primary-foreground transition-colors`}>
                                <category.icon className="h-8 w-8" />
                            </div>
                            <span className="font-semibold text-foreground/80 group-hover:text-foreground">{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
