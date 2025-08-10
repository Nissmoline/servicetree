"use client";
import { createContext, useContext, useState, useEffect } from "react";

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
      "As a newly established company, we're committed to delivering personalized, high-quality customer service solutions. Our small but passionate team ensures every client receives dedicated attention and innovative approaches to their unique challenges.",
    "about.services.title": "Our Core Services",
    "about.services.inbound": "Inbound Support",
    "about.services.inbound.desc": "Personalized customer support with a human touch",
    "about.services.outbound": "Outbound Campaigns",
    "about.services.outbound.desc": "Targeted outreach campaigns tailored to your needs",
    "about.services.consulting": "Strategy Consulting",
    "about.services.consulting.desc": "Expert guidance for optimizing customer service operations",
    "about.services.training": "Team Training",
    "about.services.training.desc": "Professional development for customer service excellence",

    "about.features.freshPerspective.title": "Fresh Perspective",
    "about.features.freshPerspective.desc": "New ideas and innovative approaches to customer service challenges",
    "about.features.personalAttention.title": "Personal Attention",
    "about.features.personalAttention.desc": "Small team means every client gets dedicated, personalized service",
    "about.features.agileFlexible.title": "Agile & Flexible",
    "about.features.agileFlexible.desc": "Quick to adapt and customize solutions for your specific needs",
    "about.stats.teamMembers": "Passionate Team Members",
    "about.stats.yearStarted": "Year We Started",
    "about.stats.growthPotential": "Growth Potential",

    // Contact Section
    "contact.title": "Let's Start Something Great Together",
    "contact.subtitle": "Ready to work with a fresh, dedicated team? We'd love to hear from you.",
    "contact.info.title": "Get In Touch",
    "contact.info.address": "Remote-First Team • Available Worldwide",
    "contact.info.address2": "Remote-First Team • Available Worldwide",
    "contact.info.email": "info@servicetree.online",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company Name",
    "contact.form.message": "How can we help you?",
    "contact.form.submit": "Let's Connect",

    // Footer
    "footer.rights": "© 2025 Service Tree Consulting. Built with passion by our team of 5.",
    "footer.companyDescription": "A fresh new Company specializing in customer service excellence. Our team of 5 dedicated professionals is ready to help your business grow with personalized attention and innovative solutions.",

    // Cookie Consent
    "cookie.title": "Cookie Preferences",
    "cookie.subtitle": "We respect your privacy",
    "cookie.description": "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can choose which types of cookies to allow below.",
    "cookie.necessary.title": "Necessary Cookies",
    "cookie.necessary.description": "Essential for the website to function properly. Cannot be disabled.",
    "cookie.analytics.title": "Analytics Cookies",
    "cookie.analytics.description": "Help us understand how visitors interact with our website.",
    "cookie.marketing.title": "Marketing Cookies",
    "cookie.marketing.description": "Used to deliver personalized advertisements and content.",
    "cookie.always": "Always Active",
    "cookie.acceptAll": "Accept All",
    "cookie.acceptSelected": "Accept Selected",
    "cookie.reject": "Reject All",
    "cookie.privacyPolicy": "Privacy Policy",

    // Privacy Policy Page
    "privacy.title": "Privacy Policy",
    "privacy.subtitle": "How we collect, use, and protect your information",
    "privacy.introduction.title": "Introduction",
    "privacy.introduction.content": "At Service Tree Consulting, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
    "privacy.collection.title": "Information We Collect",
    "privacy.collection.personal.title": "Personal Information",
    "privacy.collection.personal.name": "Name and contact details",
    "privacy.collection.personal.email": "Email address",
    "privacy.collection.personal.phone": "Phone number",
    "privacy.collection.personal.company": "Company information",
    "privacy.collection.automatic.title": "Automatically Collected",
    "privacy.collection.automatic.ip": "IP address and location",
    "privacy.collection.automatic.browser": "Browser type and version",
    "privacy.collection.automatic.device": "Device information",
    "privacy.collection.automatic.usage": "Website usage data",
    "privacy.cookies.title": "Cookie Policy",
    "privacy.cookies.necessary.title": "Necessary Cookies",
    "privacy.cookies.necessary.description": "These cookies are essential for the website to function properly and cannot be disabled.",
    "privacy.cookies.necessary.examples": "Examples",
    "privacy.cookies.analytics.title": "Analytics Cookies",
    "privacy.cookies.analytics.description": "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    "privacy.cookies.analytics.examples": "Examples",
    "privacy.cookies.marketing.title": "Marketing Cookies",
    "privacy.cookies.marketing.description": "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
    "privacy.cookies.marketing.examples": "Examples",
    "privacy.usage.title": "How We Use Your Information",
    "privacy.usage.service": "Service Delivery",
    "privacy.usage.service.desc": "To provide and maintain our customer service solutions",
    "privacy.usage.communication": "Communication",
    "privacy.usage.communication.desc": "To respond to your inquiries and provide support",
    "privacy.usage.improvement": "Service Improvement",
    "privacy.usage.improvement.desc": "To analyze usage patterns and improve our services",
    "privacy.usage.security": "Security",
    "privacy.usage.security.desc": "To protect against fraud and ensure website security",
    "privacy.protection.title": "Data Protection",
    "privacy.protection.measures.title": "Security Measures",
    "privacy.protection.measures.encryption": "Data encryption in transit and at rest",
    "privacy.protection.measures.access": "Limited access controls and authentication",
    "privacy.protection.measures.backup": "Regular data backups and recovery procedures",
    "privacy.protection.measures.training": "Staff training on data protection",
    "privacy.protection.retention.title": "Data Retention",
    "privacy.protection.retention.description": "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy.",
    "privacy.protection.retention.period": "Retention Period",
    "privacy.protection.retention.years": "years",
    "privacy.rights.title": "Your Rights",
    "privacy.rights.access.title": "Access",
    "privacy.rights.access.description": "You have the right to request access to your personal information that we hold.",
    "privacy.rights.correction.title": "Correction",
    "privacy.rights.correction.description": "You can request correction of inaccurate or incomplete personal information.",
    "privacy.rights.deletion.title": "Deletion",
    "privacy.rights.deletion.description": "You have the right to request deletion of your personal information in certain circumstances.",
    "privacy.rights.portability.title": "Portability",
    "privacy.rights.portability.description": "You can request a copy of your personal information in a portable format.",
    "privacy.contact.title": "Contact Us",
    "privacy.contact.description": "If you have any questions about this Privacy Policy or our data practices, please contact us:",
    "privacy.contact.email": "Email",
    "privacy.contact.phone": "Phone",
    "privacy.contact.address": "Address",
    "privacy.updates.title": "Updates to This Policy",
    "privacy.updates.description": "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
    "privacy.updates.lastUpdated": "Last Updated",

    // Cookie Manager
    "cookieManager.title": "Cookie Settings",
    "cookieManager.subtitle": "Manage your cookie preferences",
    "cookieManager.description": "You can change your cookie preferences at any time. Your choices will be saved and applied to your future visits.",
    "cookieManager.save": "Save Settings",
    "cookieManager.reset": "Reset to Default",
    "cookieManager.cancel": "Cancel",

    // Impressum Page
    "impressum.title": "Impressum",
    "impressum.companyInfo.title": "Company Information",
    "impressum.companyInfo.name": "Service Tree Consulting",
    "impressum.companyInfo.address": "Anakous 31, 14341 Nea Filadelfeia, Greece",
    "impressum.companyInfo.taxId": "Tax ID: Coming Soon",
    "impressum.contact.title": "Contact",
    "impressum.contact.email": "Email: info@servicetree.online",
    "impressum.disclaimer.title": "Disclaimer",
    "impressum.disclaimer.content": "The content of our pages has been created with the greatest care. However, we cannot guarantee the accuracy, completeness and timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected by this. Liability in this regard is only possible from the point in time at which knowledge of a specific legal infringement is obtained. As soon as we become aware of such legal infringements, we will remove this content immediately.",
    "impressum.dataProtection.title": "Data Protection",
    "impressum.dataProtection.content": "The use of our website is generally possible without providing personal data. Insofar as personal data (e.g. name, address or e-mail addresses) is collected on our pages, this is always done on a voluntary basis as far as possible. This data will not be passed on to third parties without your express consent. We would like to point out that data transmission over the Internet (e.g. when communicating by e-mail) can have security gaps. Complete protection of data against access by third parties is not possible. The use of contact data published within the framework of the imprint obligation by third parties for sending unsolicited advertising and information materials is hereby expressly prohibited. The operators of the pages expressly reserve the right to take legal action in the event of unsolicited sending of advertising information, such as spam e-mails.",

    // Contact Availability
    "contact.availability.title": "Availability",
    "contact.availability.mondayFriday": "Monday - Friday",
    "contact.availability.hours": "9:00 AM - 6:00 PM",
    "contact.availability.responseTime": "Response Time",
    "contact.availability.within24Hours": "Within 24 hours",
    "contact.availability.emergencySupport": "Emergency Support",
    "contact.availability.byAppointment": "By appointment",
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
      "Wir sind ein dynamisches neues Team von 5 engagierten Fachkräften, die frische Energie und innovative Lösungen für Vertrieb, Call-Center-Services und Kundensupport bringen.",
    "hero.cta": "Starten Sie Ihre Reise mit uns",

    // About Section
    "about.title": "Über unsere Vision",
    "about.subtitle": "Ein neues Team mit großen Ambitionen",
    "about.mission.title": "Unsere Mission",
    "about.mission.text":
      "Als neu gegründetes Unternehmen sind wir verpflichtet, personalisierte, hochwertige Kundenservice-Lösungen zu liefern. Unser kleines aber leidenschaftliches Team sorgt dafür, dass jeder Kunde dedizierte Aufmerksamkeit und innovative Ansätze für seine einzigartigen Herausforderungen erhält.",
    "about.services.title": "Unsere Kerndienstleistungen",
    "about.services.inbound": "Eingehender Support",
    "about.services.inbound.desc": "Personalisierter Kundensupport mit menschlicher Note",
    "about.services.outbound": "Ausgehende Kampagnen",
    "about.services.outbound.desc": "Zielgerichtete Outreach-Kampagnen nach Ihren Bedürfnissen",
    "about.services.consulting": "Strategieberatung",
    "about.services.consulting.desc": "Expertenberatung zur Optimierung von Kundenservice-Abläufen",
    "about.services.training": "Team-Schulungen",
    "about.services.training.desc": "Professionelle Entwicklung für Kundenservice-Exzellenz",

    "about.features.freshPerspective.title": "Frische Perspektive",
    "about.features.freshPerspective.desc": "Neue Ideen und innovative Ansätze für Herausforderungen im Kundenservice",
    "about.features.personalAttention.title": "Persönliche Aufmerksamkeit",
    "about.features.personalAttention.desc": "Kleines Team bedeutet, dass jeder Kunde engagierte, persönliche Betreuung erhält",
    "about.features.agileFlexible.title": "Agil & Flexibel",
    "about.features.agileFlexible.desc": "Schnelle Anpassung und maßgeschneiderte Lösungen für Ihre spezifischen Bedürfnisse",
    "about.stats.teamMembers": "Engagierte Teammitglieder",
    "about.stats.yearStarted": "Gründungsjahr",
    "about.stats.growthPotential": "Wachstumspotenzial",

    // Contact Section
    "contact.title": "Lassen Sie uns gemeinsam etwas Großartiges beginnen",
    "contact.subtitle": "Bereit, mit einem frischen, engagierten Team zu arbeiten? Wir würden gerne von Ihnen hören.",
    "contact.info.title": "Kontakt aufnehmen",
    "contact.info.address": "Remote-First Team • Weltweit verfügbar",
    "contact.info.email": "info@servicetree.online",
    "contact.form.title": "Erzählen Sie uns von Ihrem Projekt",
    "contact.form.name": "Ihr Name",
    "contact.form.email": "E-Mail-Adresse",
    "contact.form.company": "Firmenname",
    "contact.form.message": "Wie können wir Ihnen helfen?",
    "contact.form.submit": "Lassen Sie uns verbinden",

    // Footer
    "footer.rights": "© 2025 Service Tree Consulting. Mit Leidenschaft von unserem 5-köpfigen Team erstellt.",
    "footer.companyDescription": "Eine frisches neues Unternehmen, spezialisiert auf exzellenten Kundenservice. Unser Team von 5 engagierten Fachleuten ist bereit, Ihrem Unternehmen mit persönlicher Betreuung und innovativen Lösungen zum Wachstum zu verhelfen.",

    // Cookie Consent
    "cookie.title": "Cookie-Einstellungen",
    "cookie.subtitle": "Wir respektieren Ihre Privatsphäre",
    "cookie.description": "Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern, den Website-Verkehr zu analysieren und Inhalte zu personalisieren. Sie können unten auswählen, welche Arten von Cookies Sie zulassen möchten.",
    "cookie.necessary.title": "Notwendige Cookies",
    "cookie.necessary.description": "Wesentlich für die ordnungsgemäße Funktion der Website. Kann nicht deaktiviert werden.",
    "cookie.analytics.title": "Analyse-Cookies",
    "cookie.analytics.description": "Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.",
    "cookie.marketing.title": "Marketing-Cookies",
    "cookie.marketing.description": "Werden verwendet, um personalisierte Werbung und Inhalte zu liefern.",
    "cookie.always": "Immer Aktiv",
    "cookie.acceptAll": "Alle Akzeptieren",
    "cookie.acceptSelected": "Ausgewählte Akzeptieren",
    "cookie.reject": "Alle Ablehnen",
    "cookie.privacyPolicy": "Datenschutzerklärung",

    // Privacy Policy Page
    "privacy.title": "Datenschutzerklärung",
    "privacy.subtitle": "Wie wir Ihre Informationen sammeln, verwenden und schützen",
    "privacy.introduction.title": "Einführung",
    "privacy.introduction.content": "Bei Service Tree Consulting sind wir verpflichtet, Ihre Privatsphäre zu schützen und die Sicherheit Ihrer persönlichen Informationen zu gewährleisten. Diese Datenschutzerklärung erklärt, wie wir Ihre Informationen sammeln, verwenden, offenlegen und schützen, wenn Sie unsere Website besuchen oder unsere Dienste nutzen.",
    "privacy.collection.title": "Informationen, die wir sammeln",
    "privacy.collection.personal.title": "Persönliche Informationen",
    "privacy.collection.personal.name": "Name und Kontaktdaten",
    "privacy.collection.personal.email": "E-Mail-Adresse",
    "privacy.collection.personal.phone": "Telefonnummer",
    "privacy.collection.personal.company": "Unternehmensinformationen",
    "privacy.collection.automatic.title": "Automatisch gesammelt",
    "privacy.collection.automatic.ip": "IP-Adresse und Standort",
    "privacy.collection.automatic.browser": "Browsertyp und -version",
    "privacy.collection.automatic.device": "Geräteinformationen",
    "privacy.collection.automatic.usage": "Website-Nutzungsdaten",
    "privacy.cookies.title": "Cookie-Richtlinie",
    "privacy.cookies.necessary.title": "Notwendige Cookies",
    "privacy.cookies.necessary.description": "Diese Cookies sind für die ordnungsgemäße Funktion der Website erforderlich und können nicht deaktiviert werden.",
    "privacy.cookies.necessary.examples": "Beispiele",
    "privacy.cookies.analytics.title": "Analyse-Cookies",
    "privacy.cookies.analytics.description": "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden.",
    "privacy.cookies.analytics.examples": "Beispiele",
    "privacy.cookies.marketing.title": "Marketing-Cookies",
    "privacy.cookies.marketing.description": "Diese Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen und relevante und ansprechende Werbung anzuzeigen.",
    "privacy.cookies.marketing.examples": "Beispiele",
    "privacy.usage.title": "Wie wir Ihre Informationen verwenden",
    "privacy.usage.service": "Dienstleistungserbringung",
    "privacy.usage.service.desc": "Um unsere Kundenservice-Lösungen bereitzustellen und zu warten",
    "privacy.usage.communication": "Kommunikation",
    "privacy.usage.communication.desc": "Um auf Ihre Anfragen zu antworten und Unterstützung zu bieten",
    "privacy.usage.improvement": "Dienstleistungsverbesserung",
    "privacy.usage.improvement.desc": "Um Nutzungsmuster zu analysieren und unsere Dienste zu verbessern",
    "privacy.usage.security": "Sicherheit",
    "privacy.usage.security.desc": "Um vor Betrug zu schützen und die Website-Sicherheit zu gewährleisten",
    "privacy.protection.title": "Datenschutz",
    "privacy.protection.measures.title": "Sicherheitsmaßnahmen",
    "privacy.protection.measures.encryption": "Datenverschlüsselung bei Übertragung und Speicherung",
    "privacy.protection.measures.access": "Begrenzte Zugriffskontrollen und Authentifizierung",
    "privacy.protection.measures.backup": "Regelmäßige Datensicherungen und Wiederherstellungsverfahren",
    "privacy.protection.measures.training": "Mitarbeiterschulung zum Datenschutz",
    "privacy.protection.retention.title": "Datenaufbewahrung",
    "privacy.protection.retention.description": "Wir speichern Ihre persönlichen Informationen nur so lange, wie es zur Erfüllung der in dieser Richtlinie dargelegten Zwecke erforderlich ist.",
    "privacy.protection.retention.period": "Aufbewahrungszeitraum",
    "privacy.protection.retention.years": "Jahre",
    "privacy.rights.title": "Ihre Rechte",
    "privacy.rights.access.title": "Zugang",
    "privacy.rights.access.description": "Sie haben das Recht, Zugang zu Ihren persönlichen Informationen zu verlangen, die wir besitzen.",
    "privacy.rights.correction.title": "Berichtigung",
    "privacy.rights.correction.description": "Sie können die Berichtigung ungenauer oder unvollständiger persönlicher Informationen verlangen.",
    "privacy.rights.deletion.title": "Löschung",
    "privacy.rights.deletion.description": "Sie haben das Recht, die Löschung Ihrer persönlichen Informationen unter bestimmten Umständen zu verlangen.",
    "privacy.rights.portability.title": "Übertragbarkeit",
    "privacy.rights.portability.description": "Sie können eine Kopie Ihrer persönlichen Informationen in einem übertragbaren Format verlangen.",
    "privacy.contact.title": "Kontaktieren Sie uns",
    "privacy.contact.description": "Wenn Sie Fragen zu dieser Datenschutzerklärung oder unseren Datenpraktiken haben, kontaktieren Sie uns bitte:",
    "privacy.contact.email": "E-Mail",
    "privacy.contact.phone": "Telefon",
    "privacy.contact.address": "Adresse",
    "privacy.updates.title": "Aktualisierungen dieser Richtlinie",
    "privacy.updates.description": "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über alle Änderungen informieren, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen.",
    "privacy.updates.lastUpdated": "Zuletzt aktualisiert",

    // Cookie Manager
    "cookieManager.title": "Cookie-Einstellungen",
    "cookieManager.subtitle": "Verwalten Sie Ihre Cookie-Präferenzen",
    "cookieManager.description": "Sie können Ihre Cookie-Präferenzen jederzeit ändern. Ihre Auswahl wird gespeichert und auf Ihre zukünftigen Besuche angewendet.",
    "cookieManager.save": "Einstellungen Speichern",
    "cookieManager.reset": "Auf Standard Zurücksetzen",
    "cookieManager.cancel": "Abbrechen",

    // Impressum Page
    "impressum.title": "Impressum",
    "impressum.companyInfo.title": "Unternehmensinformationen",
    "impressum.companyInfo.name": "Service Tree Consulting",
    "impressum.companyInfo.address": "Anakous 31, 14341 Nea Filadelfeia, Griechenland",
    "impressum.companyInfo.taxId": "Steuernummer: Demnächst verfügbar",
    "impressum.contact.title": "Kontakt",
    "impressum.contact.email": "E-Mail: info@servicetree.online",
    "impressum.disclaimer.title": "Haftungsausschluss",
    "impressum.disclaimer.content": "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
    "impressum.dataProtection.title": "Datenschutz",
    "impressum.dataProtection.content": "Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.",

    // Contact Availability
    "contact.availability.title": "Verfügbarkeit",
    "contact.availability.mondayFriday": "Montag - Freitag",
    "contact.availability.hours": "9:00 - 18:00 Uhr",
    "contact.availability.responseTime": "Antwortzeit",
    "contact.availability.within24Hours": "Innerhalb von 24 Stunden",
    "contact.availability.emergencySupport": "Notfall-Support",
    "contact.availability.byAppointment": "Nach Vereinbarung",
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
      "Ως νεοσύστατη εταιρεία, είμαστε αφοσιωμένοι στην παροχή εξατομικευμένων, υψηλής ποιότητας λύσεων εξυπηρέτησης πελατών. Η μικρή αλλά παθιασμένη ομάδα μας διασφαλίζει ότι κάθε πελάτης λαμβάνει αφοσιωμένη προσοχή και καινοτόμες προσεγγίσεις για τις μοναδικές του προκλήσεις.",
    "about.services.title": "Οι Βασικές μας Υπηρεσίες",
    "about.services.inbound": "Εισερχόμενη Υποστήριξη",
    "about.services.inbound.desc": "Εξατομικευμένη υποστήριξη πελατών με ανθρώπινη προσέγγιση",
    "about.services.outbound": "Εξερχόμενες Καμπάνιες",
    "about.services.outbound.desc": "Στοχευμένες καμπάνιες προσέγγισης προσαρμοσμένες στις ανάγκες σας",
    "about.services.consulting": "Στρατηγικές Συμβουλές",
    "about.services.consulting.desc": "Εξειδικευμένη καθοδήγηση για βελτιστοποίηση λειτουργιών εξυπηρέτησης πελατών",
    "about.services.training": "Εκπαίδευση Ομάδας",
    "about.services.training.desc": "Επαγγελματική ανάπτυξη για αριστεία στην εξυπηρέτηση πελατών",

    "about.features.freshPerspective.title": "Φρέσκια Προοπτική",
    "about.features.freshPerspective.desc": "Νέες ιδέες και καινοτόμες προσεγγίσεις στις προκλήσεις εξυπηρέτησης πελατών",
    "about.features.personalAttention.title": "Προσωπική Προσοχή",
    "about.features.personalAttention.desc": "Μικρή ομάδα σημαίνει ότι κάθε πελάτης λαμβάνει αφοσιωμένη, προσωπική εξυπηρέτηση",
    "about.features.agileFlexible.title": "Ευέλικτο & Προσαρμόσιμο",
    "about.features.agileFlexible.desc": "Γρήγορη προσαρμογή και προσαρμοσμένες λύσεις για τις συγκεκριμένες ανάγκες σας",
    "about.stats.teamMembers": "Παθιασμένα Μέλη Ομάδας",
    "about.stats.yearStarted": "Έτος Ίδρυσης",
    "about.stats.growthPotential": "Δυναμικό Ανάπτυξης",

    // Contact Section
    "contact.title": "Ας Ξεκινήσουμε Κάτι Υπέροχο Μαζί",
    "contact.subtitle": "Έτοιμοι να συνεργαστείτε με μια φρέσκια, αφοσιωμένη ομάδα; Θα θέλαμε να ακούσουμε από εσάς.",
    "contact.info.title": "Επικοινωνήστε",
    "contact.info.address": "Remote-First Ομάδα • Διαθέσιμοι Παγκοσμίως",
    "contact.info.email": "info@servicetree.online",
    "contact.form.title": "Πείτε μας για το Έργο σας",
    "contact.form.name": "Το Όνομά σας",
    "contact.form.email": "Διεύθυνση Email",
    "contact.form.company": "Όνομα Εταιρείας",
    "contact.form.message": "Πώς μπορούμε να σας βοηθήσουμε;",
    "contact.form.submit": "Ας Συνδεθούμε",

    // Footer
    "footer.rights": "© 2025 Service Tree Consulting. Δημιουργήθηκε με πάθος από την ομάδα των 5 ατόμων μας.",
    "footer.companyDescription": "Μια νέα εταιρεία που ειδικεύεται στην αριστεία εξυπηρέτησης πελατών. Η ομάδα μας από 5 αφοσιωμένους επαγγελματίες είναι έτοιμη να βοηθήσει την επιχείρησή σας να αναπτυχθεί με εξατομικευμένη προσοχή και καινοτόμες λύσεις.",

    // Cookie Consent
    "cookie.title": "Προτιμήσεις Cookies",
    "cookie.subtitle": "Σεβόμαστε την ιδιωτικότητά σας",
    "cookie.description": "Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία περιήγησής σας, να αναλύσουμε την κίνηση του ιστότοπου και να εξατομικεύσουμε το περιεχόμενο. Μπορείτε να επιλέξετε ποιους τύπους cookies να επιτρέψετε παρακάτω.",
    "cookie.necessary.title": "Απαραίτητα Cookies",
    "cookie.necessary.description": "Απαραίτητα για τη σωστή λειτουργία του ιστότοπου. Δεν μπορούν να απενεργοποιηθούν.",
    "cookie.analytics.title": "Cookies Ανάλυσης",
    "cookie.analytics.description": "Μας βοηθούν να κατανοήσουμε πώς οι επισκέπτες αλληλεπιδρούν με τον ιστότοπό μας.",
    "cookie.marketing.title": "Cookies Marketing",
    "cookie.marketing.description": "Χρησιμοποιούνται για την παράδοση εξατομικευμένων διαφημίσεων και περιεχομένου.",
    "cookie.always": "Πάντα Ενεργά",
    "cookie.acceptAll": "Αποδοχή Όλων",
    "cookie.acceptSelected": "Αποδοχή Επιλεγμένων",
    "cookie.reject": "Απόρριψη Όλων",
    "cookie.privacyPolicy": "Πολιτική Απορρήτου",

    // Privacy Policy Page
    "privacy.title": "Πολιτική Απορρήτου",
    "privacy.subtitle": "Πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις πληροφορίες σας",
    "privacy.introduction.title": "Εισαγωγή",
    "privacy.introduction.content": "Στην Service Tree Consulting, είμαστε αφοσιωμένοι στην προστασία της ιδιωτικότητάς σας και στη διασφάλιση της ασφάλειας των προσωπικών σας πληροφοριών. Αυτή η Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε, αποκαλύπτουμε και προστατεύουμε τις πληροφορίες σας όταν επισκέπτεστε τον ιστότοπό μας ή χρησιμοποιείτε τις υπηρεσίες μας.",
    "privacy.collection.title": "Πληροφορίες που Συλλέγουμε",
    "privacy.collection.personal.title": "Προσωπικές Πληροφορίες",
    "privacy.collection.personal.name": "Όνομα και στοιχεία επικοινωνίας",
    "privacy.collection.personal.email": "Διεύθυνση email",
    "privacy.collection.personal.phone": "Αριθμός τηλεφώνου",
    "privacy.collection.personal.company": "Πληροφορίες εταιρείας",
    "privacy.collection.automatic.title": "Αυτόματα Συλλεγμένες",
    "privacy.collection.automatic.ip": "Διεύθυνση IP και τοποθεσία",
    "privacy.collection.automatic.browser": "Τύπος και έκδοση περιηγητή",
    "privacy.collection.automatic.device": "Πληροφορίες συσκευής",
    "privacy.collection.automatic.usage": "Δεδομένα χρήσης ιστότοπου",
    "privacy.cookies.title": "Πολιτική Cookies",
    "privacy.cookies.necessary.title": "Απαραίτητα Cookies",
    "privacy.cookies.necessary.description": "Αυτά τα cookies είναι απαραίτητα για τη σωστή λειτουργία του ιστότοπου και δεν μπορούν να απενεργοποιηθούν.",
    "privacy.cookies.necessary.examples": "Παραδείγματα",
    "privacy.cookies.analytics.title": "Cookies Ανάλυσης",
    "privacy.cookies.analytics.description": "Αυτά τα cookies μας βοηθούν να κατανοήσουμε πώς οι επισκέπτες αλληλεπιδρούν με τον ιστότοπό μας συλλέγοντας και αναφέροντας πληροφορίες ανώνυμα.",
    "privacy.cookies.analytics.examples": "Παραδείγματα",
    "privacy.cookies.marketing.title": "Cookies Marketing",
    "privacy.cookies.marketing.description": "Αυτά τα cookies χρησιμοποιούνται για την παρακολούθηση επισκεπτών σε ιστότοπους για την εμφάνιση σχετικών και ελκυστικών διαφημίσεων.",
    "privacy.cookies.marketing.examples": "Παραδείγματα",
    "privacy.usage.title": "Πώς Χρησιμοποιούμε τις Πληροφορίες Σας",
    "privacy.usage.service": "Παροχή Υπηρεσιών",
    "privacy.usage.service.desc": "Για την παροχή και συντήρηση των λύσεων εξυπηρέτησης πελατών μας",
    "privacy.usage.communication": "Επικοινωνία",
    "privacy.usage.communication.desc": "Για την απάντηση στις ερωτήσεις σας και την παροχή υποστήριξης",
    "privacy.usage.improvement": "Βελτίωση Υπηρεσιών",
    "privacy.usage.improvement.desc": "Για την ανάλυση προτύπων χρήσης και τη βελτίωση των υπηρεσιών μας",
    "privacy.usage.security": "Ασφάλεια",
    "privacy.usage.security.desc": "Για την προστασία από απάτη και τη διασφάλιση της ασφάλειας του ιστότοπου",
    "privacy.protection.title": "Προστασία Δεδομένων",
    "privacy.protection.measures.title": "Μέτρα Ασφάλειας",
    "privacy.protection.measures.encryption": "Κρυπτογράφηση δεδομένων κατά τη μεταφορά και αποθήκευση",
    "privacy.protection.measures.access": "Περιορισμένοι έλεγχοι πρόσβασης και πιστοποίηση",
    "privacy.protection.measures.backup": "Τακτικές δημιουργίες αντιγράφων ασφαλείας και διαδικασίες ανάκτησης",
    "privacy.protection.measures.training": "Εκπαίδευση προσωπικού για την προστασία δεδομένων",
    "privacy.protection.retention.title": "Διατήρηση Δεδομένων",
    "privacy.protection.retention.description": "Διατηρούμε τις προσωπικές σας πληροφορίες μόνο για όσο χρόνο είναι απαραίτητο για την εκπλήρωση των σκοπών που περιγράφονται σε αυτή την πολιτική.",
    "privacy.protection.retention.period": "Περίοδος Διατήρησης",
    "privacy.protection.retention.years": "έτη",
    "privacy.rights.title": "Τα Δικαιώματά Σας",
    "privacy.rights.access.title": "Πρόσβαση",
    "privacy.rights.access.description": "Έχετε το δικαίωμα να ζητήσετε πρόσβαση στις προσωπικές σας πληροφορίες που διατηρούμε.",
    "privacy.rights.correction.title": "Διόρθωση",
    "privacy.rights.correction.description": "Μπορείτε να ζητήσετε τη διόρθωση ανακριβών ή ελλιπών προσωπικών πληροφοριών.",
    "privacy.rights.deletion.title": "Διαγραφή",
    "privacy.rights.deletion.description": "Έχετε το δικαίωμα να ζητήσετε τη διαγραφή των προσωπικών σας πληροφοριών υπό ορισμένες συνθήκες.",
    "privacy.rights.portability.title": "Φορητότητα",
    "privacy.rights.portability.description": "Μπορείτε να ζητήσετε ένα αντίγραφο των προσωπικών σας πληροφοριών σε φορητή μορφή.",
    "privacy.contact.title": "Επικοινωνήστε Μαζί Μας",
    "privacy.contact.description": "Εάν έχετε ερωτήσεις σχετικά με αυτή την Πολιτική Απορρήτου ή τις πρακτικές δεδομένων μας, επικοινωνήστε μαζί μας:",
    "privacy.contact.email": "Email",
    "privacy.contact.phone": "Τηλέφωνο",
    "privacy.contact.address": "Διεύθυνση",
    "privacy.updates.title": "Ενημερώσεις Αυτής της Πολιτικής",
    "privacy.updates.description": "Μπορεί να ενημερώσουμε αυτή την Πολιτική Απορρήτου από καιρό σε καιρό. Θα σας ειδοποιήσουμε για τυχόν αλλαγές δημοσιεύοντας τη νέα Πολιτική Απορρήτου σε αυτή τη σελίδα.",
    "privacy.updates.lastUpdated": "Τελευταία Ενημέρωση",

    // Cookie Manager
    "cookieManager.title": "Ρυθμίσεις Cookies",
    "cookieManager.subtitle": "Διαχείριση των προτιμήσεών σας για cookies",
    "cookieManager.description": "Μπορείτε να αλλάξετε τις προτιμήσεις σας για cookies οποιαδήποτε στιγμή. Οι επιλογές σας θα αποθηκευτούν και θα εφαρμοστούν στις μελλοντικές σας επισκέψεις.",
    "cookieManager.save": "Αποθήκευση Ρυθμίσεων",
    "cookieManager.reset": "Επαναφορά στην Προεπιλογή",
    "cookieManager.cancel": "Ακύρωση",

    // Impressum Page
    "impressum.title": "Impressum",
    "impressum.companyInfo.title": "Πληροφορίες Εταιρείας",
    "impressum.companyInfo.name": "Service Tree Consulting",
    "impressum.companyInfo.address": "Ανακους 31, 14341 Νεα Φιλαδελφεια, Ελλάδα",
    "impressum.companyInfo.taxId": "ΑΦΜ: Σύντομα",
    "impressum.contact.title": "Επικοινωνία",
    "impressum.contact.email": "Email: info@servicetree.online",
    "impressum.disclaimer.title": "Αποποίηση Ευθύνης",
    "impressum.disclaimer.content": "Το περιεχόμενο των σελίδων μας έχει δημιουργηθεί με τη μέγιστη δυνατή προσοχή. Ωστόσο, δεν μπορούμε να εγγυηθούμε την ακρίβεια, την πληρότητα και την επικαιρότητα του περιεχομένου. Ως πάροχος υπηρεσιών, είμαστε υπεύθυνοι για το δικό μας περιεχόμενο σε αυτές τις σελίδες σύμφωνα με τους γενικούς νόμους. Ωστόσο, δεν είμαστε υποχρεωμένοι να παρακολουθούμε μεταδιδόμενες ή αποθηκευμένες πληροφορίες τρίτων ή να ερευνούμε περιστάσεις που υποδηλώνουν παράνομη δραστηριότητα. Οι υποχρεώσεις για την αφαίρεση ή τον αποκλεισμό της χρήσης πληροφοριών σύμφωνα με τους γενικούς νόμους παραμένουν ανεπηρέαστες από αυτό. Η ευθύνη σε αυτό το πλαίσιο είναι δυνατή μόνο από τη στιγμή που αποκτάται γνώση μιας συγκεκριμένης νομικής παράβασης. Μόλις λάβουμε γνώση τέτοιων νομικών παραβάσεων, θα αφαιρέσουμε αμέσως αυτό το περιεχόμενο.",
    "impressum.dataProtection.title": "Προστασία Δεδομένων",
    "impressum.dataProtection.content": "Η χρήση της ιστοσελίδας μας είναι γενικά δυνατή χωρίς την παροχή προσωπικών δεδομένων. Εφόσον συλλέγονται προσωπικά δεδομένα (π.χ. όνομα, διεύθυνση ή διευθύνσεις ηλεκτρονικού ταχυδρομείου) στις σελίδες μας, αυτό γίνεται πάντα, στο μέτρο του δυνατού, σε εθελοντική βάση. Αυτά τα δεδομένα δεν θα διαβιβαστούν σε τρίτους χωρίς τη ρητή συγκατάθεσή σας. Θα θέλαμε να επισημάνουμε ότι η μετάδοση δεδομένων μέσω του Διαδικτύου (π.χ. κατά την επικοινωνία μέσω ηλεκτρονικού ταχυδρομείου) μπορεί να έχει κενά ασφαλείας. Η πλήρης προστασία των δεδομένων από την πρόσβαση τρίτων δεν είναι δυνατή. Η χρήση των στοιχείων επικοινωνίας που δημοσιεύονται στο πλαίσιο της υποχρέωσης αποτύπωσης από τρίτους για την αποστολή ανεπιθύμητων διαφημιστικών και ενημερωτικών υλικών απαγορεύεται ρητά. Οι διαχειριστές των σελίδων διατηρούν ρητά το δικαίωμα να προβούν σε νομικές ενέργειες σε περίπτωση ανεπιθύμητης αποστολής διαφημιστικών πληροφοριών, όπως μηνύματα spam.",

    // Contact Availability
    "contact.availability.title": "Διαθεσιμότητα",
    "contact.availability.mondayFriday": "Δευτέρα - Παρασκευή",
    "contact.availability.hours": "9:00 π.μ. - 6:00 μ.μ.",
    "contact.availability.responseTime": "Χρόνος Απόκρισης",
    "contact.availability.within24Hours": "Εντός 24 ωρών",
    "contact.availability.emergencySupport": "Υποστήριξη Έκτακτης Ανάγκης",
    "contact.availability.byAppointment": "Κατόπιν ραντεβού",
  },
}


const getPreferredLanguage = () => {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }
  }

  if (typeof navigator !== 'undefined') {
    const browserLanguage = navigator.language || navigator.userLanguage;
    
    const primaryLanguage = browserLanguage.split('-')[0].toLowerCase();
    
    if (translations[primaryLanguage]) {
      return primaryLanguage;
    }
    
    if (navigator.languages) {
      for (const lang of navigator.languages) {
        const langCode = lang.split('-')[0].toLowerCase();
        if (translations[langCode]) {
          return langCode;
        }
      }
    }
  }

  return "en";
};

export function LanguageProvider({
  children
}) {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const preferredLanguage = getPreferredLanguage();
    setLanguage(preferredLanguage);
  }, []);

  const t = key => {
    return translations[language][key] || key;
  }


  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', newLanguage);
    }
  };

  return <LanguageContext.Provider value={{ language, setLanguage: updateLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
