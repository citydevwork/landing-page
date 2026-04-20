import "./App.css";

function App() {
  return (
    <>
      <section
        className="w-full min-h-[90dvh] flex flex-col justify-center items-center relative overflow-y-auto"
        style={{
          background: "url(./hero.webp) no-repeat center center /cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute hero-content">
          <h1></h1>
          <p></p>
        </div>
        {/* <img src="./hero.webp" alt="Hero" className="w-full object-contain" /> */}
      </section>

      <section className="w-full content"></section>
      <section className="w-full flex flex-col justify-center items-center footer ">
        <div className="w-full flex justify-center items-center bg-slate-800">
          <div className="flex flex-row min-w-7xl mx-auto gap-4 h-50 p-4 justify-between items-start">
            <div className="flex flex-col text-left">
              <img src="./logosinergi.svg" alt="Logo" width={150} style={{ filter: "brightness(0) invert(1)" }} />
              <h3 className="text-xl text-white my-2">
                PT Sinergi Mandiricipta Indonesia
              </h3>
              <p>
                Jl Puri Anjasmoro Blok E1, No.21, Semarang - Jawa Tengah 50144
                <br />
                <b>E :</b> sinergi@sekolahmusik.co.id
                <br />
                <b>M :</b> 08112971118
              </p>
            </div>
            <div className="flex">
              <div className="flex flex-col p-4 text-left">
                <h3 className="text-xl text-white my-2">Follow Us</h3>
                <ul className="flex flex-col">
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-xs py-2 text-gray-400">
          sekolahmusik.co.id © 2026 All rights reserved.
        </div>
      </section>
    </>
  );
}

export default App;
