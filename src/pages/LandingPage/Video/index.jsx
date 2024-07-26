function Video() {
  return (
    <section className="md:px-6 hidden py-36 bg-accent-1 bg-opacity-30 flex flex-col  w-full gap-12 lg:px-32 items-center justify-center">
      <iframe
        src="https://www.youtube.com/embed/lPrjP4A_X4s?si=bSY7qw8u_iXuRFKj"
        title="YouTube video player"
        className="w-full h-[300px] md:w-[700px] md:h-[450px] lg:w-[900px] lg:h-[500px]"
        frameBorder="0"
        allow=""
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </section>
  );
}

export default Video;
