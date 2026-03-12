import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import Maincprin from "@/components/pagecraf/Maincprin"
import Maincboton from "@/components/pagecraf/Maincboton"
import Whatsapp from "@/components/ui/Watsapp"
import Text from "@/components/ui/Text"

const Minecraftpg = () => {
    return (
        <div className="bg-[#15001F] text-white">
            <Navbar />
            <main>
                <Maincprin />
                <Maincboton />
                <Whatsapp/>
                <Text/>
                <Footer />
            </main>
        </div>
    );
};

export default Minecraftpg;