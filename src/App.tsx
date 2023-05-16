import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { EmpresaData } from './interface/EmpresaData';
import { useEmpresaData } from './hooks/useEmpresaData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useEmpresaData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Empresa</h1>
      <div className="card-grid">
        {data?.map(empresaData => 
          <Card
            cep={empresaData.cep} 
            cnpj={empresaData.cnpj} 
            nomefantasia={empresaData.nomefantasia}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App

