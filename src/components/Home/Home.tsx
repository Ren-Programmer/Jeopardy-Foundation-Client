import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Home.css";

export interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <div id="container">
      <Header />
    
      <Body />
      <Footer />
    </div>
  );
}
