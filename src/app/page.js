import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";

export const metadata = {
  title: 'BUILD OR BURY | Vote on Innovative Project Ideas',
  description: 'Explore and vote on cutting-edge project ideas. Help shape the future of technology and innovation.',
  openGraph: {
    title: 'BUILD OR BURY | Vote on Innovative Project Ideas',
    description: 'Explore and vote on cutting-edge project ideas. Help shape the future of technology and innovation.',
    url: 'https://www.buildorbury.com',
    siteName: 'BUILD OR BURY',
    images: [
      {
        url: 'https://www.buildorbury.com/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <HomeContent />
      <Footer />
    </main>
  );
}
