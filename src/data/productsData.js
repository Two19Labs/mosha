import gutCalmImage from '../assets/images/gut_calm_blend.png';
import bloatingShotImage from '../assets/images/bloating_relief_shot.png';
import basilStrawberryImage from '../assets/images/basil_strawberry_drink.png';
import gutResetKitImage from '../assets/images/gut_reset_kit.png';
import acidityReversalImage from '../assets/images/acidity_reversal_blend.png';
import probioticFiberImage from '../assets/images/probiotic_fiber.png';

export const products = [
  {
    id: "p1",
    name: "MOSHA Gut Calm Blend",
    category: "blend",
    concern: "gastritis",
    price: 1499,
    rating: 4.8,
    reviews: 128,
    image: gutCalmImage,
    tagline: "Soothe and protect your stomach lining naturally",
    description: "A premium powder formulation crafted with functional superfoods, adaptogens, and traditional cooling herbs to rebuild the stomach's protective lining and relieve chronic inflammation.",
    benefits: [
      "Helps repair stomach mucus lining",
      "Reduces chronic stomach burning and gastritis discomfort",
      "Suppresses harmful H. pylori bacterial activity",
      "Formulated with 100% natural, whole ingredients"
    ],
    ingredients: [
      "Licorice root (Yashtimadhu) - Coats and heals the stomach",
      "Slippery Elm - Provides a soothing mucosal barrier",
      "Marshmallow Root - Calms gut tissue inflammation",
      "Amla - Provides natural Vitamin C and regulates stomach acidity"
    ],
    usage: "Mix 1 teaspoon in warm water. Drink daily on an empty stomach in the morning for best results."
  },
  {
    id: "p2",
    name: "MOSHA Bloating Relief Gut Shot",
    category: "shot",
    concern: "bloating",
    price: 1299,
    rating: 4.7,
    reviews: 94,
    image: bloatingShotImage,
    tagline: "Quick acting botanical support to beat trapped gas",
    description: "Concentrated herbal shots designed to accelerate digestion and prevent the fermentation of food in the gut, which is the primary cause of stomach swelling and gas.",
    benefits: [
      "Reduces bloating and trapped gas within 30 minutes",
      "Improves digestive speed and food breakdown",
      "Prevents heavy stomach feeling after meals",
      "Free from synthetic stimulants and artificial laxatives"
    ],
    ingredients: [
      "Ginger root - Stimulates digestive enzymes and stomach motility",
      "Fennel seeds - Relaxes abdominal muscles to release trapped gas",
      "Peppermint - Soothes intestinal spasms",
      "Lemon juice - Enhances bile production for fat digestion"
    ],
    usage: "Drink one 50ml shot directly after your heaviest meal of the day, or whenever bloating occurs."
  },
  {
    id: "p3",
    name: "MOSHA Basil Strawberry Digestive Drink",
    category: "drink",
    concern: "acidity",
    price: 999,
    rating: 4.9,
    reviews: 215,
    image: basilStrawberryImage,
    tagline: "Cooling relief from acidity and acid reflux",
    description: "A refreshing, delicious beverage combining hydrating basil seeds, cooling Tragacanth gum (Gond Katira), and real strawberries to instantly soothe heartburn and regulate stomach acid.",
    benefits: [
      "Instantly cools the digestive tract and chest area",
      "Provides natural mucilage to shield the esophagus from acid",
      "Keeps the body hydrated and reduces heat-induced acidity",
      "Made with fresh organic fruits and seeds - nothing synthetic"
    ],
    ingredients: [
      "Basil seeds (Sabja) - High in soluble fiber and cooling mucilage",
      "Tragacanth Gum (Gond Katira) - Ancient Ayurvedic cooling gel provider",
      "Fresh Strawberries - Natural antioxidants and rich in digestive minerals",
      "Fennel infusion - Calms esophagus irritation"
    ],
    usage: "Enjoy chilled post-meals or in the afternoon. Can be diluted with water or consumed directly."
  },
  {
    id: "p4",
    name: "MOSHA 14-Day Gut Reset Kit",
    category: "kit",
    concern: "general",
    price: 2999,
    rating: 4.8,
    reviews: 342,
    image: gutResetKitImage,
    tagline: "Your complete two-week starter path to gut health",
    description: "A hand-curated wellness box containing functional herbal teas, custom digestive spice mixes, a premium tea strainer, and a 14-day daily routine guide to kick-start your gut recovery.",
    benefits: [
      "Eliminates accumulated gut toxins and waste",
      "Re-establishes healthy morning bowel movements",
      "Reduces overall acidity, bloating, and fatigue",
      "Includes a 14-day step-by-step guidance tracker booklet"
    ],
    ingredients: [
      "MOSHA Morning Cleanse Tea - Warm spice blend for liver detox",
      "MOSHA Post-Meal Digest Powder - Seed mix to prevent acidity",
      "Stainless steel mesh tea strainer",
      "14-Day Wellness Habit Tracker Journal"
    ],
    usage: "Follow the routine booklet included. Drink cleanse tea in the morning and digest powder after lunch."
  },
  {
    id: "p5",
    name: "MOSHA Acidity Reversal Blend",
    category: "blend",
    concern: "acidity",
    price: 1899,
    rating: 4.6,
    reviews: 86,
    image: acidityReversalImage,
    tagline: "Optimize stomach acid levels and heal chest burn",
    description: "A specialized daily drop tincture formulated with gentle, acid-balancing botanicals to soothe the gastric lining and naturally reduce dependency on antacid pills.",
    benefits: [
      "Helps balance and maintain healthy gastric acid levels",
      "Soothes irritation in the food pipe and chest",
      "Strengthens the lower esophageal sphincter (LES) naturally",
      "Gentle food-first remedy with zero side effects"
    ],
    ingredients: [
      "Chamomile flowers - Relaxes stomach muscles and reduces spasms",
      "Coriander seeds - Traditional Ayurvedic cooling and gas-reducing seed",
      "Aloe Vera inner leaf - Calms mucosal burning sensations",
      "Cardamom - Neutralizes excess acid and refreshes breath"
    ],
    usage: "Take 10 drops in 50ml water before meals twice daily."
  },
  {
    id: "p6",
    name: "MOSHA Gut Balance Probiotic Fiber",
    category: "blend",
    concern: "constipation",
    price: 1699,
    rating: 4.7,
    reviews: 172,
    image: probioticFiberImage,
    tagline: "Fix chronic constipation and restore daily regularity",
    description: "A powerful combination of prebiotic plant fibers and multi-strain probiotics to bulk the stool, stimulate natural colon motility, and nourish the gut microbiome.",
    benefits: [
      "Promotes smooth, complete, and regular morning bowel movements",
      "Feeds beneficial gut bacteria to crowd out harmful microbes",
      "Softens hard stools and relieves painful abdominal heaviness",
      "Does not cause dependency like standard chemical laxatives"
    ],
    ingredients: [
      "Psyllium Husk (Isabgol) - High-quality water-soluble bulk fiber",
      "Flaxseed powder - Rich in omega-3 and lubricating mucilage",
      "Probiotic Blend (5 billion CFU) - Multi-strain beneficial bacteria",
      "Triphala extract - Ancient Ayurvedic three-fruit digestive cleanser"
    ],
    usage: "Mix 1 scoop in a large glass of warm water at bedtime. Follow with another glass of plain water."
  }
];
