import { professionals, categories } from "@/lib/data";
import { ProfessionalCard } from "@/components/professional-card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function generateStaticParams() {
    return categories.map((category) => ({
        category: category.id,
    }));
}

export default function ServiceListingPage({ params }: { params: { category: string } }) {
    const categoryId = params.category;
    const category = categories.find(c => c.id === categoryId);

    // Simple mock search/filter logic could go here
    const categoryPros = professionals.filter(p => p.category === categoryId);

    if (!category && categoryId !== 'all') {
        // If it's a search term integration, we might handle it differently, 
        // but for now strict category matching
        // return notFound();
    }

    // Fallback for demo: if no category match, show all or filtered by generic search if we were using query params
    const displayPros = category ? categoryPros : professionals;
    const title = category ? `${category.name}s` : "All Professionals";

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container py-10 px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar / Filters */}
                    <aside className="w-full md:w-64 space-y-6">
                        <div>
                            <h2 className="font-bold text-xl mb-4">Filters</h2>
                            <div className="relative">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Search within results..." className="pl-8" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-medium">Price Range</h3>
                            <div className="flex items-center gap-2">
                                <Input type="number" placeholder="Min" className="h-8" />
                                <span>-</span>
                                <Input type="number" placeholder="Max" className="h-8" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-medium">Rating</h3>
                            {[4, 3, 2].map(stars => (
                                <div key={stars} className="flex items-center gap-2">
                                    <input type="checkbox" id={`rating-${stars}`} />
                                    <label htmlFor={`rating-${stars}`} className="text-sm flex items-center">
                                        {stars}+ <Star className="w-3 h-3 ml-1 fill-muted stroke-muted-foreground" />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Results Grid */}
                    <div className="flex-1">
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
                            <p className="text-muted-foreground mt-2">
                                {displayPros.length} results found for {categoryId}
                            </p>
                        </div>

                        {displayPros.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {displayPros.map(pro => (
                                    <ProfessionalCard key={pro.id} pro={pro} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-muted/30 rounded-lg">
                                <h3 className="text-lg font-medium">No professionals found</h3>
                                <p className="text-muted-foreground">Try adjusting your filters or search criteria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function Star({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
