"use client";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(undefined)

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Service Tree Consulting",
    "hero.tagline": "Fresh Approach to Customer Service Excellence",
    "hero.description":
      "We're a dynamic new team of 5 dedicated professionals, bringing fresh energy and innovative solutions to call center services and customer support.",
    "hero.cta": "Start Your Journey With Us",

    // About Section
    "about.title": "About Our Vision",
    "about.subtitle": "A New Team with Big Ambitions",
    "about.mission.title": "Our Mission",
    "about.mission.text":
      "As a newly established consulting firm, we're committed to delivering personalized, high-quality customer service solutions. Our small but passionate team ensures every client receives dedicated attention and innovative approaches to their unique challenges.",
    "about.services.title": "Our Core Services",
    "about.services.inbound": "Inbound Support",
    "about.services.inbound.desc": "Personalized customer support with a human touch",
    "about.services.outbound": "Outbound Campaigns",
    "about.services.outbound.desc": "Targeted outreach campaigns tailored to your needs",
    "about.services.consulting": "Strategy Consulting",
    "about.services.consulting.desc": "Expert guidance for optimizing customer service operations",
    "about.services.training": "Team Training",
    "about.services.training.desc": "Professional development for customer service excellence",

    // Contact Section
    "contact.title": "Let's Start Something Great Together",
    "contact.subtitle": "Ready to work with a fresh, dedicated team? We'd love to hear from you.",
    "contact.info.title": "Get In Touch",
    "contact.info.address": "Remote-First Team • Available Worldwide",
    "contact.info.phone": "+1 (555) 123-4567",
    "contact.info.email": "hello@servicetreeconsulting.com",
    "contact.form.title": "Tell Us About Your Project",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company Name",
    "contact.form.message": "How can we help you?",
    "contact.form.submit": "Let's Connect",

    // Footer
    "footer.rights": "© 2024 Service Tree Consulting. Built with passion by our team of 5.",
  },
  de: {
    // Header
    "nav.home": "Startseite",
    "nav.about": "Über uns",
    "nav.services": "Dienstleistungen",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.title": "Service Tree Consulting",
    "hero.tagline": "Frischer Ansatz für Kundenservice-Exzellenz",
    "hero.description":
      "Wir sind ein dynamisches neues Team von 5 engagierten Fachkräften, die frische Energie und innovative Lösungen für Call-Center-Services und Kundensupport bringen.",
    "hero.cta": "Starten Sie Ihre Reise mit uns",

    // About Section
    "about.title": "Über unsere Vision",
    "about.subtitle": "Ein neues Team mit großen Ambitionen",
    "about.mission.title": "Unsere Mission",
    "about.mission.text":
      "Als neu gegründetes Beratungsunternehmen sind wir verpflichtet, personalisierte, hochwertige Kundenservice-Lösungen zu liefern. Unser kleines aber leidenschaftliches Team sorgt dafür, dass jeder Kunde dedizierte Aufmerksamkeit und innovative Ansätze für seine einzigartigen Herausforderungen erhält.",
    "about.services.title": "Unsere Kerndienstleistungen",
    "about.services.inbound": "Eingehender Support",
    "about.services.inbound.desc": "Personalisierter Kundensupport mit menschlicher Note",
    "about.services.outbound": "Ausgehende Kampagnen",
    "about.services.outbound.desc": "Zielgerichtete Outreach-Kampagnen nach Ihren Bedürfnissen",
    "about.services.consulting": "Strategieberatung",
    "about.services.consulting.desc": "Expertenberatung zur Optimierung von Kundenservice-Abläufen",
    "about.services.training": "Team-Schulungen",
    "about.services.training.desc": "Professionelle Entwicklung für Kundenservice-Exzellenz",

    // Contact Section
    "contact.title": "Lassen Sie uns gemeinsam etwas Großartiges beginnen",
    "contact.subtitle": "Bereit, mit einem frischen, engagierten Team zu arbeiten? Wir würden gerne von Ihnen hören.",
    "contact.info.title": "Kontakt aufnehmen",
    "contact.info.address": "Remote-First Team • Weltweit verfügbar",
    "contact.info.phone": "+49 (0) 123 456789",
    "contact.info.email": "hallo@servicetreeconsulting.com",
    "contact.form.title": "Erzählen Sie uns von Ihrem Projekt",
    "contact.form.name": "Ihr Name",
    "contact.form.email": "E-Mail-Adresse",
    "contact.form.company": "Firmenname",
    "contact.form.message": "Wie können wir Ihnen helfen?",
    "contact.form.submit": "Lassen Sie uns verbinden",

    // Footer
    "footer.rights": "© 2024 Service Tree Consulting. Mit Leidenschaft von unserem 5-köpfigen Team erstellt.",
  },
  el: {
    // Header
    "nav.home": "Αρχική",
    "nav.about": "Σχετικά",
    "nav.services": "Υπηρεσίες",
    "nav.contact": "Επικοινωνία",

    // Hero Section
    "hero.title": "Service Tree Consulting",
    "hero.tagline": "Φρέσκια Προσέγγιση στην Αριστεία Εξυπηρέτησης Πελατών",
    "hero.description":
      "Είμαστε μια δυναμική νέα ομάδα 5 αφοσιωμένων επαγγελματιών, που φέρνουμε φρέσκια ενέργεια και καινοτόμες λύσεις στις υπηρεσίες call center και υποστήριξης πελατών.",
    "hero.cta": "Ξεκινήστε το Ταξίδι σας Μαζί μας",

    // About Section
    "about.title": "Σχετικά με το Όραμά μας",
    "about.subtitle": "Μια Νέα Ομάδα με Μεγάλες Φιλοδοξίες",
    "about.mission.title": "Η Αποστολή μας",
    "about.mission.text":
      "Ως νεοσύστατη εταιρεία συμβούλων, είμαστε αφοσιωμένοι στην παροχή εξατομικευμένων, υψηλής ποιότητας λύσεων εξυπηρέτησης πελατών. Η μικρή αλλά παθιασμένη ομάδα μας διασφαλίζει ότι κάθε πελάτης λαμβάνει αφοσιωμένη προσοχή και καινοτόμες προσεγγίσεις για τις μοναδικές του προκλήσεις.",
    "about.services.title": "Οι Βασικές μας Υπηρεσίες",
    "about.services.inbound": "Εισερχόμενη Υποστήριξη",
    "about.services.inbound.desc": "Εξατομικευμένη υποστήριξη πελατών με ανθρώπινη προσέγγιση",
    "about.services.outbound": "Εξερχόμενες Καμπάνιες",
    "about.services.outbound.desc": "Στοχευμένες καμπάνιες προσέγγισης προσαρμοσμένες στις ανάγκες σας",
    "about.services.consulting": "Στρατηγικές Συμβουλές",
    "about.services.consulting.desc": "Εξειδικευμένη καθοδήγηση για βελτιστοποίηση λειτουργιών εξυπηρέτησης πελατών",
    "about.services.training": "Εκπαίδευση Ομάδας",
    "about.services.training.desc": "Επαγγελματική ανάπτυξη για αριστεία στην εξυπηρέτηση πελατών",

    // Contact Section
    "contact.title": "Ας Ξεκινήσουμε Κάτι Υπέροχο Μαζί",
    "contact.subtitle": "Έτοιμοι να συνεργαστείτε με μια φρέσκια, αφοσιωμένη ομάδα; Θα θέλαμε να ακούσουμε από εσάς.",
    "contact.info.title": "Επικοινωνήστε μαζί μας",
    "contact.info.address": "Remote-First Ομάδα • Διαθέσιμοι Παγκοσμίως",
    "contact.info.phone": "+30 210 123 4567",
    "contact.info.email": "hello@servicetreeconsulting.com",
    "contact.form.title": "Πείτε μας για το Έργο σας",
    "contact.form.name": "Το Όνομά σας",
    "contact.form.email": "Διεύθυνση Email",
    "contact.form.company": "Όνομα Εταιρείας",
    "contact.form.message": "Πώς μπορούμε να σας βοηθήσουμε;",
    "contact.form.submit": "Ας Συνδεθούμε",

    // Footer
    "footer.rights": "© 2024 Service Tree Consulting. Δημιουργήθηκε με πάθος από την ομάδα των 5 ατόμων μας.",
  },
}

export function LanguageProvider({
  children
}) {
  const [language, setLanguage] = useState("en")

  const t = key => {
    return translations[language][key] || key;
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
