import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import Comunidisc from "@/components/Pagecomuni/Comunidisc";
import Comuniprin from "@/components/Pagecomuni/Comuniprin"
import ComunitiCart from "@/components/Pagecomuni/ComunitiCart"



const Minecraftpg = () => {
    return (
        <div className="bg-[#15001F] text-white">
            <Navbar />
            <main>
                <Comuniprin/>
                <ComunitiCart />
                <Comunidisc/>
                <Footer />
            </main>
        </div>
    );
};

export default Minecraftpg;