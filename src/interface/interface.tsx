
interface product {
    id:string,
    title : string,
    price : number,
    discountPercentage: number,
    img : string,
    rating: number
}

interface cart {
    id: string,
    quantity:number
}

export type { product, cart}