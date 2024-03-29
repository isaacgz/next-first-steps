import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Pricing page',
 description: 'Pricing Description',
 keywords: ['Pricing page']  
};


export default function  PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}
