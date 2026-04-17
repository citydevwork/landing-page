import "./App.css";

function App() {
  return (
    <>
      <section className="w-full min-h-[90dvh] hero">
        <div className="hero-content">
          <h1></h1>
          <p></p>
        </div>
        <img src={"heroImg"} alt="Hero" className="hero-image" />
      </section>

      <section className="w-full content"></section>
      <section className="w-full flex flex-col justify-center items-center footer ">
        <div className="w-full flex justify-center items-center bg-slate-800">
          <div className="flex min-w-7xl mx-auto gap-4 h-[200px] p-4">
            PT Sinergi Mandiricipta Indonesia
          </div>
        </div>
        <div className="copyright text-xs">
          sekolahmusik.co.id © 2026 All rights reserved.
        </div>
      </section>
    </>
  );
}

export default App;
