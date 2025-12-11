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

/* Omni Solutions AB - Landing Page
  Domain: www.osab-ai.se
  Updated: Fixed Footer Full-Width issue & Layout
*/

const OmniLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#F9FAFB] font-sans text-slate-800 overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             {/* Ersätt src med din logotyp-sökväg */}
             <img src="/logo.png" alt="Omni Solutions AB" className="h-24 w-auto object-contain" />
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
            className="md:hidden text-slate-600 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-6 absolute w-full shadow-xl z-50 flex flex-col space-y-4 animate-fade-in-down">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium text-lg">Tjänster</a>
            <a href="#systems" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium text-lg">System</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium text-lg">Frågor & Svar</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-[#008080] font-bold text-lg">Få en gratis analys</a>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-20 px-6 bg-gradient-to-b from-slate-50 to-[#F9FAFB]">
        <div className="container mx-auto max-w-5xl text-center z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
            Vi digitaliserar ditt företag – <br className="hidden md:block" />
            <span className="text-[#008080]">snabbt, lokalt och skräddarsytt.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Låt oss sköta tekniken så att du kan fokusera på affärerna. 
            Vi hjälper företag i Östergötland att spara tid genom smarta digitala verktyg via <span className="font-semibold text-slate-800">osab-ai.se</span>.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-5">
            <a 
              href="#contact" 
              className="bg-[#008080] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-teal-700 transition shadow-xl shadow-teal-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              Se vad vi kan göra <ArrowRight size={22} />
            </a>
            <button className="px-10 py-5 rounded-xl font-bold text-lg border-2 border-slate-200 text-slate-700 hover:border-[#008080] hover:text-[#008080] transition bg-white shadow-sm transform hover:-translate-y-1">
              Läs om våra case
            </button>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-0"></div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="w-full py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Varför Omni Solutions?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Vi bygger inte bara system, vi bygger lösningar som sparar tid från dag ett.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard 
              icon={<Settings size={36} className="text-[#008080]" />}
              title="Automation"
              description="Slipper du manuellt klipp-och-klistra? Vi kopplar ihop dina system så de pratar med varandra automatiskt."
            />
            <ServiceCard 
              icon={<MonitorSmartphone size={36} className="text-[#008080]" />}
              title="Webb & Mobil"
              description="Oavsett om ni behöver en app i fickan eller en portal på datorn. Vi bygger responsiva lösningar som fungerar överallt."
            />
            <ServiceCard 
              icon={<Users size={36} className="text-[#008080]" />}
              title="Lokal Konsultation"
              description="Ingen teknisk jargong. Vi är din lokala partner i Östergötland som förklarar så att du förstår."
            />
          </div>
        </div>
      </section>

      {/* --- SYSTEMS WE WORK WITH --- */}
      <section id="systems" className="w-full py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Vi pratar med dina system</h2>
          <p className="text-slate-500 mb-16 max-w-2xl mx-auto text-lg">
            Vi skapar kopplingar mellan era viktigaste verktyg så att informationen flödar fritt utan manuellt arbete.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <SystemCard imgSrc="/visma.png" name="Visma" />
            <SystemCard imgSrc="/fortnox.jpg" name="Fortnox" />
            <SystemCard imgSrc="/excel.jpg" name="Excel / 365" />
            <SystemCard icon={<Code size={64} />} name="Egna API:er" />
          </div>
        </div>
      </section>

      {/* --- LEAD CAPTURE --- */}
      <section id="contact" className="w-full py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-3xl opacity-60 -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-3xl opacity-60 -ml-40 -mb-40"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 ring-1 ring-slate-200/50">
            <div className="p-10 md:p-16">
              <div className="text-center mb-12">
                <span className="text-[#008080] font-bold tracking-widest uppercase text-sm">www.osab-ai.se</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-6">
                  Berätta om din utmaning
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Fyll i formuläret nedan så får vi en tydlig bild av vad som bromsar din verksamhet idag.
                </p>
              </div>
              
              <LeadForm />
              
              <p className="text-center text-slate-400 text-sm mt-8">
                Ingen bindningstid. Dina uppgifter hanteras konfidentiellt av Omni Solutions AB.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="w-full py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-teal-100 rounded-full text-[#008080] mb-6">
              <HelpCircle size={40} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Vanliga frågor</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
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
              answer="Efter analysen får du alltid ett fast pris på själva utvecklingen, så du vet exakt vad investeringen blir. Vi erbjuder därefter ett serviceavtal för att hålla koden uppdaterad och säker." 
            />
          </div>
        </div>
      </section>

      {/* --- TECH STACK (Full Width Fix) --- */}
      <section className="w-full bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Byggt med modern teknik</h3>
          <p className="text-slate-500 text-sm mb-10 max-w-2xl mx-auto">
            För att garantera snabbhet, säkerhet och skalbarhet använder vi marknadsledande verktyg.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "TypeScript", "Node.js", "Python", "Tailwind CSS", "AWS"].map((tech) => (
              <span key={tech} className="px-6 py-3 bg-slate-50 text-slate-600 rounded-full text-sm font-semibold border border-slate-200 shadow-sm cursor-default hover:border-teal-200 hover:text-teal-700 transition">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER (Full Width Fix) --- */}
      {/* "w-full" här på utsidan garanterar att färgen går hela vägen */}
      <footer className="w-full bg-slate-900 text-slate-300 border-t-4 border-[#008080]">
        
        {/* "max-w-7xl mx-auto" här på insidan centrerar innehållet */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Vänster sida */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Omni Solutions AB</h3>
              <p className="text-slate-400 text-lg">Din digitala partner på <span className="text-white font-medium">www.osab-ai.se</span></p>
            </div>
            
            {/* Höger sida (Justerad layout) */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <a href="mailto:info@osab-ai.se" className="flex items-center gap-3 hover:text-white transition text-lg group">
                <div className="p-2 bg-slate-800 rounded-full group-hover:bg-[#008080] transition">
                  <Mail size={20} />
                </div>
                info@osab-ai.se
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-white transition text-lg group">
                 <div className="p-2 bg-slate-800 rounded-full group-hover:bg-[#008080] transition">
                  <Linkedin size={20} />
                 </div>
                 <span className="text-sm">Följ oss på LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Omni Solutions AB. Alla rättigheter förbehållna.
          </div>
        </div>
      </footer>

    </div>
  );
};

/* --- SUB-COMPONENTS --- */
/* (Dessa är oförändrade, men inkluderade för att koden ska vara komplett) */

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-teal-200 transition duration-300 group h-full flex flex-col">
    <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-lg">
      {description}
    </p>
  </div>
);

