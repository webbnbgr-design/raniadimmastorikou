/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Scale, 
  Home, 
  Users, 
  Award, 
  ChevronRight, 
  Menu, 
  X,
  ExternalLink,
  Clock,
  Globe
} from "lucide-react";
import { useState, useEffect } from "react";

const PHONE_NUMBER = "6944288255";
const DISPLAY_PHONE = "694 428 8255";
const ADDRESS = "Δράμας 7, Κολωνός, Αθήνα, Τ.Κ. 10444";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-prestige-gold/30">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-prestige-paper/95 backdrop-blur-md py-3 shadow-sm border-b border-prestige-gold/10" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-prestige-navy">
              ΡΑΝΙΑ ΔΗΜ. ΜΑΣΤΟΡΙΚΟΥ
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-prestige-gold">
              ΔΙΚΗΓΟΡΟΣ ΠΑΡ' ΑΡΕΙΩ ΠΑΓΩ
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-prestige-gold transition-colors">ΥΠΗΡΕΣΙΕΣ</button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-prestige-gold transition-colors">ΒΙΟΓΡΑΦΙΚΟ</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-prestige-gold transition-colors">ΕΠΙΚΟΙΝΩΝΙΑ</button>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="bg-prestige-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-prestige-gold transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={16} />
              {DISPLAY_PHONE}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-prestige-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-prestige-paper pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col space-y-6 text-center">
            <button onClick={() => scrollToSection('services')} className="text-2xl font-serif">Υπηρεσίες</button>
            <button onClick={() => scrollToSection('about')} className="text-2xl font-serif">Βιογραφικό</button>
            <button onClick={() => scrollToSection('contact')} className="text-2xl font-serif">Επικοινωνία</button>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="bg-prestige-navy text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-3"
            >
              <Phone size={20} />
              {DISPLAY_PHONE}
            </a>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-prestige-paper via-prestige-paper/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
            alt="Law Office"
            className="w-full h-full object-cover object-right opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prestige-gold/10 text-prestige-gold text-xs font-bold tracking-widest uppercase mb-6">
              <Award size={14} />
              30 Χρόνια Εμπειρίας
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-prestige-navy leading-[1.1] mb-8">
              Νομική Υποστήριξη <br />
              <span className="serif-italic font-light text-prestige-gold">Υψηλού Επιπέδου</span>
            </h1>
            <p className="text-lg md:text-xl text-prestige-ink/70 max-w-xl mb-10 leading-relaxed">
              Εξειδικευμένες νομικές υπηρεσίες με έμφαση στα Ακίνητα και το Οικογενειακό Δίκαιο. 
              Εκπροσώπηση στον Άρειο Πάγο και σε όλα τα δικαστήρια της χώρας.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="group bg-prestige-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-prestige-gold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-prestige-navy/20"
              >
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                Άμεση Τηλεφωνική Επικοινωνία
              </a>
              <button 
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 rounded-full border border-prestige-navy/20 font-bold text-lg hover:bg-prestige-navy hover:text-white transition-all duration-300"
              >
                Δείτε τις Υπηρεσίες
              </button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-prestige-gold/30 hidden lg:block" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-prestige-navy mb-4">Τομείς Εξειδίκευσης</h2>
            <div className="w-24 h-1 bg-prestige-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Real Estate */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-prestige-paper border border-prestige-gold/10 prestige-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-prestige-navy flex items-center justify-center text-white mb-8">
                <Home size={32} />
              </div>
              <h3 className="text-2xl font-bold text-prestige-navy mb-4">Ακίνητα</h3>
              <p className="text-prestige-ink/70 leading-relaxed mb-6">
                Ολοκληρωμένη νομική κάλυψη για αγορές, πωλήσεις, μισθώσεις και έλεγχο τίτλων. 
                Διασφαλίζουμε την επένδυσή σας με απόλυτη εγκυρότητα.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium text-prestige-navy">
                  <ChevronRight size={16} className="text-prestige-gold" />
                  Έλεγχος Τίτλων Ιδιοκτησίας
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-prestige-navy">
                  <ChevronRight size={16} className="text-prestige-gold" />
                  Σύνταξη Συμβολαίων
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-prestige-navy">
                  <ChevronRight size={16} className="text-prestige-gold" />
                  Μισθωτικές Διαφορές
                </li>
              </ul>
            </motion.div>

            {/* Service 2: Family Law */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-prestige-paper border border-prestige-gold/10 prestige-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-prestige-navy flex items-center justify-center text-white mb-8">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-prestige-navy mb-4">Οικογενειακό Δίκαιο</h3>
              <p className="text-prestige-ink/70 leading-relaxed mb-6">
                Διαχείριση ευαίσθητων οικογενειακών υποθέσεων με διακριτικότητα και σεβασμό. 
                Προστατεύουμε τα συμφέροντά σας και των παιδιών σας.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium text-prestige-navy">
                  <ChevronRight size={16} className="text-prestige-gold" />
                  Διαζύγια (Συναινετικά & Κατ' αντιδικία)
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-prestige-navy">
                  <ChevronRight size={16} className="text-prestige-gold" />
                  Συνεπιμέλεια & Διατροφή
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-prestige-navy">
                  <ChevronRight size={16} className="text-prestige-gold" />
                  Ρύθμιση Σχέσεων Γονέων-Τέκνων
                </li>
              </ul>
            </motion.div>

            {/* Service 3: Supreme Court */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-prestige-navy text-white prestige-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-prestige-gold flex items-center justify-center text-prestige-navy mb-8">
                <Scale size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Άρειος Πάγος</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Εξειδικευμένη εκπροσώπηση στο ανώτατο δικαστήριο της χώρας. 
                Αναλαμβάνουμε υποθέσεις σε όλη την Ελλάδα και για κατοίκους εξωτερικού.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium">
                  <ChevronRight size={16} className="text-prestige-gold" />
                  Αναιρέσεις
                </li>
                <li className="flex items-center gap-2 text-sm font-medium">
                  <ChevronRight size={16} className="text-prestige-gold" />
                  Πανελλαδική Κάλυψη
                </li>
                <li className="flex items-center gap-2 text-sm font-medium">
                  <ChevronRight size={16} className="text-prestige-gold" />
                  Ομογενείς & Κάτοικοι Εξωτερικού
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-prestige-gold" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-prestige-gold" />
                <img 
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop" 
                  alt="Rania Mastorikou"
                  className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 -left-8 bg-prestige-navy text-white p-8 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-4xl font-bold mb-1">30+</div>
                  <div className="text-xs uppercase tracking-widest text-prestige-gold font-bold">Έτη Εμπειρίας</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-prestige-navy mb-8">
                Γιατί να μας <span className="serif-italic font-light text-prestige-gold">εμπιστευτείτε</span>
              </h2>
              <p className="text-lg text-prestige-ink/80 leading-relaxed mb-8">
                Η Ράνια Δημ. Μαστορίκου είναι απόφοιτος της Νομικής Σχολής Αθηνών με <strong>άριστα</strong>. 
                Μέλος του Δικηγορικού Συλλόγου Αθηνών από το 1995, διαθέτει πολυετή εμπειρία και βαθιά γνώση του ελληνικού δικαίου.
              </p>
              <p className="text-lg text-prestige-ink/80 leading-relaxed mb-10">
                Ως Δικηγόρος παρ' Αρείω Πάγω, παρέχει υψηλού επιπέδου νομικές συμβουλές και δικαστική εκπροσώπηση, 
                διασφαλίζοντας την καλύτερη δυνατή έκβαση για κάθε υπόθεση, όσο σύνθετη κι αν είναι.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-prestige-gold"><Award size={24} /></div>
                  <div>
                    <h4 className="font-bold text-prestige-navy">Αριστούχος</h4>
                    <p className="text-sm text-prestige-ink/60">Νομική Αθηνών</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-prestige-gold"><Globe size={24} /></div>
                  <div>
                    <h4 className="font-bold text-prestige-navy">Πανελλαδικά</h4>
                    <p className="text-sm text-prestige-ink/60">Κάλυψη σε όλη την Ελλάδα</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-prestige-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-white" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Χρειάζεστε Νομική Συμβουλή; <br />
            <span className="serif-italic font-light text-prestige-gold">Είμαστε εδώ για εσάς.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto bg-prestige-gold text-prestige-navy px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Phone size={24} />
              Μιλήστε με τη Δικηγόρο
            </a>
          </div>
          <p className="mt-8 text-white/60 font-medium tracking-widest uppercase text-xs">
            Διαθέσιμη για επείγουσες υποθέσεις
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-prestige-navy mb-8">Στοιχεία Επικοινωνίας</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-prestige-paper flex items-center justify-center text-prestige-gold shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-prestige-navy mb-1 text-lg">Διεύθυνση</h4>
                    <p className="text-prestige-ink/70">{ADDRESS}</p>
                    <p className="text-prestige-ink/70">Κολωνός, Αθήνα</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-prestige-paper flex items-center justify-center text-prestige-gold shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-prestige-navy mb-1 text-lg">Τηλέφωνο</h4>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-2xl font-bold text-prestige-navy hover:text-prestige-gold transition-colors">
                      {DISPLAY_PHONE}
                    </a>
                    <p className="text-prestige-ink/50 text-sm mt-1">Κινητό Γραφείου</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-prestige-paper flex items-center justify-center text-prestige-gold shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-prestige-navy mb-1 text-lg">Ωράριο</h4>
                    <p className="text-prestige-ink/70">Δευτέρα - Παρασκευή: 09:00 - 20:00</p>
                    <p className="text-prestige-ink/70 italic text-sm">Κατόπιν τηλεφωνικής συνεννόησης</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-prestige-paper rounded-3xl p-8 md:p-12 border border-prestige-gold/10">
              <h3 className="text-2xl font-bold text-prestige-navy mb-6">Πρόσβαση στο Γραφείο</h3>
              <p className="text-prestige-ink/70 mb-8 leading-relaxed">
                Το γραφείο μας βρίσκεται σε κεντρικό σημείο στον Κολωνό, με εύκολη πρόσβαση από το κέντρο της Αθήνας. 
                Εξυπηρετούμε πελάτες από όλη την Αττική, την επαρχία και το εξωτερικό.
              </p>
              <div className="aspect-video bg-prestige-navy/5 rounded-2xl overflow-hidden border-2 border-prestige-gold/20 shadow-inner">
                {process.env.GOOGLE_MAPS_API_KEY ? (
                  <iframe 
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(ADDRESS)}`}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Τοποθεσία Γραφείου"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                ) : (
                  <iframe 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    title="Τοποθεσία Γραφείου"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                )}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xs font-medium text-prestige-navy/50">
                  Δράμας 7, Κολωνός
                </p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-prestige-gold font-bold hover:underline text-sm"
                >
                  Άνοιγμα στους Χάρτες <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-prestige-navy text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="font-serif text-xl font-bold mb-1">ΡΑΝΙΑ ΔΗΜ. ΜΑΣΤΟΡΙΚΟΥ</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-prestige-gold font-medium">
                ΔΙΚΗΓΟΡΟΣ ΠΑΡ' ΑΡΕΙΩ ΠΑΓΩ
              </div>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-white/60">
              <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Υπηρεσίες</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Βιογραφικό</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Επικοινωνία</button>
            </div>

            <div className="text-sm text-white/40">
              © {new Date().getFullYear()} • Με επιφύλαξη παντός δικαιώματος
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Mobile CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
      >
        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="bg-prestige-gold text-prestige-navy w-full py-4 rounded-full font-bold text-lg shadow-2xl flex items-center justify-center gap-3 border-2 border-white/20"
        >
          <Phone size={20} />
          Κλήση Τώρα
        </a>
      </motion.div>
    </div>
  );
}
