import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Menu, 
  X, 
  Settings, 
  MonitorSmartphone,
  Users, 
  ArrowRight, 
  CheckCircle, 
  Mail, 
  Linkedin,
  Code,
  HelpCircle
} from 'lucide-react';

/* 
  Omni Solutions AB - Landing Page
  Updated: System logos now point to correct files and display in full color (no grayscale).
*/

const OmniLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-slate-800">
      {/* --- HEADER --- */}
      <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <img src="/logo.png" alt="Omni Solutions AB" className="h-20 w-auto" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-slate-600 hover:text-[#008080] font-medium transition">Tjänster</a>
            <a href="#systems" className="text-slate-600 hover:text-[#008080] font-medium transition">System</a>
            <a href="#faq" className="text-slate-600 hover:text-[#008080] font-medium transition">Vanliga frågor</a>
            <a 
              href="#contact" 
              className="bg-[#008080] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-teal-700 transition shadow-lg shadow-teal-500/20"
            >
              Få en gratis analys
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 absolute w-full shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium">Tjänster</a>
              <a href="#systems" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium">System</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium">Frågor & Svar</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-[#008080] font-bold">Få en gratis analys</a>
            </div>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Vi digitaliserar ditt företag – <br className="hidden md:block" />
            <span className="text-[#008080]">snabbt, lokalt och skräddarsytt.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Låt oss sköta tekniken så att du kan fokusera på affärerna. 
            Vi hjälper företag i Östergötland att spara tid genom smarta digitala verktyg.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-[#008080] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition shadow-xl shadow-teal-500/30 flex items-center justify-center gap-2"
            >
              Se vad vi kan göra <ArrowRight size={20} />
            </a>
            <button className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-slate-200 text-slate-700 hover:border-[#008080] hover:text-[#008080] transition bg-white">
              Läs om våra case
            </button>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Varför Omni Solutions?</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Vi bygger inte bara system, vi bygger lösningar som sparar tid från dag ett.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Settings size={32} className="text-[#008080]" />}
              title="Automation"
              description="Slipper du manuellt klipp-och-klistra? Vi kopplar ihop dina system så de pratar med varandra automatiskt."
            />
            <ServiceCard 
              icon={<MonitorSmartphone size={32} className="text-[#008080]" />}
              title="Webb & Mobil"
              description="Oavsett om ni behöver en app i fickan eller en portal på datorn. Vi bygger responsiva lösningar som fungerar överallt."
            />
            <ServiceCard 
              icon={<Users size={32} className="text-[#008080]" />}
              title="Lokal Konsultation"
              description="Ingen teknisk jargong. Vi är din lokala partner i Östergötland som förklarar så att du förstår."
            />
          </div>
        </div>
      </section>

      {/* --- SYSTEMS WE WORK WITH (Updated Logos) --- */}
      <section id="systems" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Vi pratar med dina system</h2>
          <p className="text-slate-500 mb-12 max-w-2xl mx-auto">
            Vi skapar kopplingar mellan era viktigaste verktyg så att informationen flödar fritt utan manuellt arbete.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {/* Visma */}
            <SystemCard 
              imgSrc="/visma.png" 
              name="Visma" 
            />
            {/* Fortnox - .jpg updated */}
            <SystemCard 
              imgSrc="/fortnox.jpg" 
              name="Fortnox" 
            />
            {/* Excel - .jpg updated */}
            <SystemCard 
              imgSrc="/excel.jpg" 
              name="Excel / 365" 
            />
            {/* Egna APIer (Ikon) */}
            <SystemCard 
              icon={<Code size={56} />} 
              name="Egna API:er" 
            />
          </div>
        </div>
      </section>

      {/* --- LEAD CAPTURE --- */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        {/* Dekorativ bakgrundscirkel */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-60 -ml-20 -mb-20"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 ring-1 ring-slate-200/50">
            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <span className="text-[#008080] font-semibold tracking-wide uppercase text-sm">Gratis Behovsanalys</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
                  Berätta om din utmaning
                </h2>
                <p className="text-slate-600">
                  Fyll i formuläret nedan så får vi en tydlig bild av vad som bromsar din verksamhet idag.
                </p>
              </div>
              
              <LeadForm />
              
              <p className="text-center text-slate-400 text-sm mt-6">
                Ingen bindningstid. Dina uppgifter hanteras konfidentiellt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-teal-100 rounded-full text-[#008080] mb-4">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Vanliga frågor</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FAQCard 
              question="Binder jag upp mig på något?" 
              answer="Nej, analysen är helt gratis och förutsättningslös. Du bestämmer själv om du vill gå vidare med vårt förslag efteråt." 
            />
            <FAQCard 
              question="Måste vi byta system?" 
              answer="Nej, absolut inte. Vår specialitet är att integrera och automatisera de system ni redan använder idag (t.ex. Visma eller Fortnox)." 
            />
            <FAQCard 
              question="Vad kostar det?" 
              answer="Efter analysen får du alltid ett fast pris på själva utvecklingen, så du vet exakt vad investeringen blir. Vi erbjuder därefter ett serviceavtal för att hålla koden uppdaterad och säker. Avtalet ger dessutom rabatt när ni vill bygga ut eller lägga till funktioner i framtiden." 
            />
          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Byggt med modern teknik</h3>
          <p className="text-slate-500 text-sm mb-8 max-w-2xl mx-auto">
            För att garantera snabbhet, säkerhet och skalbarhet använder vi marknadsledande verktyg.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["React", "TypeScript", "Node.js", "Python", "Tailwind CSS", "AWS"].map((tech) => (
              <span key={tech} className="px-5 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-semibold border border-slate-200 shadow-sm cursor-default hover:border-teal-200 hover:text-teal-700 transition">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t-4 border-[#008080]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Omni Solutions AB</h3>
              <p className="text-slate-400">Din digitala partner i Linköping/Norrköping.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2">
              <a href="mailto:omni.solutions.ab@gmail.com" className="flex items-center gap-2 hover:text-white transition">
                <Mail size={18} /> omni.solutions.ab@gmail.com
              </a>
              <div className="flex gap-4 mt-2">
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-[#008080] transition"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Omni Solutions AB. Alla rättigheter förbehållna.
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg hover:border-teal-200 transition duration-300 group h-full">
    <div className="mb-4 bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">
      {description}
    </p>
  </div>
);

// Updated SystemCard: Logos in FULL COLOR (removed grayscale classes)
const SystemCard = ({ icon, imgSrc, name }) => (
  <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-[#008080]/30 transition group cursor-default h-36">
    {imgSrc ? (
      <img 
        src={imgSrc} 
        alt={name} 
        // Grayscale removed, opacity removed. Full color.
        className="h-16 w-auto object-contain transition duration-300"
      />
    ) : (
      <div className="text-slate-400 group-hover:text-[#008080] transition duration-300">
        {icon}
      </div>
    )}
    
    <span className="font-bold text-sm text-slate-400 group-hover:text-slate-800 transition duration-300">
      {name}
    </span>
  </div>
);

const FAQCard = ({ question, answer }) => (
  <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
    <h3 className="text-lg font-bold text-slate-900 mb-3">{question}</h3>
    <p className="text-slate-600 leading-relaxed">
      {answer}
    </p>
  </div>
);

/* 
  LeadForm Component
*/
const LeadForm = () => {
  const [formData, setFormData] = useState({
    process: '',
    systems: '',
    timeSpent: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.process || !formData.email) return;

    setIsSending(true); 

    const templateParams = {
      process: formData.process,
      systems: formData.systems,
      time_spent: formData.timeSpent,
      user_email: formData.email,
      reply_to: formData.email
    };

    const serviceID = 'service_e4lrv82';
    const publicKey = 'cE-ZYv81PI77BGB8k';

    // 1. Skicka notis till Admin
    const sendAdminNotification = emailjs.send(
      serviceID, 
      'template_81d0f9m',
      templateParams, 
      publicKey
    );

    // 2. Skicka auto-svar till kund
    const sendAutoReply = emailjs.send(
      serviceID, 
      'template_tku2x04',
      templateParams, 
      publicKey
    );

    Promise.all([sendAdminNotification, sendAutoReply])
      .then((responses) => {
        console.log('BOTH EMAILS SENT!', responses);
        setIsSubmitted(true);
        setIsSending(false);
        setFormData({ process: '', systems: '', timeSpent: '', email: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Något gick fel vid sändning. Kontrollera din anslutning eller försök igen senare.');
        setIsSending(false);
      });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-10 bg-teal-50 rounded-xl border border-teal-100 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="bg-white p-3 rounded-full shadow-sm">
            <CheckCircle size={48} className="text-[#008080]" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Tack! Vi har mottagit din beskrivning.</h3>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 max-w-lg mx-auto text-left">
          <p className="font-semibold text-[#008080] mb-1">Nästa steg:</p>
          <p className="text-slate-600 leading-relaxed">
            Vi analyserar ditt behov och återkommer strax via mejl med 3-4 fördjupande frågor för att kunna skissa på din lösning.
          </p>
        </div>

        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-sm text-slate-500 font-medium hover:text-[#008080] transition underline"
        >
          Skicka en till förfrågan
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* 1. Processen */}
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          1. Vilken process vill du effektivisera? <span className="text-red-400">*</span>
        </label>
        <textarea 
          required
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008080] focus:border-transparent outline-none transition resize-none bg-slate-50 focus:bg-white"
          placeholder="T.ex. Hantering av inkommande fakturor och manuell inmatning i Visma..."
          value={formData.process}
          onChange={(e) => setFormData({...formData, process: e.target.value})}
          disabled={isSending}
        />
      </div>

      {/* 2. System */}
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          2. Vilka program/system är inblandade idag?
        </label>
        <input 
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008080] outline-none transition bg-slate-50 focus:bg-white"
          placeholder="T.ex. Excel, Outlook och Visma..."
          value={formData.systems}
          onChange={(e) => setFormData({...formData, systems: e.target.value})}
          disabled={isSending}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 3. Tid */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            3. Hur mycket tid lägger ni på detta?
          </label>
          <div className="relative">
            <select 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008080] outline-none transition bg-white appearance-none cursor-pointer"
              value={formData.timeSpent}
              onChange={(e) => setFormData({...formData, timeSpent: e.target.value})}
              disabled={isSending}
            >
              <option value="" disabled>Välj tidsåtgång...</option>
              <option value="<2h">&lt; 2 timmar/vecka</option>
              <option value="2-5h">2-5 timmar/vecka</option>
              <option value="5-10h">5-10 timmar/vecka</option>
              <option value="10h+">10+ timmar/vecka</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* 4. Email */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            4. Din e-postadress <span className="text-red-400">*</span>
          </label>
          <input 
            required
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008080] outline-none transition bg-slate-50 focus:bg-white"
            placeholder="namn@foretag.se"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            disabled={isSending}
          />
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSending}
        className={`w-full bg-[#008080] text-white font-bold text-lg py-4 rounded-xl hover:bg-teal-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4 flex justify-center items-center gap-2 ${isSending ? 'opacity-70 cursor-not-allowed transform-none hover:shadow-lg' : ''}`}
      >
        {isSending ? (
          <>
            <span>Skickar...</span>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </>
        ) : (
          "Skicka in – Vi återkommer med en lösning"
        )}
      </button>
    </form>
  );
};

export default OmniLandingPage;