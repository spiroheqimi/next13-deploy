'use client'

import Link from "next/link";
import Image from "next/image";
import projectimg from "./public/project-img.jpg";
import CV from './public/SpiroHeqimiresume.pdf';


export default function Home() {
  let projects = [
    {
      id: 1,
      name: "Project 1",
      par: "Sign in / Sign up Validation ",
      status: "Comming Soon",
      link: "/projects",
    },
    {
      id: 2,
      name: "Project 2",
      par: `E-commerce website`,
      status: "Comming Soon",
      link: "/projects",
    },
    {
      id: 3,
      name: "Project 3",
      par: "Weather App",
      status: "Comming Soon",
      link: "/projects",
    },
    {
      id: 4,
      name: "Project 4",
      par: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "/projects",
    },
    {
      id: 5,
      name: "Project 5",
      par: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "/projects",
    },
  ];

  return (
    <>
      <main className="top-0 w-screen h-screen overflow-hidden bg-background-color">
        <div className="flex mx-14 my-10 lg:px-10 xl:px-20 xl:pt-48 lg:pt-36 sm:pt-36">
          <div className="xl:w-3/5 w-full flex flex-col justify-center text-left text-mytext-color lg:pl-2 ">
            <h1 className="md:text-2xl text-lg"> Hello, My name is Spiro </h1>
            <h1 className="md:text-3xl text-xl">
              I am a
              <span className="text-violet-600"> Front-End Developer</span>
            </h1>

            <p className="md:text-md text-sm pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              nulla repudiandae sed iure ratione deleniti eaque qui error nihil
              asperiores, nisi possimus beatae necessitatibus animi cupiditate
              numquam laborum alias molestiae.
            </p>

            <div className="z-0 flex items-start gap-5 py-4">
              
              <button >
                <Link href="https://github.com/spiroheqimi">
                  <ion-icon name="logo-github"></ion-icon>
                </Link>
              </button>

              <button >
                <Link href="https://www.linkedin.com/in/spiro-heqimi-b80295236/">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </Link>
              </button>

            </div>

            <div className="py-4">
              <a 
                href={CV}
                target="_blank"
                rel="noreferrer"
                download>
                <button className="bg-violet-700 text-xl text-white px-8 py-3 rounded-full hover:scale-105 duration-100">
                  Download CV
                </button>
              </a>
            </div>

          </div>

          <div className="flex items-center justify-center xl:w-2/5 max-xl:hidden xl:mx-10">
 
            <Image
              className="rounded-xl "
              src={projectimg}
              width={800}
              height={800}
              alt="project 1"
            />

          </div>
        </div>
      </main>

      <section className="top-0 w-screen h-full overflow-hidden bg-background-color">
        <div className="flex mx-14 my-10 lg:px-10 xl:px-20">
          <div className="w-full flex flex-col items-center justify-start text-mytext-color ">
            <h1 className="md:text-2xl text-lg top-0"> My Project </h1>
            <div className="h-full w-full flex flex-wrap justify-center pt-16">
              {projects.map((proj) => (

                <div
                  key={proj.id}
                  className={`flex flex-col bg-cards-color text-mytext-color shadow-lg shadow-slate-900 w-90 h-128 rounded-2xl overflow-hidden m-10 cursor-pointer hover:shadow-lg hover:shadow-violet-700 duration-300`}
                  onClick={ () => ( window.open(proj.link) )}
                >

                  <Image
                    src={projectimg}
                    width={500}
                    height={500}
                    alt={proj.name}
                  />

                  <div className="h-full flex flex-col justify-start items-center gap-4 px-7 py-6">
                    <h1 className="text-2xl"> {proj.name} </h1>
                    <p className="text-center"> {proj.par} </p>
                    <p className="text-center pt-10"> {proj.status} </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

