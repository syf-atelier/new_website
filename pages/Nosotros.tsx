import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import Imgnosotros from "@/components/Pagenosotros/Imgnosotros";
import Nosprin from "@/components/Pagenosotros/Nosprin";

const Nosotros = () => {
    return (
            <div className="bg-[#15001F] text-white">
                <Navbar />
                <main>
                <Nosprin/>
                <Imgnosotros/>
                <Footer />
                </main>
            </div>
    );
};

export default Nosotros;
