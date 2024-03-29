import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Contact Description',
 keywords: ['Contact page']  
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}