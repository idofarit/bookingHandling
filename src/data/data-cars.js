import { supabaseUrl } from "../services/supabase";
const imageUrl = `${supabaseUrl}/storage/v1/object/public/car-images/`;

export const cars = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    image: imageUrl + "car-1.jpg",
    description: "Beautiful Luxary Car",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    image: imageUrl + "car-2.jpg",
    description: "Anniversary special car",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    image: imageUrl + "car-3.jpg",
    description: "Extra Luxary Car",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    image: imageUrl + "car-4.jpg",
    description: "Interior Special Car",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    image: imageUrl + "car-5.jpg",
    description: "Extra Ordinary for couple Car",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    image: imageUrl + "car-6.jpg",
    description: "Feel the royality in this car",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 600,
    discount: 100,
    image: imageUrl + "car-7.jpg",
    description: "Authentic Mood vibes",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    image: imageUrl + "car-8.jpg",
    description: "Large Van",
  },
];
