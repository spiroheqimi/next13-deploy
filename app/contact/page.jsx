import Link from "next/link";
import ContactForm from "./ContactForm";

export default function page() {
  return (
    <div className="top-0 w-screen h-screen bg-background-color">
      <div className="w-full h-full md:flex items-center justify-between overflow-auto gap-10 md:px-28 px-10 py-10">
        <div className="w-full sm:h-full flex flex-col justify-center items-start text-mytext-color space-y-10 px-20 ">
          <p className="md:text-6xl text-2xl"> Get in Touch </p>
          <p className="md:text-2xl text-xl"> spiroheqimi92@gmail.com </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Blanditiis, ullam tempora adipisci illo accusantium minima
            molestiae, perferendis asperiores architecto ad eaque consequatur,
            voluptatem dolorem unde dolores ut nisi culpa iste.
          </p>
          <div className="z-0 flex items-start gap-5">
            <button>
              <Link href="https://github.com/spiroheqimi">
                <ion-icon name="logo-github"></ion-icon>
              </Link>
            </button>

            <button>
              <Link href="https://www.linkedin.com/in/spiro-heqimi-b80295236/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
            </button>
          </div>
        </div>

        <div className="w-full py-10 pt-20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
