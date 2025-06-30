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
    "contact.info.phone": "+30 697 455 8066",
    "contact.info.phone2": "+30 697 385 8321",
    "contact.info.email": "info@servicetreeconsulting.com",
    "contact.form.title": "Tell Us About Your Project",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company Name",
    "contact.form.message": "How can we help you?",
    "contact.form.submit": "Let's Connect",

    // Footer
    "footer.rights": "© 2025 Service Tree Consulting. Built with passion by our team of 5.",
    "footer.companyDescription": "A fresh new Company specializing in customer service excellence. Our team of 5 dedicated professionals is ready to help your business grow with personalized attention and innovative solutions.",

    // Cookie Consent
    "cookie.message": "We use cookies to ensure you get the best experience on our website. By continuing to use this site, you agree to our use of cookies.",
    "cookie.accept": "Accept & Close",

    // Impressum Page
    "impressum.title": "Impressum",
    "impressum.companyInfo.title": "Company Information",
    "impressum.companyInfo.name": "Service Tree Consulting",
    "impressum.companyInfo.address": "Anakous 31, 14341 Nea Filadelfeia, Greece",
    "impressum.companyInfo.taxId": "Tax ID: Coming Soon",
    "impressum.contact.title": "Contact",
    "impressum.contact.phone": "Phone: +30 697 455 8066, +30 697 385 8321 ",
    
    "impressum.contact.email": "Email: info@servicetreeconsulting.com",
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
    "contact.info.phone": "+30 697 455 8066",
    "contact.info.phone2": "+30 697 385 8321",
    "contact.info.email": "hallo@servicetreeconsulting.com",
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
    "cookie.message": "Wir verwenden Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website erhalten. Durch die weitere Nutzung dieser Website stimmen Sie unserer Verwendung von Cookies zu.",
    "cookie.accept": "Akzeptieren & Schließen",

    // Impressum Page
    "impressum.title": "Impressum",
    "impressum.companyInfo.title": "Unternehmensinformationen",
    "impressum.companyInfo.name": "Service Tree Consulting",
    "impressum.companyInfo.address": "Anakous 31, 14341 Nea Filadelfeia, Griechenland",
    "impressum.companyInfo.taxId": "Steuernummer: Demnächst verfügbar",
    "impressum.contact.title": "Kontakt",
    "impressum.contact.phone": "Telefon: +49 (0) 123 456789",
    "impressum.contact.email": "E-Mail: hallo@servicetreeconsulting.com",
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
    "contact.info.phone": "+30 697 455 8066",
    "contact.info.phone2": "+30 697 385 8321",
    "contact.info.email": "info@servicetreeconsulting.com",
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
    "cookie.message": "Χρησιμοποιούμε cookies για να διασφαλίσουμε ότι θα έχετε την καλύτερη εμπειρία στον ιστότοπό μας. Συνεχίζοντας να χρησιμοποιείτε αυτόν τον ιστότοπο, συμφωνείτε με τη χρήση των cookies.",
    "cookie.accept": "Αποδοχή & Κλείσιμο",

    // Impressum Page
    "impressum.title": "Impressum",
    "impressum.companyInfo.title": "Πληροφορίες Εταιρείας",
    "impressum.companyInfo.name": "Service Tree Consulting",
    "impressum.companyInfo.address": "Ανακους 31, 14341 Νεα Φιλαδελφεια, Ελλάδα",
    "impressum.companyInfo.taxId": "ΑΦΜ: Σύντομα",
    "impressum.contact.title": "Επικοινωνία",
    "impressum.contact.phone": "Τηλέφωνο: +30 210 123 4567",
    "impressum.contact.email": "Email: info@servicetreeconsulting.com",
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
