import Cartcarousel from "@/components/layout/Cartcarousel";
import ContractSection from "@/components/layout/ContractSection";
import EmailSection from "@/components/layout/EmailSection";
import Footer from "@/components/layout/Footer";
import FrequentlyQuestionsSection from "@/components/layout/FrequentlyQuestionsSection";
import GamesSection from "@/components/layout/GamesSection";
import LocationSection from "@/components/layout/LocationSection";
import MainCarousel from "@/components/layout/MainCarousel";
import ManageSection from "@/components/layout/ManageSection";
import Navbar from "@/components/layout/Navbar";
import TestimonialsSection from "@/components/layout/TestimonialsSection";

const Home = () => {
    return (
        <div className="bg-[#15001F] text-white">
            <Navbar />
            <main>
                <MainCarousel />
                <GamesSection />
                <div className="hidden lg:block">
                <Cartcarousel />
                </div>
                <LocationSection />
                <ManageSection />
                <ContractSection />
                <EmailSection />
                <TestimonialsSection />
                <FrequentlyQuestionsSection />
                <Footer />
            </main>
        </div>
    );
};

export default Home;