import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Palprin from "@/components/Pagepalword/Palprin";
import Cartinfo from "@/components/ui/Carinfo";
import { CartProvider } from "@/components/ui/CartContext";
import IntegratedCalculator from "@/components/ui/IntegratedCalculator";
import Text from "@/components/ui/Text";
import Whatsapp from "@/components/ui/Watsapp";

const Palworld = () => {
    return (
        <CartProvider defaultPage="Palworld">
            <div className="bg-[#15001F] text-white">
                <Navbar />
                <main>
                    <Palprin />
                    <Cartinfo />
                    <IntegratedCalculator />
                    <Whatsapp />
                    <Text/>
                    <Footer />
                </main>
            </div>
        </CartProvider>
    );
};

export default Palworld;
