import image from '../Assets/image.jpeg';
import largeimage from '../Assets/big.jpeg';

const bookProducts = [
  {
    id: 1,
    name: "The Alchemist",
    description: "A journey of self-discovery by Paulo Coelho.",
    price: 9.99,
    image: image,
    longDescription: "A philosophical novel about Santiago, a shepherd boy who dreams of finding treasure in Egypt and learns valuable life lessons along the way.",
    largeimage: largeimage
  },
  {
    id: 2,
    name: "Atomic Habits",
    description: "Tiny changes for remarkable results.",
    price: 14.99,
    image: image,
    longDescription: "A practical guide by James Clear on building good habits, breaking bad ones, and mastering small behaviors for big results."
  },
  {
    id: 3,
    name: "1984",
    description: "Dystopian novel by George Orwell.",
    price: 11.5,
    image: image,
    longDescription: "A chilling depiction of a totalitarian regime under constant surveillance, exploring themes of control, truth, and freedom."
  },
  {
    id: 4,
    name: "Rich Dad Poor Dad",
    description: "Personal finance basics by Robert Kiyosaki.",
    price: 10.75,
    image: image,
    longDescription: "A personal finance classic contrasting the financial philosophies of the author's 'rich dad' and 'poor dad', offering lessons on wealth-building."
  },
  {
    id: 5,
    name: "The Psychology of Money",
    description: "Timeless lessons on wealth and greed.",
    price: 13.0,
    image: image,
    longDescription: "Morgan Housel explores how human behavior impacts financial decisions more than knowledge, and why managing money is a soft skill."
  },
  {
    id: 6,
    name: "Clean Code",
    description: "Best practices for writing maintainable code.",
    price: 28.99,
    image: image,
    longDescription: "Robert C. Martin's essential guide for writing clean, readable, and maintainable code, including case studies and principles for developers."
  },
  {
    id: 7,
    name: "Sapiens",
    description: "A brief history of humankind.",
    price: 17.49,
    image: image,
    longDescription: "Yuval Noah Harari traces the history of Homo sapiens from the Stone Age to modern times, exploring culture, society, and technology."
  },
  {
    id: 8,
    name: "Harry Potter 1",
    description: "The beginning of the wizarding world.",
    price: 12.99,
    image: image,
    longDescription: "J.K. Rowling introduces us to Harry Potter, a boy wizard who discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry."
  },
  {
    id: 9,
    name: "Think and Grow Rich",
    description: "Mindset and money principles.",
    price: 9.5,
    image: image,
    longDescription: "Napoleon Hill outlines success principles based on his study of wealthy individuals, emphasizing desire, faith, and persistence."
  },
  {
    id: 10,
    name: "The Pragmatic Programmer",
    description: "Software development tips from pros.",
    price: 32.0,
    image: image,
    longDescription: "Andy Hunt and Dave Thomas share timeless tips for becoming a better software developer, focusing on adaptability, craftsmanship, and problem-solving."
  }
];

export default bookProducts;
