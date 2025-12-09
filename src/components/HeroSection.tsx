import heroImage from "@/assets/heroimage.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-white flex justify-center items-center">
      <div
        className="
          w-full 
          max-w-[1600px]
          mx-auto
          bg-center 
          bg-no-repeat 
          bg-contain
        "
        style={{
          backgroundImage: `url(${heroImage})`,
          aspectRatio: "16 / 9",  // PERFECT scaling at all screen sizes
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
