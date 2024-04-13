'use client'

// import SocialIcons from "@/app/components/social-icons";
// import Logo from "@/app/components/logo";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Carousel from "@/app/components/Carousel/carousel";

// import Slider from "@/app/components/slider";
// import Carousel from "@/app/components/Carousel/carousel.component";
import coverData from "@/app/data/cover-data";


export default function Home() {


  return (
    <main className="md:container md:border-x-2 mx-auto flex min-h-screen flex-col items-center ">
        <Header/>




        <Carousel data={coverData}/>

        <Footer/>
    </main>
  );
}
