import bali from "../assets/images/bali.jpg";
import bali1 from "../assets/images/bali1.jpg";
import bali2 from "../assets/images/bali2.jpg";
import bali3 from "../assets/images/bali3.jpg";

import paris from "../assets/images/paris.jpg";
import paris1 from "../assets/images/paris1.jpg";
import paris2 from "../assets/images/paris2.jpg";
import paris3 from "../assets/images/paris3.jpg";

import maldives from "../assets/images/maldives.jpg";
import maldives1 from "../assets/images/maldives1.jpg";
import maldives2 from "../assets/images/maldives2.jpg";
import maldives3 from "../assets/images/maldives3.jpg";


import dubai from "../assets/images/dubai.avif";
import dubai1 from "../assets/images/dubai1.jpg";
import dubai2 from "../assets/images/dubai2.jpg";
import dubai3 from "../assets/images/dubai3.jpg";

import newyork from "../assets/images/newyork.jpg";
import newyork1 from "../assets/images/newyork1.jpg";
import newyork2 from "../assets/images/newyork2.jpg";
import newyork3 from "../assets/images/newyork3.jpg";

import switzerland from "../assets/images/switzerland.jpg";
import switzerland1 from "../assets/images/switzerland1.jpg";
import switzerland2 from "../assets/images/switzerland2.jpg";
import switzerland3 from "../assets/images/switzerland3.jpg";

