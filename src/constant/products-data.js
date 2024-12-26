import cottonTshirtThumbnail from "../assets/images/products/classic-cotton-tshirt.jpg";
import cottonTshirt1 from "../assets/images/products/cotton-tshirt-1.jpg";
import cottonTshirt2 from "../assets/images/products/cotton-tshirt-2.jpg";
import slimFitJeansThumbnail from "../assets/images/products/slim-fit-jeans.jpg";
import slimFitJeans1 from "../assets/images/products/slim-fit-jeans-1.jpg";
import slimFitJeans2 from "../assets/images/products/slim-fit-jeans-2.jpg";
import leatherSneakers from "../assets/images/products/leather-sneakers.jpg";
import leatherSneakers1 from "../assets/images/products/leather-sneakers-1.webp";
import woolBlendSweaterThumbnail from "../assets/images/products/wool-blend-sweater.jpg";
import woolBlendSweater1 from "../assets/images/products/wool-blend-sweater-1.jpg";
import woolBlendSweater2 from "../assets/images/products/wool-blend-sweater-2.jpg";
import canvasBackpackThumbnail from "../assets/images/products/canvas-men-backpack.webp";
import canvasBackpack1 from "../assets/images/products/canvas-men-backpack-1.jpg";
import canvasBackpack2 from "../assets/images/products/canvas-men-backpack-2.jpg";
import wirelessHeadphonesThumbnail from "../assets/images/products/wireless-headphones.jpg";
import wirelessHeadphones1 from "../assets/images/products/wireless-headphones-1.jpg";

