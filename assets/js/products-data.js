/**
 * EcoWorld Product Catalog Data
 * Architecture: Category → Sub-Category → Product → Variants
 * Modular: Each product has a sellerId field (default "ecoworld") for future multi-seller support.
 */

const STORE_CONFIG = {
  defaultSeller: { id: "ecoworld", name: "EcoWorld Earth Products", verified: true },
  currency: "₹",
  whatsapp: "917204885759"
};

const CATALOG = [
  // ===== CATEGORY 1: PAPER PRODUCTS =====
  {
    id: "paper-products",
    name: "Paper Products",
    icon: "fas fa-scroll",
    description: "Paper-based products made from kraft and food-grade paper, ideal for food packaging, retail carry, and everyday business use. Plastic-free and recyclable.",
    image: "",
    subcategories: [
      {
        id: "kraft-paper-carry-bags",
        name: "Kraft Paper Carry Bags",
        description: "Durable paper carry bags designed for retail stores, food takeaway, and packaging needs.",
        image: "",
        products: [
          {
            id: "PPKB001",
            name: "Kraft Paper Carry Bag - Brown",
            description: "Premium brown kraft paper bag with twisted rope handle. Ideal for retail, food takeaway, and gifting. Recyclable and plastic-free.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["Small (8x10)", "Medium (10x12)", "Large (12x16)", "Extra Large (14x18)"],
              gsm: ["80 GSM", "100 GSM", "120 GSM"],
              color: ["Brown", "White"]
            },
            usage: ["Retail Stores", "Restaurants", "Bakeries", "Gifting"],
            features: ["Twisted rope handle", "Food-safe", "Recyclable", "Custom print available"],
            moq: "500 pieces"
          },
          {
            id: "PPKB002",
            name: "Kraft Paper Carry Bag - White",
            description: "Clean white kraft paper bag with flat handle. Great for boutiques, pharmacies, and premium packaging.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["Small (8x10)", "Medium (10x12)", "Large (12x16)"],
              gsm: ["100 GSM", "120 GSM", "150 GSM"],
              handle: ["Flat Handle", "Twisted Rope", "Die-Cut"]
            },
            usage: ["Boutiques", "Pharmacies", "Premium Retail"],
            features: ["Flat/rope handle options", "Premium finish", "Custom branding"],
            moq: "500 pieces"
          },
          {
            id: "PPKB003",
            name: "Kraft Paper Bag - Without Handle",
            description: "Simple kraft paper bag without handle for bakeries, street food, and small retail packaging.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["Small (5x7)", "Medium (7x9)", "Large (9x12)"],
              gsm: ["60 GSM", "80 GSM"],
              color: ["Brown", "White"]
            },
            usage: ["Bakeries", "Street Food", "Medicine Packaging"],
            features: ["No handle", "Flat bottom", "Oil-resistant options"],
            moq: "1000 pieces"
          }
        ]
      },
      {
        id: "paper-food-boxes",
        name: "Paper Food Boxes & Containers",
        description: "Eco-friendly food packaging boxes suitable for hot and cold food items.",
        image: "",
        products: [
          {
            id: "PPFB001",
            name: "Paper Burger Box",
            description: "Clamshell-style paper burger box with secure closure. Food-grade, oil-resistant lining.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["Small (4 inch)", "Medium (5 inch)", "Large (6 inch)"],
              type: ["Plain", "Printed", "Custom Branded"]
            },
            usage: ["Burger Joints", "Fast Food", "Cloud Kitchens"],
            features: ["Clamshell design", "Oil-resistant", "Microwave-safe", "Custom print"],
            moq: "500 pieces"
          },
          {
            id: "PPFB002",
            name: "Paper Meal Box",
            description: "Rectangular paper meal box for rice, biryani, and combo meals. Leak-resistant construction.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / unit",
            bulkPricing: true,
            variants: {
              capacity: ["500ml", "750ml", "1000ml", "1200ml"],
              type: ["Single Compartment", "2-Compartment", "3-Compartment"]
            },
            usage: ["Restaurants", "Tiffin Services", "Catering"],
            features: ["Leak-resistant", "Stackable", "Microwave-safe"],
            moq: "500 pieces"
          },
          {
            id: "PPFB003",
            name: "Paper Takeaway Container",
            description: "Round/square paper containers with lids for soups, gravies, and wet food items.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / unit",
            bulkPricing: true,
            variants: {
              capacity: ["250ml", "400ml", "500ml", "750ml"],
              shape: ["Round", "Square"],
              lid: ["Paper Lid", "No Lid"]
            },
            usage: ["Cloud Kitchens", "Delivery Apps", "Restaurants"],
            features: ["With/without lid", "Leak-proof", "Hot food safe"],
            moq: "500 pieces"
          }
        ]
      },
      {
        id: "paper-cups-bowls",
        name: "Paper Cups & Bowls",
        description: "Single-use paper cups and bowls with food-safe lining for beverages and soups.",
        image: "",
        products: [
          {
            id: "PPCB001",
            name: "Paper Tea/Coffee Cup",
            description: "Standard paper cups for hot beverages with PE-free lining option. Perfect for offices and tea stalls.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              capacity: ["65ml (Espresso)", "150ml (Small)", "200ml (Medium)", "250ml (Large)", "350ml (XL)"],
              type: ["Plain White", "Printed Design", "Custom Branded"]
            },
            usage: ["Tea Stalls", "Offices", "Cafés", "Events"],
            features: ["Food-safe lining", "Insulated", "Custom print"],
            moq: "1000 pieces"
          },
          {
            id: "PPCB002",
            name: "Paper Bowl",
            description: "Deep paper bowls for soups, ice cream, and snack items. Food-grade and oil-resistant.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              capacity: ["180ml", "250ml", "350ml", "500ml"],
              type: ["Plain", "Printed", "With Lid"]
            },
            usage: ["Ice Cream Parlours", "Restaurants", "Street Food"],
            features: ["Oil-resistant", "Leak-proof base", "Lid options"],
            moq: "1000 pieces"
          }
        ]
      }
    ]
  },

  // ===== CATEGORY 2: BIODEGRADABLE PRODUCTS =====
  {
    id: "biodegradable-products",
    name: "Biodegradable Products",
    icon: "fas fa-recycle",
    description: "Products designed to decompose faster than conventional plastics, suitable for waste management and disposal needs.",
    image: "",
    subcategories: [
      {
        id: "biodegradable-garbage-bags",
        name: "Biodegradable Garbage Bags",
        description: "Eco-friendly garbage bags that break down naturally, ideal for homes, offices, and municipal use.",
        image: "",
        products: [
          {
            id: "BDGB001",
            name: "Biodegradable Garbage Bag - Small",
            description: "Small-sized biodegradable garbage bag for dustbins and bathroom waste. Breaks down naturally in soil.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / roll",
            bulkPricing: true,
            variants: {
              size: ["17x19 inch", "19x21 inch"],
              thickness: ["15 micron", "20 micron"],
              packSize: ["10 bags/roll", "15 bags/roll", "30 bags/roll"]
            },
            usage: ["Household", "Bathroom", "Small Office Bins"],
            features: ["Bio-degradable material", "Tear-resistant", "Odor control"],
            moq: "100 rolls"
          },
          {
            id: "BDGB002",
            name: "Biodegradable Garbage Bag - Medium",
            description: "Medium garbage bag for kitchen waste and office bins. Suitable for wet and dry waste segregation.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / roll",
            bulkPricing: true,
            variants: {
              size: ["24x30 inch"],
              thickness: ["20 micron", "25 micron", "30 micron"],
              packSize: ["10 bags/roll", "15 bags/roll", "30 bags/roll"]
            },
            usage: ["Kitchen", "Office", "Wet Waste"],
            features: ["Strong seal", "Wet waste safe", "Easy-tie handles"],
            moq: "100 rolls"
          },
          {
            id: "BDGB003",
            name: "Biodegradable Garbage Bag - Large / Heavy Duty",
            description: "Large heavy-duty biodegradable bags for bulk waste, municipal bins, and commercial use.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / roll",
            bulkPricing: true,
            variants: {
              size: ["30x37 inch", "32x42 inch"],
              thickness: ["25 micron", "30 micron", "40 micron"],
              packSize: ["10 bags/roll", "20 bags/roll"]
            },
            usage: ["Municipal", "Hotels", "Bulk Waste"],
            features: ["Extra strong", "Heavy load capacity", "Compost-friendly"],
            moq: "50 rolls"
          }
        ]
      },
      {
        id: "compostable-liners",
        name: "Compostable Liners",
        description: "Thin-gauge compostable liners for dustbins and wet waste segregation.",
        image: "",
        products: [
          {
            id: "BDCL001",
            name: "Compostable Bin Liner",
            description: "Cornstarch-based compostable liner that decomposes within 90-180 days in composting conditions.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / roll",
            bulkPricing: true,
            variants: {
              size: ["Small (17x19)", "Medium (19x21)", "Large (24x30)"],
              packSize: ["10 liners/roll", "20 liners/roll", "30 liners/roll"]
            },
            usage: ["Wet Waste", "Kitchen", "Composting"],
            features: ["Cornstarch-based", "Decomposes in 90-180 days", "No microplastics"],
            moq: "100 rolls"
          }
        ]
      },
      {
        id: "disposal-bags",
        name: "Disposal Bags",
        description: "Multi-purpose biodegradable disposal bags for sanitary, medical, and general disposal needs.",
        image: "",
        products: [
          {
            id: "BDDB001",
            name: "Sanitary Disposal Bag",
            description: "Opaque biodegradable bags designed for discreet sanitary waste disposal in washrooms.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / pack",
            bulkPricing: true,
            variants: {
              size: ["Standard"],
              color: ["Pink", "Black", "Green"],
              packSize: ["30 bags/pack", "50 bags/pack"]
            },
            usage: ["Washrooms", "Hotels", "Offices", "Hospitals"],
            features: ["Opaque", "Discreet disposal", "Odor-lock"],
            moq: "200 packs"
          },
          {
            id: "BDDB002",
            name: "General Disposal Bag",
            description: "Multi-purpose biodegradable disposal bags for mixed waste and general use.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / pack",
            bulkPricing: true,
            variants: {
              size: ["Small (12x16)", "Medium (16x20)", "Large (20x24)"],
              color: ["Green", "Black", "White"]
            },
            usage: ["Home", "Office", "Travel"],
            features: ["Multipurpose", "Tear-resistant", "Eco-friendly"],
            moq: "200 packs"
          }
        ]
      }
    ]
  },

  // ===== CATEGORY 3: BAGASSE PRODUCTS =====
  {
    id: "bagasse-products",
    name: "Bagasse Products",
    icon: "fas fa-seedling",
    description: "Natural fiber products made from sugarcane residue (bagasse), ideal for single-use food service. Disposable, plastic-free, and suitable for hot/oily food.",
    image: "",
    subcategories: [
      {
        id: "bagasse-plates",
        name: "Bagasse Plates",
        description: "Sturdy sugarcane fiber plates for hot meals, snacks, and party use. Microwave-safe and oil-resistant.",
        image: "",
        products: [
          {
            id: "BGPL001",
            name: "Bagasse Round Plate",
            description: "Round sugarcane bagasse plate suitable for meals, snacks, and events. Oil and heat resistant.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["6 inch", "7 inch", "9 inch", "10 inch", "12 inch"],
              type: ["Plain", "Compartment (3-section)"]
            },
            usage: ["Parties", "Catering", "Street Food", "Events"],
            features: ["Microwave-safe", "Oil-resistant", "Sturdy", "Natural off-white color"],
            moq: "500 pieces"
          },
          {
            id: "BGPL002",
            name: "Bagasse Square Plate",
            description: "Square-shaped bagasse plate for a modern look. Ideal for premium catering and buffet service.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["6 inch", "8 inch", "10 inch"],
              type: ["Plain", "With rim"]
            },
            usage: ["Premium Events", "Buffets", "Restaurants"],
            features: ["Modern look", "Stackable", "Sturdy edges"],
            moq: "500 pieces"
          }
        ]
      },
      {
        id: "bagasse-bowls",
        name: "Bagasse Bowls",
        description: "Deep bagasse bowls for curries, soups, salads, and desserts. Leak-resistant and compostable.",
        image: "",
        products: [
          {
            id: "BGBW001",
            name: "Bagasse Bowl",
            description: "Deep sugarcane bagasse bowl for soups, curries, desserts, and salads. Leak-resistant design.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              capacity: ["180ml", "250ml", "350ml", "500ml"],
              type: ["Without Lid", "With Bagasse Lid"]
            },
            usage: ["Food Courts", "Events", "Tiffin Services"],
            features: ["Leak-resistant", "Hot food safe", "Lid available"],
            moq: "500 pieces"
          }
        ]
      },
      {
        id: "bagasse-clamshell",
        name: "Bagasse Clamshell Boxes",
        description: "Hinged clamshell containers for takeaway meals, burgers, and combo meals. Fully compostable.",
        image: "",
        products: [
          {
            id: "BGCS001",
            name: "Bagasse Clamshell Box",
            description: "Hinged bagasse container for takeaway food. Secure closure keeps food fresh. Compostable.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["6x6 inch", "8x8 inch", "9x6 inch", "9x9 inch"],
              type: ["Single Compartment", "2-Compartment", "3-Compartment"]
            },
            usage: ["Takeaway", "Delivery Apps", "Cafeterias"],
            features: ["Hinged lid", "Secure closure", "Microwave-safe", "Stackable"],
            moq: "500 pieces"
          }
        ]
      }
    ]
  },

  // ===== CATEGORY 4: ARECA PRODUCTS =====
  {
    id: "areca-products",
    name: "Areca Products",
    icon: "fas fa-tree",
    description: "Naturally fallen areca palm leaf products processed without chemicals. Beautiful natural texture, perfect for events and catering.",
    image: "",
    subcategories: [
      {
        id: "areca-plates",
        name: "Areca Plates",
        description: "Elegant palm leaf plates with natural wood-like texture. Chemical-free and heat-resistant.",
        image: "",
        products: [
          {
            id: "ARPL001",
            name: "Areca Round Plate",
            description: "Round areca palm leaf plate with unique natural grain. Each plate has a one-of-a-kind texture.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["6 inch", "8 inch", "10 inch", "12 inch"],
              finish: ["Natural", "Polished"]
            },
            usage: ["Weddings", "Events", "Premium Catering"],
            features: ["Unique texture", "Chemical-free", "Heat-resistant", "Elegant look"],
            moq: "200 pieces"
          },
          {
            id: "ARPL002",
            name: "Areca Square Plate",
            description: "Square areca plate for modern presentation. Perfect for buffets and upscale events.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["6 inch", "8 inch", "10 inch"],
              finish: ["Natural", "Polished"]
            },
            usage: ["Buffets", "Corporate Events", "Premium Dining"],
            features: ["Modern look", "Sturdy", "No chemical coating"],
            moq: "200 pieces"
          }
        ]
      },
      {
        id: "areca-bowls",
        name: "Areca Bowls",
        description: "Deep palm leaf bowls for curries, desserts, and snacks. Sturdy with a rustic look.",
        image: "",
        products: [
          {
            id: "ARBW001",
            name: "Areca Bowl",
            description: "Deep areca palm bowl with natural texture. Great for serving curries, desserts, and salads.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              capacity: ["100ml", "200ml", "350ml", "500ml"],
              shape: ["Round", "Oval"]
            },
            usage: ["Catering", "Home Events", "Eco Resorts"],
            features: ["Rustic look", "Sturdy", "Liquid-resistant"],
            moq: "200 pieces"
          }
        ]
      },
      {
        id: "areca-trays",
        name: "Areca Trays",
        description: "Compartment trays made from areca leaf for thali-style meals and buffet service.",
        image: "",
        products: [
          {
            id: "ARTR001",
            name: "Areca Compartment Tray",
            description: "Multi-compartment areca tray for serving full meals (thali style). Natural and elegant.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              type: ["3-Compartment", "4-Compartment", "5-Compartment"],
              size: ["10 inch", "12 inch"]
            },
            usage: ["Thali Meals", "Buffets", "School Canteens"],
            features: ["Multiple compartments", "Keeps food separated", "Elegant presentation"],
            moq: "200 pieces"
          }
        ]
      }
    ]
  },

  // ===== CATEGORY 5: JUTE PRODUCTS =====
  {
    id: "jute-products",
    name: "Jute Products",
    icon: "fas fa-shopping-bag",
    description: "Reusable jute-based alternatives for packaging, gifting, and carry purposes. Durable, eco-friendly, and customizable.",
    image: "",
    subcategories: [
      {
        id: "jute-carry-bags",
        name: "Jute Carry Bags",
        description: "Strong, reusable jute bags for shopping, groceries, and everyday carry.",
        image: "",
        products: [
          {
            id: "JTCB001",
            name: "Jute Shopping Bag",
            description: "Durable jute carry bag with reinforced handles. Perfect for groceries, retail, and daily use.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["Small (10x12)", "Medium (12x14)", "Large (14x16)", "Extra Large (16x18)"],
              handle: ["Rope Handle", "Flat Handle", "Padded Handle"],
              color: ["Natural", "Dyed - Green", "Dyed - Brown"]
            },
            usage: ["Grocery Shopping", "Retail", "Gifting"],
            features: ["Reusable", "Machine washable", "High weight capacity", "Eco-friendly dyes"],
            moq: "100 pieces"
          }
        ]
      },
      {
        id: "jute-pouches",
        name: "Jute Pouches",
        description: "Small jute drawstring pouches for return gifts, jewelry packaging, and promotional use.",
        image: "",
        products: [
          {
            id: "JTPC001",
            name: "Jute Drawstring Pouch",
            description: "Elegant jute pouch with drawstring closure. Great for packing return gifts, jewelry, and dry fruits.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["4x5 inch", "6x8 inch", "8x10 inch"],
              closure: ["Drawstring", "Button", "Zip"],
              print: ["Plain", "Printed", "Embroidered"]
            },
            usage: ["Return Gifts", "Jewelry", "Dry Fruits", "Cosmetics"],
            features: ["Elegant look", "Reusable", "Custom print available"],
            moq: "200 pieces"
          }
        ]
      },
      {
        id: "promotional-jute-bags",
        name: "Promotional Jute Bags",
        description: "Custom-printed jute bags for corporate events, brand promotions, and conference giveaways.",
        image: "",
        products: [
          {
            id: "JTPR001",
            name: "Custom Promotional Jute Bag",
            description: "Fully brandable jute bag with your logo, tagline, or design. Ideal for corporate gifting and events.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["Standard (12x14)", "Large (14x16)", "Tote Style (16x18)"],
              print: ["Screen Print (1 color)", "Screen Print (2 color)", "Digital Print (Full Color)"],
              handle: ["Short Handle", "Long Shoulder Handle"]
            },
            usage: ["Corporate Events", "Conferences", "Brand Promotions", "Trade Shows"],
            features: ["Custom branding", "Full-color printing", "Bulk MOQ: 100+"],
            moq: "100 pieces"
          }
        ]
      }
    ]
  },

  // ===== CATEGORY 6: BAMBOO PRODUCTS =====
  {
    id: "bamboo-products",
    name: "Bamboo Products",
    icon: "fas fa-spa",
    description: "Fast-growing natural bamboo products suitable for daily use and hospitality. Sustainable, durable, and chemical-free.",
    image: "",
    subcategories: [
      {
        id: "bamboo-straws",
        name: "Bamboo Straws",
        description: "Reusable bamboo straws as a natural replacement for plastic straws.",
        image: "",
        products: [
          {
            id: "BMST001",
            name: "Bamboo Drinking Straw",
            description: "Hand-crafted reusable bamboo straw with natural finish. Comes with cleaning brush.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / set",
            bulkPricing: true,
            variants: {
              length: ["6 inch (Juice)", "8 inch (Standard)", "10 inch (Smoothie)"],
              packSize: ["Set of 4", "Set of 6", "Set of 12", "Bulk 50 pcs"]
            },
            usage: ["Restaurants", "Bars", "Cafés", "Home Use"],
            features: ["Includes cleaning brush", "Reusable 100+ times", "Natural antibacterial"],
            moq: "50 sets"
          }
        ]
      },
      {
        id: "bamboo-cutlery",
        name: "Bamboo Cutlery",
        description: "Disposable or reusable bamboo spoons, forks, and knives for meals on the go.",
        image: "",
        products: [
          {
            id: "BMCT001",
            name: "Bamboo Cutlery Set",
            description: "Eco-friendly bamboo cutlery (spoon, fork, knife) for takeaway and outdoor dining.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              type: ["Spoon Only", "Fork Only", "Knife Only", "Combo Set (3-in-1)"],
              usage: ["Single-Use (Disposable)", "Reusable (Polished)"],
              packSize: ["Pack of 25", "Pack of 50", "Pack of 100"]
            },
            usage: ["Takeaway", "Picnics", "Eco Restaurants", "Events"],
            features: ["Smooth finish", "Splinter-free", "Food-safe natural coating"],
            moq: "100 packs"
          }
        ]
      },
      {
        id: "bamboo-toothbrushes",
        name: "Bamboo Toothbrushes",
        description: "Eco-friendly bamboo handle toothbrushes with soft BPA-free bristles.",
        image: "",
        products: [
          {
            id: "BMTB001",
            name: "Bamboo Toothbrush",
            description: "Biodegradable bamboo handle toothbrush with charcoal-infused or regular BPA-free bristles.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              bristle: ["Soft - White", "Soft - Charcoal", "Medium - White", "Medium - Charcoal"],
              packSize: ["Single", "Pack of 2", "Pack of 4", "Family Pack (6)"]
            },
            usage: ["Personal Use", "Hotels", "Gifting", "Travel"],
            features: ["BPA-free bristles", "Biodegradable handle", "Ergonomic design"],
            moq: "100 pieces"
          }
        ]
      }
    ]
  },

  // ===== CATEGORY 7: CLOTH PRODUCTS =====
  {
    id: "cloth-products",
    name: "Cloth Products",
    icon: "fas fa-tshirt",
    description: "Reusable cloth-based products designed as long-term alternatives to plastic carry items. Washable, durable, and customizable.",
    image: "",
    subcategories: [
      {
        id: "cloth-carry-bags",
        name: "Cloth Carry Bags",
        description: "Heavy-duty reusable cloth bags for daily shopping and retail. Machine washable.",
        image: "",
        products: [
          {
            id: "CLCB001",
            name: "Cotton Canvas Carry Bag",
            description: "Thick cotton canvas bag with reinforced stitching. Designed for years of reuse.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["Small (10x12)", "Medium (14x16)", "Large (16x18)", "Extra Large (18x20)"],
              fabric: ["Cotton (220 GSM)", "Canvas (280 GSM)", "Canvas Heavy (380 GSM)"],
              color: ["Natural/Off-white", "Black", "Navy Blue", "Green"]
            },
            usage: ["Grocery", "Retail", "Daily Use"],
            features: ["Machine washable", "Reinforced handles", "500+ uses", "Eco-friendly dyes"],
            moq: "100 pieces"
          }
        ]
      },
      {
        id: "cotton-pouches",
        name: "Cotton Pouches",
        description: "Lightweight cotton pouches for organizing, gifting, and storing small items.",
        image: "",
        products: [
          {
            id: "CLCP001",
            name: "Cotton Muslin Pouch",
            description: "Soft muslin cotton pouch with drawstring. Ideal for gifting, jewelry, and small items.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["5x7 inch", "8x10 inch", "10x12 inch", "12x14 inch"],
              closure: ["Drawstring", "Zip"],
              fabric: ["Muslin", "Cotton Canvas"]
            },
            usage: ["Gifting", "Travel", "Storage", "Wedding Favors"],
            features: ["Lightweight", "Washable", "Natural fabric", "Print-ready"],
            moq: "200 pieces"
          }
        ]
      },
      {
        id: "custom-cloth-bags",
        name: "Custom Cloth Bags",
        description: "Fully customizable cloth bags with your brand logo, design, or artwork.",
        image: "",
        products: [
          {
            id: "CLCB002",
            name: "Custom Branded Cloth Bag",
            description: "Bespoke cloth bags printed with your brand identity. Perfect for events, stores, and promotions.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Starting from ₹___ / piece",
            bulkPricing: true,
            variants: {
              size: ["Standard (12x14)", "Large (14x16)", "Tote (16x18)"],
              fabric: ["Cotton (220 GSM)", "Canvas (280 GSM)", "Juco (Jute-Cotton blend)"],
              print: ["Screen Print (1 color)", "Screen Print (2 colors)", "Digital Full Color", "Embroidery"]
            },
            usage: ["Corporate Gifting", "Store Packaging", "Events", "Promotions"],
            features: ["Custom branding", "Premium quality", "Multiple fabric choices"],
            moq: "50 pieces"
          }
        ]
      }
    ]
  }
];

