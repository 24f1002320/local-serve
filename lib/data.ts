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

export const categories = [
    { id: "carpentry", name: "Carpenter", icon: Hammer, color: "text-amber-600 bg-amber-100" },
    { id: "plumbing", name: "Plumber", icon: Wrench, color: "text-blue-600 bg-blue-100" },
    { id: "electrical", name: "Electrician", icon: Zap, color: "text-yellow-600 bg-yellow-100" },
    { id: "painting", name: "Painter", icon: PaintBucket, color: "text-pink-600 bg-pink-100" },
    { id: "mechanic", name: "Mechanic", icon: Car, color: "text-slate-600 bg-slate-100" },
    { id: "construction", name: "Construction", icon: HardHat, color: "text-orange-600 bg-orange-100" },
    { id: "cleaning", name: "Cleaning", icon: Sparkles, color: "text-cyan-600 bg-cyan-100" },
    { id: "appliances", name: "Appliance Repair", icon: Tv2, color: "text-purple-600 bg-purple-100" },
];

export interface Professional {
    id: string;
    name: string;
    category: string;
    rating: number;
    reviews: number;
    price: string;
    image: string;
    location: string;
    bio: string;
}

export const professionals: Professional[] = [
    {
        id: "1",
        name: "John Smith",
        category: "carpentry",
        rating: 4.8,
        reviews: 124,
        price: "$50/hr",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd90f9?q=80&w=2070&auto=format&fit=crop",
        location: "Downtown",
        bio: "Master carpenter with over 15 years of experience in custom furniture and home renovations."
    },
    {
        id: "2",
        name: "Sarah Jones",
        category: "plumbing",
        rating: 4.9,
        reviews: 89,
        price: "$80/hr",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        location: "Westside",
        bio: "Reliable plumber specializing in emergency repairs and pipe installations. Available 24/7."
    },
    {
        id: "3",
        name: "Mike Wilson",
        category: "electrical",
        rating: 4.7,
        reviews: 210,
        price: "$90/hr",
        image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop",
        location: "North Hills",
        bio: "Certified electrician with a focus on smart home installations and safety inspections."
    },
    {
        id: "4",
        name: "Emily Davis",
        category: "cleaning",
        rating: 4.9,
        reviews: 45,
        price: "$40/hr",
        image: "https://images.unsplash.com/photo-1528642474493-227a85c425da?q=80&w=2070&auto=format&fit=crop",
        location: "Suburbs",
        bio: "Detail-oriented cleaner using eco-friendly products for a sparkling home."
    },
    {
        id: "5",
        name: "David Lee",
        category: "painting",
        rating: 4.6,
        reviews: 78,
        price: "$45/hr",
        image: "https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?q=80&w=2070&auto=format&fit=crop",
        location: "Eastside",
        bio: "Professional painter delivering high-quality interior and exterior painting services."
    },
    {
        id: "6",
        name: "Robert Taylor",
        category: "mechanic",
        rating: 4.8,
        reviews: 156,
        price: "$70/hr",
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2074&auto=format&fit=crop",
        location: "Industrial District",
        bio: "Expert mechanic with a passion for cars and a reputation for honest diagnostics."
    },
    {
        id: "7",
        name: "Lisa Anderson",
        category: "carpentry",
        rating: 4.7,
        reviews: 56,
        price: "$55/hr",
        image: "https://images.unsplash.com/photo-1603796846097-b36976ea28b0?q=80&w=2070&auto=format&fit=crop",
        location: "Uptown",
        bio: "Skilled carpenter specializing in cabinetry and intricate woodwork."
    },
    {
        id: "8",
        name: "James White",
        category: "plumbing",
        rating: 4.5,
        reviews: 34,
        price: "$75/hr",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2074&auto=format&fit=crop",
        location: "Midtown",
        bio: "Experienced plumber for all your residential and commercial plumbing needs."
    }
];
