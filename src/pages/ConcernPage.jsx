import React, { useState } from 'react';
import { Check, Star, RefreshCw, Coffee, Heart, ArrowRight } from 'lucide-react';
import { products } from '../data/productsData';

// Per-concern relief imagery — temporary Unsplash placeholders.
// Swap each URL with a brand image (suggested filename in comment).
const CONCERN_IMG = {
  acidity:      'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?auto=format&fit=crop&w=900&q=80', // concern_acidity.jpg
  gastritis:    'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80', // concern_gastritis.jpg
  bloating:     'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=900&q=80', // concern_bloating.jpg
  constipation: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80', // concern_constipation.jpg
};

export default function ConcernPage({ concernType, onAddToCart }) {
  const [activeFaq, setActiveFaq] = useState(null);

  // Get concern details
  const getConcernDetails = () => {
    switch (concernType) {
      case 'acidity':
        return {
          title: "Acidity and GERD",
          tagline: "Ease acidity and acid reflux with natural, botanical formulations designed to calm inflammation and support comfortable digestion.",
          symptoms: ["Heart Burn", "Chest discomfort", "GERD", "Sour burp", "Acidity", "Stomach burn", "Sour Taste", "Burning Sensation", "Chest pain", "Acid reflux"],
          featuredProduct: products.find(p => p.id === "p3"),
          featuredProductDesc: "Our Basil Strawberry Digestive Drink combines hydrating basil seeds, soothing botanicals, and mineral-rich ingredients that help cool the digestive system and support smoother digestion. This helps reduce the irritation and discomfort commonly associated with acidity, heartburn, and reflux.",
          faqs: [
            { q: "Can I continue my antacids or reflux medicines while on this program?", a: "Yes, you can continue your medicines, we do not ask you to stop them suddenly. Our program works alongside your treatment. As your gut lining heals and reflux reduces, you may find yourself needing less medication over time, with guidance from your doctor." },
            { q: "What support will I get during the program?", a: "You will get access to a personal nutritionist through live sessions and a dedicated chat group. You will share your meals, symptoms, and queries daily, and your nutritionist will guide you, tweak your meals, and handhold you throughout. This continuous support helps you stay consistent and overcome flare-ups faster." },
            { q: "Can I follow this program if I travel frequently?", a: "Yes, the plan is designed to be flexible and travel-friendly. We will give you tips for restaurant eating, hotel stays, and even flight meals so you do not feel restricted. Even during travel, you will have easy swaps and options to keep reflux under control." },
            { q: "What if I get a sudden acidity flare-up during the program?", a: "We will give you immediate calming food swaps, soothing drinks, and lifestyle hacks that reduce discomfort within hours. You will also learn how to manage triggers better, so each flare-up becomes less frequent and less intense." },
            { q: "Will I ever be able to enjoy my favorite foods again?", a: "Yes, the goal is not to eliminate everything forever but to rebuild your gut strength so you can enjoy foods in moderation. Once your gut heals, you will be able to tolerate a wider variety without fear of constant burning or reflux." }
          ]
        };
      case 'gastritis':
        return {
          title: "H. Pylori and Gastritis",
          tagline: "Support repair of the stomach's protective mucus lining damaged by H. pylori and gastritis with targeted botanical ingredients.",
          symptoms: ["Stomach infection", "Helicobacter pylori", "Gastritis pain", "Upper abdominal pain", "Indigestion", "Stomach inflammation", "Nausea and vomiting", "Bloating after meals", "Stomach ulcers", "H. pylori symptoms"],
          featuredProduct: products.find(p => p.id === "p1"),
          featuredProductDesc: "Our Basil Strawberry Gut Calm Drink and Gut Calm Blend contain ingredients traditionally used to soothe the digestive system and support the stomach lining. Basil seeds release natural mucilage that coats the stomach, while Tragacanth gum (gond katira) forms a cooling gel to calm irritation and support the mucus layer.",
          faqs: [
            { q: "How does H. pylori affect the body?", a: "H. pylori is a bacteria that damages the stomach's protective mucus lining. Once this protective layer weakens, stomach acid can irritate the stomach wall, leading to gastritis, inflammation, burning, bloating, nausea, and discomfort after meals. Over time, this irritation makes digestion uncomfortable and leaves the stomach lining sensitive to food and acid." },
            { q: "How does the Basil Strawberry Gut Calm drink help?", a: "The drink combines hydrating basil seeds, cooling tragacanth gum (gond katira), and fennel. Together, these ingredients help soothe inflammation, coat the stomach wall, reduce gas and bloating, and support a healthier, less irritated digestive environment." },
            { q: "Is it safe for daily consumption? How long before I see improvement?", a: "Yes, it is designed to be a gentle, refreshing digestive support drink that can be consumed daily. With regular use, many people begin to feel improvements in burning, bloating, and digestive discomfort within about 15 to 20 days." }
          ]
        };
      case 'bloating':
        return {
          title: "Bloating Relief",
          tagline: "Formulated to help you feel lighter and release trapped gas after meals, optimizing digestive speed and motility.",
          symptoms: ["Abdominal bloating", "Gas buildup", "Stomach heaviness", "Bloated belly", "Trapped gas", "Bloating after eating", "Tight stomach", "Excess gas", "Food intolerance", "Belly swelling"],
          featuredProduct: products.find(p => p.id === "p2"),
          featuredProductDesc: "Our Bloating Relief Gut Shot contains digestive-supportive botanical ingredients that help activate digestion and improve the breakdown of food. By supporting more efficient digestion, it helps prevent the fermentation of food in the gut, which is one of the main causes of gas and bloating.",
          faqs: [
            { q: "Why does bloating happen?", a: "Bloating usually occurs when food is not broken down properly in the digestive system. When digestion is sluggish, food can sit longer in the stomach or gut and start fermenting, producing gas that leads to abdominal swelling, heaviness, and discomfort." },
            { q: "How does the Bloating Relief Gut Shot help reduce bloating?", a: "Our Bloating Relief Gut Shot contains active ginger, fennel, and peppermint which stimulate gastric motility and relax the gastrointestinal muscles. This allows trapped gas to move through the system and helps the stomach digest meals faster, preventing the fermentation process." },
            { q: "What are the effects of chronic bloating?", a: "Frequent bloating can be a sign that food is not being digested efficiently. Over time, sluggish digestion can lead to poor nutrient absorption, low energy, digestive discomfort after meals, and an ongoing feeling of heaviness. Supporting active digestion helps restore nutrient absorption and keeps you feeling light." }
          ]
        };
      case 'constipation':
      default:
        return {
          title: "Constipation and Gut Health",
          tagline: "Nourish your gut and support digestive balance with plant-based and functional formulations.",
          symptoms: ["Hard stool", "Indigestion", "Piles", "Slow digestion", "Headaches", "Acidity", "Bloating", "Probiotics", "Inflammation", "Prebiotics"],
          featuredProduct: products.find(p => p.id === "p6"),
          featuredProductDesc: "Our Gut Balance Probiotic Fiber is designed to promote regular bowel movements. By combining psyllium bulk fiber, flaxseeds, prebiotic fibers, and clinical probiotics, it restores colon motility, softens stools, and nourishes the beneficial bacteria in your microbiome.",
          faqs: [
            { q: "Why is gut balance important for overall health?", a: "Your gut plays a central role in digestion, nutrient absorption, immunity, and even mood regulation. When the gut microbiome and digestive system are balanced, your body can break down food efficiently, absorb nutrients properly, and maintain steady energy levels. Chronic constipation keeps toxins in the system, causing headaches, fatigue, and skin issues." },
            { q: "Will I get dependent on these products to go to the washroom?", a: "No, our formulations are completely natural and bulk-forming. Unlike chemical stimulants or senna-based laxatives that force the colon to contract and create dependency, our probiotic fiber works by drawing moisture to the stool and feeding beneficial bacteria, supporting natural gut motility." }
          ]
        };
    }
  };

  const info = getConcernDetails();
  const concernImage = CONCERN_IMG[concernType] || CONCERN_IMG.constipation;

  const plans = [
    {
      id: `${concernType}-cleanse`,
      title: "GUT CLEANSE",
      price: 2999,
      oldPrice: 4500,
      period: "14 Day Plan",
      focus: "Symptom Relief",
      included: [
        "2 Sessions of Nutritionist Follow up (Weekly)",
        "2 Meal Plans customized for your concern",
        "Daily WhatsApp and Call Support (9 AM - 9 PM)",
        "MOSHA Gut Healing Kit included"
      ],
      notIncluded: [
        "Discovery Session (60mins)",
        "MD. BAMS Consultation",
        "Gastroenterologist Consultation",
        "Blood Tests",
        "Founder Session (Monthly)"
      ]
    },
    {
      id: `${concernType}-restore`,
      title: "GUT RESTORE",
      price: 8000,
      oldPrice: 9000,
      period: "30 Day Plan",
      focus: "Lining Repair",
      included: [
        "1 Discovery Session (60mins)",
        "1 MD. BAMS Consultation",
        "4 Sessions of Nutritionist Follow up (Weekly)",
        "4 Meal Plans customized for your concern",
        "Standard Blood Tests (CBC, Creatinine, FBS Lipid, Uric Acid, TSH)",
        "Daily WhatsApp and Call Support (9 AM - 9 PM)",
        "MOSHA Gut Healing Kit and supplements"
      ],
      notIncluded: [
        "Gastroenterologist Consultation",
        "Founder Session (Monthly)"
      ]
    },
    {
      id: `${concernType}-thrive`,
      title: "GUT THRIVE",
      price: 24000,
      oldPrice: null,
      period: "90 Day Plan",
      focus: "Microbiome Balance",
      included: [
        "3 Discovery Sessions (60mins)",
        "3 MD. BAMS Consultations",
        "12 Sessions of Nutritionist Follow up (Weekly)",
        "12 Meal Plans adapted to symptoms",
        "Detailed Blood Tests (CBC, KFT, LFT, Lipid, TSH, Uric Acid)",
        "Daily WhatsApp and Call Support (9 AM - 9 PM)",
        "Full Gut Healing Kit and customized blends"
      ],
      notIncluded: [
        "Gastroenterologist Consultation",
        "Founder Session (Monthly)"
      ]
    },
    {
      id: `${concernType}-transform`,
      title: "GUT TRANSFORM",
      price: 40000,
      oldPrice: null,
      period: "180 Day Plan",
      focus: "Deep Cellular Healing",
      included: [
        "3 Discovery Sessions (60mins)",
        "3 MD. BAMS Consultations",
        "3 Gastroenterologist Consultations",
        "24 Sessions of Nutritionist Follow up (Weekly)",
        "24 Customized Meal Plans",
        "Advanced Blood Panels (HbA1c, LFT, KFT, Lipid, Thyroid, B12, Vit D)",
        "Daily WhatsApp and Call Support (9 AM - 9 PM)",
        "3 Founder Sessions (Monthly)",
        "All customized gut blends and reset kits"
      ],
      notIncluded: []
    }
  ];

  const handleSelectPlan = (plan) => {
    const item = {
      id: plan.id,
      name: `MOSHA ${info.title} - ${plan.title}`,
      price: plan.price,
      type: "program",
      image: info.featuredProduct?.image,
      selectedPlan: plan.period
    };
    onAddToCart(item);
  };

  return (
    <div className="bg-cream-100 min-h-screen py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fadeInUp">
          <span className="text-xs font-bold text-sage-500 tracking-widest uppercase bg-sage-100/60 border border-sage-200/50 px-4 py-1.5 rounded-full">
            Targeted Clinic Concern
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-sage-900 leading-tight mt-2">
            {info.title}
          </h1>
          <p className="text-base text-sage-700 leading-relaxed">
            {info.tagline}
          </p>
        </div>

        {/* Symptoms Relief Grid */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-sage-200/50 mb-20 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Concern image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-sage-200/50">
                <img
                  src={concernImage}
                  alt={info.title}
                  className="w-full h-64 lg:h-80 object-cover bg-sage-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/50 to-transparent" />
                <span className="absolute bottom-4 left-4 text-cream-50 font-display font-bold text-lg drop-shadow">
                  {info.title}
                </span>
              </div>
            </div>
            {/* Symptom grid */}
            <div className="lg:col-span-7">
              <h2 className="font-display font-bold text-lg text-sage-800 mb-6 text-center lg:text-left">
                Clinically Targeting Relief For
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {info.symptoms.map((symptom, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 bg-cream-100 border border-sage-100 px-4 py-3.5 rounded-xl hover:scale-102 hover:border-sage-300 transition-all duration-300"
                  >
                    <div className="h-2 w-2 rounded-full bg-coral-500 shrink-0" />
                    <span className="text-xs font-semibold text-sage-800">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Program Tiers */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold text-sage-500 tracking-widest uppercase">
              Program Selection
            </h2>
            <h3 className="font-display font-bold text-3xl text-sage-900">
              Personalized Clinical Programs
            </h3>
            <p className="text-sm text-sage-500">
              Select the timeline that matches your gut condition. All plans include direct care from expert nutritionists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`glass-panel p-6 rounded-3xl border flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ${
                  idx === 1 
                    ? 'border-sage-400 bg-cream-50 ring-2 ring-sage-500/20' 
                    : 'border-sage-200/50 bg-cream-50/70'
                }`}
              >
                <div className="space-y-6">
                  {/* Top Header */}
                  <div className="border-b border-sage-100 pb-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-sage-500 uppercase tracking-widest font-sans">
                        {plan.focus}
                      </span>
                      {idx === 1 && (
                        <span className="bg-sage-500 text-cream-100 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Popular
                        </span>
                      )}
                    </div>
                    <h4 className="font-display font-bold text-lg text-sage-800">{plan.title}</h4>
                    <p className="text-xs font-semibold text-coral-500">{plan.period}</p>
                    <div className="flex items-baseline space-x-2 pt-2">
                      <span className="text-2xl font-accent font-bold text-sage-900">Rs. {plan.price}</span>
                      {plan.oldPrice && (
                        <span className="text-xs text-sage-400 line-through">Rs. {plan.oldPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Included List */}
                  <ul className="space-y-3 text-xs text-sage-700 font-sans">
                    {plan.included.map((inc, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-4 w-4 text-sage-500 mr-2 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((not, i) => (
                      <li key={i} className="flex items-start text-sage-400">
                        <span className="h-4 w-4 mr-2 shrink-0 text-center font-bold text-[10px]">✕</span>
                        <span>{not}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button 
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3 rounded-full text-xs font-bold transition-all duration-300 shadow-sm ${
                      idx === 1 
                        ? 'bg-sage-500 hover:bg-sage-600 text-cream-100 hover:shadow' 
                        : 'bg-cream-100 hover:bg-sage-100 text-sage-800'
                    }`}
                  >
                    Select Program Plan
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Featured Product Section */}
        {info.featuredProduct && (
          <div className="bg-cream-50/70 rounded-3xl p-8 sm:p-12 border border-sage-100 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-coral-500 uppercase tracking-widest font-sans">
                  Featured Formulation
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-sage-900">
                  {info.featuredProduct.name}
                </h3>
                <p className="font-sans text-sage-700 text-sm leading-relaxed">
                  {info.featuredProductDesc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {info.featuredProduct.benefits.slice(0, 4).map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-sage-500" />
                      <span className="text-xs font-semibold text-sage-800">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 flex items-center space-x-4">
                  <span className="text-xl font-accent font-bold text-sage-900">Rs. {info.featuredProduct.price}</span>
                  <button 
                    onClick={() => onAddToCart({...info.featuredProduct, type: "product"})}
                    className="px-6 py-3 rounded-full bg-sage-500 hover:bg-sage-600 text-cream-100 text-xs font-bold transition-all duration-300 flex items-center"
                  >
                    Add Product to Cart
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="glass-panel p-4 rounded-3xl border border-sage-200/50 bg-cream-100 flex items-center justify-center p-4 shadow-xl max-w-xs">
                  <img 
                    src={info.featuredProduct.image} 
                    alt={info.featuredProduct.name} 
                    className="rounded-2xl max-h-64 object-contain shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-display font-bold text-2xl text-sage-900">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {info.faqs.map((faq, idx) => (
              <div key={idx} className="border border-sage-200/60 rounded-xl bg-cream-50 overflow-hidden shadow-sm">
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