// ===== UTILITY FUNCTIONS =====

function getCategoryById(catId) {
  return CATALOG.find(c => c.id === catId) || null;
}

function getSubcategoryById(catId, subId) {
  const cat = getCategoryById(catId);
  if (!cat) return null;
  return cat.subcategories.find(s => s.id === subId) || null;
}

function getProductById(productId) {
  for (const cat of CATALOG) {
    for (const sub of cat.subcategories) {
      const product = sub.products.find(p => p.id === productId);
      if (product) return { product, subcategory: sub, category: cat };
    }
  }
  return null;
}

// ===== CART FUNCTIONS =====

function getCart() {
  return JSON.parse(localStorage.getItem('ecoCart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('ecoCart', JSON.stringify(cart));
}

function addToCart(productId, variants, quantity, price, sellerId) {
  const cart = getCart();
  // Check if same product with same variants exists
  const existingIndex = cart.findIndex(item =>
    item.productId === productId &&
    JSON.stringify(item.variants) === JSON.stringify(variants)
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      productId,
      variants,
      quantity,
      price,
      sellerId: sellerId || STORE_CONFIG.defaultSeller.id,
      addedAt: Date.now()
    });
  }
  saveCart(cart);
  return cart;
}

function updateCartItemQty(index, newQty) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    if (newQty <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = newQty;
    }
    saveCart(cart);
  }
  return cart;
}

function removeFromCart(index) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
    saveCart(cart);
  }
  return cart;
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function clearCart() {
  localStorage.removeItem('ecoCart');
}

// ===== NAV CART BADGE =====
function updateNavCartBadge() {
  const badge = document.getElementById('cartCount');
  if (badge) badge.textContent = getCartCount();
}
