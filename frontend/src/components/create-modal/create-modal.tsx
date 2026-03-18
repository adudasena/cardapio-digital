import { useState } from "react"; /*hook que retorna array (onde o primeiro tem o valor que fica salvo, e o segundo é a função de atualização). A variável é atualizada pelo set(Title, Image, Price)*/
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import type { FoodData } from "../../interface/FoodData";

interface InputProps {
  label: string;
  value: string | number;
  updateValue: (value: any) => void;
}

const Input = ({label, value, updateValue}: InputProps) => {
  return (
    <>
    <label> {label} </label>
    <input value={value} onChange={ event => updateValue(event.target.value)}></input>
    </>
)}

export function CreateModal() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const { mutate } = useFoodDataMutate(); /*Função de mutação para enviar dados de comida*/

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData); /*Envia os dados para o backend*/ 
    }

  return (
    <div className="modal-overlay">
      <div className="modal-body"></div>
      <h2> Cadastre um novo item no cardápio</h2>
      <form className="input-container">
      <Input label="title" value={title} updateValue={setTitle} />
      <Input label="price" value={price} updateValue={setPrice} />
      <Input label="image" value={image} updateValue={setImage} />
      </form>
        <button onClick={submit} className="btn-secondary"> Enviar </button>
    </div>
  );
}