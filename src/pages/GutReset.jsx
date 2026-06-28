import React, { useState } from 'react';
import { Calendar, UserCheck, Apple, ShieldAlert, Sparkles, MessageCircle, ArrowRight, Star, Heart, CheckCircle } from 'lucide-react';
import resetKitImage from '../assets/images/gut_reset_kit.png';

export default function GutReset({ onAddToCart }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const steps = [
    {
      num: "01",
      title: "Personalized Gut Evaluation",
      desc: "We begin with a detailed gut health assessment to understand your symptoms, triggers, and digestion patterns. This helps us identify your root issues and tailor the program to your unique needs."
    },
    {
      num: "02",
      title: "Gut Healing Diet and Habits Plan",
      desc: "You will receive two simple, 7-day meal plans crafted to support digestion, reduce bloating, and nourish your gut lining. These plans are flexible, practical, and designed using easily available ingredients. Along with that, we guide you on daily food habits like proper chewing, meal timing, and food combinations, so your gut starts healing naturally."
    },
    {
      num: "03",
      title: "Customized Gut Healing Kit",
      desc: "You will get a curated kit with essential tools to support your journey, including herbal teas, spice mixes, superfoods, tea strainer, and a sipper to aid digestion, reduce acidity, and boost nutrient absorption."
    },
    {
      num: "04",
      title: "Follow-up Call with Nutritionist",
      desc: "Our expert nutritionist checks in with you 1 on 1 every week to review progress, resolve concerns, and fine-tune your plan as needed. This accountability keeps you on track and motivated."
    },
    {
      num: "05",
      title: "Daily Gut Guidance and Tips",
      desc: "Get support, reminders, and gut health tips via WhatsApp. Track your meals, symptoms, and habits to build self-awareness and stay consistent throughout the reset."
    },
    {
      num: "06",
      title: "Healthy and Strong Gut!",
      desc: "By the end of 14 days, you will feel lighter, more energetic, and in control of your digestion. This is not a crash diet, it is a foundation for long-term gut health and sustained wellness."
    }
  ];

  const pillars = [
    { title: "Eliminate Triggers", desc: "We help you gently eliminate common triggers like processed foods, excessive caffeine, and poor food combinations giving your gut the space to heal and reset." },
    { title: "Gut-Healing Foods", desc: "Each recipe and meal is designed to calm inflammation, support detoxification, and improve digestion. We include foods that specifically address bloating, acidity, and IBS symptoms." },
    { title: "Daily Gut Repair Formula", desc: "Our Gut Calm blend is crafted with powerful natural ingredients that help soothe inflammation, support digestion, and restore gut balance, making it easier to feel light and comfortable every day." },
    { title: "Gut-Brain Axis", desc: "Your gut and brain talk all day. We include daily actions to activate your vagus nerve, reduce stress, improve sleep, and boost feel-good neurotransmitters like serotonin, from breathwork to sunlight exposure." },
    { title: "Root Cause Focus", desc: "Instead of temporary relief, our approach works deep within your gut to address the root causes of acidity, bloating, and discomfort, helping you achieve long-lasting results." },
    { title: "Personalized Nutrition", desc: "No one-size-fits-all. We tailor your plan based on your body type and Ayurvedic constitution (Vata, Pitta, Kapha), ensuring your gut gets exactly what it needs." }
  ];

  const team = [
    {
      name: "Mitali Kalra",
      role: "Founder and Gut Health Coach",
      desc: "Mitali is an ex-investment banker, CA, and MBA with 15 years of experience. She healed her own chronic PCOS in 3 months using targeted food and lifestyle interventions. She is on a mission to make natural healing accessible."
    },
    {
      name: "Yogita Sharma",
      role: "Gut Nutritionist",
      desc: "Yogita holds an M.Sc. in Nutrition and Dietetics. She specializes in digestive and liver health, successfully managing conditions like IBS, GERD, bloating, gastritis, and fatty liver disease using functional and Ayurvedic principles."
    },
    {
      name: "Ritika Dadwal",
      role: "Gut Nutritionist",
      desc: "Ritika is a dedicated clinical nutritionist with a Master's degree and over 5 years of experience. She specializes in weight loss, gut health, liver care, and evidence-based root-cause healing to empower long-term wellness."
    }
  ];

  const reviews = [
    {
      name: "Bhawna Kapoor",
      text: "I want to sincerely thank Ritika for the incredible support and guidance she has given me throughout my journey. Her expert advice not only helped me achieve my weight loss goals in a healthy and sustainable way, but her constant encouragement and understanding truly made all the difference. I feel healthier, happier, and more confident because of you. Thank you MOSHA for introducing me to a new ME!"
    },
    {
      name: "Dr. Manasa Suhas",
      text: "Writing this with a lot of gratitude and love. The whole team had been with me for a whole 3 months, not just the gut but my whole body and mind improved with their programme. The way we have food on our plate has changed, it is much more balanced now. I will be forever grateful to you guys. Thank you MOSHA!"
    },
    {
      name: "Jatin Arora",
      text: "I am truly happy with the results of the 2-month Gut Reset Programme. Before joining, I was struggling with diarrhea, bloating, and gastritis for almost two years. I consulted many doctors but got only temporary relief. After enrolling in this programme, I now feel significantly better, more energetic, balanced, and healthier overall. A big thank you to Priyanka, Mitali, and Ritika for constant support."
    },
    {
      name: "Shweta S. Bhat",
      text: "Thank you MOSHA. Before joining the program, I was having bloating, acidity, H. pylori infection, and other gut issues. But the team suggested what to eat, how to balance carbs, fiber, and protein. Their follow-up is also good; they motivate me to walk, exercise, and practice meditation, which helps build confidence."
    }
  ];

  const faqs = [
    { q: "What is the 14-Day Gut Reset?", a: "It is a structured two-week program designed to reduce bloating and acidity by focusing on the right foods, lifestyle habits, and healing routines. The goal is to give your gut a fresh start and kick-off the healing process." },
    { q: "Who is this program for?", a: "Anyone experiencing digestive issues like acidity, bloating, or irregular bowel movements can benefit. It is also great for people who feel low on energy or want to reset unhealthy eating patterns." },
    { q: "Will I need to take supplements during the reset?", a: "You will primarily follow a food-first approach. If needed, our team may recommend essential vitamins (like D, B12, magnesium), Ayurvedic or herbal supplements, and provide spice and seed mixes as part of your Gut Healing Kit." },
    { q: "Do I have to stop my regular medications?", a: "No. If you are on antacids, PPIs, laxatives, painkillers, or other prescribed medicines, you can still join. Our program is aimed at helping you eventually reduce or stop these, but whether that happens immediately or gradually depends on your condition and in coordination with your doctor." },
    { q: "What will I be eating during the 14 days?", a: "You will follow a structured meal plan with easy-to-make recipes, focusing on fresh, gut-friendly foods. We will also share dietary do's and don'ts, plus simple swaps for your current meals so you do not feel restricted." },
    { q: "How soon will I see results?", a: "Most people start noticing improvements, like lighter digestion, less bloating, and better energy, within the first week. Deeper healing and sustainable results require consistency even beyond the 14 days." }
  ];

  const handleAddToCart = () => {
    const item = {
      id: "gut-reset-program",
      name: "14-Day Gut Reset Program",
      price: 2999,
      type: "program",
      image: resetKitImage,
      selectedPlan: "14-Day Cleanse"
    };
    onAddToCart(item);
  };

  return (
    <div className="bg-cream-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 animate-fadeInUp">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-sage-500 tracking-widest uppercase font-sans">
              Signature Clinical Program
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-sage-900 leading-tight">
              14-Day Gut Reset Program
            </h1>
            <p className="font-sans text-sage-800 text-base leading-relaxed">
              Give your digestive system a clean slate. This program is designed to reduce severe bloating, manage acidity, and restore the microbiome balance through a comprehensive food-first approach. Includes 1-on-1 nutritionist consultations, daily guidance, and a physical gut healing kit.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-accent font-bold text-sage-900">Rs. 2,999</span>
              <span className="text-sm text-sage-400 line-through">Rs. 4,500</span>
              <span className="bg-coral-100 text-coral-600 px-3 py-1 rounded-full text-xs font-bold">
                Save 33%
              </span>
            </div>
            <div className="pt-2">
              <button 
                onClick={handleAddToCart}
                className="px-8 py-4 rounded-full bg-sage-500 text-cream-100 text-sm font-bold shadow-md hover:bg-sage-600 hover:scale-102 transition-all duration-300 flex items-center"
              >
                Add Program to Cart
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="glass-panel p-4 rounded-3xl border border-sage-200/50 bg-cream-50/50 shadow-xl max-w-sm">
              <img 
                src={resetKitImage} 
                alt="MOSHA Gut Healing Kit" 
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Steps/Journey Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold text-sage-500 tracking-widest uppercase font-sans">
              Program Steps
            </h2>
            <h3 className="font-display font-bold text-3xl text-sage-900">
              How the 14-Day Reset Works
            </h3>
            <p className="text-sm text-sage-500 font-sans">
              A systematic, clinical timeline engineered to ease digestive workload, reset gut motility, and promote cellular lining repair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-2xl border border-sage-200/40 bg-cream-50/70 hover:border-sage-400/50 hover:shadow-lg transition-all duration-300">
                <span className="text-3xl font-display font-black text-sage-200">{step.num}</span>
                <h4 className="font-display font-bold text-lg text-sage-800 mt-4 mb-2">
                  {step.title}
                </h4>
                <p className="font-sans text-xs text-sage-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars / Methodology Section */}
        <div className="mb-24 bg-cream-50/60 rounded-3xl p-8 sm:p-12 border border-sage-100">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-xs font-bold text-sage-500 tracking-widest uppercase font-sans">
              Methodology
            </h2>
            <h3 className="font-display font-bold text-3xl text-sage-900">
              Six Key Elements of Gut Restoration
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="font-display font-bold text-base text-sage-800 flex items-center">
                  <CheckCircle className="h-5 w-5 text-sage-500 mr-2 shrink-0" />
                  {pillar.title}
                </h4>
                <p className="font-sans text-xs text-sage-500 leading-relaxed pl-7">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Reviews Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold text-sage-500 tracking-widest uppercase font-sans">
              Client Reviews
            </h2>
            <h3 className="font-display font-bold text-3xl text-sage-900">
              Happy Gut Stories, Happy Clients
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((rev, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-2xl border border-sage-200/50 bg-cream-50 shadow-md hover:scale-[1.01] transition-transform">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-coral-500 fill-coral-500" />
                  ))}
                </div>
                <p className="font-sans text-sage-800 text-sm italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
                <div className="flex items-center justify-between border-t border-sage-100 pt-4">
                  <span className="font-sans font-bold text-xs text-sage-700 uppercase tracking-wide">
                    {rev.name}
                  </span>
                  <span className="text-[10px] font-semibold text-sage-400 bg-sage-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Verified Google Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold text-sage-500 tracking-widest uppercase font-sans">
              Our Experts
            </h2>
            <h3 className="font-display font-bold text-3xl text-sage-900">
              Meet the Nutritionists
            </h3>
            <p className="text-sm text-sage-500 font-sans">
              A team of clinical nutritionists and gut wellness coaches dedicated to guides, reviews, and clinical outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-2xl border border-sage-200/50 bg-cream-50 flex flex-col justify-between hover:border-sage-400/50 transition-colors duration-300">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 font-bold">
                    <Heart className="h-5 w-5 fill-sage-600 text-sage-600" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-sage-800">{member.name}</h4>
                  <p className="text-xs font-bold text-coral-500 uppercase tracking-wider font-sans">
                    {member.role}
                  </p>
                  <p className="font-sans text-xs text-sage-500 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-display font-bold text-2xl text-sage-900">
              Program FAQs
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-sage-200/60 rounded-xl bg-cream-50 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-sans font-bold text-sage-800 text-sm">{faq.q}</span>
                  <span className="text-sage-500 text-xl font-bold ml-2">
                    {activeFaq === idx ? '-' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-sage-600 font-sans leading-relaxed border-t border-sage-100 bg-cream-100/30">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
