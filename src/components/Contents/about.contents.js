import Me from "../../Assets/Images/Me/me.png";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="p-6">
          <div className="flex text-3xl justify-center">
            <h3 className="font-bold">About</h3>
          </div>
        </div>
        <div className="grid justify-items-center">
          <img
            src={Me}
            className="object-scale-down object-center h-56 w-120"
          />
          <p className="text-gray-600 mt-5 md:px-56 px-10">
            Laborum in excepteur laborum dolor fugiat pariatur excepteur
            consectetur. Est laborum sint irure non non esse nisi non proident
            sit. Et labore reprehenderit nostrud aliquip incididunt incididunt
            ea ut nostrud. Id esse do pariatur elit. Anim officia anim consequat
            est aliquip aute in do deserunt anim.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
