import ResponsiveSearchBar from "@/app/Components/Search";
import Filters from "@/app/Components/Filters";
import Faqs from "./Components/faq/faq";


export default function Home() {
  return (
    <>

      <ResponsiveSearchBar />
      <Filters />
      <Faqs />
    </>
  );
}
