export default function About() {
  return (
    <div className="top-0 right-0 w-screen h-screen overflow-hidden bg-background-color">
      <div className=" w-screen h-screen flex items-start justify-center overflow-hidden">
        <div className="text-center flex flex-col md:gap-10 gap-4 xl:px-96 lg:px-48 md:px-20 md:pt-40 pt-32 px-20 text-white">
          <h1 className="md:text-4xl text-2xl text-mytext-color"> About Me </h1>
          <p className="md:text-lg text-md pt-6 text-mytext-color">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            itaque impedit vero voluptatum pariatur dolorum dicta repellat
            cupiditate autem error eum vel molestiae aperiam, possimus beatae
            cum culpa optio accusamus.
          </p>
        </div>
      </div>
    </div>
  );
}
