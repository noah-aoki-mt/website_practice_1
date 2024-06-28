import NavigationBar from "@/app/components/NavigationBar";
import Image from "next/image";
import "./globals.css";
import { Body } from "@/app/components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <NavigationBar />
        <Body />
        <Footer />
      </div>
    </>
  );
}
