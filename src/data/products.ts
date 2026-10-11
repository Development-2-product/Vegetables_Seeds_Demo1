export interface Product {
  id: string;
  name: string;
  category: string;
  cropType: string;
  image: string;
  description: string;
  longDescription: string;
  season: string;
  growingType: string;
  seedType: string;
  suitableConditions: string;
  availableFormats: string[];
  characteristics: string[];
  growingInformation: {
    sowing: string;
    spacing: string;
    germination: string;
    maturity: string;
    watering: string;
    sunlight: string;
  };
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
}

const categoryCatalogue: Category[] = [
  {
    id: 'vegetable-seeds',
    name: 'Vegetable Seeds',
    slug: 'vegetable-seeds',
    description: 'Curated vegetable varieties for productive home gardens and commercial cultivation.',
    image: 'https://images.pexels.com/photos/1414650/pexels-photo-1414650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: 'Carrot',
  },
  {
    id: 'fruit-seeds',
    name: 'Fruit Seeds',
    slug: 'fruit-seeds',
    description: 'Fruit seed selections for orchards, gardens, and tropical cultivation.',
    image: 'https://images.pexels.com/photos/8541392/pexels-photo-8541392.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: 'Cherry',
  },
  {
    id: 'herb-seeds',
    name: 'Herb Seeds',
    slug: 'herb-seeds',
    description: 'Aromatic and culinary herb seeds for fresh flavour year-round.',
    image: 'https://images.pexels.com/photos/31976166/pexels-photo-31976166.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: 'Sprout',
  },
  {
    id: 'flower-seeds',
    name: 'Flower Seeds',
    slug: 'flower-seeds',
    description: 'Ornamental flower varieties for gardens, landscapes, and pollinator support.',
    image: 'https://images.pexels.com/photos/17920487/pexels-photo-17920487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: 'Flower2',
  },
  {
    id: 'specialty-seeds',
    name: 'Specialty Seeds',
    slug: 'specialty-seeds',
    description: 'Unique and specialty seed varieties for niche cultivation needs.',
    image: 'https://images.pexels.com/photos/10817550/pexels-photo-10817550.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: 'Sparkles',
  },
];

