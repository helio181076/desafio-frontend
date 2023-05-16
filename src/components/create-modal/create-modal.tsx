import { useEffect, useState } from 'react';
import { useEmpresaDataMutate } from '../../hooks/useEmpresaDataMutate';
import { EmpresaData } from '../../interface/EmpresaData';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [cnpj, setCnpj] = useState("");
    const [cep, setCep] = useState(0);
    const [nomefantasia, setNomefantasia] = useState("");
    const { mutate, isSuccess, isLoading } = useEmpresaDataMutate();

    const submit = () => {
        const empresaData: EmpresaData = {
            cnpj, 
            cep,
            nomefantasia
        }
        mutate(empresaData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre uma nova empresa</h2>
                <form className="input-container">
                    <Input label="cnpj" value={cnpj} updateValue={setCnpj}/>
                    <Input label="cep" value={cep} updateValue={setCep}/>
                    <Input label="nomefantasia" value={nomefantasia} updateValue={setNomefantasia}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}