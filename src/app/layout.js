
import { Lato } from "next/font/google";
import "./globals.css";

// Define the Lato font variable
const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'], // Optional: Specify the font weights you want
  variable: '--font-lato',
});

export const metadata = {
  title: "Flower Shop | Buy Fresh Flowers Online",
  description: "Discover a wide range of beautiful flowers for all occasions. Same-day delivery available!",
  keywords: "flower shop, fresh flowers, online flower delivery, bouquet, floral arrangements",
  author: "Your Flower Shop",
  openGraph: {
    title: "Flower Shop | Fresh Flowers Delivered",
    description: "Buy the freshest flowers online with same-day delivery.",
    url: "https://your-flower-shop.com",
    siteName: "Flower Shop",
    images: [
      {
        url: "https://your-flower-shop.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flower Shop Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flower Shop | Fresh Flowers Delivered",
    description: "Buy the freshest flowers online with same-day delivery.",
    images: ["https://your-flower-shop.com/twitter-image.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

