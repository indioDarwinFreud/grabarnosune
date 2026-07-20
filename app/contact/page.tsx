import type { Metadata } from "next";
import { siteConfig } from "@/config";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: `Contacto — ${siteConfig.name}`,
    description: "Contactanos por WhatsApp, email o visitanos en Mendoza. Respondemos al instante.",
};

export default function ContactPage() {
    return <ContactForm />;
}
