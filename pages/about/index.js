import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar/Navbar";
import SectionAboutFirst from "../../components/sectionAboutFirst/about";
import SectionAboutSecond from "../../components/sectionAboutSecond/index";
import SectionAboutThirst from "../../components/sectionAboutThirst"
import SectionAboutFourth from "../../components/sectionAboutFourth/";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <SectionAboutFirst/>
            <SectionAboutSecond/>
            <SectionAboutThirst/>
            <SectionAboutFourth/>
        </>
    );
}
