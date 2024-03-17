import { BreadCrumbs } from "../components/BreadCrumbs";
import { Carousel } from "../components/Carousel";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavFooter } from "../components/NavFooter";
import { Navbar } from "../components/Navbar";
import { MoreProducts } from "../components/Product/MoreProducts";
import { ProductInfo } from "../components/Product/ProductInfo";
import { breadcrumbs, reviews } from "../data/ProductData";
import '../styles/ProductPage.scss'

export function ProductPage() {
    
      
    return(
        <div className="ProductPage">
            <Header />
            <Navbar />
            <BreadCrumbs items={breadcrumbs}/>
            <ProductInfo />
            <div className="Reviews">
                <Carousel reviewsPerPage={3} reviews={reviews} />
            </div>
            <div className="MoreProducts">
                <MoreProducts />
            </div>
            <div className="Bottom">
                <NavFooter />
                <Footer />
            </div>
        </div>
    )
}