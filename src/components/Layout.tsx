import List from "./List";
import Navbar from "./Navbar";
import web3Desktop from "/image-web-3-desktop.jpg";
import web3Mobile from "/image-web-3-mobile.jpg";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="grid lg:grid-cols-3 py-10 gap-6">
        <div className="lg:col-span-2">
          <div>
            <img
              src={web3Desktop}
              alt="web3 image"
              className="hidden sm:flex"
              width={800}
              height={200}
            />
            <img
              src={web3Mobile}
              alt="web3 image"
              className="flex sm:hidden"
              width={800}
              height={200}
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-6 pt-4">
            <div>
              <p className="text-6xl font-bold">
                The Bright Future of Web 3.0?
              </p>
            </div>
            <div className="">
              <p className="mb-7 leading-relaxed">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="bg-black text-white px-8 py-3 uppercase font-bold tracking-widest">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-blue-950 py-6 px-5">
          <h3 className="text-yellow-500 font-bold text-3xl pb-2">New</h3>
          <div className="flex flex-col gap-2 py-4 border-b border-gray-100 border-opacity-25">
            <p className="text-white text-xl font-bold">
              Hydrogen VS Electric Cars
            </p>
            <p className="text-gray-100 opacity-60">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="flex flex-col gap-2 py-4 border-b border-gray-100 border-opacity-25">
            <p className="text-white text-xl  font-bold">
              The Downsides of AI Artistry
            </p>
            <p className="text-gray-100 opacity-60">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <p className="text-white text-xl  font-bold">
              Is VC Funding Drying Up?
            </p>
            <p className="text-gray-100 opacity-60">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <List />
    </div>
  );
}
