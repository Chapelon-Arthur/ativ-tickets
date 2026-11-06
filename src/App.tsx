import { useState } from 'react';

interface ItemTecnico {
  id: number;
  nome: string;
}

export function App() {
  const [textoInput, setTextoInput] = useState<string>("");
  const [curtidas, setCurtidas] = useState<number>(0);

  const itens: ItemTecnico[] = [
    { id: 1, nome: "React v18+" },
    { id: 2, nome: "TypeScript Stricto" },
    { id: 3, nome: "Vite Build Tool" }
  ];

  return (
    <div className="painel">
      <h1>Painel de Controle — TecInfo 2026</h1>


      <section>
        <input 
          type="text" 
          value={textoInput} 
          onChange={(e) => setTextoInput(e.target.value)} 
          placeholder="Digite algo..." 
        />
        <div className="cartao-espelho">
          <p>Texto em tempo real: {textoInput}</p>
        </div>
      </section>


      <section>
        <button onClick={() => setCurtidas(curtidas + 1)}>
          Curtir ({curtidas})
        </button>
        {curtidas > 5 && <p className="destaque">TECINFO 2026 🔥</p>}
      </section>

      <section>
        <h2>Tecnologias Aprendidas</h2>
        <ul>
          {itens.map((item) => (
            <li key={item.id}>{item.nome}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;