export const products = [
  {
    id: "p001",
    name: "Classic Cotton T-Shirt",
    description:
      "Experience unparalleled comfort with our premium cotton crew neck t-shirt, crafted from the finest long-staple cotton fibers. The relaxed fit and reinforced stitching ensure both style and durability, making it a perfect addition to your everyday wardrobe. The breathable fabric maintains its shape and color even after multiple washes.\n\nDesigned with versatility in mind, this t-shirt features a classic crew neckline that suits all body types and occasions. The carefully constructed shoulder seams and tailored sleeves provide enhanced mobility without compromising on style. The premium cotton blend offers superior moisture-wicking properties, keeping you cool and comfortable throughout the day.\n\nSustainably sourced and ethically manufactured, this t-shirt represents our commitment to quality and environmental responsibility. The reinforced collar maintains its shape over time, while the carefully calibrated weight of the fabric ensures year-round comfort. Whether paired with jeans for a casual look or layered under a blazer for a more polished appearance, this t-shirt is an essential foundation for any wardrobe.",
    price: 29.99,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy", "Heather Gray"],
    slug: "classic-cotton-t-shirt",
    thumbnail: cottonTshirtThumbnail,
    images: [cottonTshirt1, cottonTshirt2],
  },
  {
    id: "p002",
    name: "Slim Fit Denim Jeans",
    description:
      "Introducing our signature slim fit jeans, where classic denim meets contemporary design. Crafted from premium stretch denim sourced from the finest mills, these jeans offer the perfect balance of comfort and style. The carefully considered mid-rise waist and tapered leg create a modern silhouette that flatters all body types.\n\nThe innovative stretch technology woven into every fiber allows for unprecedented mobility while maintaining the jean's shape throughout the day. Our unique washing process creates subtle variations in the denim's character, ensuring that each pair tells its own story. The reinforced stitching at stress points guarantees longevity, while the classic five-pocket design provides practical functionality.\n\nThese jeans feature our proprietary comfort-band waistband that moves with you throughout the day. The premium copper hardware and detailed finishing touches reflect our commitment to quality craftsmanship. Each pair undergoes a rigorous quality control process, ensuring that they meet our exacting standards for both style and durability.",
    price: 79.99,
    sizes: ["28x30", "30x30", "32x30", "34x30", "36x30"],
    colors: ["Dark Blue", "Light Blue", "Black", "Gray"],
    slug: "slim-fit-denim-jeans",
    thumbnail: slimFitJeansThumbnail,
    images: [slimFitJeans1, slimFitJeans2],
  },
  {
    id: "p003",
    name: "Leather Sneakers",
    description:
      "Step into luxury with our handcrafted leather sneakers, where timeless design meets modern comfort. Each pair is meticulously constructed using premium full-grain leather, selected for its superior quality and natural beauty. The sleek silhouette is complemented by our innovative cushioning system, providing unprecedented comfort for all-day wear.\n\nThe anatomically designed footbed features multiple layers of cushioning, including our proprietary memory foam technology that molds to your unique foot shape. The breathable leather lining and perforated insole work in harmony to maintain optimal temperature control, while the padded collar provides additional ankle support and prevents friction.\n\nOur artisanal approach to sneaker construction is evident in every detail, from the precision stitching to the hand-finished leather edges. The durable rubber outsole is engineered with our specialized grip pattern, offering superior traction in various conditions. These sneakers represent the perfect fusion of casual style and sophisticated craftsmanship, making them versatile enough for any occasion.",
    price: 129.99,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Brown", "Navy"],
    slug: "leather-sneakers",
    thumbnail: leatherSneakers,
    images: [leatherSneakers1],
  },
  {
    id: "p004",
    name: "Wool Blend Sweater",
    description:
      "Embrace luxurious warmth with our meticulously crafted wool blend sweater, designed to elevate your cold-weather wardrobe. The carefully selected merino wool and premium synthetic fiber blend creates a perfect balance of warmth, durability, and easy care. Each sweater is knitted using advanced techniques that ensure consistent quality and superior comfort.\n\nOur innovative knitting process creates a unique texture that adds visual interest while maintaining a sophisticated appearance. The ribbed cuffs and hem are engineered to retain their shape, while the reinforced shoulder seams ensure longevity. The natural properties of merino wool provide excellent temperature regulation and moisture-wicking capabilities, making this sweater perfect for varying conditions.\n\nThe versatile design features a classic silhouette that can be dressed up or down for any occasion. Special attention has been paid to the neckline construction, ensuring comfortable wear whether layered or worn alone. The sweater undergoes a special treatment process that minimizes pilling and maintains its luxurious feel wash after wash.",
    price: 89.99,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal", "Navy", "Burgundy", "Cream"],
    slug: "wool-blend-sweater",
    thumbnail: woolBlendSweaterThumbnail,
    images: [woolBlendSweater1, woolBlendSweater2],
  },
  {
    id: "p005",
    name: "Canvas Backpack",
    description:
      "Meet your perfect everyday companion, our meticulously designed canvas backpack that combines rugged durability with sophisticated style. Crafted from heavy-duty water-resistant canvas and accented with full-grain leather trim, this backpack is built to withstand the demands of daily use while maintaining its aesthetic appeal. The thoughtfully designed compartments provide optimal organization for all your essentials.\n\nThe main compartment features a padded laptop sleeve that accommodates devices up to 15 inches, while multiple internal pockets keep smaller items organized and easily accessible. The ergonomic back panel is padded with breathable mesh material, ensuring comfort during extended wear. The adjustable shoulder straps are reinforced with high-density foam and feature our proprietary weight distribution system.\n\nEvery detail has been considered, from the water-resistant zippers to the reinforced base panel that provides additional protection and structure. The side water bottle pockets are elasticated for secure storage, while the quick-access top pocket is perfect for frequently used items. The backpack's design includes a luggage pass-through strap, making it ideal for travel, while the internal key clip and hidden security pocket provide peace of mind for valuable items.",
    price: 59.99,
    sizes: [],
    colors: ["Olive", "Black", "Navy", "Brown"],
    slug: "canvas-backpack",
    thumbnail: canvasBackpackThumbnail,
    images: [canvasBackpack1, canvasBackpack2],
  },
  {
    id: "p006",
    name: "Wireless Noise-Canceling Headphones",
    description:
      "Immerse yourself in pure audio excellence with our premium wireless noise-canceling headphones. Engineered with cutting-edge acoustic technology, these headphones deliver an unparalleled listening experience that transforms how you experience your favorite music. The advanced 40mm dynamic drivers produce crisp highs, rich mids, and deep, resonant bass that brings your music to life.\n\nOur proprietary active noise cancellation technology uses advanced algorithms and multiple microphones to analyze and eliminate ambient noise, creating a personal sanctuary of sound. The premium memory foam ear cushions are wrapped in soft protein leather, providing hours of comfortable wear while creating an optimal seal for superior sound isolation. The adjustable headband is reinforced with lightweight aluminum, ensuring durability without adding unnecessary weight.\n\nFeaturing Bluetooth 5.0 technology, these headphones maintain a stable connection up to 33 feet and support multiple device pairing. The intuitive touch controls allow easy management of music, calls, and voice assistant access. With up to 30 hours of battery life and quick-charging capability that provides 5 hours of playback from just 10 minutes of charging, these headphones are perfect for long listening sessions and travel.",
    price: 299.99,
    sizes: [],
    colors: ["Matte Black", "Silver", "Midnight Blue", "Rose Gold"],
    slug: "wireless-noise-canceling-headphones",
    thumbnail: wirelessHeadphonesThumbnail,
    images: [wirelessHeadphones1],
  },
  {
    id: "p007",
    name: "Smart Fitness Watch",
    description:
      "Transform your fitness journey with our advanced smart fitness watch, a perfect blend of sophisticated technology and athletic functionality. This comprehensive health companion features our most advanced heart rate monitoring system, using multiple sensors to provide accurate, real-time heart rate data and advanced sleep tracking capabilities. The bright, always-on AMOLED display offers crystal clear visibility in any lighting condition.\n\nEquipped with built-in GPS and 20+ sport modes, this watch precisely tracks your outdoor activities and workout metrics. The advanced motion sensors provide detailed analysis of your running form, swimming technique, and other exercise patterns. The watch also monitors blood oxygen levels, stress levels, and provides guided breathing exercises to help maintain your overall wellness throughout the day.\n\nThe durable yet lightweight design features a scratch-resistant glass screen and water resistance up to 50 meters. The intuitive interface allows easy access to smartphone notifications, weather updates, and music controls. With up to 7 days of battery life in smart mode and 14 days in basic watch mode, this fitness companion keeps up with your active lifestyle without frequent charging needs.",
    price: 249.99,
    sizes: [],
    colors: ["Black", "Silver", "Rose Gold", "Midnight Green"],
    slug: "smart-fitness-watch",
    thumbnail: "",
    images: [],
  },
  {
    id: "p008",
    name: "Professional Chef's Knife",
    description:
      "Elevate your culinary experience with our professional-grade chef's knife, crafted for both home cooking enthusiasts and professional chefs. The blade is forged from high-carbon German steel, precisely heat-treated to achieve the perfect balance of sharpness retention and durability. The full-tang construction ensures optimal balance and control during use, while the ergonomic handle design reduces fatigue during extended prep sessions.\n\nThe carefully considered blade geometry features a gentle curve that promotes the efficient rocking motion essential for precise cutting techniques. The hand-honed edge is sharpened to a 15-degree angle on each side, providing exceptional sharpness for clean, precise cuts through various ingredients. The dimpled blade surface prevents food from sticking, making food preparation more efficient and enjoyable.\n\nThe handle is crafted from premium G10 material, known for its durability and resistance to heat and moisture. The ergonomic design features subtle finger contours that provide a secure, comfortable grip in any cutting position. Each knife undergoes rigorous quality control testing to ensure it meets our exacting standards for balance, edge retention, and overall performance.",
    price: 149.99,
    sizes: [],
    colors: ["Stainless Steel"],
    slug: "professional-chefs-knife",
    thumbnail: "",
    images: [],
  },
  {
    id: "p009",
    name: "Organic Cotton Bedding Set",
    description:
      "Transform your bedroom into a luxurious retreat with our premium organic cotton bedding set. Crafted from 100% GOTS-certified organic cotton, grown without harmful pesticides or chemicals, this bedding sets a new standard for sustainable luxury. The long-staple cotton fibers are carefully selected and woven into a 400 thread count sateen weave, creating a silky-smooth surface that gets softer with each wash.\n\nOur innovative weaving process creates a fabric that strikes the perfect balance between breathability and warmth, making it suitable for year-round use. The fitted sheet features our signature deep pocket design with elastic all around, ensuring a secure fit on mattresses up to 18 inches deep. The pillowcases include our unique envelope closure that keeps pillows neatly tucked away, while the duvet cover features hidden button closures and interior corner ties.\n\nEach set is pre-washed using our special softening process, eliminating the initial stiffness common in new bedding while maintaining the fabric's natural properties. The bedding is OEKO-TEX Standard 100 certified, ensuring it's free from harmful substances and safe for sensitive skin. The precise stitching and reinforced edges guarantee long-lasting durability, while the classic design complements any bedroom décor.",
    price: 199.99,
    sizes: ["Twin", "Full", "Queen", "King", "California King"],
    colors: ["White", "Ivory", "Gray", "Sage", "Navy"],
    slug: "organic-cotton-bedding-set",
    thumbnail: "",
    images: [],
  },
  {
    id: "p010",
    name: "Professional Yoga Mat",
    description:
      "Experience ultimate stability and comfort in your yoga practice with our professional-grade yoga mat. Engineered with our innovative dual-layer technology, this mat features a natural rubber base for superior grip and stability, topped with a moisture-wicking, antimicrobial surface layer that ensures hygienic practice sessions. The carefully calibrated 5mm thickness provides ideal cushioning for joints while maintaining the ground connection essential for balance poses.\n\nOur proprietary cell-structure technology creates a surface texture that enhances grip as you sweat, preventing slipping during intense sessions. The alignment marks subtly integrated into the design help practitioners maintain proper position and form throughout their practice. The closed-cell surface prevents moisture from seeping into the mat, making it easy to clean and maintaining its fresh appearance over time.\n\nThe mat is manufactured using eco-friendly processes and materials, free from harmful chemicals and toxins. The edges are heat-sealed to prevent peeling or fraying, ensuring long-lasting durability. At 71 inches long and 26 inches wide, this mat provides ample space for all yoga styles and body types. The included carrying strap and antimicrobial carrying bag make transportation and storage convenient and hygienic.",
    price: 89.99,
    sizes: [],
    colors: [
      "Deep Purple",
      "Ocean Blue",
      "Forest Green",
      "Slate Gray",
      "Black",
    ],
    slug: "professional-yoga-mat",
    thumbnail: "",
    images: [],
  },
  {
    id: "p011",
    name: "Artisan Coffee Maker",
    description:
      "Elevate your morning ritual with our precision-engineered artisan coffee maker, designed to extract the perfect cup of coffee every time. This sophisticated brewing system combines traditional pour-over principles with modern temperature control technology, ensuring optimal extraction at the ideal temperature range of 195-205°F. The custom water flow pattern mimics the motion of an experienced barista's pour, creating even saturation of the coffee grounds.\n\nThe thermal carafe is constructed with double-wall vacuum insulation, maintaining your coffee's temperature for hours without additional heating that could compromise flavor. The programmable brew settings allow you to customize every aspect of the brewing process, from bloom time to water flow rate, enabling you to perfect your preferred brewing method. The intuitive LCD display provides real-time feedback on water temperature, brewing phase, and timing.\n\nCrafted with premium materials, including a stainless steel water reservoir and BPA-free components, this coffee maker is built to last. The removable parts are dishwasher safe for easy cleaning, while the reusable filter eliminates the need for paper filters. The compact footprint maximizes counter space without compromising on capacity, brewing up to 8 cups of coffee in a single cycle.",
    price: 279.99,
    sizes: [],
    colors: ["Stainless Steel", "Matte Black", "Copper"],
    slug: "artisan-coffee-maker",
    thumbnail: "",
    images: [],
  },
  {
    id: "p012",
    name: "Smart Home Security Camera",
    description:
      "Secure your home with our cutting-edge smart security camera system, featuring advanced AI-powered motion detection and 4K HDR video quality. The revolutionary night vision technology utilizes infrared sensors and advanced image processing to provide crystal-clear footage even in complete darkness, ensuring round-the-clock protection for your home.\n\nEquipped with advanced facial recognition algorithms and customizable motion zones, this camera system intelligently distinguishes between familiar faces and potential security threats. The two-way audio system features noise cancellation technology, allowing clear communication through the camera while filtering out ambient noise. The weatherproof design withstands extreme temperatures and harsh weather conditions.\n\nThe intuitive mobile app provides real-time alerts and live streaming capabilities, with encrypted cloud storage ensuring your footage remains private and secure. The advanced compression technology optimizes video quality while minimizing storage space and bandwidth usage. Installation is seamless with both wireless and wired options available, while the magnetic mount allows for easy adjustment and positioning.",
    price: 199.99,
    sizes: [],
    colors: ["White", "Black"],
    slug: "smart-home-security-camera",
    thumbnail: "",
    images: [],
  },
  {
    id: "p013",
    name: "Ergonomic Office Chair",
    description:
      "Transform your workspace with our premium ergonomic office chair, engineered to provide exceptional comfort and support during long working hours. The adaptive mesh backrest features dynamic lumbar support that automatically adjusts to your movements, while the carefully contoured seat cushion distributes weight evenly to prevent pressure points and promote healthy circulation.\n\nThe chair's advanced synchronous tilt mechanism provides smooth, balanced movement, automatically adjusting the recline tension based on your body weight. The height-adjustable armrests feature soft-touch padding and can be positioned in multiple directions to support various working positions. The breathable mesh material promotes airflow, keeping you cool and comfortable throughout the day.\n\nThe robust aluminum base and premium casters ensure stability and smooth movement on various floor surfaces. Every adjustment point is designed for intuitive operation, allowing you to fine-tune your seating position without interrupting your workflow. The chair's components exceed BIFMA standards for durability and safety, backed by our comprehensive warranty.",
    price: 499.99,
    sizes: [],
    colors: ["Black", "Gray", "Navy"],
    slug: "ergonomic-office-chair",
    thumbnail: "",
    images: [],
  },
  {
    id: "p014",
    name: "Titanium Travel Mug",
    description:
      "Meet the ultimate companion for your daily adventures – our premium titanium travel mug, engineered for unmatched temperature retention and durability. The double-wall vacuum insulation technology maintains hot beverages at optimal temperature for up to 12 hours and keeps cold drinks chilled for up to 24 hours. The proprietary sealing mechanism ensures a completely leakproof experience, while the one-handed operation makes it perfect for on-the-go use.\n\nCrafted from aerospace-grade titanium, this mug offers exceptional durability while remaining surprisingly lightweight. The interior features our innovative ceramic coating, preserving the pure taste of your beverages without any metallic aftertaste. The ergonomic design includes a non-slip grip pattern and fits standard cup holders, making it perfect for commuting.\n\nThe lid mechanism is designed for easy cleaning and includes a built-in tea filter for loose leaf brewing. Every component is dishwasher safe and engineered to withstand years of daily use. The exterior features a scratch-resistant finish that maintains its pristine appearance despite active use.",
    price: 79.99,
    sizes: [],
    colors: ["Brushed Titanium", "Matte Black", "Ocean Blue"],
    slug: "titanium-travel-mug",
    thumbnail: "",
    images: [],
  },
];
