// const Skills = () => {
//   return (
//     <section id="skills">
//       <div className="container">
//         <div className="p-6">
//           <div className="flex text-3xl justify-center">
//             <h3 className="font-bold">Skills</h3>
//           </div>
//         </div>
//         <div className="experience-body">
//           <div className="experience-body-container">
//             <div className="experience-body-title">
//               <h3>1 Year Experience</h3>
//             </div>
//             <div className="experience-body-detail">
//               <div className="experience-detail">
//                 <div>
//                   <h4>HTML</h4>
//                 </div>
//               </div>
//               <div className="experience-detail">
//                 <div>
//                   <h4>CSS</h4>
//                 </div>
//               </div>
//               <div className="experience-detail">
//                 <div>
//                   <h4>Javascript</h4>
//                 </div>
//               </div>
//               <div className="experience-detail">
//                 <div>
//                   <h4>Bootstrap</h4>
//                 </div>
//               </div>
//               <div className="experience-detail">
//                 <div>
//                   <h4>Tailwind</h4>
//                 </div>
//               </div>
//               <div className="experience-detail">
//                 <div>
//                   <h4>ReactJS</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Skills = () => {
  return (
    <section id="skills" className="pb-24">
      <div className="flex text-3xl justify-center">
        <h3 className="font-bold">Skills</h3>
      </div>
      <div className="gap-10 flex flex-col items-center justify-center md:flex-row pt-10">
        <div className="w-full rounded-md bg-gray-800 text-white p-4 md:w-72">
          <h1 className="text-indigo-600 font-bold text-2xl md:text-lg">
            Languages
          </h1>
          <ul className="p-4 md:text-sm">
            <li>
              HTML <i className="ti ti-brand-html5"></i>
            </li>
            <li>
              CSS <i className="ti ti-brand-css3"></i>
            </li>
            <li>
              JavaScript <i className="ti ti-brand-javascript"></i>
            </li>
            <li>
              PHP <i className="ti ti-brand-php"></i>
            </li>
            <li>
              BASH <i className="ti ti-brand-php"></i>
            </li>
            <li>
              C++ <i className="ti ti-brand-php"></i>
            </li>
            <li>
              Python <i className="ti ti-brand-python"></i>
            </li>
          </ul>
        </div>

        <div className="w-full rounded-md bg-gray-800 text-white p-4 md:w-72">
          <h1 className="text-indigo-600 font-bold text-2xl md:text-lg">
            Framework, Library & Runtime
          </h1>
          <ul className="p-4 md:text-sm">
            <li>
              ReactJS <i className="ti ti-brand-html5"></i>
            </li>
            <li>
              Bootstrap <i className="ti ti-brand-css3"></i>
            </li>
            <li>
              Tailwind CSS <i className="ti ti-brand-javascript"></i>
            </li>
            <li>
              Laravel <i className="ti ti-brand-php"></i>
            </li>
            <li>
              NodeJS <i className="ti ti-brand-php"></i>
            </li>
          </ul>
        </div>

        <div className="w-full rounded-md bg-gray-800 text-white p-4 md:w-72">
          <h1 className="text-indigo-600 font-bold text-2xl md:text-lg">
            Database
          </h1>
          <ul className="p-4 md:text-sm">
            <li>
              MySQL <i className="ti ti-brand-html5"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
