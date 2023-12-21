import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Routers from "../routes/Routers";

export default function layout() {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
}