const destinations = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    flag: "🇮🇩",
    category: "Beach",
    image: bali,

    rating: 4.9,
    reviews: "1.9k Reviews",
    duration: "7 Days",
    price: "₹48,999",

    description:
      "Bali is a tropical paradise famous for its pristine beaches, ancient temples, lush rice terraces, waterfalls, vibrant nightlife, and rich culture. It offers the perfect blend of relaxation and adventure for every traveler.",

    highlights: [
      {
        icon: "🏖️",
        title: "Beautiful Beaches",
        description: "Relax on world-famous sandy beaches."
      },
      {
        icon: "🏛️",
        title: "Ancient Temples",
        description: "Explore centuries-old cultural landmarks."
      },
      {
        icon: "🌾",
        title: "Rice Terraces",
        description: "Witness Bali's stunning green landscapes."
      },
      {
        icon: "🏄",
        title: "Water Sports",
        description: "Enjoy surfing, snorkeling and diving."
      },
      {
        icon: "🌅",
        title: "Sunset Views",
        description: "Experience unforgettable sunsets."
      },
      {
        icon: "🌃",
        title: "Nightlife",
        description: "Discover vibrant nightlife and beach clubs."
      }
    ],

    included: [
      "4-Star Hotel",
      "Daily Breakfast",
      "Airport Pickup",
      "Professional Tour Guide",
      "Sightseeing Tours",
      "Free Wi-Fi"
    ],

    gallery: [bali, bali1, bali2, bali3]
  },

  {
    id: 2,
    name: "Paris",
    country: "France",
    flag: "🇫🇷",
    category: "City",
    image: paris,

    rating: 4.8,
    reviews: "2.9k Reviews",
    duration: "5 Days",
    price: "₹89,999",

    description:
      "Paris is the City of Love, celebrated for its romantic atmosphere, iconic landmarks, world-class museums, luxury shopping, and exquisite French cuisine.",

    highlights: [
      {
        icon: "🗼",
        title: "Eiffel Tower",
        description: "Visit the world's most iconic landmark."
      },
      {
        icon: "🎨",
        title: "Louvre Museum",
        description: "Explore masterpieces including the Mona Lisa."
      },
      {
        icon: "🥐",
        title: "French Cuisine",
        description: "Taste authentic pastries and gourmet dishes."
      },
      {
        icon: "🛍️",
        title: "Luxury Shopping",
        description: "Shop at famous Parisian boutiques."
      },
      {
        icon: "🚤",
        title: "Seine River Cruise",
        description: "Enjoy breathtaking city views by boat."
      },
      {
        icon: "🌸",
        title: "Romantic Streets",
        description: "Walk through charming Parisian neighborhoods."
      }
    ],

    included: [
      "Luxury Hotel",
      "Breakfast",
      "Airport Transfer",
      "Museum Tickets",
      "City Tour",
      "Free Wi-Fi"
    ],

    gallery: [paris, paris1, paris2, paris3]
  },

  {
    id: 3,
    name: "Maldives",
    country: "Maldives",
    flag: "🇲🇻",
    category: "Beach",
    image: maldives,

    rating: 4.9,
    reviews: "2.8k Reviews",
    duration: "4 Days",
    price: "₹74,999",

    description:
      "The Maldives is famous for crystal-clear waters, luxurious overwater villas, coral reefs, marine life, and unforgettable island experiences.",

    highlights: [
      {
        icon: "🏝️",
        title: "Private Islands",
        description: "Enjoy peaceful island escapes."
      },
      {
        icon: "🐠",
        title: "Snorkeling",
        description: "Discover colorful coral reefs."
      },
      {
        icon: "🏊",
        title: "Infinity Pools",
        description: "Relax with breathtaking ocean views."
      },
      {
        icon: "🌊",
        title: "Crystal Waters",
        description: "Swim in pristine turquoise lagoons."
      },
      {
        icon: "🌅",
        title: "Sunset Cruises",
        description: "Experience magical evenings."
      },
      {
        icon: "💆",
        title: "Luxury Spa",
        description: "Enjoy premium wellness treatments."
      }
    ],

    included: [
      "Beach Resort",
      "Breakfast & Dinner",
      "Airport Speedboat",
      "Island Tour",
      "Snorkeling",
      "Free Wi-Fi"
    ],

    gallery: [maldives, maldives1, maldives2, maldives3]
  },

  {
    id: 4,
    name: "Dubai",
    country: "UAE",
    flag: "🇦🇪",
    category: "Luxury",
    image: dubai,

    rating: 4.7,
    reviews: "2.4k Reviews",
    duration: "6 Days",
    price: "₹59,999",

    description:
      "Dubai is known for luxury shopping, futuristic architecture, desert adventures, iconic skyscrapers, and vibrant nightlife.",

    highlights: [
      {
        icon: "🏙️",
        title: "Burj Khalifa",
        description: "Visit the world's tallest building."
      },
      {
        icon: "🏜️",
        title: "Desert Safari",
        description: "Experience thrilling dune adventures."
      },
      {
        icon: "🛍️",
        title: "Dubai Mall",
        description: "Shop at one of the world's largest malls."
      },
      {
        icon: "🚤",
        title: "Luxury Marina",
        description: "Cruise along Dubai Marina."
      },
      {
        icon: "🌃",
        title: "Nightlife",
        description: "Enjoy premium entertainment."
      },
      {
        icon: "🏖️",
        title: "Palm Jumeirah",
        description: "Relax on Dubai's iconic island."
      }
    ],

    included: [
      "Luxury Hotel",
      "Breakfast",
      "Airport Pickup",
      "Desert Safari",
      "City Tour",
      "Free Wi-Fi"
    ],

    gallery: [dubai, dubai1, dubai2, dubai3]
  },

  {
    id: 5,
    name: "New York",
    country: "USA",
    flag: "🇺🇸",
    category: "City",
    image: newyork,

    rating: 4.8,
    reviews: "2.0k Reviews",
    duration: "6 Days",
    price: "₹1,09,999",

    description:
      "New York City is famous for Times Square, Central Park, Broadway shows, iconic skylines, museums, and endless entertainment.",

    highlights: [
      {
        icon: "🗽",
        title: "Statue of Liberty",
        description: "Visit America's iconic symbol."
      },
      {
        icon: "🌆",
        title: "Times Square",
        description: "Experience dazzling city lights."
      },
      {
        icon: "🌳",
        title: "Central Park",
        description: "Relax in the heart of Manhattan."
      },
      {
        icon: "🎭",
        title: "Broadway",
        description: "Watch world-famous theatre shows."
      },
      {
        icon: "🏙️",
        title: "Skyline Views",
        description: "Admire breathtaking skyscrapers."
      },
      {
        icon: "🍕",
        title: "Street Food",
        description: "Taste authentic New York pizza."
      }
    ],

    included: [
      "Premium Hotel",
      "Breakfast",
      "Airport Transfer",
      "City Pass",
      "Guided Tour",
      "Free Wi-Fi"
    ],

    gallery: [newyork, newyork1, newyork2, newyork3]
  },

  {
    id: 6,
    name: "Switzerland",
    country: "Switzerland",
    flag: "🇨🇭",
    category: "Mountain",
    image: switzerland,

    rating: 5.0,
    reviews: "1.9k Reviews",
    duration: "8 Days",
    price: "₹1,29,999",

    description:
      "Switzerland is renowned for its breathtaking Alps, crystal-clear lakes, scenic train journeys, charming villages, and unforgettable winter adventures.",

    highlights: [
      {
        icon: "🏔️",
        title: "Swiss Alps",
        description: "Experience breathtaking mountain landscapes."
      },
      {
        icon: "🚞",
        title: "Scenic Trains",
        description: "Travel through spectacular valleys."
      },
      {
        icon: "🏂",
        title: "Snow Adventures",
        description: "Enjoy skiing and snowboarding."
      },
      {
        icon: "🏡",
        title: "Charming Villages",
        description: "Discover postcard-perfect towns."
      },
      {
        icon: "🚠",
        title: "Cable Cars",
        description: "Ride above magnificent mountains."
      },
      {
        icon: "🏞️",
        title: "Beautiful Lakes",
        description: "Relax beside crystal-clear alpine lakes."
      }
    ],

    included: [
      "Luxury Hotel",
      "Breakfast",
      "Train Pass",
      "Airport Pickup",
      "Sightseeing",
      "Free Wi-Fi"
    ],

    gallery: [switzerland, switzerland1, switzerland2, switzerland3]
  }
];

export default destinations;