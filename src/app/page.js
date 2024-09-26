"use client";
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Image from 'next/image';

function Logo() {
  return (
    <div className="main-logo">
      <figure>
        <Image src="/Stranger-Things-Website/img/st_logo_netflix.png.webp" alt="Stranger Things Logo" width={500} height={250} />
        <figcaption className="main-logo-title">- The Official Store -</figcaption>
        <p className="main-logo-caption">DON&apos;T MISS THE OFFICIAL STORE COMING TO YOUR CITY</p>
      </figure>
      <div className="main-button-box">
        <a href="#cards" className="main-button">SEE CITIES</a>
      </div>
    </div>
  );
}

function Cards({ filter }) {
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

  const filteredCards = cards.filter((card) =>
    filter === 'all' ? true : card.type === filter
  );

  return (
    <>
      <div className="info-cards-grid">
        {filteredCards.map((card) => (
          <div key={card.id} className="info-card">
            <img src={`/Stranger-Things-Website/${card.image}`} alt={card.title} />
            <div className="info-card-title">{card.title.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <div className="main-content-title">
        HAWKINS IS WAITING FOR YOU!
      </div>
      <section className="info-grid">
        <div className="main-info-section">
          <p>Ready for a new adventure, nerds? Step into the official Stranger Things Store. Discover some of the show&apos;s most iconic locations and check out all of the gnarly merch and rad activities waiting inside. Answer the yellow phone at Joyce&apos;s house, play games at the Palace Arcade, and <strong>visit the Creel House Attic</strong>, if you dare. Just know that you might come face to face with a Demogorgon—don&apos;t say we didn&apos;t warn you!
          </p>
          <figure>
            <img src="/Stranger-Things-Website/img/Extras-img/extras-background-loja.jpg" alt="" />
            <figcaption>Exclusive Merch & Memorabilia</figcaption>
          </figure>
        </div>
        <div className="main-info-section">
          <figure>
            <img src="/Stranger-Things-Website/img/Extras-img/extras-background-trailers.jpg" alt="" />
            <figcaption>Iconic Locations</figcaption>
          </figure>
          <p>Get your hands on tons of exclusive and custom pieces only available at the store! Take home “Elegorgon”, a collaboration between Netflix and iam8bit. Sitting alongside you will find General Mills Stranger Things Cereal, packaged in original boxes from the 80&apos;s but set in the world of Stranger Things, and a wide variety of collectible Bandai Stranger Things Hawkins Action Figures.
          </p>
        </div>
        <div className="main-info-section">
          <p>Embark on an interactive journey filled with photo opportunities and fun easter eggs, as you explore Hawkins and settings like Joyce&apos;s House, Palace Arcade and Starcourt Mall. Hang out with Scoops Ahoy employees, pick out a bitchin&apos; outfit, and much more! No matter what your style, you&apos;ll be sure to find your favorite place in Hawkins.
          </p>
          <div className="list-section">
            <ul className="">
              <li className="">
                Enjoy a truly <strong>immersive shopping experience</strong> themed around the Stranger Things universe
              </li>
              <li className="">
                Explore <strong>realistic set recreations</strong> of iconic locations from the show
              </li>
              <li className="">
                Browse through a wide array of <strong>Stranger Things products</strong> integrated into each location
              </li>
              <li className="">
                Enjoy stunning photo ops, interactive activities, and many <strong>ǝƃuɐɹʇs</strong> moments!
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function ButtonCards({ handleFilter }) {
  return (
    <div className="all-cards-section">
      <section className="cards-box">
        <div className="card foto1" data-type="character" onClick={() => handleFilter('character')}>
          <h1>CHARACTERS</h1>
        </div>
        <div className="card foto2" data-type="episode" onClick={() => handleFilter('episode')}>
          <h1>EPISODES</h1>
        </div>
        <div className="card foto3" data-type="news" onClick={() => handleFilter('news')}>
          <h1>NEWS</h1>
        </div>
        <div className="card foto4" data-type="all" onClick={() => handleFilter('all')}>
          <h1>SHOW ALL</h1>
        </div>
      </section>
    </div>
  );
}

function CommentSection() {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    if (!emailRegex.test(email)) {
      setErrorMessage('Endereço de e-mail inválido.');
      return;
    }

    if (comment.trim() === '') {
      setErrorMessage('Comentário está vazio.');
      return;
    }

    const { data, error } = await supabase.from('comments').insert([{ email, comment}]);

    if (error) {
      setErrorMessage('Erro ao enviar comentário.')
      console.error('Erro: ', error);
    } else {
      setSuccessMessage('Comentário enviado!');
      setEmail('');
      setComment('');
    }

  }

  return (
    <div className="comment-box">
      <h1>Leave a comment</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <textarea id="email" value={email} onChange={(e) => setEmail(e.target.value)} cols="30" rows="2" placeholder="email@example.com"></textarea>
        <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} cols="30" rows="8" placeholder="Leave a comment"></textarea>
        <button type="submit" className="comment-submit main-button">COMMENT</button>
      </form>
    </div>
  );
}

function Container({ handleFilter, filter }) {
  return (
    <div className="container">
      <MainContent />
      <ButtonCards handleFilter={handleFilter} />
      <Cards filter={filter}/>
      <CommentSection />
    </div>
  );
}

export default function HomePage() {
  const [filter, setFilter] = useState('all')

  const handleFilter = (type) => {
    setFilter(type)
  }

  return (
    <>
      <Logo />
      <Container handleFilter={handleFilter} filter={filter}/>
    </>
  )
}