import "./Content.css";
import "./index.css";
import React from "react";
import { Button } from "@material-tailwind/react";

// Types for section content
type ImagePosition = "left" | "right";

interface SectionProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
  imagePosition?: ImagePosition;
}

const Section: React.FC<SectionProps> = ({
  imageSrc,
  imageAlt,
  text,
  imagePosition = "left",
}) => (
  <div className="flex flex-col md:flex-row m-8 space-y-4 md:space-y-0 md:space-x-4 items-center">
    {imagePosition === "left" && (
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full md:w-1/2 rounded-lg object-cover"
      />
    )}
    <p className="w-full md:w-1/2 text-center md:text-left">{text}</p>
    {imagePosition === "right" && (
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full md:w-1/2 rounded-lg object-cover"
      />
    )}
  </div>
);

// Centered Image Section Component
const CenteredImageSection: React.FC<{
  imageSrc: string;
  imageAlt: string;
  text: string;
}> = ({ imageSrc, imageAlt, text }) => (
  <div className="flex flex-col items-center justify-center m-8 space-y-4">
    <img
      src={imageSrc}
      alt={imageAlt}
      className="w-full max-w-3xl rounded-lg object-cover mb-4"
    />
    <p className="text-center max-w-3xl px-4">{text}</p>
  </div>
);

const ButtonedImageSection: React.FC<{
  imageSrc: string;
  imageAlt: string;
  text: string;
  button: string;
}> = ({ imageSrc, imageAlt, text, button }) => (
  <div className="flex items-center justify-center m-8 bg-persian-green rounded-lg">
    <div className="relative w-full max-w-6xl">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full rounded-lg object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-black/50 text-white space-y-4 p-4 rounded-lg">
        <p className="text-center">{text}</p>
        <Button className="bg-white text-black px-4 py-2 rounded-md">
          {button}
        </Button>
      </div>
    </div>
  </div>
);


const Content: React.FC = () => {
  const sections: SectionProps[] = [
    {
      imageSrc: "src/assets/Artboard 1 copy 18.png",
      imageAlt: "Content 1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit possimus ducimus voluptas repudiandae, harum reiciendis neque unde, sequi, enim numquam autem animi sit est nemo magnam! Ipsum itaque sint consequuntur!",
      imagePosition: "left",
    },
    {
      imageSrc: "src/assets/Artboard 1 copy 19.png",
      imageAlt: "Content 2",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit possimus ducimus voluptas repudiandae, harum reiciendis neque unde, sequi, enim numquam autem animi sit est nemo magnam! Ipsum itaque sint consequuntur!",
      imagePosition: "right",
    },
  ];

  // Centered image section
  const centeredSection = {
    imageSrc: "src/assets/Artboard 1 copy 18.png",
    imageAlt: "Centered Content",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit possimus ducimus voluptas repudiandae, harum reiciendis neque unde, sequi, enim numquam autem animi sit est nemo magnam! Ipsum itaque sint consequuntur!",
  };

  return (
    <div className="bg-white font-funnel">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row rounded-xl m-4">
        <div className="flex flex-col justify-center p-4 md:w-1/2">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-base mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos aliquid maiores ullam sint rem quam? Nihil reiciendis
              magnam, pariatur aut debitis natus cupiditate doloremque dolores
              vero, voluptatibus necessitatibus. Officiis, voluptate.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:w-1/2 p-4">
          <img
            src="src/assets/Artboard 1 copy 18.png"
            alt="Hero Image"
            className="rounded-xl max-h-full max-w-full object-cover"
          />
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="flex flex-row justify-around text-center py-4 bg-gray-50">
        {["Performance", "Innovation", "Quality"].map((stat, index) => (
          <h2 key={index} className="text-xl font-semibold text-gray-700">
            {stat}
          </h2>
        ))}
      </div>

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <Section
          key={index}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          text={section.text}
          imagePosition={section.imagePosition}
        />
      ))}

      {/* Centered Image Section */}
      <CenteredImageSection
        imageSrc={centeredSection.imageSrc}
        imageAlt={centeredSection.imageAlt}
        text={centeredSection.text}
      />
      <div className="flex justify-center">
        <Button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
          Get Started
        </Button>
      </div>

      <ButtonedImageSection
        imageSrc={centeredSection.imageSrc}
        imageAlt={centeredSection.imageAlt}
        text={centeredSection.text}
        button="Get Started"
      />
      {/* Two-Column Text Section */}
      <div className="flex flex-col md:flex-row m-8 space-y-4 md:space-y-0 md:space-x-4">
        {[1, 2].map((_, index) => (
          <p key={index} className="w-full md:w-1/2 text-center md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            possimus ducimus voluptas repudiandae, harum reiciendis neque unde,
            sequi, enim numquam autem animi sit est nemo magnam! Ipsum itaque
            sint consequuntur!
          </p>
        ))}
      </div>
    </div>
  );
};

export default Content;
