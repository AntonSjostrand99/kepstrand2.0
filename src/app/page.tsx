import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Link from 'next/link';
import Category from "@/Components/Category/Category";
import Carousel from "@/Components/Carousel/Carousel";
import CustomerReviews from "@/Components/Reviews/Reviews";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';





export default function Home() {
  return (
    <main className="flex-col justify-center items-center bg-yellow-500">


      <div className="relative h-screen bg-cover bg-center " style={{ backgroundImage: 'url(/startimage.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Ge Din Hjärna ett Tak</h1>
          <p className="text-lg mb-8">Hatten av, Keps på</p>
          <Link href="/shop">

            <button className="bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg border-4  border-black shadow-md transform transition-transform duration-300 cursor-pointer">
              Shoppa Kepsar
            </button>
          </Link>
        </div>
      </div>




      <div className="container mx-auto my-8  ">
        <Category />

      </div>



      <hr className="container mx-auto my-8" />

      <div className="container mx-auto ">
        <h1 className="text-3xl font-bold mb-4 flex justify-center text-black p-4 rounded-lg border-4 border-black shadow-md bg-white">BÄSTSÄLJARE</h1>
        <div className="text-center"><ArrowDownwardIcon className="rounded-lg border-4 border-black bg-white "/></div>
        <Carousel />
      </div>

      <hr className="container mx-auto my-10" />











      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold mb-4 flex justify-center text-black  py-3 px-6 rounded-lg border-4 border-black shadow-md ">Inspo</h1>

        <div className=" flex flex-col lg:flex-row gap-4 ">
          <div className="lg:w-2/4 flex flex-col gap-4">
            {/* Två mindre bilder till vänster */}
            <div className="relative rounded-lg border-4 border-black shadow-md overflow-hidden max-h-64">
              <img
                className="w-full h-full object-cover"
                src="/man-1845715_640.jpg"
                alt="Small Image 1"
              />
            </div>
            <div className="relative rounded-lg border-4 border-black shadow-md overflow-hidden max-h-64">
              <img
                className="w-full h-full object-cover"
                src="/man-1845715_640.jpg"
                alt="Small Image 2"
              />
            </div>
          </div>
          <div className="lg:w-2/4 flex flex-col gap-4">
            {/* Två mindre bilder till vänster */}
            <div className="relative rounded-lg border-4 border-black shadow-md overflow-hidden max-h-64">
              <img
                className="w-full h-full object-cover"
                src="/man-1845715_640.jpg"
                alt="Small Image 1"
              />
            </div>
            <div className="relative rounded-lg border-4 border-black shadow-md overflow-hidden max-h-64">
              <img
                className="w-full h-full object-cover"
                src="/man-1845715_640.jpg"
                alt="Small Image 2"
              />
            </div>
          </div>
        </div>

      </div>




      <CustomerReviews />


    </main>
  );
}
