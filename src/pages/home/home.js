import {Navbar} from '../../components/nav/nav'
import {Category} from '../../components/category/category'
import { Banner } from "../../components/banner/banner";
import {HomeCard} from '../../components/home-card/home-card'
export const Home=()=>{
    return(
        <div>
        <Navbar/>
        <Category/>
        <Banner/>
        <HomeCard/> 
        </div>
    )
}