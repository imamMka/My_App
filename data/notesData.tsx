import { ImageSourcePropType } from "react-native";

export const notes: Note[] = [
  {
    id: 1,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 29 oktober 2025",
    image: require("@/assets/images/image-0.png"),
  },
  {
    id: 2,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/image-1.png"),
  },
  {
    id: 3,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/image-2.png"),
  },
  {
    id: 4,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/image-3.png"),
  },
  {
    id: 5,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/image-3.png"),
  },
  {
    id: 6,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/image-3.png"),
  },
  {
    id: 7,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/image-3.png"),
  },
];

type Note = {
  id: number;
  title: string;
  desc: string;
  date: string;
  image: ImageSourcePropType | { uri: string };
};