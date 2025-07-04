import "../app/styles/index.css";
import Layout from "@/shared/ui/Layout";
import Discount from "@/shared/ui/Discount";
import PagesList from "@/shared/ui/PagesList";

function App() {
  return (
    <>
      <Discount />
      <Layout>
        <PagesList></PagesList>
      </Layout>
    </>
  );
}

export default App;
