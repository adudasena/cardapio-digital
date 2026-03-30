export interface FoodData {
    id?: number, /*opcional porque quando for criar um novo item, o id ainda não existe. Ele será gerado pelo backend*/
    title: string, 
    image: string,
    price: number
}