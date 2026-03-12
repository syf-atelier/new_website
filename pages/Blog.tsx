import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import Blocksearch from "@/components/Pageblog/Blocksearch";

const Blog = () => {
    return (
            <div className="bg-[#15001F] text-white">
                <Navbar />
                <main>
                    <Blocksearch/>
                <Footer />
                </main>
            </div>
    );
};

export default Blog;