const productCatalogue: Product[] = [
  {
    id: 'tomato-seeds',
    name: 'Tomato Seeds',
    category: 'Vegetable Seeds',
    cropType: 'Vegetable',
    image: 'https://images.pexels.com/photos/2858259/pexels-photo-2858259.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Round, medium-sized tomato variety suitable for fresh market and processing.',
    longDescription: 'Our tomato seeds produce vigorous, indeterminate plants that yield medium to large round fruits with a balanced flavour profile. The plants show strong vegetative growth and are well-suited to both open-field and protected cultivation systems. Fruits ripen uniformly and hold well after harvest, making them suitable for fresh market sales and processing applications.',
    season: 'Spring / Summer',
    growingType: 'Open Field / Greenhouse',
    seedType: 'Open Pollinated',
    suitableConditions: 'Well-drained loamy soil, pH 6.0–6.8, full sun',
    availableFormats: ['25g packet', '100g pack', '500g bulk', '1kg bulk'],
    characteristics: ['Medium-large fruit', 'Uniform ripening', 'Good shelf life', 'Vigorous growth'],
    growingInformation: {
      sowing: 'Start seeds in trays 6–8 weeks before transplanting',
      spacing: '60 × 45 cm between plants and rows',
      germination: '6–10 days at 20–25°C',
      maturity: '70–85 days after transplanting',
      watering: 'Regular irrigation, keep soil consistently moist',
      sunlight: 'Full sun, minimum 6–8 hours daily',
    },
    featured: true,
  },
  {
    id: 'carrot-seeds',
    name: 'Carrot Seeds',
    category: 'Vegetable Seeds',
    cropType: 'Vegetable',
    image: 'https://images.pexels.com/photos/3889959/pexels-photo-3889959.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Deep orange, cylindrical roots with smooth skin and sweet flavour.',
    longDescription: 'These carrot seeds produce uniform, cylindrical roots with deep orange colouration and excellent internal quality. The variety performs well in loose, deep soils and develops smooth skins with minimal cracking. Roots reach marketable size reliably and maintain good texture and sweetness after harvest.',
    season: 'Cool Season / Spring / Autumn',
    growingType: 'Open Field',
    seedType: 'Open Pollinated',
    suitableConditions: 'Deep, loose sandy loam soil, pH 6.0–6.8',
    availableFormats: ['10g packet', '50g pack', '250g bulk', '1kg bulk'],
    characteristics: ['Deep orange colour', 'Smooth skin', 'Uniform root shape', 'Sweet flavour'],
    growingInformation: {
      sowing: 'Direct sow 2–3 weeks before last frost',
      spacing: 'Thin to 5–8 cm between plants, 30 cm between rows',
      germination: '10–17 days at 10–25°C',
      maturity: '70–80 days from sowing',
      watering: 'Consistent moisture, avoid waterlogging',
      sunlight: 'Full sun to partial shade',
    },
    featured: true,
  },
  {
    id: 'watermelon-seeds',
    name: 'Watermelon Seeds',
    category: 'Fruit Seeds',
    cropType: 'Fruit',
    image: 'https://images.pexels.com/photos/12746876/pexels-photo-12746876.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Large, sweet watermelon variety with crisp red flesh and dark green rind.',
    longDescription: 'Our watermelon seeds produce vigorous vining plants that yield large, oblong fruits with sweet, crisp red flesh and a thick dark green rind. The variety is well-adapted to warm-season growing and performs best in well-drained soils with consistent irrigation. Fruits develop good sugar content and hold well during transport.',
    season: 'Summer',
    growingType: 'Open Field',
    seedType: 'Hybrid',
    suitableConditions: 'Warm climate, well-drained sandy loam, pH 6.0–7.0',
    availableFormats: ['10g packet', '50g pack', '250g bulk'],
    characteristics: ['Large fruit size', 'Sweet red flesh', 'Thick protective rind', 'Good transportability'],
    growingInformation: {
      sowing: 'Direct sow when soil reaches 20°C',
      spacing: '1.5 × 1.0 m between plants and rows',
      germination: '7–10 days at 25–30°C',
      maturity: '80–95 days from sowing',
      watering: 'Deep, regular irrigation; reduce before harvest',
      sunlight: 'Full sun, 8+ hours daily',
    },
    featured: true,
  },
  {
    id: 'papaya-seeds',
    name: 'Papaya Seeds',
    category: 'Fruit Seeds',
    cropType: 'Fruit',
    image: 'https://images.pexels.com/photos/3187104/pexels-photo-3187104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Tropical papaya variety with medium-sized fruit and good fruit set.',
    longDescription: 'These papaya seeds produce fast-growing tropical trees that bear medium-sized fruits with golden-orange flesh. The variety is well-suited to tropical and subtropical climates and begins bearing fruit within the first year under favourable conditions. Fruits are sweet with a pleasant aroma and develop good flesh thickness.',
    season: 'Year-round (Tropical)',
    growingType: 'Open Field / Orchard',
    seedType: 'Open Pollinated',
    suitableConditions: 'Tropical climate, well-drained soil, pH 6.0–6.5',
    availableFormats: ['5g packet', '25g pack', '100g bulk'],
    characteristics: ['Fast-growing', 'Medium fruit size', 'Golden-orange flesh', 'Year-round bearing'],
    growingInformation: {
      sowing: 'Sow in nursery bags or direct field planting',
      spacing: '2.0 × 2.0 m between plants',
      germination: '10–20 days at 25–30°C',
      maturity: '9–12 months to first harvest',
      watering: 'Regular irrigation, avoid waterlogging',
      sunlight: 'Full sun, 6+ hours daily',
    },
    featured: true,
  },
  {
    id: 'maize-seeds',
    name: 'Maize Seeds',
    category: 'Field Crop Seeds',
    cropType: 'Field Crop',
    image: 'https://images.pexels.com/photos/20234940/pexels-photo-20234940.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Medium-season maize variety with strong stalks and well-developed cobs.',
    longDescription: 'Our maize seeds produce tall, sturdy plants with good stalk strength and well-filled cobs. The variety is adapted to a range of growing conditions and performs reliably in both rainfed and irrigated systems. Cobs develop uniform kernel rows with good grain fill, making this variety suitable for both grain and fodder use.',
    season: 'Spring / Summer (Kharif)',
    growingType: 'Open Field',
    seedType: 'Hybrid',
    suitableConditions: 'Well-drained fertile soil, pH 5.5–7.0, warm climate',
    availableFormats: ['1kg pack', '5kg pack', '25kg bag'],
    characteristics: ['Strong stalk strength', 'Well-filled cobs', 'Medium maturity', 'Adaptable to varied conditions'],
    growingInformation: {
      sowing: 'Sow at onset of monsoon or when soil reaches 15°C',
      spacing: '60 × 20 cm between rows and plants',
      germination: '5–7 days at 20–30°C',
      maturity: '90–105 days from sowing',
      watering: 'Critical irrigation at flowering and grain fill stages',
      sunlight: 'Full sun, 6+ hours daily',
    },
    featured: true,
  },
  {
    id: 'coriander-seeds',
    name: 'Coriander Seeds',
    category: 'Herb Seeds',
    cropType: 'Herb',
    image: 'https://images.pexels.com/photos/10329642/pexels-photo-10329642.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Aromatic coriander variety with abundant leaves and good bolt resistance.',
    longDescription: 'These coriander seeds produce plants with lush, aromatic foliage and good bolt resistance, extending the harvest window. The variety is suitable for both leaf and seed production. Plants develop tender, flavourful leaves that are ready for harvest within a short growing period.',
    season: 'Cool Season / Spring / Autumn',
    growingType: 'Open Field / Container',
    seedType: 'Open Pollinated',
    suitableConditions: 'Well-drained loamy soil, pH 6.0–7.0, moderate climate',
    availableFormats: ['20g packet', '100g pack', '500g bulk'],
    characteristics: ['Abundant foliage', 'Good bolt resistance', 'Aromatic leaves', 'Fast harvest cycle'],
    growingInformation: {
      sowing: 'Direct sow after last frost or in cool season',
      spacing: '20 × 10 cm between rows and plants',
      germination: '7–14 days at 15–20°C',
      maturity: '40–50 days for leaves, 90–110 days for seeds',
      watering: 'Keep soil evenly moist, avoid drying out',
      sunlight: 'Partial shade to full sun',
    },
    featured: true,
  },
  {
    id: 'chilli-seeds',
    name: 'Chilli Seeds',
    category: 'Vegetable Seeds',
    cropType: 'Vegetable',
    image: 'https://images.pexels.com/photos/3442822/pexels-photo-3442822.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Medium-hot red chilli variety with good shelf life and consistent pungency.',
    longDescription: 'Our chilli seeds produce compact, bushy plants that yield an abundance of medium-hot red chillies. The variety is suitable for both fresh market and drying purposes. Fruits develop uniform colour and pungency, and the plants show good tolerance to common growing conditions.',
    season: 'Spring / Summer',
    growingType: 'Open Field / Greenhouse',
    seedType: 'Open Pollinated',
    suitableConditions: 'Well-drained loamy soil, pH 5.5–7.0, warm climate',
    availableFormats: ['5g packet', '25g pack', '100g bulk'],
    characteristics: ['Medium-hot pungency', 'Uniform red colour', 'Good shelf life', 'Prolific bearing'],
    growingInformation: {
      sowing: 'Start in nursery trays 6–8 weeks before transplanting',
      spacing: '50 × 40 cm between plants and rows',
      germination: '7–14 days at 20–30°C',
      maturity: '75–90 days from transplanting',
      watering: 'Regular irrigation, avoid waterlogging',
      sunlight: 'Full sun, 6+ hours daily',
    },
    featured: false,
  },
  {
    id: 'spinach-seeds',
    name: 'Spinach Seeds',
    category: 'Vegetable Seeds',
    cropType: 'Vegetable',
    image: 'https://images.pexels.com/photos/35252800/pexels-photo-35252800.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Fast-growing spinach variety with large, tender dark green leaves.',
    longDescription: 'These spinach seeds produce fast-growing plants with large, tender dark green leaves. The variety is well-adapted to cool-season growing and matures quickly, allowing for multiple cuttings. Leaves maintain good texture and flavour after harvest.',
    season: 'Cool Season / Spring / Autumn',
    growingType: 'Open Field / Container',
    seedType: 'Open Pollinated',
    suitableConditions: 'Rich, moisture-retentive soil, pH 6.0–7.0, cool climate',
    availableFormats: ['15g packet', '75g pack', '250g bulk'],
    characteristics: ['Large tender leaves', 'Fast growth', 'Multiple cuttings', 'Dark green colour'],
    growingInformation: {
      sowing: 'Direct sow 4–6 weeks before last frost',
      spacing: '30 × 10 cm between rows and plants',
      germination: '7–14 days at 10–20°C',
      maturity: '35–45 days from sowing',
      watering: 'Keep soil consistently moist',
      sunlight: 'Full sun to partial shade',
    },
    featured: false,
  },
  {
    id: 'cucumber-seeds',
    name: 'Cucumber Seeds',
    category: 'Vegetable Seeds',
    cropType: 'Vegetable',
    image: 'https://images.pexels.com/photos/31737291/pexels-photo-31737291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Crisp, uniform cucumber variety with dark green skin and good fruit set.',
    longDescription: 'Our cucumber seeds produce vigorous vining plants with good fruit set and uniform dark green fruits. The variety is suitable for both fresh market and pickling use. Fruits develop crisp texture and maintain good quality after harvest.',
    season: 'Spring / Summer',
    growingType: 'Open Field / Greenhouse',
    seedType: 'Hybrid',
    suitableConditions: 'Well-drained fertile soil, pH 6.0–7.0, warm climate',
    availableFormats: ['5g packet', '25g pack', '100g bulk'],
    characteristics: ['Crisp texture', 'Uniform fruit shape', 'Dark green skin', 'Good fruit set'],
    growingInformation: {
      sowing: 'Direct sow when soil reaches 18°C',
      spacing: '120 × 30 cm between rows and plants',
      germination: '5–10 days at 20–30°C',
      maturity: '55–65 days from sowing',
      watering: 'Consistent irrigation, keep soil moist',
      sunlight: 'Full sun, 6+ hours daily',
    },
    featured: false,
  },
  {
    id: 'pumpkin-seeds',
    name: 'Pumpkin Seeds',
    category: 'Vegetable Seeds',
    cropType: 'Vegetable',
    image: 'https://images.pexels.com/photos/10084233/pexels-photo-10084233.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Large-fruited pumpkin variety with good storage quality and thick flesh.',
    longDescription: 'These pumpkin seeds produce vigorous vining plants that yield large, round fruits with thick orange flesh and good storage quality. The variety is well-adapted to warm-season growing and produces fruits that hold well after harvest, making them suitable for both market and storage use.',
    season: 'Summer / Autumn',
    growingType: 'Open Field',
    seedType: 'Open Pollinated',
    suitableConditions: 'Well-drained fertile soil, pH 6.0–7.0, warm climate',
    availableFormats: ['10g packet', '50g pack', '250g bulk'],
    characteristics: ['Large fruit size', 'Thick orange flesh', 'Good storage quality', 'Vigorous vines'],
    growingInformation: {
      sowing: 'Direct sow when soil reaches 18°C',
      spacing: '2.0 × 1.5 m between plants and rows',
      germination: '7–10 days at 20–30°C',
      maturity: '100–120 days from sowing',
      watering: 'Regular deep irrigation',
      sunlight: 'Full sun, 8+ hours daily',
    },
    featured: false,
  },
  {
    id: 'marigold-seeds',
    name: 'Marigold Seeds',
    category: 'Flower Seeds',
    cropType: 'Flower',
    image: 'https://images.pexels.com/photos/13960310/pexels-photo-13960310.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Bright orange African marigold variety with large double blooms.',
    longDescription: 'Our marigold seeds produce compact, bushy plants with large, double orange blooms that flower abundantly throughout the season. The variety is well-suited for garden beds, borders, and container planting. Flowers are long-lasting and attract pollinators to the garden.',
    season: 'Spring / Summer / Autumn',
    growingType: 'Open Field / Container',
    seedType: 'Open Pollinated',
    suitableConditions: 'Well-drained soil, pH 6.0–7.0, full sun',
    availableFormats: ['2g packet', '10g pack', '50g bulk'],
    characteristics: ['Large double blooms', 'Abundant flowering', 'Long-lasting flowers', 'Pollinator-friendly'],
    growingInformation: {
      sowing: 'Start in trays 4–6 weeks before transplanting or direct sow',
      spacing: '30 × 30 cm between plants and rows',
      germination: '5–10 days at 20–25°C',
      maturity: '60–75 days from sowing to first bloom',
      watering: 'Moderate irrigation, allow soil to dry between waterings',
      sunlight: 'Full sun, 6+ hours daily',
    },
    featured: false,
  },
  {
    id: 'sunflower-seeds',
    name: 'Sunflower Seeds',
    category: 'Flower Seeds',
    cropType: 'Flower',
    image: 'https://images.pexels.com/photos/17920487/pexels-photo-17920487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Tall sunflower variety with large golden-yellow blooms and strong stems.',
    longDescription: 'These sunflower seeds produce tall, sturdy plants with large golden-yellow flower heads. The variety is suitable for garden backgrounds, hedgerows, and cut flower production. Plants develop strong stems that support the large blooms and attract a wide range of pollinators.',
    season: 'Spring / Summer',
    growingType: 'Open Field',
    seedType: 'Open Pollinated',
    suitableConditions: 'Well-drained soil, pH 6.0–7.5, full sun',
    availableFormats: ['10g packet', '50g pack', '250g bulk'],
    characteristics: ['Large golden blooms', 'Strong stems', 'Pollinator attraction', 'Fast growing'],
    growingInformation: {
      sowing: 'Direct sow after last frost when soil reaches 15°C',
      spacing: '60 × 30 cm between plants and rows',
      germination: '7–14 days at 20–25°C',
      maturity: '75–90 days from sowing to bloom',
      watering: 'Regular irrigation, deep watering',
      sunlight: 'Full sun, 8+ hours daily',
    },
    featured: false,
  },
  {
    id: 'basil-seeds',
    name: 'Basil Seeds',
    category: 'Herb Seeds',
    cropType: 'Herb',
    image: 'https://images.pexels.com/photos/39956093/pexels-photo-39956093.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Genovese-type basil with large, aromatic leaves and good leaf production.',
    longDescription: 'Our basil seeds produce compact plants with large, glossy green leaves and a classic sweet-aromatic flavour. The variety is well-suited for culinary use, container growing, and herb gardens. Plants produce abundant leaves that can be harvested repeatedly throughout the growing season.',
    season: 'Spring / Summer',
    growingType: 'Open Field / Container / Greenhouse',
    seedType: 'Open Pollinated',
    suitableConditions: 'Well-drained rich soil, pH 6.0–7.0, warm climate',
    availableFormats: ['2g packet', '10g pack', '50g bulk'],
    characteristics: ['Large aromatic leaves', 'Abundant leaf production', 'Classic Genovese flavour', 'Multiple harvests'],
    growingInformation: {
      sowing: 'Start indoors 4–6 weeks before last frost or direct sow',
      spacing: '30 × 25 cm between plants and rows',
      germination: '5–10 days at 20–25°C',
      maturity: '60–75 days from sowing to first harvest',
      watering: 'Keep soil consistently moist but not waterlogged',
      sunlight: 'Full sun to partial shade, 6+ hours daily',
    },
    featured: false,
  },
  {
    id: 'wheat-seeds',
    name: 'Wheat Seeds',
    category: 'Field Crop Seeds',
    cropType: 'Field Crop',
    image: 'https://images.pexels.com/photos/29385833/pexels-photo-29385833.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Medium-season wheat variety with good grain fill and reliable tillering.',
    longDescription: 'Our wheat seeds produce medium-height plants with good tillering capacity and well-filled grain heads. The variety is adapted to both irrigated and rainfed conditions and shows reliable performance across diverse growing environments. Grains develop good test weight and uniform maturity.',
    season: 'Winter / Spring (Rabi)',
    growingType: 'Open Field',
    seedType: 'Open Pollinated',
    suitableConditions: 'Well-drained fertile loam, pH 6.0–7.5',
    availableFormats: ['1kg pack', '10kg pack', '50kg bag'],
    characteristics: ['Good tillering', 'Well-filled grain', 'Uniform maturity', 'Adaptable to varied conditions'],
    growingInformation: {
      sowing: 'Sow at optimal window for region (Oct–Nov for Rabi)',
      spacing: '22.5 cm row spacing, broadcast or drill sowing',
      germination: '5–8 days at 15–20°C',
      maturity: '120–140 days from sowing',
      watering: '4–5 irrigations at critical growth stages',
      sunlight: 'Full sun, 6+ hours daily',
    },
    featured: false,
  },
  {
    id: 'sunflower-oilseeds',
    name: 'Sunflower Oilseeds',
    category: 'Field Crop Seeds',
    cropType: 'Field Crop',
    image: 'https://images.pexels.com/photos/24784024/pexels-photo-24784024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'High oil-content sunflower variety for oilseed production.',
    longDescription: 'These sunflower oilseed seeds produce tall plants with large flower heads containing high oil-content seeds. The variety is specifically selected for oilseed production and performs well under both irrigated and rainfed conditions. Seeds develop good oil percentage and uniform maturity.',
    season: 'Spring / Summer',
    growingType: 'Open Field',
    seedType: 'Hybrid',
    suitableConditions: 'Well-drained loam soil, pH 6.0–7.5, warm climate',
    availableFormats: ['1kg pack', '5kg pack', '25kg bag'],
    characteristics: ['High oil content', 'Large flower heads', 'Uniform maturity', 'Good seed fill'],
    growingInformation: {
      sowing: 'Direct sow when soil reaches 15°C',
      spacing: '60 × 30 cm between plants and rows',
      germination: '7–10 days at 20–25°C',
      maturity: '90–110 days from sowing',
      watering: 'Regular irrigation at flowering and seed fill',
      sunlight: 'Full sun, 8+ hours daily',
    },
    featured: false,
  },
  {
    id: 'popcorn-seeds',
    name: 'Popcorn Seeds',
    category: 'Specialty Seeds',
    cropType: 'Specialty',
    image: 'https://images.pexels.com/photos/35193657/pexels-photo-35193657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Specialty popcorn variety with bright yellow kernels and good popping volume.',
    longDescription: 'Our popcorn seeds produce sturdy plants with well-formed ears containing bright yellow kernels that expand to produce large, fluffy popped flakes. The variety is grown specifically for popping purposes and develops kernels with good popping volume and tender texture.',
    season: 'Spring / Summer',
    growingType: 'Open Field',
    seedType: 'Open Pollinated',
    suitableConditions: 'Well-drained fertile soil, pH 5.5–7.0, warm climate',
    availableFormats: ['250g packet', '1kg pack', '5kg bulk'],
    characteristics: ['Bright yellow kernels', 'Good popping volume', 'Tender flakes', 'Sturdy plant growth'],
    growingInformation: {
      sowing: 'Direct sow when soil reaches 15°C',
      spacing: '60 × 20 cm between rows and plants',
      germination: '5–8 days at 20–30°C',
      maturity: '95–110 days from sowing',
      watering: 'Regular irrigation, reduce before harvest for proper drying',
      sunlight: 'Full sun, 6+ hours daily',
    },
    featured: false,
  },
  {
    id: 'buckwheat-seeds',
    name: 'Buckwheat Seeds',
    category: 'Specialty Seeds',
    cropType: 'Specialty',
    image: 'https://images.pexels.com/photos/7794387/pexels-photo-7794387.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Fast-growing buckwheat variety suitable for cover cropping and grain use.',
    longDescription: 'These buckwheat seeds produce fast-growing plants that are well-suited for cover cropping, green manure, and grain production. The variety matures quickly and is valued for its soil-building properties. Plants produce triangular seeds that can be used for various culinary and agricultural purposes.',
    season: 'Spring / Summer',
    growingType: 'Open Field',
    seedType: 'Open Pollinated',
    suitableConditions: 'Well-drained soil, pH 4.5–7.0, cool to moderate climate',
    availableFormats: ['500g packet', '2kg pack', '10kg bulk'],
    characteristics: ['Fast growing', 'Soil-building properties', 'Quick maturity', 'Adaptable to poor soils'],
    growingInformation: {
      sowing: 'Direct sow after last frost',
      spacing: 'Broadcast or drill at 15 cm row spacing',
      germination: '5–7 days at 15–25°C',
      maturity: '70–90 days from sowing',
      watering: 'Minimal irrigation needed, drought tolerant',
      sunlight: 'Full sun to partial shade',
    },
    featured: false,
  },
];

// The public catalogue intentionally excludes Field Crop Seeds. Product pages,
// filters, galleries, counts, and direct product lookups use these exports.
const unavailableCategory = 'Field Crop Seeds';
export const categories = categoryCatalogue;
export const products = productCatalogue.filter((product) => product.category !== unavailableCategory);

export const seasons = ['Spring / Summer', 'Cool Season / Spring / Autumn', 'Summer', 'Year-round (Tropical)', 'Spring / Summer / Autumn'];
export const growingTypes = ['Open Field', 'Open Field / Greenhouse', 'Open Field / Container', 'Open Field / Orchard', 'Open Field / Container / Greenhouse'];
export const seedTypes = ['Open Pollinated', 'Hybrid'];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return products.filter((p) => p.category === category.name);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getVarietyCount(categoryName: string): number {
  return products.filter((p) => p.category === categoryName).length;
}
