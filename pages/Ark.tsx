import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Arkprin from "@/components/PageArk/Arkprin";
import Arkboton from "@/components/PageArk/Arkboton";
import Cartinfo from "@/components/ui/Carinfo";
import { CartProvider } from "@/components/ui/CartContext";
import IntegratedCalculator from "@/components/ui/IntegratedCalculator";      
import Whatsapp from "@/components/ui/Watsapp";
import Text from "@/components/ui/Text";

const Ark = () => {
    return (
        <CartProvider>
        <div className="bg-[#15001F] text-white">
            <Navbar />
            <main>
                <Arkprin />
                <Arkboton />
                <Cartinfo/>
                <IntegratedCalculator/>
                <Whatsapp />
                <Text />
                <Footer />
            </main>
        </div>
        </CartProvider>
    );
};

export default Ark;