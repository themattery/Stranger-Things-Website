"use client";
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function HomePage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const { data, error } = await supabase.from('cards').select('*');
      if (error) {
        console.error('Erro ao buscar dados:', error);
      } else {
        console.log('Dados buscados:', data);
        setCards(data);
      }
    }
    fetchCards();
  }, []);

  return (
    <div>
      <h1>Cards</h1>
      <div class="info-cards-grid">
        {cards.map((card) => (
          <div key={card.id} class="info-card">
            <img src={card.image}  alt={card.title} />
            <div class="info-card-title">{card.title.toUpperCase()}</div>
            <p>Tipo: {card.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}