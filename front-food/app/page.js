import Feature from "./components/Feature";
import { getFetch } from '@/utils/fetch';
import ProductsTab from './components/products/ProductsTab';
import About from "./components/About";
import Contact from "./components/contact/Contact";

const Home = async () => {
  const productsTab=await getFetch('/products/products-tabs')
  // console.log(productsTab)
  return (
    <div>
        <Feature/>
        <ProductsTab tabList={productsTab.tabList } tabPanel={productsTab.tabPanel} />
        <About/>
        <Contact/>
    </div>
  )
}

export default Home