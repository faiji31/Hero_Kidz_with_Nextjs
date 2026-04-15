import { Geist, Geist_Mono , Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from "next/font/local";



 const poppins = Poppins({
  weight:["100","200","400","500","600","800"]
})
export const FontBangla = localFont({
  // Move up two levels: out of 'app', out of 'src', then into 'public'
  src: "../../public/fonts/mayaboti-normal.ttf", 
});

export const metadata = {
  metadataBase: new URL("https://herokidz-three.vercel.app/"), // update after deploy

  title: {
    default: "Hero Kidz - Kids Learning & Educational Toys Store",
    template: "%s | Hero Kidz",
  },

  description:
    "Hero Kidz is a trusted online store in Bangladesh for kids learning toys, educational boards, and fun development products.",

  keywords: [
    "kids toys Bangladesh",
    "educational toys",
    "learning toys BD",
    "baby products",
    "Hero Kidz",
  ],

  authors: [{ name: "Hero Kidz Team" }],
  creator: "Hero Kidz",
  publisher: "Hero Kidz",

  icons: {
    icon: "https://i.ibb.co.com/hp1Y8b5/logo.png", // your logo
    apple: "https://i.ibb.co.com/hp1Y8b5/logo.png",
  },

  
  openGraph: {
    title: "Hero Kidz - Kids Learning Toys Store",
    description:
      "Explore fun and educational toys for kids. Learn while playing with Hero Kidz!",

    url: "https://herokidz.vercel.app",
    siteName: "Hero Kidz",

    images: [
      {
        url: "https://i.ibb.co.com/Q08qnft/homepage.png", // homepage preview
        width: 1200,
        height: 630,
        alt: "Hero Kidz Homepage",
      },
    ],

    locale: "en_US",
    type: "website",
  },

 
  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz - Kids Learning Toys",
    description:
      "Buy educational toys and fun learning products for kids in Bangladesh.",
    images: ["https://i.ibb.co.com/Q08qnft/homepage.png"],
  },

 
  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://herokidz.vercel.app",
  },

  category: "ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
     
    >
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2  md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-320px)]">
           {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>

      </body>
    </html>
  );
}
