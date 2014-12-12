if (Meteor.isServer) {
  /**
   * Mongodb Item seeds
   */

  var // variable declarations
  AuctionItemSeeds = {
    item_1: {
      _id: "1",
      user_id: "ax20",
      title: "PS4 controller",
      description: "The DUALSHOCK 4 wireless controller features familiar controls while incorporating new ways to interact with games and other players. Improved dual analog sticks and trigger buttons offer an even greater sense of control, while the capacitive touch pad opens up endless potential for new gameplay possibilities. Experience the evolution of play with the DUALSHOCK 4 wireless controller.",
      condition: "New",
      includes: ["item", "box", "manual"],
      features: [
        "Precision Control: The feel, shape, and sensitivity of the DualShock 4’s analog sticks and trigger buttons have been enhanced to offer players absolute control for all games on PlayStation 4.",
        "Charge Efficiently: The DualShock 4 Wireless Controller can easily be recharged by plugging it into your PlayStation 4 system, even when on standby, or with any standard charger with a micro-USB port.",
        "New ways to Play: Revolutionary features like the touch pad, integrated light bar, and built-in speaker offer exciting new ways to experience and interact with your games and its 3.5mm audio jack offers a practical personal audio solution for gamers who want to listen to their games in private.",
        "Sharing at your Fingertips: The addition of the Share button makes sharing your greatest gaming moments as easy as a push of a button. Upload gameplay videos and screenshots directly from your system or live-stream your gameplay, all without disturbing the game in progress."
      ],
      details: {
       one: "1",
        two: "2",
        three: "3"
      },
      msrp: 49.99,
      currentPrice: 39.99,
      sold: 10,
      quantity: 0,
      views: 0,
      smallSrc: "/img/products/1-small.jpg",
      mediumSrc: "/img/products/1-medium.jpg"
    },
    item_2: {
      _id: "2",
      user_id: "ax20",
      title: "Microsoft Surface Pro 2 with 128GB, Windows 8.1 Pro - Dark Titanium",
      description: "Weighing in at 2 lbs., Surface Pro 2 goes from tablet to laptop and back. Run virtually all the programs you need, including the entire Microsoft Office suite.",
      condition: "Refurbished",
      includes: ["item", "box", "manual"],
      features: [
        "Intel 4th Generation Core i5",
        "11 Inch High-definition widescreen 10-point multitouch screen with ClearType technology (1920 x 1080)",
        "128GB Storage Capacity, 4GB Memory",
        "1 x USB 3.0, Mini Display Port Output, Touchscreen, Headphone Jack, MicroSDXC card reader, Windows 8.1 Pro",
        "1 Year Limited Warranty"
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 349.99,
      currentPrice: 339.99,
      sold: 10,
      quantity: 5,
      views: 1,
      smallSrc: "/img/products/2-small.jpg",
      mediumSrc: "/img/products/2-medium.jpg"
    },
    item_3: {
      _id: "3",
      user_id: "ax20",
      title: "Amazon Kindle Fire HD 16GB",
      description: "The Fire HD 6 goes anywhere with its pocketable design–featuring a beautiful 6\" HD display, 2x faster quad-core processor, and unsurpassed reliability in its class.",
      condition: "New",
      includes: ["item", "box", "manual"],
      features: [
        "2x the speed and over 3x the graphics performance of previous generation Fire HD for quicker apps and smooth videos.",
        "Crisp, vivid HD display (252 ppi / 1280x800) with over a million pixels—perfect for apps, movies, TV, games, photos, and more.",
        "Take photos or capture videos in 1080p HD with a rear-facing camera or Skype with a front-facing camera.",
        "Get free, unlimited cloud storage for all Amazon content and photos taken with your Fire devices.",
        "Enjoy over 33 million movies, TV shows, songs, books, Android apps and games—including Facebook, Netflix, Minecraft, and more.",
        "Create unique profiles and set screen time limits for kids with Amazon FreeTime. Coming soon, link two Amazon accounts and share books, games, apps, and Prime Instant Video content across all devices in the household.",
        "Fast web browsing, email and calendar support including Gmail and Outlook. Plus, edit and view Office documents.",
        "Choose from over 700,000 titles and thousands of audiobooks for $9.99/month. Try 30 days for free."
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 179.99,
      currentPrice: 169.99,
      sold: 10,
      quantity: 5,
      views: 2,
      smallSrc: "/img/products/3-small.jpg",
      mediumSrc: "/img/products/3-medium.jpg"
    },
    item_4: {
      _id: "4",
      user_id: "ax20",
      title: "Sony PlayStation 4 500GB Gaming Console",
      description: "PlayStation 4 is the best place to play with dynamic, connected gaming, powerful graphics and speed, intelligent personalization, deeply integrated social capabilities, and innovative second-screen features. Combining unparalleled content, immersive gaming experiences, all of your favorite digital entertainment apps, and PlayStation exclusives, PS4 centers on gamers, enabling them to play when, where and how they want. PS4 enables the greatest game developers in the world to unlock their creativity and push the boundaries of play through a system that is tuned specifically to their needs.",
      condition: "Refurbished",
      includes: ["item", "box", "manual"],
      features: [
        "Includes: PlayStation 4 Console, DualShock 4 Controller, HDMI Cable, Power Cable, Wired Mono Headset, USB Charging Cable",
        "Deepen your gaming experience with PlayStation Plus and PlayStation Gift Cards.",
        "PlayStation 4 redefines rich and immersive gameplay with powerful graphics and speed, intelligent personalization, deeply integrated social capabilities, and innovative second-screen features",
        "Background downloading and updating capability also allows you to immediately play digital titles as they download, or update the system when the hardware is powered off.",
        "PlayStation 4 lets you instantly share images and videos of your favorite gameplay moments on Facebook with a single press of the \"share\" button on the Dualshock 4 controller."
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 369.99,
      currentPrice: 359.99,
      sold: 10,
      quantity: 5,
      views: 3,
      smallSrc: "/img/products/4-small.jpg",
      mediumSrc: "/img/products/4-medium.jpg"
    },
    item_5: {
      _id: "5",
      user_id: "ax20",
      title: "Apple iPhone 5S 16GB",
      description: "This update to the iPhone 5 comes equipped with a faster Apple A7 processor, an improved 8-megapixel camera, while also adding a Touch ID fingerprint sensor into the home button. Other features of the iPhone 5s include a 4-inch Retina display, AirPlay media streaming, Siri voice assistant, front facing camera, and 4G LTE high-speed data. This model comes with 16GB of internal storage and supports WiFi connectivity, so you can browse the Web, stream videos, shop online, and chat with friends from wherever you are. The iPhone 5s offers a slim and stylish design that is both lightweight and easy to carry, and is also equipped for international use.",
      condition: "New",
      includes: ["item", "box", "manual"],
      features: [
        "4.0-inch Retina display.",
        "A7 chip with M7 motion coprocessor.",
        "Touch ID fingerprint sensor",
        "8MP iSight camera with True Tone flash and 1080p HD video recording.",
        "Unlocked cell phones are compatible with GSM carriers like AT&T and T-Mobile as well as with GSM SIM cards (e.g. H20 and select prepaid carriers). Unlocked cell phones will not work with CDMA Carriers like Sprint, Verizon, Boost or Virgin."
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 359.99,
      currentPrice: 349.95,
      sold: 10,
      quantity: 5,
      views: 4,
      smallSrc: "/img/products/5-small.jpg",
      mediumSrc: "/img/products/5-medium.jpg"
    },
    item_6: {
      _id: "6",
      user_id: "ax20",
      title: "Canon EOS 5D Mark III Digital SLR Camera",
      description: "The Canon 5260B002 EOS 5D Mark III 22.3MP Digital SLR Camera Body (lens required and sold separately) with supercharged EOS performance and full frame, high-resolution image capture is designed to perform. Special optical technologies like 61-Point High Density Reticular AF and extended ISO range of 100-25600 make this it ideal for shooting weddings in the studio, out in the field and great for still photography. Professional-level high definition video capabilities includes a host of industry-standard recording protocols and enhanced performance that make it possible to capture beautiful cinematic movies in EOS HD quality. A 22.3 Megapixel full-frame Canon CMOS sensor, Canon DIGIC 5+ Image Processor, and shooting performance up to 6.0fps provide exceptional clarity and sharpness when capturing rapidly-unfolding scenes. Additional technological advancements include an Intelligent Viewfinder, Canon's advanced iFCL metering system, High Dynamic Range (HDR), and Multiple Exposure.",
      condition: "Refurbished",
      includes: ["item", "box", "manual"],
      features: [
        "22MP full frame CMOS sensor.",
        "6 frames per second continuous shooting.",
        "61-point AF system.",
        "ISO 100 - 25600 range with 50 - 102,800 expansion.",
        "1080p HD video recording with manual controls.",
        "3.2 inch LCD with 1,040,000 dots.",
        "100% viewfinder coverage."
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 2699.99,
      currentPrice: 2559.99,
      sold: 10,
      quantity: 5,
      views: 5,
      smallSrc: "/img/products/6-small.jpg",
      mediumSrc: "/img/products/6-medium.jpg"
    },
    item_7: {
      _id: "7",
      user_id: "ax20",
      title: "Samsung 850 Pro MZ-7KE1T0BW 1 TB 2.5\" Internal Solid State Drive",
      description: "The Samsung 850 PRO SSD redefines storage with the world’s first drive based on 3D VNAND flash, offering exceptional read/write performance, reliability and power management efficiency. The 850 Pro delivers up to 2x the speed, density and endurance of conventional flash.",
      condition: "New",
      includes: ["item", "box", "manual"],
      features: [
        "Features sequential read and write performance up to 550 megabytes per second (MB/s) and 520MB/s respectively, and random read and write input/output operations-per-second (IOPS) up to 100,000 and 90,000 each.",
        "Class-leading performance -- enables you to boot up your computer in as little as 15 seconds.",
        "Energy efficient - Features Device Sleep mode for Ultranotebooks and improves battery life by up to 45 minutes vs. standard hard drives.",
        "Worry-free data security with AES 256-bit encryption, Microsoft Bitlocker and TCG / Opal 2.0 support.",
        "100-percent genuine Samsung components from the #1 memory manufacturer in the world.",
        "5th-generation 3-Core Samsung MEX Controller ensures sustained performance under the most punishing conditions.",
        "Enhanced endurance and reliability - Backed by an industry-leading 10-year limited warranty and 150TBW rating",
        "Perfect for hardcore gamers, mobile users or content creators (like professional animators, video editors, photographers and game developers) who crave the ultimate in performance and productivity."
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 559.99,
      currentPrice: 549.99,
      sold: 10,
      quantity: 5,
      views: 6,
      smallSrc: "/img/products/7-small.jpg",
      mediumSrc: "/img/products/7-medium.jpg"
    },
    item_8: {
      _id: "8",
      user_id: "ax20",
      title: "Plantronics ML20 Bluetooth Wireless Clip",
      description: "Keep talking longer with the Plantronics ML20 Bluetooth headset. Extended battery life, whispered talktime alerts and noise reduction make every call worry‐free. Avoid recharging even longer by using the power switch between calls and if you have an iPhone®, you can monitor battery life onscreen. So talk freely knowing you have the time you need and the technology you want.",
      condition: "Refurbished",
      includes: ["item", "box", "manual"],
      features: [
        "Fights noise and wind.",
        "More talking, less charging.",
        "iPhone displays headset battery meter.",
        "Power switch lets you extend battery life.",
        "Voice alerts tell you talk time, volume, connection and more.",
        "Pair two phones and take a call from either one.",
        "Comfortable fits either ear.",
        "Works with Bluetooth® phones."
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 16.99,
      currentPrice: 14.99,
      sold: 10,
      quantity: 5,
      views: 7,
      smallSrc: "/img/products/8-small.jpg",
      mediumSrc: "/img/products/8-medium.jpg"
    },
    item_9: {
      _id: "9",
      user_id: "ax20",
      title: "Citizen Calibre 8700 Eco-Drive Mens Watch",
      description: "Old world inspiration meets new world technology in this retrograde perpetual calendar with alarm unlike any other. Citizen Eco-Drive's iconic stainless steel watch with blue features dual time, month-day-date, 12/24 hour time, non-reflective crystal, a 39mm screw-back case, 100M WR and foldover clasp with hidden double push button.",
      condition: "New",
      includes: ["item", "box", "manual"],
      features: [
        "Perpetual Calendar Automatically Adjusts for Odd and Even Months and Leap Years through 2100.",
        "Eco-Drive Technology - Charges in Sunlight or Indoors - No Batteries to Change.",
        "Polished Stainless Steel Luminous Hands.",
        "When Fully Charged has a 500 Day Power Reserve.",
        "Black Ion Solid Stainless Steel Case and Bracelet.",
        "Fold-over Push-button Deployment Clasp.",
        "When in calendar mode, second hand points to the month on the inner bezel.",
        "Low Charge Indicator & Time Reset Advisory in the Event it Ever Needs Charging.",
        "Non-reflective scratch-resistant mineral crystal.",
        "Water resistant to 100m.",
        "Case measures 42mm wide by 10mm thick."
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 209.99,
      currentPrice: 199.99,
      sold: 10,
      quantity: 5,
      views: 8,
      smallSrc: "/img/products/9-small.jpg",
      mediumSrc: "/img/products/9-medium.jpg"
    },
    item_10: {
      _id: "10",
      user_id: "ax20",
      title: "HP 15-D017CL 15.6\" 750GB 4GB AMD A6-5200 2.0GHz",
      description: "Everyday computing just got easier with the HP Notebook. Enjoy true reliability on the road or at home with a simple yet powerful value-packed notebook that gets the job done.",
      condition: "Refurbished",
      includes: ["item", "box", "manual"],
      features: [
        "Processor Manufacturer: AMD",
        "Processor Type: A-Series",
        "Processor Model: A6-5200",
        "Processor Speed: 2 GHz",
        "Processor Core: Quad-core (4 Core)",
        "Cache: 2 MB",
        "64-bit Processing: Yes",
        "Standard Memory: 4 GB",
        "Number of Total Memory Slots: 1",
        "Hard Drive Capacity: 750 GB"
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 599.99,
      currentPrice: 299.99,
      sold: 10,
      quantity: 5,
      views: 9,
      smallSrc: "/img/products/10-small.jpg",
      mediumSrc: "/img/products/10-medium.jpg"
    },
    item_11: {
      _id: "11",
      user_id: "ax20",
      title: "D-Link Wireless Day/Night Network Surveillance Camera w/ Remote Viewing DCS-932L",
      description: "The mydlink-enabled Wireless N Day/Night Home Network Camera (DCS-932L) comes with everything you need to quickly add a surveillance camera to your home or small office network. It works right out of the box. Quickly set up your surveillance camera to monitor in the day or at night. Simply connect the cables, plug in the camera, run the short installation wizard and setup is complete. To view what the camera is seeing, simply log on to mydlink.com, choose your device, and start viewing.",
      condition: "New",
      includes: ["item", "box", "manual"],
      features: [
        "Easily view and manage your camera from mydlink.com.",
        "Compact design with night vision that lets you view 24/7.",
        "Wireless connectivity.",
        "Works with the mydlink iPhone or Android app for on-the go viewing",
        "Ready to use in 3 simple steps."
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 64.99,
      currentPrice: 54.99,
      sold: 10,
      quantity: 5,
      views: 10,
      smallSrc: "/img/products/11-small.jpg",
      mediumSrc: "/img/products/11-medium.jpg"
    },
    item_12: {
      _id: "12",
      user_id: "ax20",
      title: "Samsung UN55F6350A 55' 1080p 120Hz LED LCD Smart HDTV Internet WiFi",
      description: "A TV that’s smart enough to deliver entertainment the way you want it. The advanced technology behind the Samsung UN55D6300 LED TV helps you unlock the power of customizable entertainment. An easy-to-use web-enabled portal, Samsung Smart TV puts the best of the internet right on your TV, lets you search online and an your TV for content, and gives you access to must-have Samsung TV Apps. An ultra slim bezel shows off this advanced engineering with a sleek, sophisticated design.",
      condition: "Refurbished",
      includes: ["item", "box", "manual"],
      features: [
        "Samsung Smart TV.",
        "Auto Motion Plus 120Hz with Clear Motion Rate.",
        "Full HD 1080p resolution.",
        "ENERGY STAR standards.",
        "Internet ready"
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 849.99,
      currentPrice: 829.99,
      sold: 10,
      quantity: 5,
      views: 11,
      smallSrc: "/img/products/12-small.jpg",
      mediumSrc: "/img/products/12-medium.jpg"
    },
    item_13: {
      _id: "13",
      user_id: "ax20",
      title: "Samsung Galaxy S 4 SGH-I337 - 16GB - Black / White / Red UNLOCKED (B)",
      description: "The Samsung Galaxy S® 4 does what you want and what you didn't know was possible. Capture life with an innovative camera. Control your TV from your phone. Preview photos and read the news without touching the screen. Add fast 4G LTE. The Galaxy S 4 does things the way they should be done—your way.",
      condition: "New",
      includes: ["item", "box", "manual"],
      features: [
        "The fastest, easiest way to find what you need on the web and your phone or tablet. Enjoy the power of Google Search wherever you are.",
        "Stay connected and share epic moments as they happen. Start a group video chat on the go with up to nine people at once with Google+™ Hangouts, and never lose another mobile photo with Instant Upload.",
        "Put the important stuff right within reach and interact with your favorite apps directly from your home screen with widgets — see the latest sport scores, view your favorite photos, check the weather or peek at your inbox all without having to open different apps or leave the home screen.",
        "An easy-to-read notification tray gives you quick access to your calls, incoming texts, and new emails in a non-intrusive way.",
        "Capture special moments with great photos and videos, explore your shots and quickly share your favorites in any way that you want.",
        "Control your Android device with your voice. Simply touch the microphone on the keyboard and start talking to write emails, SMS, or any other text — more than 30 languages supported. Text appears in real time, so there’s no waiting.",
        "With hundreds of thousands of apps, the Google Play store has the right ones for you. When you download apps, they’re delivered directly to your device — instantly. You can also find your next first-rate read, a hot new album, or a flick from a catalog that includes everything from movie blockbusters and best selling e-books to millions of songs.",
        "Your Android device is already smart, and it’s only going to get smarter. Android was the first to bring you features on certain devices like Face Unlock — which uses facial recognition to let you unlock your device with a smile, Android Beam™ — which lets you share contacts, directions and more by touching two devices together, and Google Now™ — which brings you just the right information, before you even ask.",
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 269.99,
      currentPrice: 249.95,
      sold: 10,
      quantity: 5,
      views: 12,
      smallSrc: "/img/products/13-small.jpg",
      mediumSrc: "/img/products/13-medium.jpg"
    },
    item_14: {
      _id: "14",
      user_id: "ax20",
      title: "Garmin Nuvi 2595LMT GPS Voice Activated Mexico & North America Lifetime Maps",
      description: "With its innovative voice-activated navigation, you can control nüvi 2595LMT with your voice — allowing you to keep both hands on the wheel. Simply wake up nüvi with a customizable voice command and begin speaking menu options that are clearly displayed on the screen. When you’re stopped, you can still control the nüvi using its intuitive touchscreen interface. Guidance 2.0 allows you to easily look up addresses and services and be guided to your destination with voice-prompted, turn-by-turn directions that speak street names. It comes preloaded with maps for North America. It also comes preloaded with more than 8 million points of interest (POIs) and offers the ability to add your own.",
      condition: "Refurbished",
      includes: ["item", "box", "manual"],
      features: [
        "5\" dual-orientation touchscreen.",
        "Detailed maps of North America with free lifetime updates.",
        "Free lifetime traffic.",
        "Voice-activated navigation.",
        "Lane guidance with photoReal junction view."
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 109.99,
      currentPrice: 99.99,
      sold: 10,
      quantity: 5,
      views: 13,
      smallSrc: "/img/products/14-small.jpg",
      mediumSrc: "/img/products/14-medium.jpg"
    },
    item_15: {
      _id: "15",
      user_id: "ax20",
      title: "New Samsung Flight 2 II SGH-A927 Unlocked AT&T 3g GSM QWERTY Cell Phone",
      description: "Samsung Flight II A927 is a 3G messaging centric phone with a touch screen and a side sliding QWERTY keyboard. Other features include a 2MP camera, music player, microSDHC card slot, GPS and stereo Bluetooth.",
      condition: "New",
      includes: ["item", "box", "manual"],
      features: [
        "GSM 850 / 900 / 1800 / 1900, 3G Network: HSDPA 850 / 1900.",
        "3\" TFT Display Capacitive Touchscreen.",
        "2 Megapixel Camera (1600 x 1200 pixels) + Video.",
        "Bluetooth: v2.1 with A2DP, USB: microUSB v2.0, GPS: A-GPS only; AT&T Navigator.",
        "Internal Memory: 512 MB + microSD Slot Expandable up to 16GB."
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 44.99,
      currentPrice: 34.99,
      sold: 10,
      quantity: 5,
      views: 14,
      smallSrc: "/img/products/15-small.jpg",
      mediumSrc: "/img/products/15-medium.jpg"
    },
    item_16: {
      _id: "16",
      user_id: "ax20",
      title: "Jabra Cruiser 2 Bluetooth In-Car Wireless Speakerphone Universal Car-Kit",
      description: "STEER THE CONVERSATION WITHOUT TAKING YOUR HANDS OFF THE WHEEL The Jabra CRUISER2 Bluetooth in-car speakerphone makes hands-free conversation even easier. To start with, there is no installation needed. It connects automatically with your mobile and downloads your phonebook so it can tell you who is calling. And when you take a call, Noise Blackout technology and a dual microphone system ensure the conversation always sounds just right. Building on the legacy of the CRUISER, the Jabra CRUISER2 combines great sound in a design that makes it the perfect smartphone companion. The Jabra CRUISER2 offers driver-friendly technology. You'll receive spoken info. so there's no need to take your eyes off the road while you drive. Voice Guidance allows the speakerphone to deliver helpful instructions such as: \"Pairing Mode\", Connected\", \"Low battery\", \"and Language settings\". Voice Guidance gives you pairing instructions which will guide you through the pairing process. The Jabra CRUISER2 will download your phonebook and announce who is calling using Phonebook Access Profile (PBAP). It can download 1.000 contacts per connected phone. If your phone does not support PBAP it will announce the number of the caller instead.What's in the Box: USB cable, Car charger, Quick Start Guide and 1 year limited warranty.",
      condition: "Refurbished",
      includes: ["item", "box", "manual"],
      features: [
        "Bluetooth-enabled, in-car speakerphone for safe hands-free calling while driving.",
        "Acoustically optimized design with Noise Blackout dual microphones and a powerful speaker.",
        "Connect it to your car radio with the FM transmitter and transmit your music and calls to your car speakers.",
        "Advanced MultiUse allows you to have two active connections at the same time.",
        "Downloads your phonebook and tells you who is calling."
      ],
      details: {
       one: "",
       two: "",
       three: ""
      },
      msrp: 46.99,
      currentPrice: 34.99,
      sold: 10,
      quantity: 5,
      views: 15,
      smallSrc: "/img/products/16-small.jpg",
      mediumSrc: "/img/products/16-medium.jpg"
    },
    item_17: {
      _id: "17",
      user_id: "ax20",
      title: "Nokia Lumia 520",
      description: "Powered by Windows Phone 8, the Nokia Lumia 520 comes with a powerful 1 GHz dual core processor, a responsive touchscreen, digital lenses that make taking super-sharp pictures a snap, and a host of features that make this the useful and fun smartphone you'll want.",
      condition: "New",
      includes: ["item", "box", "manual"],
      features: [
        "4-inch display",
        "5MP camera",
        "8GB storage"
      ],
      details: {
        one: "4-inch display",
        two: "5MP camera",
        three: "8GB storage",
        four: "Windows Phone 8.1 upgrade now available"
      },
      msrp: 59.99,
      currentPrice: 49.99,
      sold: 10,
      quantity: 5,
      views: 16,
      smallSrc: "/img/products/17-small.jpg",
      mediumSrc: "/img/products/17-medium.jpg"
    }
  };

  /* clear the collection */
  globalMethods.seedDown(AuctionItemSeeds, AuctionItems);


  /* seed the collection */
  globalMethods.seedUp(AuctionItemSeeds, AuctionItems);
}
