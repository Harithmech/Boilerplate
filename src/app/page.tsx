"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import SectionComponent from "@/components/SectionComponent";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="This is a landing page example" />
      </Head>
      <Navbar />
      <main>
        <SectionComponent />
        <FeaturesSection />
        <Footer/>
      </main>
    </div>

  );
}