const SystemCard = ({ icon, imgSrc, name }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:border-[#008080]/30 transition group cursor-default h-48 w-full">
    {imgSrc ? (
      <img 
        src={imgSrc} 
        alt={name} 
        className="h-20 w-auto object-contain transition duration-300"
      />
    ) : (
      <div className="text-slate-400 group-hover:text-[#008080] transition duration-300">
        {icon}
      </div>
    )}
    
    <span className="font-bold text-base text-slate-400 group-hover:text-slate-800 transition duration-300">
      {name}
    </span>
  </div>
);

const FAQCard = ({ question, answer }) => (
  <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition h-full">
    <h3 className="text-xl font-bold text-slate-900 mb-4">{question}</h3>
    <p className="text-slate-600 leading-relaxed text-lg">
      {answer}
    </p>
  </div>
);

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

    const sendAdminNotification = emailjs.send(serviceID, 'template_81d0f9m', templateParams, publicKey);
    const sendAutoReply = emailjs.send(serviceID, 'template_tku2x04', templateParams, publicKey);

    Promise.all([sendAdminNotification, sendAutoReply])
      .then((responses) => {
        setIsSubmitted(true);
        setIsSending(false);
        setFormData({ process: '', systems: '', timeSpent: '', email: '' });
      })
      .catch((err) => {
        alert('Något gick fel vid sändning. Kontrollera din anslutning eller försök igen senare.');
        setIsSending(false);
      });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 bg-teal-50 rounded-2xl border border-teal-100 animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-full shadow-sm">
            <CheckCircle size={56} className="text-[#008080]" />
          </div>
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Tack! Vi har mottagit din beskrivning.</h3>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 max-w-lg mx-auto text-left">
          <p className="font-semibold text-[#008080] mb-2 text-lg">Nästa steg:</p>
          <p className="text-slate-600 leading-relaxed text-lg">
            Vi analyserar ditt behov och återkommer strax via mejl med 3-4 fördjupande frågor för att kunna skissa på din lösning.
          </p>
        </div>
        <button onClick={() => setIsSubmitted(false)} className="mt-10 text-base text-slate-500 font-medium hover:text-[#008080] transition underline">
          Skicka en till förfrågan
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block text-base font-bold text-slate-700 mb-3">1. Vilken process vill du effektivisera? <span className="text-red-400">*</span></label>
        <textarea required rows={3} className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#008080] outline-none transition resize-none bg-slate-50 focus:bg-white text-lg" placeholder="T.ex. Hantering av inkommande fakturor..." value={formData.process} onChange={(e) => setFormData({...formData, process: e.target.value})} disabled={isSending} />
      </div>
      <div>
        <label className="block text-base font-bold text-slate-700 mb-3">2. Vilka program/system är inblandade idag?</label>
        <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#008080] outline-none transition bg-slate-50 focus:bg-white text-lg" placeholder="T.ex. Excel, Outlook och Visma..." value={formData.systems} onChange={(e) => setFormData({...formData, systems: e.target.value})} disabled={isSending} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-base font-bold text-slate-700 mb-3">3. Hur mycket tid lägger ni på detta?</label>
          <div className="relative">
            <select className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#008080] outline-none transition bg-white appearance-none cursor-pointer text-lg" value={formData.timeSpent} onChange={(e) => setFormData({...formData, timeSpent: e.target.value})} disabled={isSending}>
              <option value="" disabled>Välj tidsåtgång...</option>
              <option value="<2h">&lt; 2 timmar/vecka</option>
              <option value="2-5h">2-5 timmar/vecka</option>
              <option value="5-10h">5-10 timmar/vecka</option>
              <option value="10h+">10+ timmar/vecka</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-base font-bold text-slate-700 mb-3">4. Din e-postadress <span className="text-red-400">*</span></label>
          <input required type="email" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#008080] outline-none transition bg-slate-50 focus:bg-white text-lg" placeholder="namn@foretag.se" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} disabled={isSending} />
        </div>
      </div>
      <button type="submit" disabled={isSending} className={`w-full bg-[#008080] text-white font-bold text-xl py-5 rounded-xl hover:bg-teal-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-6 flex justify-center items-center gap-3 ${isSending ? 'opacity-70 cursor-not-allowed transform-none hover:shadow-lg' : ''}`}>
        {isSending ? (<span>Skickar...</span>) : ("Skicka in – Vi återkommer med en lösning")}
      </button>
    </form>
  );
};

export default OmniLandingPage;