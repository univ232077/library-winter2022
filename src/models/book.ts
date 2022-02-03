export default interface BookModel {
    id: number,
    price: number,
    name: string,
    author: string,
    year: number,
    description: string,
    category: string,
    image?: string,
}