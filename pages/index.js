import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider"
import InfoWebSite from "@/components/sectionBodyBoxInfo";
import SectionBodyBox from "@/components/sectionBodyBoxFirst";
import SectionText from "@/components/sectionBodyBoxSecond";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Slider/>
            <InfoWebSite/>
            <SectionBodyBox />
            <SectionText />
        </>
    );
}
