const Experience = () => {
  return (
    <section id="experience">
      <div className="grid justify-items-center">
        <div className="pt-6">
          <div className="flex text-3xl justify-center">
            <h3 className="font-bold">Pengalaman</h3>
          </div>
        </div>
        <h4 className="font-bold pt-4">PT CITRA JELAJAH INFORMATIKA</h4>
        <p className="mt-4">(2021 - Sekarang)</p>
        <div className="text-gray-600 mt-5 md:px-56 px-10 text-xs md:text-base text-bold">
          <ul style={{ listStyle: "outside" }}>
            <li>
              Menganalisa, merancang, instalasi kebutuhan jaringan di gedung,
              mall, sekolah, hotel, dsb
            </li>
            <li>Network Operation Center (NOC)</li>
            <li>Network Engineer</li>
            <li>Monitoring Server</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
