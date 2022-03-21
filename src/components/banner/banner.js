import bannerImage from '../../assets/E-commerce-banner.jpg'
export const Banner=()=>{
    return(
        <section className="ecom-banner">
        <img src={bannerImage} alt="banner-image" className="banner-img my-2"/>
    </section>
    )
}