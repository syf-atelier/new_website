import discord from "@/assets/footer_discord.svg";
import facebook from "@/assets/footer_facebook.svg";
import instagram from "@/assets/footer_instagram.svg";
import linkedin from "@/assets/footer_linkedin.svg";
import tiktok from "@/assets/footer_tiktok.svg";

const FooterSocialNetworks = () => {
    return (
        <div className="flex flex-row gap-1 lg:w-14 lg:h-14 lg:gap-2 ">
            <img src={tiktok} alt="tiktok" />
            <img src={linkedin} alt="linkedin" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={discord} alt="discord" />
        </div>
    );
};

export default FooterSocialNetworks;