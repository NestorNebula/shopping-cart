interface Item {
  id: number,
  title: string,
  description: string,
  category: string,
  price: number,
  rating: number,
  brand?: string,
  reviews: Review,
  images: any[],
}

interface Review {
  rating: number,
  comment: string,
  date: Date,
  reviewerName: string,

}

export type { Item };