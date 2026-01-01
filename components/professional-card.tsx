import { Star, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Professional } from "@/lib/data";

interface ProfessionalCardProps {
    pro: Professional;
}

export function ProfessionalCard({ pro }: ProfessionalCardProps) {
    return (
        <div className="group rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md overflow-hidden flex flex-col">
            <div className="aspect-video w-full relative overflow-hidden">
                <Image
                    src={pro.image}
                    alt={pro.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                />
            </div>
            <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-semibold text-lg">{pro.name}</h3>
                        <p className="text-sm text-muted-foreground capitalize">{pro.category}</p>
                    </div>
                    <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {pro.rating}
                    </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                    {pro.bio}
                </p>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {pro.location}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t">
                    <span className="font-bold text-lg">{pro.price}</span>
                    <Button asChild size="sm">
                        <Link href={`/pro/${pro.id}`}>View Profile</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
