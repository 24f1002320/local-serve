import { professionals } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Star, MapPin, ShieldCheck, Clock, ThumbsUp } from "lucide-react";
import { BookingModal } from "@/components/booking-modal";

export function generateStaticParams() {
    return professionals.map((pro) => ({
        id: pro.id,
    }));
}

export default function ProfessionalProfilePage({ params }: { params: { id: string } }) {
    const pro = professionals.find(p => p.id === params.id);

    if (!pro) {
        return notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pb-20">
                {/* Profile Header */}
                <div className="w-full h-64 md:h-80 relative bg-muted">
                    <Image
                        src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
                        alt="Cover"
                        fill
                        className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>

                <div className="container px-4 md:px-6 relative -mt-32">
                    <div className="bg-card rounded-xl border shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden border-4 border-background shadow-md shrink-0">
                            <Image
                                src={pro.image}
                                alt={pro.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex-1 w-full">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                <div>
                                    <h1 className="text-3xl font-bold">{pro.name}</h1>
                                    <p className="text-lg text-muted-foreground capitalize flex items-center gap-2 mt-1">
                                        {pro.category} Professional <ShieldCheck className="w-5 h-5 text-blue-500" />
                                    </p>
                                </div>
                                <div className="text-right hidden md:block">
                                    <div className="text-2xl font-bold text-primary">{pro.price}</div>
                                    <div className="text-sm text-muted-foreground">per hour</div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 md:gap-8 border-y py-4 my-6">
                                <div className="flex items-center gap-2">
                                    <div className="bg-yellow-100 p-2 rounded-full text-yellow-700">
                                        <Star className="w-5 h-5 fill-current" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">{pro.rating}</div>
                                        <div className="text-xs text-muted-foreground">{pro.reviews} Reviews</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="bg-green-100 p-2 rounded-full text-green-700">
                                        <ThumbsUp className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">98%</div>
                                        <div className="text-xs text-muted-foreground">Recommendation</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="bg-blue-100 p-2 rounded-full text-blue-700">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">{pro.location}</div>
                                        <div className="text-xs text-muted-foreground">Service Area</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-xl mb-2">About</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {pro.bio} {pro.bio} I adhere to the highest standards of safety and quality.
                                        My goal is not just to fix your problem, but to ensure you are completely satisfied with the service.
                                        I bring all my own tools and clean up after the job is done.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-xl mb-4">Reviews</h3>
                                    <div className="space-y-4">
                                        {[1, 2].map((review) => (
                                            <div key={review} className="bg-muted/30 p-4 rounded-lg">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-semibold">Happy Customer</span>
                                                    <div className="flex">
                                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                                                    </div>
                                                </div>
                                                <p className="text-sm text-muted-foreground">"Excellent service! Arrived on time and did a fantastic job. Highly recommended."</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Sticky Booking or Sidebar CTA */}
                        <div className="w-full md:w-80 shrink-0 space-y-6">
                            <div className="p-6 border rounded-xl bg-card shadow-sm sticky top-24 hidden md:block space-y-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-muted-foreground">Rate</span>
                                    <span className="text-2xl font-bold">{pro.price}</span>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-muted-foreground pb-4 border-b">
                                    <Clock className="w-4 h-4" /> Available for booking today
                                </div>

                                <BookingModal proName={pro.name} proPrice={pro.price} />

                                <p className="text-center text-xs text-muted-foreground mt-2">
                                    No payment required until job is done.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile fixed bottom bar */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t md:hidden flex items-center justify-between z-40">
                    <div>
                        <div className="text-lg font-bold">{pro.price}</div>
                        <div className="text-xs text-muted-foreground">per hour</div>
                    </div>
                    <div className="w-1/2">
                        <BookingModal proName={pro.name} proPrice={pro.price} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
