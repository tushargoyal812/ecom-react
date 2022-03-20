import bannerImage from '../../assets/E-commerce-banner.jpg'
export const Banner=()=>{
    return(
        <section class="ecom-banner">
        <img src={bannerImage} alt="banner-image" class="banner-img my-2"/>
    </section>
    )
}