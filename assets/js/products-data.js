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
    image: "product-images/paper-products-profile.png",
    subcategories: [
      // ----- 1. Carry Bags -----
      {
        id: "carry-bags",
        name: "Carry Bags",
        description: "Eco-friendly paper carry bags for every need — retail, food, gifting, and corporate use. Carry the future, not the waste.",
        image: "product-images/paper-carry-bags-profile.png",
        tagline: "Carry the future, not the waste.",
        subcategories: [
          // --- 1a. Twisted Handle Bags ---
          {
            id: "twisted-handle-bags",
            name: "Twisted Handle Bags",
            description: "The most popular carry bag style. Strong twisted paper handles for comfortable grip. Ideal for retail, food takeaway, and gifting.",
            image: "",
            products: [
              {
                id: "TEST001",
                name: "Test Product - Payment Testing",
                description: "This is a test product for payment gateway testing. Do not order.",
                image: "",
                sellerId: "ecoworld",
                basePrice: 1,
                priceLabel: "₹1 / piece",
                bulkPricing: false,
                variants: {},
                usage: ["Testing"],
                features: ["Payment test only"],
                moq: "1 piece"
              },
              {
                id: "CB-TH001",
                name: "Brown Kraft Twisted Handle Bag",
                description: "Classic brown kraft paper bag with strong twisted paper handles. Versatile, recyclable, and perfect for retail stores, restaurants, and gifting.",
                image: "product-images/paper-kraft-brown-twisted.png",
                sellerId: "ecoworld",
                basePrice: null,
                priceLabel: "Coming Soon",
                bulkPricing: true,
                badge: "Best Seller",
                variants: {
                  size: ["Small (8x10x4 inch)", "Medium (10x12x4 inch)", "Large (12x16x4.5 inch)", "Extra Large (14x18x5 inch)"],
                  gsm: ["80 GSM", "100 GSM", "120 GSM", "150 GSM"],
                  color: ["Brown Kraft", "White Kraft"],
                  print: ["Plain", "Single Color Print", "Multi Color Print", "Custom Logo Printing"]
                },
                loadCapacity: "Medium Duty (3–5 kg)",
                packSize: ["Pack of 50", "Pack of 100", "Pack of 500", "Pack of 1000"],
                ecoAttributes: ["100% Recyclable", "Biodegradable", "Eco-Friendly Ink"],
                usage: ["Retail Stores", "Food Takeaway", "Restaurants", "Bakeries", "Gifting"],
                features: ["Twisted paper handle", "Food-safe", "Recyclable", "Custom print available", "Flat bottom with gusset"],
                moq: "500 pieces"
              },
              {
                id: "CB-TH002",
                name: "White Kraft Twisted Handle Bag",
                description: "Premium white kraft bag with twisted handles. Clean and elegant look for boutiques, pharmacies, and premium retail packaging.",
                image: "product-images/paper-kraft-white-twisted.png",
                sellerId: "ecoworld",
                basePrice: null,
                priceLabel: "Coming Soon",
                bulkPricing: true,
                variants: {
                  size: ["Small (8x10x4 inch)", "Medium (10x12x4 inch)", "Large (12x16x4.5 inch)"],
                  gsm: ["100 GSM", "120 GSM", "150 GSM"],
                  print: ["Plain", "Single Color Print", "Multi Color Print", "Custom Logo Printing"]
                },
                loadCapacity: "Medium Duty (3–5 kg)",
                packSize: ["Pack of 50", "Pack of 100", "Pack of 500"],
                ecoAttributes: ["100% Recyclable", "Biodegradable"],
                usage: ["Boutiques", "Pharmacies", "Premium Retail", "Clothing Stores"],
                features: ["Twisted paper handle", "Premium white finish", "Custom branding", "Flat bottom"],
                moq: "500 pieces"
              },
              {
                id: "CB-TH003",
                name: "Custom Printed Twisted Handle Bag",
                description: "Fully customized carry bags with your brand logo, colors, and design. Perfect for brand visibility and corporate gifting.",
                image: "product-images/paper-custom-printed-twisted.png",
                sellerId: "ecoworld",
                basePrice: null,
                priceLabel: "Coming Soon",
                bulkPricing: true,
                badge: "Custom",
                variants: {
                  size: ["Small (8x10x4 inch)", "Medium (10x12x4 inch)", "Large (12x16x4.5 inch)", "Extra Large (14x18x5 inch)"],
                  gsm: ["100 GSM", "120 GSM", "150 GSM", "180+ GSM"],
                  color: ["Brown Kraft", "White Kraft", "Custom Color"]
                },
                loadCapacity: "Medium to Heavy Duty (3–8 kg)",
                packSize: ["Pack of 500", "Pack of 1000"],
                ecoAttributes: ["100% Recyclable", "Biodegradable", "Eco-Friendly Ink"],
                usage: ["Corporate Gifting", "Brand Packaging", "Events", "Exhibitions"],
                features: ["Full custom print", "Brand logo", "Pantone color matching", "Premium finish"],
                moq: "1000 pieces"
              }
            ]
          },
          // --- 1b. Flat Handle Bags ---
          {
            id: "flat-handle-bags",
            name: "Flat Handle Bags",
            description: "Sleek flat paper handles for a clean, modern look. Popular in clothing stores, boutiques, and pharmacies.",
            image: "",
            products: [
              {
                id: "CB-FH001",
                name: "Brown Kraft Flat Handle Bag",
                description: "Classic brown kraft bag with flat folded paper handles. Clean appearance, easy to carry, and widely used in clothing and retail.",
                image: "product-images/paper-flat-brown-carry.png",
                sellerId: "ecoworld",
                basePrice: null,
                priceLabel: "Coming Soon",
                bulkPricing: true,
                variants: {
                  size: ["Small (8x10x4 inch)", "Medium (10x12x4 inch)", "Large (12x16x4.5 inch)", "Extra Large (14x18x5 inch)"],
                  gsm: ["100 GSM", "120 GSM", "150 GSM"],
                  color: ["Brown Kraft", "White Kraft"],
                  print: ["Plain", "Single Color Print", "Multi Color Print", "Custom Logo Printing"]
                },
                loadCapacity: "Medium Duty (3–5 kg)",
                packSize: ["Pack of 50", "Pack of 100", "Pack of 500", "Pack of 1000"],
                ecoAttributes: ["100% Recyclable", "Biodegradable"],
                usage: ["Clothing Stores", "Boutiques", "Pharmacies", "Retail"],
                features: ["Flat folded handle", "Modern look", "Custom print", "Flat bottom with gusset"],
                moq: "500 pieces"
              },
              {
                id: "CB-FH002",
                name: "White Kraft Flat Handle Bag",
                description: "Premium white paper bag with flat handles. Elegant and professional for upscale retail and gifting.",
                image: "product-images/paper-flat-white-carry.png",
                sellerId: "ecoworld",
                basePrice: null,
                priceLabel: "Coming Soon",
                bulkPricing: true,
                variants: {
                  size: ["Small (8x10x4 inch)", "Medium (10x12x4 inch)", "Large (12x16x4.5 inch)"],
                  gsm: ["120 GSM", "150 GSM", "180+ GSM"],
                  print: ["Plain", "Single Color Print", "Custom Logo Printing"]
                },
                loadCapacity: "Medium Duty (3–5 kg)",
                packSize: ["Pack of 50", "Pack of 100", "Pack of 500"],
                ecoAttributes: ["100% Recyclable", "Biodegradable"],
                usage: ["Premium Retail", "Gifting", "Clothing", "Corporate"],
                features: ["Flat handle", "Premium white finish", "Luxury feel", "Custom branding"],
                moq: "500 pieces"
              }
            ]
          },
          // --- 1c. Die-Cut Handle Bags ---
          {
            id: "die-cut-handle-bags",
            name: "Die-Cut Handle Bags",
            description: "Budget-friendly bags with die-cut (punch-out) handles. No separate handle — simple, light, and cost-effective.",
            image: "",
            products: [
              {
                id: "CB-DC001",
                name: "Brown Kraft Die-Cut Handle Bag",
                description: "Simple brown kraft bag with die-cut punch handles. Most affordable option for grocery, bakeries, and quick-serve packaging.",
                image: "",
                sellerId: "ecoworld",
                basePrice: null,
                priceLabel: "Coming Soon",
                bulkPricing: true,
                badge: "Eco Friendly",
                variants: {
                  size: ["Small (7x9 inch)", "Medium (9x12 inch)", "Large (12x16 inch)"],
                  gsm: ["80 GSM", "100 GSM", "120 GSM"],
                  color: ["Brown Kraft", "White Kraft"],
                  print: ["Plain", "Single Color Print", "Custom Logo Printing"]
                },
                loadCapacity: "Light to Medium Duty (1–4 kg)",
                packSize: ["Pack of 100", "Pack of 500", "Pack of 1000"],
                ecoAttributes: ["100% Recyclable", "Biodegradable", "Compostable"],
                usage: ["Grocery", "Bakeries", "Street Food", "Medical Stores"],
                features: ["Die-cut handle", "No extra handle material", "Flat bottom", "Budget-friendly"],
                moq: "1000 pieces"
              },
              {
                id: "CB-DC002",
                name: "White Kraft Die-Cut Handle Bag",
                description: "Clean white kraft bag with die-cut handles. Great for pharmacy, sweets, and dry snack packaging.",
                image: "",
                sellerId: "ecoworld",
                basePrice: null,
                priceLabel: "Coming Soon",
                bulkPricing: true,
                variants: {
                  size: ["Small (7x9 inch)", "Medium (9x12 inch)", "Large (12x16 inch)"],
                  gsm: ["80 GSM", "100 GSM", "120 GSM"],
                  print: ["Plain", "Single Color Print", "Custom Logo Printing"]
                },
                loadCapacity: "Light to Medium Duty (1–4 kg)",
                packSize: ["Pack of 100", "Pack of 500", "Pack of 1000"],
                ecoAttributes: ["100% Recyclable", "Biodegradable"],
                usage: ["Pharmacies", "Sweet Shops", "Dry Snacks", "Retail"],
                features: ["Die-cut handle", "Clean white look", "Affordable", "Oil-resistant options"],
                moq: "1000 pieces"
              }
            ]
          },
          // --- 1d. Rope Handle / Premium Bags ---
          {
            id: "premium-rope-handle-bags",
            name: "Rope Handle / Premium Bags",
            description: "Luxury paper bags with cotton rope or ribbon handles. Designed for high-end retail, weddings, and corporate gifting.",
            image: "",
            products: [
              {
                id: "CB-RH001",
                name: "Premium Kraft Rope Handle Bag",
                description: "High-end kraft paper bag with cotton rope handles and reinforced base. Perfect for luxury retail, weddings, and premium brand packaging.",
                image: "",
                sellerId: "ecoworld",
                basePrice: null,
                priceLabel: "Coming Soon",
                bulkPricing: true,
                badge: "Premium",
                variants: {
                  size: ["Medium (10x12x4 inch)", "Large (12x16x4.5 inch)", "Extra Large (14x18x5 inch)"],
                  gsm: ["150 GSM", "180 GSM", "200+ GSM"],
                  color: ["Brown Kraft", "White Kraft", "Black", "Custom Color"],
                  finish: ["Matte", "Glossy", "Matte Laminated", "Spot UV"],
                  print: ["Plain", "Foil Stamping", "Embossed", "Full Color Custom Print"]
                },
                loadCapacity: "Heavy Duty (5–8 kg)",
                packSize: ["Pack of 50", "Pack of 100", "Pack of 500"],
                ecoAttributes: ["Recyclable", "Biodegradable", "Eco-Friendly Ink"],
                usage: ["Luxury Retail", "Weddings", "Corporate Gifting", "Jewellery Stores", "Events"],
                features: ["Cotton rope handle", "Reinforced base", "Premium finish", "Foil/emboss options", "Gift-ready"],
                moq: "250 pieces"
              },
              {
                id: "CB-RH002",
                name: "Ribbon Handle Gift Bag",
                description: "Elegant paper bag with satin ribbon handles. Ideal for jewellery, cosmetics, and premium gift packaging.",
                image: "",
                sellerId: "ecoworld",
                basePrice: null,
                priceLabel: "Coming Soon",
                bulkPricing: true,
                badge: "Premium",
                variants: {
                  size: ["Small (6x8x3 inch)", "Medium (8x10x4 inch)", "Large (10x14x4 inch)"],
                  gsm: ["180 GSM", "200+ GSM", "250 GSM (Art Card)"],
                  color: ["White", "Black", "Gold", "Custom Color"],
                  finish: ["Matte Laminated", "Glossy Laminated", "Soft Touch", "Spot UV"],
                  print: ["Foil Stamping", "Embossed", "Full Color Custom Print"]
                },
                loadCapacity: "Medium Duty (2–4 kg)",
                packSize: ["Pack of 50", "Pack of 100"],
                ecoAttributes: ["Recyclable", "Eco-Friendly Ink"],
                usage: ["Jewellery Stores", "Cosmetics", "Premium Gifting", "Weddings"],
                features: ["Satin ribbon handle", "Luxury finish", "Foil stamping", "Soft touch option", "Tag-ready"],
                moq: "250 pieces"
              }
            ]
          },
          // --- 1e. Without Handle Bags ---
          {
            id: "without-handle-bags",
            name: "Without Handle Bags",
            description: "Paper covers and bags without handles — flat covers and gusset (folding) bags. Budget-friendly for grocery, bakeries, medical, and retail packaging.",
            image: "product-images/paper-no-handle-profile.png",
            products: [
              {
                id: "CB-NH001",
                name: "Brown Kraft Flat Cover",
                description: "Brown kraft flat paper cover without handle or gusset. Ideal for bakeries, medical stores, grocery, and general packaging. Available in 44 GSM (Ordinary) and 50 GSM (Super DX).",
                image: "product-images/paper-no-handle-brown.png",
                sellerId: "ecoworld",
                basePrice: null,
                priceLabel: "₹140 – ₹1,559 / 1000 pcs",
                bulkPricing: true,
                badge: "Best Seller",
                variants: {
                  size: ["Small (9×13 cm)", "Medium (14×22 cm)", "Large (22×30 cm)", "Extra Large (31×48 cm)"],
                  gsm: ["44 GSM (Ordinary)", "50 GSM (Super DX)"]
                },
                priceTable: {
                  "Small (9×13 cm)|44 GSM (Ordinary)": 140,
                  "Medium (14×22 cm)|44 GSM (Ordinary)": 289,
                  "Medium (14×22 cm)|50 GSM (Super DX)": 373,
                  "Large (22×30 cm)|44 GSM (Ordinary)": 557,
                  "Large (22×30 cm)|50 GSM (Super DX)": 716,
                  "Extra Large (31×48 cm)|44 GSM (Ordinary)": 1205,
                  "Extra Large (31×48 cm)|50 GSM (Super DX)": 1559
                },
                priceUnit: "per 1000 pcs",
                gstPercent: 18,
                transportPerUnit: 50,
                freeTransportAboveUnits: 10,
                loadCapacity: "Light Duty",
                packSize: ["1000 pcs", "5000 pcs", "10000 pcs"],
                ecoAttributes: ["100% Recyclable", "Biodegradable"],
                usage: ["Bakeries", "Medical Stores", "Grocery", "Street Food", "General Packaging"],
                features: ["Flat cover (no gusset)", "44 & 50 GSM options", "Budget-friendly", "Bulk pricing"],
                moq: "1000 pieces"
              },
              {
                id: "CB-NH002",
                name: "Brown Kraft Gusset Bag",
                description: "Brown kraft folding bag with gusset (depth) for bulkier items. Available in 44 GSM (Ordinary) and 50 GSM (Super DX). Perfect for food takeaway, retail, and gifting.",
                image: "product-images/paper-no-handle-gusset.png",
                sellerId: "ecoworld",
                basePrice: null,
                priceLabel: "₹289 – ₹1,592 / 1000 pcs",
                bulkPricing: true,
                variants: {
                  size: ["Small (10×4×22 cm)", "Medium (14×8×28 cm)", "Large (18×8×36 cm)", "Extra Large (22×9×49 cm)"],
                  gsm: ["44 GSM (Ordinary)", "50 GSM (Super DX)"]
                },
                priceTable: {
                  "Small (10×4×22 cm)|44 GSM (Ordinary)": 289,
                  "Small (10×4×22 cm)|50 GSM (Super DX)": 373,
                  "Medium (14×8×28 cm)|44 GSM (Ordinary)": 524,
                  "Medium (14×8×28 cm)|50 GSM (Super DX)": 671,
                  "Large (18×8×36 cm)|44 GSM (Ordinary)": 792,
                  "Large (18×8×36 cm)|50 GSM (Super DX)": 1027,
                  "Extra Large (22×9×49 cm)|44 GSM (Ordinary)": 1228,
                  "Extra Large (22×9×49 cm)|50 GSM (Super DX)": 1592
                },
                priceUnit: "per 1000 pcs",
                loadCapacity: "Medium Duty",
                packSize: ["1000 pcs", "5000 pcs", "10000 pcs"],
                ecoAttributes: ["100% Recyclable", "Biodegradable"],
                gstPercent: 18,
                transportPerUnit: 50,
                freeTransportAboveUnits: 10,
                usage: ["Food Takeaway", "Retail Stores", "Bakeries", "Restaurants", "Gifting"],
                features: ["Gusset (depth) for volume", "44 & 50 GSM options", "Flat bottom stands upright", "Bulk pricing"],
                moq: "1000 pieces"
              },
              {
                id: "CB-NH003",
                name: "White Cover (Flat)",
                description: "Clean white flat paper cover for pharmacies, sweet shops, and premium packaging. Available in 44 GSM.",
                image: "product-images/paper-no-handle-white-flat.png",
                sellerId: "ecoworld",
                basePrice: null,
                priceLabel: "₹151 – ₹397 / 1000 pcs",
                bulkPricing: true,
                badge: "Premium",
                variants: {
                  size: ["Small (7×12 cm)", "Medium (10×16 cm)", "Large (14×22 cm)"],
                  gsm: ["44 GSM"]
                },
                priceTable: {
                  "Small (7×12 cm)|44 GSM": 151,
                  "Medium (10×16 cm)|44 GSM": 229,
                  "Large (14×22 cm)|44 GSM": 397
                },
                priceUnit: "per 1000 pcs",
                loadCapacity: "Light Duty",
                packSize: ["1000 pcs", "5000 pcs"],
                ecoAttributes: ["100% Recyclable", "Biodegradable"],
                gstPercent: 18,
                transportPerUnit: 50,
                freeTransportAboveUnits: 10,
                usage: ["Pharmacies", "Sweet Shops", "Stationery", "Premium Retail"],
                features: ["White finish", "Clean professional look", "Flat cover", "Budget-friendly"],
                moq: "1000 pieces"
              }
            ]
          }
        ]
      },
      // ----- 2. Paper Cups -----
      {
        id: "paper-cups",
        name: "Paper Cups",
        description: "Single-use paper cups with food-safe lining for hot and cold beverages. 1 pack = 100 pcs.",
        image: "",
        products: [
          {
            id: "PPCU001",
            name: "Paper Cup – 90ml",
            description: "90ml paper cup ideal for espresso, cutting chai, and small beverages. Available in plain and printed variants. 1 unit = 1000 pieces.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹520 – ₹550 / 1000 pcs",
            bulkPricing: true,
            badge: "Best Seller",
            variants: {
              type: ["Plain", "Printed"]
            },
            priceTable: {
              "Plain": 520,
              "Printed": 550
            },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 30,
            freeTransportAboveUnits: 10,
            usage: ["Tea Stalls", "Offices", "Events", "Canteens"],
            features: ["Food-safe lining", "90ml capacity", "Plain & printed options"],
            moq: "1000 pieces"
          },
          {
            id: "PPCU002",
            name: "Paper Cup – 110ml",
            description: "110ml paper cup for tea, coffee, and small drinks. Available in plain and printed variants. 1 unit = 1000 pieces.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹800 – ₹830 / 1000 pcs",
            bulkPricing: true,
            variants: {
              type: ["Plain", "Printed"]
            },
            priceTable: {
              "Plain": 800,
              "Printed": 830
            },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 30,
            freeTransportAboveUnits: 10,
            usage: ["Tea Stalls", "Offices", "Cafés", "Events"],
            features: ["Food-safe lining", "110ml capacity", "Plain & printed options"],
            moq: "1000 pieces"
          },
          {
            id: "PPCU003",
            name: "Paper Cup – 210ml",
            description: "210ml paper cup for regular tea, coffee, and cold drinks. Available in plain and printed variants. 1 unit = 1000 pieces.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹1,000 – ₹1,030 / 1000 pcs",
            bulkPricing: true,
            variants: {
              type: ["Plain", "Printed"]
            },
            priceTable: {
              "Plain": 1000,
              "Printed": 1030
            },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 30,
            freeTransportAboveUnits: 10,
            usage: ["Juice Shops", "Canteens", "Events", "Offices"],
            features: ["Food-safe lining", "210ml capacity", "Plain & printed options"],
            moq: "1000 pieces"
          },
          {
            id: "PPCU004",
            name: "Paper Cup – 250ml",
            description: "250ml paper cup for large beverages, soups, and cold drinks. Available in plain and printed variants. 1 unit = 1000 pieces.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹1,250 – ₹1,280 / 1000 pcs",
            bulkPricing: true,
            variants: {
              type: ["Plain", "Printed"]
            },
            priceTable: {
              "Plain": 1250,
              "Printed": 1280
            },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 30,
            freeTransportAboveUnits: 10,
            usage: ["Cafés", "Restaurants", "Juice Shops", "Events"],
            features: ["Food-safe lining", "250ml capacity", "Plain & printed options"],
            moq: "1000 pieces"
          }
        ]
      },
      // ----- 3. Food Packaging -----
      {
        id: "food-packaging",
        name: "Food Packaging",
        description: "Eco-friendly food packaging boxes and containers for restaurants, cloud kitchens, and takeaway.",
        image: "",
        products: [
          {
            id: "PPFP001",
            name: "Paper Burger Box",
            description: "Clamshell-style paper burger box with secure closure. Food-grade, oil-resistant lining.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Coming Soon",
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
            id: "PPFP002",
            name: "Paper Meal Box",
            description: "Rectangular paper meal box for rice, biryani, and combo meals. Leak-resistant construction.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Coming Soon",
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
            id: "PPFP003",
            name: "Paper Takeaway Container",
            description: "Round/square paper containers with lids for soups, gravies, and wet food items.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Coming Soon",
            bulkPricing: true,
            variants: {
              capacity: ["250ml", "400ml", "500ml", "750ml"],
              shape: ["Round", "Square"],
              lid: ["Paper Lid", "No Lid"]
            },
            usage: ["Cloud Kitchens", "Delivery Apps", "Restaurants"],
            features: ["With/without lid", "Leak-proof", "Hot food safe"],
            moq: "500 pieces"
          },
          {
            id: "PPFP004",
            name: "Paper Popcorn Tub",
            description: "Paper tubs for popcorn, fries, and dry snacks. Available in fun printed designs.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Coming Soon",
            bulkPricing: true,
            variants: {
              capacity: ["32oz (Small)", "46oz (Medium)", "64oz (Large)", "85oz (Jumbo)"],
              type: ["Plain", "Printed", "Custom Branded"]
            },
            usage: ["Theatres", "Snack Bars", "Events", "Parties"],
            features: ["Grease-resistant", "Wide mouth", "Stackable"],
            moq: "500 pieces"
          }
        ]
      },
      // ----- 4. Tableware -----
      {
        id: "tableware",
        name: "Tableware",
        description: "Disposable paper plates, bowls, and trays for events, parties, and everyday use.",
        image: "",
        products: [
          {
            id: "PPTW001",
            name: "Paper Plate - Round",
            description: "Sturdy round paper plates for meals, snacks, and party use. Oil and water resistant.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Coming Soon",
            bulkPricing: true,
            variants: {
              size: ["6 inch", "7 inch", "9 inch", "10 inch", "12 inch"],
              type: ["Plain", "Compartment (2-section)", "Compartment (3-section)"]
            },
            usage: ["Parties", "Events", "Canteens", "Weddings"],
            features: ["Oil-resistant", "Microwave-safe", "Sturdy construction"],
            moq: "500 pieces"
          },
          {
            id: "PPTW002",
            name: "Paper Bowl",
            description: "Deep paper bowls for soups, ice cream, and snack items. Food-grade and oil-resistant.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Coming Soon",
            bulkPricing: true,
            variants: {
              capacity: ["180ml", "250ml", "350ml", "500ml"],
              type: ["Plain", "Printed", "With Lid"]
            },
            usage: ["Ice Cream Parlours", "Restaurants", "Street Food"],
            features: ["Oil-resistant", "Leak-proof base", "Lid options"],
            moq: "1000 pieces"
          },
          {
            id: "PPTW003",
            name: "Paper Tray",
            description: "Rectangular paper trays for serving snacks, chaat, and finger food. Ideal for food stalls.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Coming Soon",
            bulkPricing: true,
            variants: {
              size: ["Small (5x3 inch)", "Medium (7x5 inch)", "Large (9x6 inch)"],
              type: ["Plain", "Printed"]
            },
            usage: ["Food Stalls", "Chaat Counters", "Events", "Canteens"],
            features: ["Oil-resistant", "Flat base", "Stackable"],
            moq: "1000 pieces"
          }
        ]
      },
      // ----- 5. Wrapping Papers -----
      {
        id: "wrapping-papers",
        name: "Wrapping Papers",
        description: "Eco-friendly kraft and printed wrapping papers for gifts, food, and general packaging.",
        image: "",
        products: [
          {
            id: "PPWP001",
            name: "Kraft Wrapping Paper Roll",
            description: "Natural brown kraft paper roll for wrapping gifts, parcels, and products. Recyclable and biodegradable.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Coming Soon",
            bulkPricing: true,
            variants: {
              size: ["18 inch x 10m", "24 inch x 10m", "36 inch x 10m", "24 inch x 50m"],
              gsm: ["60 GSM", "80 GSM", "100 GSM"]
            },
            usage: ["Gift Wrapping", "Parcel Packaging", "Retail Stores"],
            features: ["Recyclable", "Tear-resistant", "Printable surface"],
            moq: "50 rolls"
          },
          {
            id: "PPWP002",
            name: "Printed Gift Wrapping Paper",
            description: "Eco-friendly printed wrapping paper with festive and floral patterns. Perfect for gifting.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Coming Soon",
            bulkPricing: true,
            variants: {
              size: ["20x30 inch", "24x36 inch"],
              design: ["Floral", "Festive", "Geometric", "Kids", "Custom"],
              gsm: ["60 GSM", "80 GSM"]
            },
            usage: ["Gifting", "Retail Stores", "Boutiques", "Festivals"],
            features: ["Eco-friendly ink", "Multiple designs", "Custom print available"],
            moq: "100 sheets"
          },
          {
            id: "PPWP003",
            name: "Food Wrapping Paper",
            description: "Food-grade paper for wrapping sandwiches, shawarma, rolls, and street food items.",
            image: "",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "Coming Soon",
            bulkPricing: true,
            variants: {
              size: ["10x10 inch", "12x12 inch", "14x14 inch"],
              type: ["Plain (Butter Paper)", "Printed", "Grease-Proof"],
              gsm: ["30 GSM", "40 GSM", "50 GSM"]
            },
            usage: ["Street Food", "Restaurants", "Bakeries", "Shawarma Shops"],
            features: ["Food-safe", "Grease-proof options", "Custom branding"],
            moq: "5 kg"
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
    description: "100% biodegradable and compostable products — carry bags, grocery bags, tiffin sheets, sambar pouches, and garbage bags. Eco-friendly alternatives that decompose naturally.",
    image: "product-images/biodegradable-profile.jpeg",
    subcategories: [
      // ----- 1. Biodegradable Carry Bags -----
      {
        id: "biodegradable-carry-bags",
        name: "Biodegradable Carry Bags",
        description: "Compostable carry bags available in all standard sizes. Choose Plain or Printed — stereo & design free on print orders. Minimum 30 kg per size.",
        image: "product-images/bio-carry-bags-profile.png",
        products: [
          {
            id: "BDCB001",
            name: "Biodegradable Carry Bag - Plain",
            description: "100% biodegradable and compostable carry bag. Available in 9 standard sizes plus customized sizing. Ideal for retail, grocery, and general-purpose use.",
            image: "product-images/bio-carry-plain-green.jpg",
            images: ["product-images/bio-carry-plain-green.jpg", "product-images/bio-carry-plain-black.jpg", "product-images/bio-carry-plain-pair.jpg", "product-images/bio-carry-plain-lifestyle.png"],
            sellerId: "ecoworld",
            basePrice: 179,
            unitWeight: 30,
            unitLabel: "kg",
            gstPercent: 18,
            transportPerKg: 6,
            freeTransportAboveKg: 100,
            priceLabel: "₹179 / kg (1 unit = 30 kg)",
            bulkPricing: true,
            variants: {
              size: ["8×10 inch", "9×13 inch", "10×12 inch", "10×14 inch", "13×16 inch", "16×20 inch", "17×23 inch", "20×24 inch", "24×30 inch", "Customized Size"],
              type: ["Plain"]
            },
            piecesPerKg: {
              "8×10 inch": 160,
              "9×13 inch": 145,
              "10×12 inch": 140,
              "10×14 inch": 115,
              "13×16 inch": 70,
              "16×20 inch": 40,
              "17×23 inch": 32,
              "20×24 inch": 20,
              "24×30 inch": 12
            },
            loadCapacity: "Varies by size",
            packSize: ["30 kg (per size)", "50 kg", "100 kg"],
            ecoAttributes: ["100% Biodegradable", "Compostable", "Plastic-Free"],
            usage: ["Retail Stores", "Grocery", "General Purpose", "Events"],
            features: ["All standard sizes available", "Customized size on request", "Decomposes naturally", "Food-safe"],
            moq: "30 kg per size",
            pricingNote: "₹179/kg — all sizes same rate. Minimum order: 30 kg per size (1 bag per size)."
          },
          {
            id: "BDCB002",
            name: "Biodegradable Carry Bag - Printed",
            description: "Custom printed biodegradable carry bag with your brand logo and design. Stereo (block) free + design free. Available in all standard sizes.",
            image: "product-images/bio-carry-printed-pullareddy.png",
            images: ["product-images/bio-carry-printed-pullareddy.png", "product-images/bio-carry-printed-sargam.png", "product-images/bio-carry-printed-benaras.png", "product-images/bio-carry-printed-sriuday.png"],
            sellerId: "ecoworld",
            basePrice: 225,
            unitWeight: 30,
            unitLabel: "kg",
            gstPercent: 18,
            transportPerKg: 6,
            freeTransportAboveKg: 100,
            minQty: 4,
            minQtyReason: "Minimum total order for printed bags is 100 kg (4 units × 30 kg)",
            priceLabel: "₹225 / kg (1 unit = 30 kg)",
            bulkPricing: true,
            badge: "Custom Print",
            variants: {
              size: ["8×10 inch", "9×13 inch", "10×12 inch", "10×14 inch", "13×16 inch", "16×20 inch", "17×23 inch", "20×24 inch", "24×30 inch", "Customized Size"],
              type: ["Printed"]
            },
            piecesPerKg: {
              "8×10 inch": 160,
              "9×13 inch": 145,
              "10×12 inch": 140,
              "10×14 inch": 115,
              "13×16 inch": 70,
              "16×20 inch": 40,
              "17×23 inch": 32,
              "20×24 inch": 20,
              "24×30 inch": 12
            },
            loadCapacity: "Varies by size",
            packSize: ["30 kg (per size)", "50 kg", "100 kg", "200 kg"],
            ecoAttributes: ["100% Biodegradable", "Compostable", "Plastic-Free", "Eco-Friendly Ink"],
            usage: ["Brand Packaging", "Retail Stores", "Restaurants", "Events", "Corporate"],
            features: ["Custom logo printing", "Stereo (block) FREE", "Design FREE", "All standard sizes", "Customized size on request"],
            moq: "30 kg per size, minimum total order 100 kg",
            pricingNote: "₹225/kg — includes free stereo + free design. Minimum: 30 kg per size AND total order must be 100+ kg."
          }
        ]
      },
      // ----- 2. Biodegradable Tiffin Sheets / Titter Sheets -----
      {
        id: "biodegradable-tiffin-sheets",
        name: "Biodegradable Tiffin / Titter Sheets",
        description: "Compostable tiffin wrapping sheets for packing meals, rotis, and tiffin items. A sustainable alternative to cling wrap.",
        image: "product-images/biodegradable-tiffin-sheet.jpg",
        products: [
          {
            id: "BDTS001",
            name: "Biodegradable Tiffin / Titter Sheet",
            description: "100% biodegradable tiffin sheet for wrapping meals, rotis, and tiffin boxes. Replaces plastic cling wrap. Food-safe and compostable.",
            image: "product-images/biodegradable-tiffin-sheet.jpg",
            sellerId: "ecoworld",
            basePrice: 179,
            unitWeight: 30,
            unitLabel: "kg",
            gstPercent: 18,
            transportPerKg: 6,
            freeTransportAboveKg: 100,
            priceLabel: "₹179 / kg (1 unit = 30 kg)",
            bulkPricing: true,
            variants: {
              size: ["9×9 inch", "10×10 inch", "11×11 inch", "Customized Size"],
              type: ["Plain"]
            },
            piecesPerKg: {
              "9×9 inch": 400,
              "10×10 inch": 350,
              "11×11 inch": 300
            },
            loadCapacity: "N/A",
            packSize: ["30 kg", "50 kg", "100 kg"],
            ecoAttributes: ["100% Biodegradable", "Compostable", "Plastic-Free", "Food-Safe"],
            usage: ["Tiffin Services", "Mess & Canteens", "Catering", "Home Kitchen"],
            features: ["Plain only", "Sold by weight", "Wraps meals securely", "No plastic residue"],
            moq: "30 kg",
            pricingNote: "₹179/kg. Minimum order: 30 kg."
          }
        ]
      },
      // ----- 3. Biodegradable Grocery Bags -----
      {
        id: "biodegradable-grocery-bags",
        name: "Biodegradable Grocery Bags",
        description: "Compostable grocery bags for packing fruits, vegetables, and daily essentials. Plain only, sold by weight.",
        image: "product-images/biodegradable-grocery-bag.jpg",
        products: [
          {
            id: "BDGR001",
            name: "Biodegradable Grocery Bag",
            description: "100% biodegradable grocery bag for packing fruits, vegetables, and daily essentials. Durable, compostable, and plastic-free.",
            image: "product-images/biodegradable-grocery-bag.jpg",
            sellerId: "ecoworld",
            basePrice: 179,
            unitWeight: 30,
            unitLabel: "kg",
            gstPercent: 18,
            transportPerKg: 6,
            freeTransportAboveKg: 100,
            priceLabel: "₹179 / kg (1 unit = 30 kg)",
            bulkPricing: true,
            badge: "Eco Friendly",
            variants: {
              size: ["5×8 inch", "6×9 inch", "7×10 inch", "8×12 inch", "9×15 inch", "10×17 inch", "13×20 inch", "Customized Size"],
              type: ["Plain"]
            },
            piecesPerKg: {
              "5×8 inch": 450,
              "6×9 inch": 250,
              "7×10 inch": 220,
              "8×12 inch": 180,
              "9×15 inch": 145,
              "10×17 inch": 110,
              "13×20 inch": 55
            },
            loadCapacity: "Varies by size",
            packSize: ["30 kg (per size)", "50 kg", "100 kg"],
            ecoAttributes: ["100% Biodegradable", "Compostable", "Plastic-Free"],
            usage: ["Grocery Stores", "Vegetable Markets", "Supermarkets", "Kirana Shops"],
            features: ["Plain only", "Sold by weight", "Decomposes naturally", "Food-safe"],
            moq: "30 kg per size",
            pricingNote: "₹179/kg — all sizes same rate. Minimum order: 30 kg per size."
          }
        ]
      },
      // ----- 4. Biodegradable Pouches -----
      {
        id: "biodegradable-pouches",
        name: "Biodegradable Pouches",
        description: "Compostable pouches for packing sambar, rasam, curry, and liquid food items. Leak-resistant and plastic-free.",
        image: "product-images/biodegradable-pouch.jpg",
        products: [
          {
            id: "BDSP001",
            name: "Biodegradable Pouch",
            description: "100% biodegradable pouch for packing sambar, rasam, dal, and other liquid/semi-liquid food items. Leak-resistant, compostable, and food-safe.",
            image: "product-images/biodegradable-pouch.jpg",
            sellerId: "ecoworld",
            basePrice: 179,
            unitWeight: 30,
            unitLabel: "kg",
            gstPercent: 18,
            transportPerKg: 6,
            freeTransportAboveKg: 100,
            priceLabel: "₹179 / kg (1 unit = 30 kg)",
            bulkPricing: true,
            variants: {
              size: ["4×6 inch", "4×7 inch", "5×6 inch", "5×7 inch", "6×8 inch", "6×9 inch", "Customized Size"],
              type: ["Plain"]
            },
            piecesPerKg: {
              "4×6 inch": 450,
              "4×7 inch": 420,
              "5×6 inch": 400,
              "5×7 inch": 370,
              "6×8 inch": 260,
              "6×9 inch": 230
            },
            loadCapacity: "N/A",
            packSize: ["30 kg", "50 kg", "100 kg"],
            ecoAttributes: ["100% Biodegradable", "Compostable", "Plastic-Free", "Food-Safe"],
            usage: ["Tiffin Services", "Mess & Canteens", "Catering", "Cloud Kitchens"],
            features: ["Plain only", "Sold by weight", "Leak-resistant", "Suitable for hot liquids", "Food-safe"],
            moq: "30 kg",
            pricingNote: "₹179/kg. Minimum order: 30 kg."
          }
        ]
      },
      // ----- 5. Biodegradable Garbage Bags -----
      {
        id: "biodegradable-garbage-bags",
        name: "Biodegradable Garbage Bags",
        description: "Compostable garbage bags in Black and Green. Ideal for wet & dry waste segregation, municipal use, and composting.",
        image: "product-images/biodegradable-garbage-bag.jpg",
        products: [
          {
            id: "BDGB001",
            name: "Biodegradable Garbage Bag",
            description: "100% biodegradable garbage bag for waste disposal. Available in Black and Green. Decomposes naturally in soil. Ideal for homes, offices, hotels, and municipal use.",
            image: "product-images/biodegradable-garbage-bag.jpg",
            sellerId: "ecoworld",
            basePrice: 179,
            unitWeight: 30,
            unitLabel: "kg",
            gstPercent: 18,
            transportPerKg: 6,
            freeTransportAboveKg: 100,
            priceLabel: "₹179 / kg (1 unit = 30 kg)",
            bulkPricing: true,
            badge: "Eco Friendly",
            variants: {
              size: ["17×19 inch", "19×21 inch", "24×32 inch", "35×45 inch", "Customized Size"],
              color: ["Black", "Green"],
              type: ["Plain"]
            },
            piecesPerKg: {
              "17×19 inch": 50,
              "19×21 inch": 40,
              "24×32 inch": 14,
              "35×45 inch": 7
            },
            loadCapacity: "Varies by size",
            packSize: ["30 kg (per size)", "50 kg", "100 kg"],
            ecoAttributes: ["100% Biodegradable", "Compostable", "Plastic-Free"],
            usage: ["Household", "Offices", "Hotels", "Municipal", "Hospitals"],
            features: ["Plain only", "Black & Green options", "Sold by weight", "Decomposes naturally", "Wet & dry waste safe"],
            moq: "30 kg per size",
            pricingNote: "₹179/kg — all sizes same rate. Minimum order: 30 kg per size."
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
            priceLabel: "Coming Soon",
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
            priceLabel: "Coming Soon",
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
            priceLabel: "Coming Soon",
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
            priceLabel: "Coming Soon",
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
    image: "product-images/areca-profile-1.jpeg",
    subcategories: [
      // --- 1. Round Bowls ---
      {
        id: "areca-round-bowls",
        name: "Areca Round Bowls",
        description: "Deep areca palm leaf bowls for curries, desserts, soups, and salads. Sturdy and leak-resistant.",
        image: "product-images/areca-round-bowl-5inch.png",
        products: [
          {
            id: "ARBW001",
            name: "Areca Round Bowl – 4 inch",
            description: "4 inch areca palm leaf round bowl. Ideal for small portions, desserts, and dips.",
            image: "product-images/areca-round-bowl-4inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹1,750 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 1750 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Home Parties"],
            features: ["4 inch", "Chemical-free", "Leak-resistant", "Natural texture"],
            moq: "1000 pieces"
          },
          {
            id: "ARBW002",
            name: "Areca Round Bowl – 4.5 inch",
            description: "4.5 inch areca palm leaf round bowl. Perfect for desserts, soups, and side dishes.",
            image: "product-images/areca-round-bowl-4.5inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹2,000 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 2000 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Home Parties"],
            features: ["4.5 inch", "Chemical-free", "Leak-resistant", "Natural texture"],
            moq: "1000 pieces"
          },
          {
            id: "ARBW004",
            name: "Areca Round Bowl – 5 inch",
            description: "5 inch areca palm leaf round bowl. Versatile size for side dishes, desserts, and curries.",
            image: "product-images/areca-round-bowl-5inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹2,100 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 2100 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Home Parties"],
            features: ["5 inch", "Chemical-free", "Leak-resistant", "Natural texture"],
            moq: "1000 pieces"
          },
          {
            id: "ARBW003",
            name: "Areca Round Bowl – 5.5 inch",
            description: "5.5 inch areca palm leaf round bowl. Great for curries, salads, and rice servings.",
            image: "product-images/areca-round-bowl-5.5inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹2,200 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 2200 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Home Parties", "Weddings"],
            features: ["5.5 inch", "Chemical-free", "Leak-resistant", "Natural texture"],
            moq: "1000 pieces"
          }
        ]
      },
      // --- 2. Round Plates ---
      {
        id: "areca-round-plates",
        name: "Areca Round Plates",
        description: "Classic round areca palm leaf plates with natural grain. Available in multiple sizes for all occasions.",
        image: "product-images/areca-round-plate-profile.png",
        products: [
          {
            id: "ARPL001",
            name: "Areca Round Plate – 5 inch",
            description: "5 inch areca round plate for snacks, starters, and small servings.",
            image: "product-images/areca-round-plate-5inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹2,000 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 2000 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Weddings"],
            features: ["5 inch", "Chemical-free", "Heat-resistant", "Natural grain"],
            moq: "1000 pieces"
          },
          {
            id: "ARPL002",
            name: "Areca Round Plate – 6 inch",
            description: "6 inch areca round plate for starters, side dishes, and snack servings.",
            image: "product-images/areca-round-plate-6inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹2,250 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 2250 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Weddings"],
            features: ["6 inch", "Chemical-free", "Heat-resistant", "Natural grain"],
            moq: "1000 pieces"
          },
          {
            id: "ARPL003",
            name: "Areca Round Plate – 7 inch",
            description: "7 inch areca round plate for regular meals and catering use.",
            image: "product-images/areca-round-plate-7inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹3,250 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 3250 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Weddings", "Restaurants"],
            features: ["7 inch", "Chemical-free", "Heat-resistant", "Natural grain"],
            moq: "1000 pieces"
          },
          {
            id: "ARPL004",
            name: "Areca Round Plate – 8 inch",
            description: "8 inch areca round plate. Popular size for meals and buffet service.",
            image: "product-images/areca-round-plate-8inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹3,750 / 1000 pcs",
            bulkPricing: true,
            badge: "Best Seller",
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 3750 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Weddings", "Restaurants"],
            features: ["8 inch", "Chemical-free", "Heat-resistant", "Natural grain"],
            moq: "1000 pieces"
          },
          {
            id: "ARPL005",
            name: "Areca Round Plate – 10 inch",
            description: "10 inch areca round plate for full meals, weddings, and premium catering.",
            image: "product-images/areca-round-plate-10inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹6,000 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 6000 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Weddings", "Premium Catering", "Eco Resorts"],
            features: ["10 inch", "Chemical-free", "Heat-resistant", "Natural grain"],
            moq: "1000 pieces"
          },
          {
            id: "ARPL006",
            name: "Areca Round Plate – 12 inch",
            description: "12 inch large areca round plate for full thali meals and premium events.",
            image: "product-images/areca-round-plate-10inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹7,000 / 1000 pcs",
            bulkPricing: true,
            badge: "Premium",
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 7000 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Weddings", "Grand Events", "Premium Catering"],
            features: ["12 inch", "Chemical-free", "Heat-resistant", "Natural grain"],
            moq: "1000 pieces"
          }
        ]
      },
      // --- 3. Shallow Round Plates ---
      {
        id: "areca-shallow-round",
        name: "Areca Shallow Round Plates",
        description: "Flat shallow areca palm leaf plates. Great for dry snacks, starters, and light meals.",
        image: "product-images/areca-shallow-plate-profile.png",
        products: [
          {
            id: "ARSR001",
            name: "Areca Shallow Round Plate – 6 inch",
            description: "6 inch shallow round areca plate for snacks and starters.",
            image: "product-images/areca-shallow-plate-6inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹3,150 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 3150 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Parties"],
            features: ["6 inch", "Shallow design", "Chemical-free"],
            moq: "1000 pieces"
          },
          {
            id: "ARSR002",
            name: "Areca Shallow Round Plate – 7 inch",
            description: "7 inch shallow round areca plate for starters and light meals.",
            image: "product-images/areca-shallow-plate-7inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹4,500 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 4500 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Parties"],
            features: ["7 inch", "Shallow design", "Chemical-free"],
            moq: "1000 pieces"
          },
          {
            id: "ARSR003",
            name: "Areca Shallow Round Plate – 8 inch",
            description: "8 inch shallow round areca plate for meals and catering.",
            image: "product-images/areca-shallow-plate-8inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹4,000 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 4000 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Weddings"],
            features: ["8 inch", "Shallow design", "Chemical-free"],
            moq: "1000 pieces"
          },
          {
            id: "ARSR004",
            name: "Areca Shallow Round Plate – 9 inch",
            description: "9 inch shallow round areca plate for meals and buffets.",
            image: "product-images/areca-shallow-plate-9inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹2,150 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 2150 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Weddings"],
            features: ["9 inch", "Shallow design", "Chemical-free"],
            moq: "1000 pieces"
          },
          {
            id: "ARSR005",
            name: "Areca Shallow Round Plate – 10 inch",
            description: "10 inch shallow round areca plate for full meals and premium events.",
            image: "product-images/areca-shallow-plate-9inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹5,300 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 5300 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Weddings", "Premium Catering", "Grand Events"],
            features: ["10 inch", "Shallow design", "Chemical-free"],
            moq: "1000 pieces"
          }
        ]
      },
      // --- 4. Shallow Square Flat Plates ---
      {
        id: "areca-square-plates",
        name: "Areca Square Flat Plates",
        description: "Modern square areca palm leaf plates for stylish presentation at events and buffets.",
        image: "product-images/areca-square-plate-8inch.png",
        products: [
          {
            id: "ARSQ001",
            name: "Areca Square Plate – 4 inch",
            description: "4 inch square areca plate for small servings, desserts, and tasting portions.",
            image: "product-images/areca-square-plate-4inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹1,850 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 1850 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Dessert Counters"],
            features: ["4 inch", "Square design", "Chemical-free"],
            moq: "1000 pieces"
          },
          {
            id: "ARSQ002",
            name: "Areca Square Plate – 6 inch",
            description: "6 inch square areca plate for starters and snack servings.",
            image: "product-images/areca-square-plate-6inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹2,950 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 2950 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Buffets"],
            features: ["6 inch", "Square design", "Chemical-free"],
            moq: "1000 pieces"
          },
          {
            id: "ARSQ003",
            name: "Areca Square Plate – 7 inch",
            description: "7 inch square areca plate for regular meals.",
            image: "product-images/areca-square-plate-7inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹3,500 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 3500 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Restaurants"],
            features: ["7 inch", "Square design", "Chemical-free"],
            moq: "1000 pieces"
          },
          {
            id: "ARSQ004",
            name: "Areca Square Plate – 8 inch",
            description: "8 inch square areca plate for meals and buffets.",
            image: "product-images/areca-square-plate-8inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹4,750 / 1000 pcs",
            bulkPricing: true,
            badge: "Best Seller",
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 4750 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Weddings", "Buffets"],
            features: ["8 inch", "Square design", "Chemical-free"],
            moq: "1000 pieces"
          },
          {
            id: "ARSQ005",
            name: "Areca Square Plate – 9 inch",
            description: "9 inch square areca plate for full meals and premium service.",
            image: "product-images/areca-square-plate-9inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹5,200 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 5200 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Weddings", "Corporate Events", "Premium Dining"],
            features: ["9 inch", "Square design", "Chemical-free"],
            moq: "1000 pieces"
          },
          {
            id: "ARSQ006",
            name: "Areca Square Plate – 10 inch",
            description: "10 inch large square areca plate for full thali and grand events.",
            image: "product-images/areca-square-plate-10inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹6,100 / 1000 pcs",
            bulkPricing: true,
            badge: "Premium",
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 6100 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Weddings", "Grand Events", "Premium Catering"],
            features: ["10 inch", "Square design", "Chemical-free"],
            moq: "1000 pieces"
          }
        ]
      },
      // --- 5. Trays & Compartment Plates ---
      {
        id: "areca-trays",
        name: "Areca Trays & Compartment Plates",
        description: "Rectangle trays and multi-compartment areca plates for thali-style meals and buffet service.",
        image: "product-images/areca-4-compartment-plate.png",
        products: [
          {
            id: "ARTR001",
            name: "Areca Rectangle Tray – 9×6 inch",
            description: "9×6 inch rectangle areca tray for snacks, starters, and combo meals.",
            image: "product-images/areca-rectangle-tray.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹4,500 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 4500 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Restaurants"],
            features: ["9×6 inch", "Rectangle shape", "Chemical-free"],
            moq: "1000 pieces"
          },
          {
            id: "ARTR002",
            name: "Areca 4-Compartment Round Plate – 12 inch",
            description: "12 inch round areca plate with 4 compartments. Perfect for full thali meals at weddings and events.",
            image: "product-images/areca-4-compartment-plate.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹8,000 / 1000 pcs",
            bulkPricing: true,
            badge: "Premium",
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 8000 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Weddings", "Grand Events", "Thali Meals"],
            features: ["12 inch", "4 compartments", "Full meal plate", "Chemical-free"],
            moq: "1000 pieces"
          },
          {
            id: "ARTR003",
            name: "Areca 3-Compartment Round Plate – 10 inch",
            description: "10 inch round areca plate with 3 compartments for meals with sides.",
            image: "product-images/areca-3-compartment-plate.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹7,000 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 7000 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "School Canteens"],
            features: ["10 inch", "3 compartments", "Keeps food separated", "Chemical-free"],
            moq: "1000 pieces"
          }
        ]
      },
      // --- 6. Square Bowl & Accessories ---
      {
        id: "areca-accessories",
        name: "Areca Bowls & Accessories",
        description: "Square bowls and wooden cutlery (spoons & forks) to complement your areca tableware set.",
        image: "product-images/wooden-cutlery.jpg",
        products: [
          {
            id: "ARSB001",
            name: "Areca Square Bowl – 4 inch",
            description: "4 inch square areca bowl for dips, chutneys, desserts, and small portions.",
            image: "product-images/areca-square-plate-4inch.png",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹2,050 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 2050 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Dessert Counters"],
            features: ["4 inch", "Square shape", "Chemical-free", "Leak-resistant"],
            moq: "1000 pieces"
          },
          {
            id: "ARWS001",
            name: "Wooden Spoon",
            description: "Eco-friendly wooden spoon. Pairs perfectly with areca bowls and plates.",
            image: "product-images/wooden-cutlery.jpg",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹1,450 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 1450 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Ice Cream Parlours"],
            features: ["Biodegradable", "Smooth finish", "Food-safe"],
            moq: "1000 pieces"
          },
          {
            id: "ARWF001",
            name: "Wooden Fork",
            description: "Eco-friendly wooden fork. Perfect companion to wooden spoons for full cutlery sets.",
            image: "product-images/wooden-cutlery.jpg",
            sellerId: "ecoworld",
            basePrice: null,
            priceLabel: "₹1,450 / 1000 pcs",
            bulkPricing: true,
            variants: { type: ["Standard"] },
            priceTable: { "Standard": 1450 },
            priceUnit: "per 1000 pcs",
            gstPercent: 18,
            transportPerUnit: 35,
            freeTransportAboveUnits: 10,
            usage: ["Events", "Catering", "Takeaway", "Outdoor Dining"],
            features: ["Biodegradable", "Smooth finish", "Food-safe", "Sturdy prongs"],
            moq: "1000 pieces"
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
            priceLabel: "Coming Soon",
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
            priceLabel: "Coming Soon",
            bulkPricing: true,
            variants: {
              size: ["4x5 inch", "6x8 inch", "8x10 inch"],
              closure: ["Drawstring", "Button", "Zip"],
              print: ["Plain", "Printed", "Embroidered"]
            },
            usage: ["Return Gifts", "Jewelry", "Dry Fruits", "Cosmetics"],
            features: ["Elegant look", "Reusable", "Custom print available"],
            moq: "1000 pieces"
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
            priceLabel: "Coming Soon",
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
            priceLabel: "Coming Soon",
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
            priceLabel: "Coming Soon",
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
            priceLabel: "Coming Soon",
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
            priceLabel: "Coming Soon",
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
            priceLabel: "Coming Soon",
            bulkPricing: true,
            variants: {
              size: ["5x7 inch", "8x10 inch", "10x12 inch", "12x14 inch"],
              closure: ["Drawstring", "Zip"],
              fabric: ["Muslin", "Cotton Canvas"]
            },
            usage: ["Gifting", "Travel", "Storage", "Wedding Favors"],
            features: ["Lightweight", "Washable", "Natural fabric", "Print-ready"],
            moq: "1000 pieces"
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
            priceLabel: "Coming Soon",
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

function getSubSubcategoryById(catId, subId, subsubId) {
  const sub = getSubcategoryById(catId, subId);
  if (!sub || !sub.subcategories) return null;
  return sub.subcategories.find(s => s.id === subsubId) || null;
}

// Count products in a subcategory (handles nesting)
function countProducts(sub) {
  if (sub.products) return sub.products.length;
  if (sub.subcategories) return sub.subcategories.reduce((sum, s) => sum + (s.products ? s.products.length : 0), 0);
  return 0;
}

function getProductById(productId) {
  for (const cat of CATALOG) {
    for (const sub of cat.subcategories) {
      if (sub.products) {
        const product = sub.products.find(p => p.id === productId);
        if (product) return { product, subcategory: sub, category: cat };
      }
      if (sub.subcategories) {
        for (const subsub of sub.subcategories) {
          const product = subsub.products.find(p => p.id === productId);
          if (product) return { product, subcategory: subsub, parentSubcategory: sub, category: cat };
        }
      }
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
