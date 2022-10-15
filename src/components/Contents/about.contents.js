import Me from "../../Assets/Images/Me/me.png";

const About = () => {
  return (
    <>
      <section id="about">
        {/* <div className="p-6">
          <div className="flex text-3xl justify-center">
            <h3 className="font-bold">About</h3>
          </div>
        </div> */}
        <div className="grid justify-items-center pt-16">
          <img
            src={Me}
            className="object-scale-down object-center h-56 w-120"
            alt="me"
          />
          <div className="pt-6">
            <div className="flex text-3xl justify-center">
              <h4 className="font-bold text-2xl">Arman Dwi Pangestu</h4>
            </div>
          </div>
          <p className="text-gray-600 mt-5 md:px-56 px-10 text-xs md:text-base">
            Linux Enthusiat | Web Developer | Network Engineer
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
