/* "use client"

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const HomePage = () => {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/startimage.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Ge Din Hjärna ett Tak</h1>
        <p className="text-lg mb-8">Hatten av, Keps på</p>
        <ScrollLink to="bottom" smooth={true} duration={500}>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Shoppa Kepsar
          </button>
        </ScrollLink>
      </div>
      <div id="bottom" className="h-screen bg-gray-200">
        <h2 className="text-3xl font-bold text-center pt-20">Scrolla hit</h2>
      </div>
    </div>
  );
};

export default HomePage; */