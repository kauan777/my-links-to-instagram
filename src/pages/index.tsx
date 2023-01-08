import Head from "next/head";
import CustomLink from "../components/CustomLink";
import Header from "../components/Header";
import { myLinks } from "../utils/links";

export default function Home() {
  return (
    <>
      <Head>
        <title>Links - Kauan Costa</title>
      </Head>
      <Header />
      <main className={`w-full px-8 p-8 lg:max-w-[900px] mx-auto`}>
        {/* INTRODUCTION */}
        <section className="flex flex-col gap-1.5 w-full text-center">
          <h1 className="text-white text-xl font-bold">Kauan Costa</h1>
          <h2 className="text-primary font-semibold">
            Desenvolvedor Full-Stack Junior
          </h2>
          <span className="text-gray-500 font-light">
            Atualmente atuando como desenvolvedor full-stack na Isnew Digital Tech
          </span>
        </section>
        <hr className="mt-8 border-[#4A4A4A]" />

        {/* LINKS */}

        <section className="mt-8 flex flex-col gap-4">
          {myLinks.map((link) => (
            <CustomLink key={link.description} link={link} />
          ))}
        </section>
      </main>
      <footer className="bg-[#010101] text-gray-600  py-4 text-center font-light">
        <span>Desenvolvido por Kauan Costa</span>
      </footer>
    </>
  );
}
