import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="sm:w-2/3 h-2/3 atlas-section flex flex-col items-center">
        <div className="grow flex flex-col items-center mx-3 my-2">
          <h1 className="text-3xl py-4">Atlas de Patologia Veterinária</h1>
          <p>Em construção...</p>
        </div>
        <div className="my-2 px-2 py-1 w-max h-max button-link text-center text-2xl">
          <a href="/atlas">Visita o atlas</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
