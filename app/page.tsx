import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <ShopexOffer />
      <UniqueFeatures />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <Newsletter />
      <LatestBlog />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-[#F2F0FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      <div className="md:w-1/4 flex justify-center items-start relative">
        <div className="absolute top-[-250px] left-[-20px] z-10">
          <Image src="/img/furn/light.png" alt="Lamp" width={300} height={300} className="object-contain" />
        </div>
      </div>
      <div className="md:w-1/3 max-w-lg left-0 text-center md:text-left flex flex-col justify-center">
        <p className="text-sm text-[#FB2E86] font-['Lato'] font-bold">Best Furniture For Your Castle...</p>
        <h1 className="text-3xl family md:text-4xl font-bold text-[#000] leading-tight mt-2 tracking-[0.795px]">
          New Furniture Collection Trends in 2020
        </h1>
        <p className="text-[#8A8FB9] text-[16px] mt-4 leading-[28px] font-bold font-['Lato']">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
        <a className="inline-block bg-[#FB2E86] text-[#fff] text-[17px] family font-semibold py-3 px-3 ml-20 mt-6 hover:bg-[#e12570] transition-all duration-300 ease-in-out w-1/2 sm:w-1/2 text-center" href="/shop">
          Shop Now
        </a>
      </div>
      <div className="md:w-1/3 flex justify-center items-center relative">
        <div className="relative bg-[#ECD2FA59] rounded-full p-8 shadow-xl mt-10 mx-auto">
          <Image src="/img/chair/banner3.png" alt="Banner Chair" width={500} height={500} className="object-contain w-full h-auto" />
        </div>
        <div className="absolute family top-8 right-5 w-[100px] h-[100px] bg-[#00C1FE] text-[#fff] text-[20px] font-semibold flex items-center justify-center rounded-full shadow-md">
          <span>50% <br/>off</span>
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      <h2 className="text-3xl family font-bold text-center text-[#1A0B5B] mb-10">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative bg-[#ffffff] shadow-md rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="bg-[#F6F7FB] w-[270] h-[236px] flex justify-center items-center relative">
              <Image src={`/img/featured/featuredpr${i}.png`} alt={`Featured Product ${i}`} width={130} height={150} className="object-contain" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#fb2e86] mb-2">Cantilever Chair</h3>
              <div className="flex items-center justify-center mb-3 space-x-2">
                <div className="w-3.5 h-1" style={{backgroundColor: '#05e6b7', borderRadius: '10px'}}></div>
                <div className="w-3.5 h-1" style={{backgroundColor: '#f701a8', borderRadius: '10px'}}></div>
                <div className="w-3.5 h-1" style={{backgroundColor: '#00009d', borderRadius: '10px'}}></div>
              </div>
              <p className="text-sm text-[#151875] mb-1">Code - Y523201</p>
              <p className="text-sm font-semibold text-[#151875]">$42.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LatestProducts() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      <h2 className="text-3xl family font-bold text-center text-[#1A0B5B] mb-4">Latest Products</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className="text-[#fb2e86] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">New Arrival</div>
        <div className="text-[#151875] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">Best Seller</div>
        <div className="text-[#151875] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">Featured</div>
        <div className="text-[#151875] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">Special Offer</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative bg-[#fff] shadow-lg rounded-md overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="w-full flex justify-center items-center p-4 bg-[#fff]">
              <Image src={`/latestpr${i}.png`} alt={`Latest Product ${i}`} width={223} height={260} className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-[#151875] mb-2">Comfort Handy Craft</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#151875]">$42.00</p>
                <p className="text-sm font-normal text-[#fb2448] line-through">$65.00</p>
              </div>
            </div>
            <div className="h-[2px] bg-[#eeeffb] w-full mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShopexOffer() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      <h2 className="text-3xl family font-bold text-center text-[#1A0B5B] mb-10">What Shopex Offer!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative bg-[#fff] flex flex-col items-center justify-center p-6 rounded-lg">
            <Image src={`/supportpic${i}.png`} alt="Support Feature" width={65} height={65} className="object-contain mb-4" />
            <h3 className="text-[#151875] text-base md:text-lg font-semibold mb-2 family">24/7 Support</h3>
            <p className="text-[#1a0b5b]/30 text-sm md:text-base font-medium leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function UniqueFeatures() {
  return (
    <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between bg-[#F1F0FF]">
      <div className="relative w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 transform transition-transform duration-300 hover:scale-105">
        <div className="bg-pink-100 rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] absolute"></div>
        <Image src="/midbannerpic.png" alt="Sofa" width={350} height={350} className="relative" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start md:items-start px-4 md:px-0 space-y-6">
        <h2 className="text-[#151875] text-[24px] md:text-[30px] family lg:text-[36px] font-bold tracking-[0.525px]">
          Unique Features Of Latest &<br/> Trending Products
        </h2>
        <ul className="space-y-4 font-['Lato'] text-[16px] font-medium tracking-[0.24px]">
          <li className="flex items-center text-[#7E81A2] text-sm md:text-base">
            <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="flex items-center text-[#7E81A2] text-sm md:text-base">
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
            Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
          </li>
          <li className="flex items-center text-[#7E81A2] text-sm md:text-base">
            <span className="w-4 h-4 bg-teal-500 rounded-full mr-3"></span>
            Arms, backs and seats are structurally reinforced
          </li>
        </ul>
        <div className="flex items-center space-x-4 mt-6">
          <button className="bg-pink-500 text-[#fff] family py-2 px-6 text-[17px] md:text-base hover:bg-pink-600 transition">
            Add To Cart
          </button>
          <div>
            <p className="text-[#1A0B5B] font-semibold text-sm md:text-base">B&B Italian Sofa</p>
            <p className="text-[#7E81A2] text-sm md:text-base">$32.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendingProducts() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold text-center text-[#1A0B5B] mb-10">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative bg-[#ffffff] shadow-md rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="bg-[#F6F7FB] w-full h-[236px] flex justify-center items-center">
              <Image src={`/trendingpropic${i}.png`} alt="Trending Product" width={130} height={150} className="object-contain" />
            </div>
            <div className="p-4">
              <h3 className="text-base sm:text-sm md:text-lg font-semibold text-[#151875] mb-2">Cantilever Chair</h3>
              <div className="flex items-center justify-evenly">
                <p className="text-sm md:text-base font-bold text-[#151875]">$26.00</p>
                <p className="text-sm md:text-base font-normal text-[#151875]/30 line-through">$42.00</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiscountItem() {
  return (
    <div className="wrapper">
      <h2 className="text-3xl font-bold text-center text-[#1A0B5B] mt-10">Discount Item</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className="text-[#fb2e86] text-[16px] lg:text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">Wood Chair</div>
        <div className="text-[#151875] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">Plastic Chair</div>
        <div className="text-[#151875] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">Sofa Collection</div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 gap-12 mb-20">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl family lg:text-4xl font-bold text-[#151875] mb-2">20% Discount On All Products</h1>
          <p className="text-[#FB2E86] text-[21px] font-normal family mb-4">Eams Sofa Compact</p>
          <p className="text-[#B7BACB] font-['Lato'] text-[17px] font-normal tracking-[0.34px] leading-[30px] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>
          <button className="mt-6 bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition">Shop Now</button>
        </div>
        <div className="flex-1 relative flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-pink-100 rounded-full absolute top-1/2 -translate-y-1/2 -z-10"></div>
          <Image src="/discountitempic.png" alt="Discount Item" width={500} height={500} className="object-contain" />
        </div>
      </div>
    </div>
  );
}

function TopCategories() {
  return (
    <div className="container mx-auto px-4 py-10 mb-20">
      <h2 className="text-3xl font-bold text-center text-[#151875] mb-20">Top Categories</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] h-auto flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <div className="w-[269px] h-[269px] bg-[#f6f7fb] rounded-full shadow-md flex items-center justify-center">
              <Image src={`/topcategoriespic${i}.png`} alt={`Category ${i}`} width={160} height={160} className="object-contain" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-[#151875] text-xl font-semibold">Mini LCW Chair</h3>
              <p className="text-[#151875] text-base font-normal">$56.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="relative w-full h-auto mb-20">
      <Image src="/newsletterpic.png" alt="Newsletter Background" width={1920} height={462} className="w-full h-[462px] object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-[#151875] family text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold leading-tight tracking-[0.525px] px-4">
          Get Latest Update By Subscribe<br/>Our Newsletter
        </h1>
        <button className="mt-4 bg-[#FB2E86] text-[#fff] family px-6 py-2 hover:bg-red-400 transition">Shop Now</button>
      </div>
    </div>
  );
}

function LatestBlog() {
  return (
    <div>
      <h2 className="text-3xl family font-bold text-center text-[#1A0B5B] mb-10">Latest Blog</h2>
      <div className="wrapper flex flex-wrap gap-12 justify-center">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-full sm:w-[370px] h-auto relative">
            <div className="relative bg-[#fff] rounded-[5px]">
              <div className="w-full h-[255px] bg-[#fff] rounded-t-[5px] overflow-hidden">
                <Image src={`/latestblog${i}.png`} alt="Blog Post" width={370} height={255} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-[#151875] text-lg font-bold">Top essential Trends in 2021</div>
                <div className="flex items-center gap-2 mt-2 text-sm text-[#151875]">
                  <span>SaberAli</span>
                  <span>|</span>
                  <span>21 August, 2020</span>
                </div>
                <p className="mt-4 text-[#72718f] text-base leading-[1.8]">
                  More off this less hello samlande lied much over tightly circa horse taped mightly
                </p>
                <a href="#" className="mt-4 block text-[#151875] underline text-base">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}