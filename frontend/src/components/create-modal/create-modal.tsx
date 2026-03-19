import { useEffect, useState } from "react"; /*hook que retorna array (onde o primeiro tem o valor que fica salvo, e o segundo é a função de atualização). A variável é atualizada pelo set(Title, Image, Price)*/
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import type { FoodData } from "../../interface/FoodData";
import './modal.css';

interface InputProps {
  label: string;
  value: string | number;
  updateValue: (value: any) => void;
}
interface ModalProps {
    closeModal: () => void; 
}

const Input = ({label, value, updateValue}: InputProps) => {
  return (
    <>
    <label> {label} </label>
    <input value={value} onChange={ event => updateValue(event.target.value)}></input>
    </>
)}

export function CreateModal({closeModal}: ModalProps) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    // Trocamos isLoading por isPending aqui:
    const { mutate, isSuccess, isPending } = useFoodDataMutate(); 

    const submit = () => {
        const foodData: FoodData = { title, price, image }
        mutate(foodData); 
    }

    useEffect(() => {
        if(!isSuccess) return;
        closeModal();
    }, [isSuccess, closeModal]) 

  return (
    <div className="modal-overlay">
        {/* TODO o conteúdo deve ficar dentro desta div abaixo para o CSS centralizar */}
        <div className="modal-body">
            <button className="btn-close" onClick={closeModal}>X</button>
            <h2>Cadastre um novo item no cardápio</h2>
            <form className="input-container">
                <Input label="title" value={title} updateValue={setTitle} />
                <Input label="price" value={price} updateValue={setPrice} />
                <Input label="image" value={image} updateValue={setImage} />
            </form>
            <button onClick={submit} className="btn-secondary">
                {isPending ? 'Postando...' : 'postar'}
            </button>
        </div>
    </div>
  );
}