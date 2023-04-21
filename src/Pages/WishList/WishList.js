import { ProductCard } from "../../components"

export const WishList = () => {
    const wishListProduct = [
        {
            name: "pizza",
            images: "/images/baked-cheesy-momo-meal.jpg",
            price: 121,
          },
          {
            name: "pizza",
            images: "/images/baked-cheesy-momo-meal.jpg",
            price: 121,
          },
          {
            name: "pizza",
            images: "/images/baked-cheesy-momo-meal.jpg",
            price: 121,
          },
          {
            name: "pizza",
            images: "/images/baked-cheesy-momo-meal.jpg",
            price: 121,
          },
    ]

    return(
        <ProductCard isWishlist={true} />
    )
}
