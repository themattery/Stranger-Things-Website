"use client";
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

function Logo() {
  return (
    <div class="main-logo">
      <figure>
        <img src="./img/st_logo_netflix.png.webp" alt="Stranger Things Netflix Logo" />
        <figcaption class="main-logo-title">- The Official Store -</figcaption>
        <p class="main-logo-caption">DON’T MISS THE OFFICIAL STORE COMING TO YOUR CITY</p>
      </figure>
      <div class="main-button-box">
        <a href="#cards" class="main-button">SEE CITIES</a>
      </div>
    </div>
  );
}

function Cards() {
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
    <>
      <div>
        <h1>Cards</h1>
        <div class="info-cards-grid">
          {cards.map((card) => (
            <div key={card.id} class="info-card">
              <img src={card.image} alt={card.title} />
              <div class="info-card-title">{card.title.toUpperCase()}</div>
              <p>Tipo: {card.type}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function MainContent() {
  return (
    <div class="main-content">
      <div class="main-content-title">
        HAWKINS IS WAITING FOR YOU!
      </div>
      <section class="info-grid">
        <div class="main-info-section">
          <p>Ready for a new adventure, nerds? Step into the official Stranger Things Store. Discover some of the show's most iconic locations and check out all of the gnarly merch and rad activities waiting inside. Answer the yellow phone at Joyce’s house, play games at the Palace Arcade, and <strong>visit the Creel House Attic</strong>, if you dare. Just know that you might come face to face with a Demogorgon—don’t say we didn’t warn you!
          </p>
          <figure>
            <img src="./img/Extras-img/extras-background-loja.jpg" alt="" />
            <figcaption>Exclusive Merch & Memorabilia</figcaption>
          </figure>
        </div>
        <div class="main-info-section">
          <figure>
            <img src="./img/Extras-img/extras-background-trailers.jpg" alt="" />
            <figcaption>Iconic Locations</figcaption>
          </figure>
          <p>Get your hands on tons of exclusive and custom pieces only available at the store! Take home “Elegorgon”, a collaboration between Netflix and iam8bit. Sitting alongside you will find General Mills Stranger Things Cereal, packaged in original boxes from the 80’s but set in the world of Stranger Things, and a wide variety of collectible Bandai Stranger Things Hawkins Action Figures.
          </p>
        </div>
        <div class="main-info-section">
          <p>Embark on an interactive journey filled with photo opportunities and fun easter eggs, as you explore Hawkins and settings like Joyce’s House, Palace Arcade and Starcourt Mall. Hang out with Scoops Ahoy employees, pick out a bitchin’ outfit, and much more! No matter what your style, you’ll be sure to find your favorite place in Hawkins.
          </p>
          <div class="list-section">
            <ul class="">
              <li class="">
                Enjoy a truly <strong>immersive shopping experience</strong> themed around the Stranger Things universe
              </li>
              <li class="">
                Explore <strong>realistic set recreations</strong> of iconic locations from the show
              </li>
              <li class="">
                Browse through a wide array of <strong>Stranger Things products</strong> integrated into each location
              </li>
              <li class="">
                Enjoy stunning photo ops, interactive activities, and many <strong>ǝƃuɐɹʇs</strong> moments!
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function ButtonCards() {
  return (
    <div class="all-cards-section">
        <section class="cards-box"> 
          <div class="card foto1" data-type="character">
              <h1>CHARACTERS</h1>
          </div>
          <div class="card foto2" data-type="episode">
              <h1>EPISODES</h1>
          </div>
          <div class="card foto3" data-type="news">
              <h1>NEWS</h1>
          </div>
          <div class="card foto4" data-type="all">
              <h1>SHOW ALL</h1>
          </div>
        </section>
      </div>
  );
}

function Container() {
  return (
    <div class="container">
      <MainContent />
      <ButtonCards />
      <Cards />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Logo />
      <Container />
    </>
  )
}