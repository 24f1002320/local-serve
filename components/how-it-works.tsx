import { Search, Calendar, Smile } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            icon: Search,
            title: "1. Search",
            description: "Find the service you need from our wide range of categories.",
        },
        {
            icon: Calendar,
            title: "2. Book",
            description: "Select a professional and schedule a time that works for you.",
        },
        {
            icon: Smile,
            title: "3. Relax",
            description: "Sit back while our verified pro gets the job done right.",
        },
    ];

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-lg">
                        Getting help is easier than ever. Here is how LocalServe works.
                    </p>
                </div>
                <div className="mx-auto grid gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3 max-w-5xl">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4">
                            <div className="p-6 bg-white rounded-full shadow-md text-primary">
                                <step.icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
