import Card from "../Utilities/card.github";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="pt-6">
          <div className="flex text-3xl justify-center">
            <h3 className="font-bold">Projects</h3>
          </div>
        </div>
        <div className="md:px-20">
          <div className="container mx-auto p-3">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
              <Card />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
