import "./card.css";

interface CardProps{
    cep: number,
    cnpj: string,
    nomefantasia: string
}

export function Card({ cep, nomefantasia, cnpj } : CardProps){
    return(
        <div className="card">
            <h2>{nomefantasia}</h2>
            <p><b>CNPJ:</b>{cnpj}</p>
            <p><b>CEP:</b>{cep}</p>
        </div>
    )
} 

