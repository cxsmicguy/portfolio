import Image from 'next/image'
import { SiCss3, SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiWordpress } from "react-icons/si";
import PortfolioComp, { PortfolioComp2 } from './PortfolioComp';

export default function Portfolio() {
  return (
    <center>
      <br /><br />
      <div className='text-left p-4'>
        <h3 className='text-md font-semibold'>PORTFOLIO</h3>
        <h2 className='text-3xl mt-2 md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Every Projects Features My Skills.</h2>
      </div>
      <br />
      <PortfolioComp 
        img={"/vita.png"}
        name={"Vitals X"}
        description={"A free SEO tool made with love for fellow developers and bloggers to help them rank better :)"}
        lang1={"NextJS"}
        lang2={"TailwindCSS"}
        demo={"https://vitalsx.com"}>
      </PortfolioComp>
      <PortfolioComp2 
        img={"/moviedb.webp"}
        name={"Movie GUide"}
        description={"A movie guide app website made with Next.js can showcase your skills in web development. Use Next.js to build a performant and SEO-friendly website for browsing and searching for movies."}
        lang1={"HTML, JS"}
        lang2={"CSS"}
        code={"https://github.com/cxsmicguy/moviedb"}
        codeI="code"
        demo={"https://moviedb.cosmicguy.online/"}>
      </PortfolioComp2>
      <PortfolioComp 
        img={"/basic.webp"}
        name={"Basic AI"}
        description={"A small AI made with just NextJS, Tailwind and my brain :)"}
        lang1={"NextJS"}
        lang2={"TailwindCSS"}
        demo={"https://basicai.online/"}>
      </PortfolioComp>
      <PortfolioComp2 
        img={"/youtube-clone.webp"}
        name={"Youtube Clone"}
        description={"A YouTube clone website built with ReactJS and RapidAPI can showcase your web development and API integration skills. Use Next.js for server-side rendered React apps and RapidAPI for YouTube API integration."}
        lang1={"React"}
        lang2={"CSS"}
        code={"https://github.com/cxsmicguy/youtube-clone"}
        codeI="code"
        demo={"https://ytclone.cosmicguy.online/"}>
      </PortfolioComp2>
      <PortfolioComp 
        img={"/google-clone.webp"}
        name={"Google Clone"}
        description={"A Google clone website made with Next.js and Google API can showcase your web development and API integration skills. Use Next.js for server-side rendered React apps and Google API for search functionality."}
        lang1={"NextJS"}
        lang2={"TailwindCSS"}
        codeI="code"
        code={"https://github.com/cxsmicguy/google-clone"}
        demo={"https://google-clone.cosmicguy.online/"}>
      </PortfolioComp>
    </center>
  );
}