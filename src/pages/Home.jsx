import React, { useState } from 'react';
import { Heart, Activity, Star, ChevronDown, Check, ArrowRight, ShieldCheck, Award, Zap, HelpCircle } from 'lucide-react';
import founderImage from '../assets/images/mitali_kalra.png';

export default function Home({ setCurrentTab, setConcernType }) {
  const [activeTab, setActiveTab] = useState(0);
  const [faqOpen, setFaqOpen] = useState([false, false, false]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concern: 'Acidity & GERD',
    details: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen.map((item, idx) => idx === index ? !item : item));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hello!

I would like to request a gut health consultation. Here are my details:

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Primary Gut Concern:* ${formData.concern}
*Symptom Description:* ${formData.details || 'None provided'}

Please connect me with a gut nutrition expert.`;

    const whatsappUrl = `https://wa.me/917703866823?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', concern: 'Acidity & GERD', details: '' });
    }, 4000);
  };

  const navigateToConcern = (concern) => {
    setConcernType(concern);
    setCurrentTab('concern');
    window.scrollTo(0, 0);
  };

  const triggers = [
    { title: "Antibiotics and Painkillers", desc: "Overuse of antibiotics and NSAIDs kills good bacteria and inflames the delicate gut lining." },
    { title: "Unhealthy Lifestyle", desc: "Irregular sleep, lack of movement, smoking, and alcohol impair gut function and microbial diversity." },
    { title: "Environmental Toxins", desc: "Exposure to pollutants, heavy metals, and chemicals disrupts the microbiome and damages the gut barrier." },
    { title: "Inadequate Nutrition", desc: "Diets high in sugar, ultra processed foods, and low in fiber starve beneficial bacteria and feed harmful pathogens." },
    { title: "Stress and Anxiety", desc: "Chronic stress alters gut motility and microbiota balance, directly weakening digestion and systemic immunity." }
  ];

  const pillars = [
    {
      title: "Whole Ingredients. Nothing Synthetic.",
      subtitle: "Pure, natural nourishment",
      desc: "We use real foods, herbs, and botanicals, not isolates, artificial additives, or synthetic shortcuts. Every ingredient is selected in its complete, natural form so your body recognizes and absorbs it better."
    },
    {
      title: "Traditional Wisdom. Modern Precision.",
      subtitle: "Time tested, science backed",
      desc: "Our formulations are inspired by time-tested digestive remedies and refined using contemporary nutritional science. We honor what has worked for generations, while making it practical and effective for modern life."
    },
    {
      title: "Gut-First, Always.",
      subtitle: "The source of wellness",
      desc: "Every MOSHA product is designed to support digestive balance, whether it is calming acidity, easing bloating, or nourishing the gut lining. Because when your gut works well, everything else follows."
    }
  ];

  const journeySteps = [
    { step: "01", title: "Root Cause Consultation", desc: "Detailed evaluation of your symptoms, medical history, diet, and lifestyle factors to trace the true origin of your discomfort." },
    { step: "02", title: "Personalized Diet Plan", desc: "Customized eating guide based on your symptoms, body type, and nutritional requirements using easily available whole foods." },
    { step: "03", title: "Functional Gut Blends", desc: "Targeted herbal superfoods, adaptogens, and prebiotics to calm irritation, strengthen the lining, and speed up recovery." },
    { step: "04", title: "Gut-Brain Balance", desc: "Daily actionable habits to regulate the nervous system, stimulate the vagus nerve, and boost natural serotonin levels." },
    { step: "05", title: "Complete Gut Reset", desc: "Full digestive cleanse and stomach reset, culminating in a balanced microbiome, high energy, and flat, comfortable stomach." }
  ];

  return (
    <div className="bg-cream-100 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 animate-fadeInUp">
              <div className="inline-flex items-center space-x-2 bg-sage-100/60 border border-sage-200/50 px-4 py-1.5 rounded-full">
                <Activity className="h-4 w-4 text-sage-600 animate-pulse" />
                <span className="text-xs font-semibold text-sage-700 tracking-wider uppercase font-sans">
                  India's First Holistic Gut Clinic
                </span>
              </div>
              
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-sage-900 leading-tight">
                Healing Your Gut to <span className="text-sage-500 underline decoration-sage-300 decoration-wavy">Help You Thrive</span>
              </h1>
              
              <p className="font-sans text-sage-800 text-base sm:text-lg leading-relaxed max-w-2xl">
                MOSHA's gut-first products are crafted to calm, support, and strengthen your digestive system using whole ingredients as nature intended. Rooted in traditional wisdom, refined for modern life. From acidity and bloating to gastritis and sensitive digestion, our formulations support real gut concerns with carefully selected, minimally processed ingredients.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button 
                  onClick={() => setCurrentTab('reset')}
                  className="px-8 py-4 rounded-full bg-sage-500 text-cream-100 text-sm font-bold shadow-md hover:bg-sage-600 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  Start 14-Day Reset
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <a 
                  href="https://aika-health.involve.me/whealthquiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-cream-50 text-sage-800 text-sm font-bold border border-sage-200 shadow-sm hover:bg-sage-50 hover:scale-[1.02] transition-all duration-300 text-center"
                >
                  Take Free Gut Quiz
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-sage-200/60 max-w-xl">
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-sage-800">2000+</h3>
                  <p className="text-xs font-semibold text-sage-500 font-sans mt-1 uppercase tracking-wide">
                    Happy Customers
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-sage-800">90%</h3>
                  <p className="text-xs font-semibold text-sage-500 font-sans mt-1 uppercase tracking-wide">
                    Success Rate
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-sage-800 flex items-center">
                    4.7 <Star className="h-4 w-4 text-coral-500 fill-coral-500 ml-1" />
                  </h3>
                  <p className="text-xs font-semibold text-sage-500 font-sans mt-1 uppercase tracking-wide">
                    Client Rating
                  </p>
                </div>
              </div>

            </div>

            {/* Right Graphic/Mockup */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute inset-0 bg-sage-200 rounded-full blur-3xl opacity-20 transform -translate-y-10" />
              <div className="relative glass-panel rounded-3xl p-8 max-w-md w-full border border-sage-200/50 shadow-2xl animate-fadeInUp">
                <h3 className="font-display font-bold text-lg text-sage-800 mb-6 flex items-center">
                  <ShieldCheck className="h-5 w-5 text-sage-500 mr-2" />
                  Select Your Digestive Concern
                </h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => navigateToConcern('acidity')}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-cream-50 hover:bg-sage-50 hover:border-sage-300 border border-sage-100 transition-all duration-300 group"
                  >
                    <span className="font-sans font-semibold text-sm text-sage-800">Acidity and GERD</span>
                    <ChevronDown className="h-4 w-4 text-sage-400 group-hover:text-sage-600 -rotate-90 transition-transform" />
                  </button>
                  <button 
                    onClick={() => navigateToConcern('gastritis')}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-cream-50 hover:bg-sage-50 hover:border-sage-300 border border-sage-100 transition-all duration-300 group"
                  >
                    <span className="font-sans font-semibold text-sm text-sage-800">H. Pylori and Gastritis</span>
                    <ChevronDown className="h-4 w-4 text-sage-400 group-hover:text-sage-600 -rotate-90 transition-transform" />
                  </button>
                  <button 
                    onClick={() => navigateToConcern('bloating')}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-cream-50 hover:bg-sage-50 hover:border-sage-300 border border-sage-100 transition-all duration-300 group"
                  >
                    <span className="font-sans font-semibold text-sm text-sage-800">Bloating and Gas</span>
                    <ChevronDown className="h-4 w-4 text-sage-400 group-hover:text-sage-600 -rotate-90 transition-transform" />
                  </button>
                  <button 
                    onClick={() => navigateToConcern('constipation')}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-cream-50 hover:bg-sage-50 hover:border-sage-300 border border-sage-100 transition-all duration-300 group"
                  >
                    <span className="font-sans font-semibold text-sm text-sage-800">Constipation and Gut Health</span>
                    <ChevronDown className="h-4 w-4 text-sage-400 group-hover:text-sage-600 -rotate-90 transition-transform" />
                  </button>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xs text-sage-500 font-sans leading-relaxed">
                    Not sure? Take our quiz or consult an expert for free.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hidden Triggers Section */}
      <section className="py-20 bg-cream-50 border-t border-b border-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-sage-500 tracking-widest uppercase font-sans">
              Root Causes of Illness
            </h2>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-sage-900">
              What are the Hidden Triggers of Gut Problems?
            </h3>
            <p className="font-sans text-sm text-sage-500 leading-relaxed">
              Gut issues do not just appear. They are responses to systemic stressors that damage the microbiome, degrade the protective stomach lining, and compromise digestive velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {triggers.map((trigger, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-sage-200/40 hover:border-sage-400/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-600 font-bold">
                    {idx + 1}
                  </div>
                  <h4 className="font-display font-bold text-base text-sage-800 leading-snug">
                    {trigger.title}
                  </h4>
                  <p className="font-sans text-xs text-sage-500 leading-relaxed">
                    {trigger.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gut Health is Important Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-xs font-bold text-sage-500 tracking-widest uppercase font-sans">
                The Control Center
              </h2>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-sage-900 leading-tight">
                Why is Gut Health Important?
              </h3>
              <p className="font-sans text-sage-800 text-sm leading-relaxed">
                Your gut is not just about digestion, it is the control center for your whole body. A healthy gut helps you absorb nutrients, keeps your immunity strong, supports hormone balance, and even affects your mood and energy levels. 
              </p>
              <p className="font-sans text-sage-800 text-sm leading-relaxed">
                When your gut is off, it can show up as bloating, constipation, fatigue, brain fog, skin breakouts, low immunity, or anxiety. That is because your gut is deeply connected to your brain, skin, hormones, and immune responses. Healing your gut can lead to real changes, from better digestion and clearer skin to feeling calmer, lighter, and more energetic every single day.
              </p>
              <div className="pt-4">
                <a 
                  href="https://aika-health.involve.me/whealthquiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-sage-500 hover:bg-sage-600 text-cream-100 text-sm font-semibold transition-all shadow-md duration-300"
                >
                  Take the Gut Quiz
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-sage-200/50 space-y-6 bg-cream-50/50 shadow-xl">
              <div className="flex items-center space-x-4 border-b border-sage-100 pb-4">
                <div className="h-12 w-12 rounded-2xl bg-coral-100 flex items-center justify-center text-coral-500">
                  <Heart className="h-6 w-6 fill-coral-500" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-sage-800">Systemic Impact</h4>
                  <p className="text-xs text-sage-500">How gut imbalance manifests across your body</p>
                </div>
              </div>
              <ul className="space-y-3 font-sans text-sm text-sage-700">
                <li className="flex items-center"><Check className="h-4 w-4 text-sage-500 mr-3" /> 70% of immune cells reside in the gut lining</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-sage-500 mr-3" /> 90% of serotonin (happy hormone) is synthesized in the gut</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-sage-500 mr-3" /> Gut barrier decay leaks toxins, causing skin breakouts</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-sage-500 mr-3" /> Poor gut microflora directly influences thyroid and insulin levels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Root Cause Healing Tabbed Section */}
      <section className="py-20 bg-cream-200/30 border-t border-b border-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-sage-500 tracking-widest uppercase font-sans mb-3">
              Our Philosophy
            </h2>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-sage-900">
              Root-Cause Healing to Help You Thrive
            </h3>
          </div>

          <div className="flex justify-center space-x-2 md:space-x-4 mb-10 overflow-x-auto pb-2">
            {pillars.map((pillar, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shrink-0 ${
                  activeTab === idx 
                    ? 'bg-sage-500 text-cream-100 shadow-md' 
                    : 'bg-cream-50 text-sage-700 border border-sage-100 hover:bg-sage-50'
                }`}
              >
                {pillar.title.split('.')[0]}
              </button>
            ))}
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-sage-200/60 max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center bg-cream-50">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 shrink-0">
              <Zap className="h-8 w-8 text-sage-600" />
            </div>
            <div className="space-y-4">
              <span className="text-xs font-bold text-coral-500 uppercase tracking-widest font-sans">
                {pillars[activeTab].subtitle}
              </span>
              <h4 className="font-display font-bold text-xl sm:text-2xl text-sage-800">
                {pillars[activeTab].title}
              </h4>
              <p className="font-sans text-sage-700 text-sm leading-relaxed">
                {pillars[activeTab].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-sage-500 tracking-widest uppercase font-sans mb-3">
              The Path Forward
            </h2>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-sage-900">
              Your Journey to a Healthier Self
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-sage-200 -translate-y-4 z-0" />
            {journeySteps.map((step, idx) => (
              <div key={idx} className="relative z-10 glass-panel p-6 rounded-2xl border border-sage-200/50 bg-cream-50 flex flex-col justify-between hover:scale-102 transition-transform duration-300">
                <div>
                  <div className="text-4xl font-display font-black text-sage-200/70 mb-4">{step.step}</div>
                  <h4 className="font-display font-bold text-base text-sage-800 mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-sage-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => setCurrentTab('reset')}
              className="px-8 py-4 rounded-full bg-sage-500 text-cream-100 text-sm font-bold shadow-md hover:bg-sage-600 hover:scale-102 transition-all duration-300"
            >
              Consult Gut Expert Now
            </button>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-cream-50 border-t border-b border-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-2 border border-sage-200 rounded-3xl bg-cream-100">
                <img 
                  src={founderImage} 
                  alt="Mitali Kalra" 
                  className="rounded-2xl max-w-xs object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-sage-500 text-cream-100 px-6 py-2 rounded-full text-xs font-bold font-sans shadow-md">
                  Founder
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-xs font-bold text-sage-500 tracking-widest uppercase font-sans">
                Our Leader
              </h2>
              <h3 className="font-display font-bold text-3xl text-sage-900">
                Mitali Kalra
              </h3>
              <p className="font-sans font-semibold text-sm text-sage-600 uppercase tracking-wider">
                Founder and Gut Health Expert
              </p>
              <div className="space-y-4 font-sans text-sage-800 text-sm leading-relaxed">
                <p>
                  Mitali is an ex-investment banker, a CA, and MBA with 15 years of experience working with the world's leading companies in India and abroad. In the early years of her corporate career, long working hours, unhealthy food, and lack of exercise led to her developing PCOS.
                </p>
                <p>
                  She began studying nutrition in-depth, and successfully treated her PCOD by implementing targeted diet and lifestyle changes, without any medication, within 3 months.
                </p>
                <p>
                  Since then, she has been a strong believer in the healing power of food, active lifestyle interventions, and natural healing cycles. She is now on a dedicated mission to help you treat yourself naturally and live a healthy, disease-free life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            
            {/* Left side details */}
            <div className="flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs font-bold text-sage-500 tracking-widest uppercase font-sans">
                  Get in Touch
                </h2>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-sage-900 leading-tight">
                  Ready to Reclaim Your Gut Health?
                </h3>
                <p className="font-sans text-sage-700 text-sm leading-relaxed">
                  Fill out this form with details on your digestive concern. A clinical nutritionist from our team will reach out to analyze your symptoms, walk through your history, and help customize the ideal healing path.
                </p>
              </div>

              <div className="space-y-4 border-t border-sage-200/60 pt-6">
                <div className="flex items-center space-x-3 text-sm text-sage-700">
                  <Check className="h-5 w-5 text-sage-500 shrink-0" />
                  <span>100% natural approach with zero side-effects</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-sage-700">
                  <Check className="h-5 w-5 text-sage-500 shrink-0" />
                  <span>Personalized guidance from clinical experts</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-sage-700">
                  <Check className="h-5 w-5 text-sage-500 shrink-0" />
                  <span>Daily follow-ups and WhatsApp check-in accountability</span>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="glass-panel p-8 rounded-3xl border border-sage-200/50 bg-cream-50 shadow-xl">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center h-full py-12 space-y-4">
                  <div className="h-16 w-16 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                    <Check className="h-8 w-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-sage-800">Form Submitted!</h4>
                  <p className="font-sans text-sm text-sage-500 max-w-sm">
                    Thank you for reaching out. A gut nutrition expert from our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-sage-700 uppercase tracking-wider mb-2 font-sans">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-sage-800 text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors"
                      placeholder="e.g. Bhawna Kapoor"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-sage-700 uppercase tracking-wider mb-2 font-sans">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-sage-800 text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors"
                        placeholder="hello@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-sage-700 uppercase tracking-wider mb-2 font-sans">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-sage-800 text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-sage-700 uppercase tracking-wider mb-2 font-sans">
                      Select Primary Gut Concern
                    </label>
                    <select
                      value={formData.concern}
                      onChange={(e) => setFormData({...formData, concern: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-sage-800 text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors"
                    >
                      <option value="Acidity & GERD">Acidity and GERD</option>
                      <option value="H. Pylori & Gastritis">H. Pylori and Gastritis</option>
                      <option value="Bloating & Gas">Bloating and Gas</option>
                      <option value="Constipation & Gut Health">Constipation and Gut Health</option>
                      <option value="Fatty Liver & Metabolism">Fatty Liver and Metabolism</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-sage-700 uppercase tracking-wider mb-2 font-sans">
                      Brief Symptom Description (Optional)
                    </label>
                    <textarea 
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-sage-200 bg-cream-50 text-sage-800 text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors h-24 resize-none"
                      placeholder="Tell us what you are experiencing..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-sage-500 text-cream-100 text-sm font-bold shadow-md hover:bg-sage-600 hover:scale-[1.01] transition-all duration-300"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream-50 border-t border-sage-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <HelpCircle className="h-8 w-8 text-sage-500 mx-auto" />
            <h2 className="font-display font-bold text-3xl text-sage-900">
              Gut Health FAQs
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <div className="border border-sage-200/60 rounded-2xl bg-cream-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleFaq(0)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-sans font-bold text-sage-800 text-sm">
                  Why is Gut Health Important for overall wellness?
                </span>
                <ChevronDown className={`h-5 w-5 text-sage-500 transition-transform duration-300 ${faqOpen[0] ? 'rotate-180' : ''}`} />
              </button>
              {faqOpen[0] && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-sage-600 font-sans leading-relaxed border-t border-sage-100 pt-4 bg-cream-50">
                  Your gut does much more than digest food. A healthy gut plays a vital role in digestion, immunity, metabolism, energy levels, and even mood regulation. Over 70% of your body's immune defense resides in the gut lining, and the gut synthesizes the vast majority of your body's serotonin. Balancing your gut directly resolves fatigue, skin issues, and chemical imbalances.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="border border-sage-200/60 rounded-2xl bg-cream-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-sans font-bold text-sage-800 text-sm">
                  Does Gut Health affect hormonal balance?
                </span>
                <ChevronDown className={`h-5 w-5 text-sage-500 transition-transform duration-300 ${faqOpen[1] ? 'rotate-180' : ''}`} />
              </button>
              {faqOpen[1] && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-sage-600 font-sans leading-relaxed border-t border-sage-100 pt-4 bg-cream-50">
                  Yes, poor gut health can cause issues like bloating, estrogen dominance, and worsen PMS symptoms. The gut microbiome contains specialized bacteria (the estrobolome) that process and modulate estrogen. If the gut is inflamed or has dysbiosis, it cannot clear estrogen properly, leading to systemic hormone imbalances.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="border border-sage-200/60 rounded-2xl bg-cream-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-sans font-bold text-sage-800 text-sm">
                  What is Gastritis and how does it relate to H. pylori?
                </span>
                <ChevronDown className={`h-5 w-5 text-sage-500 transition-transform duration-300 ${faqOpen[2] ? 'rotate-180' : ''}`} />
              </button>
              {faqOpen[2] && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-sage-600 font-sans leading-relaxed border-t border-sage-100 pt-4 bg-cream-50">
                  Gastritis is inflammation or irritation of the stomach lining. The stomach has a protective lining that shields it from its own acid. When this lining becomes inflamed or damaged, it can lead to symptoms such as burning, pain, nausea, bloating, or indigestion. Helicobacter pylori (H. pylori) is a bacterial infection that directly damages this protective mucus lining, exposing the stomach tissue to acid, causing severe gastritis and potentially ulcers.
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
