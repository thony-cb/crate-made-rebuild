import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col px-3 gap-4">
      <header className="w-full py-3">
        <nav className="flex flex-row font-semibold justify-between">
          <div className="flex flex-row  gap-2">
            <Link className="px-2 py-1 bg-accent rounded-full" href={"/"}>
              Collection
            </Link>
            <Link className="px-2 py-1 bg-accent rounded-full" href={"/"}>
              Contact
            </Link>
          </div>
          <Link className="px-2 py-1 bg-accent rounded-full" href={"/"}>
            Account
          </Link>
        </nav>
      </header>
      <section className="hero flex flex-col w-full ">
        <div className="w-full flex items-center justify-center h-fit">
          <h1 className="text-[18.7vw] font-bold leading-[30vh] tracking-[-1.5vw]">
            made create
          </h1>
        </div>
        <div className="grid grid-cols-4 font-semibold text-xl gap-4">
          <div className="col-span-2  text-2xl font-bold gap-4 aspect-auto grid grid-rows-4">
            <div className="w-full bg-accent  px-4 py-4 rounded-xl row-span-3">
              <p>
                Discover eco-friendly convenience with Made Crate – folding
                crates made from 100% recycled plastic waste. Proudly produced
                in Europe, stackable across different sizes & available in a
                great variety of delicious colours
              </p>
            </div>
            <div className="w-full flex items-center justify-center font-semibold row-span-1 p-4 rounded-xl bg-secondary">
              <p>Explore the full collection</p>
            </div>
          </div>
          <div className="col-span-1 hover:scale-105 transition-transform ease-in-out duration-[600ms] bg-secondary rounded-xl flex-col flex justify-between p-4 aspect-auto">
            <p>Midi</p>
            <p>Racing Green</p>
          </div>
          <div className="col-span-1 bg-secondary   hover:scale-105 transition-transform ease-in-out duration-[600ms] rounded-xl flex-col flex justify-between p-4 aspect-auto">
            <p>Maxi</p>
            <p>Minty</p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-4">
        <div className="col-span-1 aspect-square rounded-xl bg-secondary"></div>
        <div className="col-span-1 aspect-square rounded-xl bg-secondary"></div>
      </section>
      <section className="marquee w-full rounded-xl p-4 bg-black text-white font-semibold text-3xl overflow-x-hidden">
        <div className="flex flex-row gap-10 whitespace-nowrap">
          <p className="">3 stackable sizes</p>
          <p>Captivating colour spectrum</p>
          <p>EU-produced</p>
          <p>Eco-friendly material</p>
          <p>Unique design</p>
          <p>Captivating colour spectrum</p>
          <p>Captivating colour spectrum</p>
        </div>
      </section>
      <section className="w-full grid grid-cols-2 grid-rows-4 text-2xl font-semibold gap-4">
        <div className="bg-secondary col-span-1 rounded-xl p-4 text-6xl row-span-4">
          <p>What makes made crate unique?</p>
        </div>
        <div className="bg-secondary col-span-1 flex flex-row items-center justify-between rounded-xl p-4  row-span-1">
          <p>What makes made crate unique?</p>
          <PlusIcon className="" size={30} />
        </div>
        <div className="bg-secondary col-span-1 flex flex-row items-center justify-between rounded-xl p-4  row-span-1">
          <p>What makes made crate unique?</p>
          <PlusIcon className="" size={30} />
        </div>
        <div className="bg-secondary col-span-1 flex flex-row items-center justify-between rounded-xl p-4  row-span-1">
          <p>What makes made crate unique?</p>
          <PlusIcon className="" size={30} />
        </div>
        <div className="bg-secondary col-span-1 flex flex-row items-center justify-between rounded-xl p-4  row-span-1">
          <p>What makes made crate unique?</p>
          <PlusIcon className="" size={30} />
        </div>
      </section>
      <section className="specs grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-stone-800  text-accent col-span-1 text-5xl font-bold p-4">
          <p>Product specifications</p>
        </div>
        <div className="rounded-xl bg-stone-800 flex flex-col font-bold text-accent col-span-1 text-3xl p-4">
          <p>Mini: 24 x 16.5 x 9.5 cm – 270 gram</p>
          <p>Midi: 33 x 24 x 13 cm – 475 gram</p>
          <p>Maxi: 48 x 33 x 17.5 cm – 925 gram</p>
        </div>
      </section>
      <section className="grid-cols-2 grid gap-4 ">
        <div className="col-span-1 grid grid-rows-6 gap-4">
          <div className="flex flex-col gap-4 rounded-xl row-span-5 p-4 bg-accent text-stone-800">
            <h5 className="text-5xl font-bold">
              Eco-friendly & colourful design
            </h5>
            <p className="text-2xl font-semibold">
              Made Crate is a series of eco-friendly folding crates with a
              unique design. Made of 100% recycled plastic waste and produced in
              Europe, made crate offers sustainable storage solutions. Made
              Crate is stackable, comes in 3 different sizes and a great variety
              of vibrant colours. Sustainable, stackable, stylish - made crate
              redefines storage with a green touch.
            </p>
          </div>
          <div className="bg-secondary text-2xl row-span-1 col-span-1 font-semibold rounded-xl items-center justify-center flex">
            <p>Get in touch</p>
          </div>
        </div>
        <div className="col-span-1 bg-secondary rounded-xl"></div>
      </section>
      <section className=" grid grid-cols-4 text-lg font-semibold w-full gap-4">
        <div className="rounded-xl bg-secondary aspect-square flex flex-col justify-between p-4 col-span-1">
          <p>Midi</p>
          <p>Blush</p>
        </div>
        <div className="rounded-xl bg-secondary aspect-square flex flex-col justify-between p-4 col-span-1">
          <p>Midi</p>
          <p>Blush</p>
        </div>
        <div className="rounded-xl bg-secondary aspect-square flex flex-col justify-between p-4 col-span-1">
          <p>Midi</p>
          <p>Blush</p>
        </div>
        <div className="rounded-xl bg-secondary aspect-square flex flex-col justify-between p-4 col-span-1">
          <p>Midi</p>
          <p>Blush</p>
        </div>
      </section>
      <section className="flex items-center text-7xl font-semibold text-accent bg-stone-800 rounded-xl justify-center py-8">
        <p>Become a retailer</p>
      </section>
      <footer className="grid grid-cols-4 font-semibold text-xl gap-4">
        <div className="rounded-lg p-4 col-span-1 bg-secondary">
          <p> hello@madecrate.com</p>
        </div>
        <div className="rounded-lg p-4 col-span-1 bg-secondary">
          <p>+45 3134 9163</p>
        </div>
        <Link
          href={"https://cabrera-site-2.vercel.app/"}
          target="_blank"
          className="rounded-lg p-4 col-span-1 bg-secondary"
        >
          <p>Recreated by Diego Cabrera</p>
        </Link>
        <div className="rounded-lg p-4 col-span-1 bg-secondary">
          <p>© 2024 Made Crate</p>
        </div>
      </footer>
    </main>
  );
}
