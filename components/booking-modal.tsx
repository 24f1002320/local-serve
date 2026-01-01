"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

export function BookingModal({ proName, proPrice }: { proName: string, proPrice: string }) {
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState(1)

    const handleBook = () => {
        setStep(2);
        // Mimic API call
        setTimeout(() => {
            setStep(3);
        }, 1500);
    }

    const reset = () => {
        setOpen(false);
        setTimeout(() => setStep(1), 500);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="lg" className="w-full">
                    Book Now
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                {step === 1 && (
                    <>
                        <DialogHeader>
                            <DialogTitle>Book Service with {proName}</DialogTitle>
                            <DialogDescription>
                                Fill in your details to schedule a service request. Rate: {proPrice}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="date" className="text-right">
                                    Date
                                </Label>
                                <Input id="date" type="date" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="time" className="text-right">
                                    Time
                                </Label>
                                <Input id="time" type="time" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="address" className="text-right">
                                    Address
                                </Label>
                                <Input id="address" placeholder="123 Main St" className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button onClick={handleBook}>Confirm Booking</Button>
                        </DialogFooter>
                    </>
                )}

                {step === 2 && (
                    <div className="flex flex-col items-center justify-center py-10 space-y-4">
                        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
                        <p className="text-muted-foreground">Processing request...</p>
                    </div>
                )}

                {step === 3 && (
                    <div className="flex flex-col items-center justify-center py-6 space-y-4 text-center">
                        <CheckCircle2 className="h-16 w-16 text-green-500" />
                        <h2 className="text-xl font-bold">Booking Confirmed!</h2>
                        <p className="text-muted-foreground">
                            Your request with {proName} has been sent. You will receive a confirmation email shortly.
                        </p>
                        <Button onClick={reset} className="mt-4">Done</Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
