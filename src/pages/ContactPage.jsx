// src/components/Contact.jsx
// purpose: Contact page for the website
import ContactForm from "../components/ContactForm";
export default function ContactPage(){
    return (
     <section className="py-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Contact Me</h2>
        <ContactForm />
    </section>

    )
  }