const skills = [
  {
    name: "React Js",
    description:
      "I use React to benefit from high-performance rendering, a modern architecture, and an excellent developer experience. Its combination with NextJS allows me to build fast, modular, and SEO-optimized interfaces while maintaining a smooth workflow. ",
    image: "/images/react.png",
    className: "animate-spin",
  },
  {
    name: "Tailwind CSS",
    description:
      "Tailwind CSS allows me to quickly style my interfaces using an efficient, utilitarian approach. I get a consistent, responsive, and clean design without wasting time creating heavy or repetitive CSS files. ",
    image: "/images/tailwind.png",
    className: "",
  },
  {
    name: "Figma",
    description:
      "I use Figma to design and prototype my interfaces with great precision. The tool facilitates visualization, collaboration, and rapid iteration, resulting in clear mockups before development.",
    image: "/images/figma.png",
    className: "",
  },
];

const AutoScrollImages = ({ images }) => {
  return (
    <div className="overflow-hidden relative w-full">
      <div className="flex animate-scroll">
        {/* On duplique la liste pour créer l’effet infini */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="max-w-12 max-h-12 mx-4 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col items-start space-y-4 mt-4 mb-16">
      <p className="text-[#9CA3AF] text-lg md:text-xl font-light max-w-3xl">
        Here are the main technologies and tools I use daily for my web and
        interface design projects.
      </p>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white/5 py-4 px-4 md:px-2  rounded-lg"
        >
          <img
            src={skill.image}
            alt={skill.name}
            className={`${skill.className} w-12 h-12 object-contain `}
          />
          <div>
            <h3 className="text-white text-xl font-semibold">{skill.name}</h3>
            <p className="text-[#9CA3AF] mt-2 max-w-3xl">{skill.description}</p>
          </div>
        </div>
      ))}
      <p className="text-[#9CA3AF] text-lg md:text-xl font-light max-w-3xl mt-8">
        The rest of my tech stack, as someone always eager to learn more,
        consists of the following technologies and tools:
      </p>
      <div className="w-full max-w-3xl overflow-hidden relative mt-4">
        <AutoScrollImages
          images={[
            "/images/html.png",
            "/images/css.png",
            "/images/javaScript.png",
            "/images/bootstrap.png",
            "/images/typeScript.png",
            "/images/nodejs.png",
            "/images/nextjs.png",
            "/images/git.png",
            "/images/github.png",
            "/images/photoshop.png",
            "/images/illustrator.png",
            "/images/Blender.png",
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
