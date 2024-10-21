'use client'
import Head from 'next/head';
import Image from 'next/image';
import living from "./public/rowyMainRoom.jpg";
import bath from "./public/rowyBathRoom.jpg";
import kitchen from "./public/rowyKitchen.jpg";
import sleeping from "./public/rowySleepingRoom.jpg";
import sleeping2 from "./public/rowySleepingRoom2.jpg";
import mapa from "./public/mapa.jpg";
import pl from "./public/flagaPl.jpg";
import usa from "./public/flagaUSA.jpg"
import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState('pl'); // Ustawienie języka domyślnego na polski

  // Funkcja zmieniająca język na angielski
  const switchToEnglish = () => {
    setLanguage('en');
  };

  // Funkcja zmieniająca język na polski
  const switchToPolish = () => {
    setLanguage('pl');
  };

  return (
    <div>
      <Head>
        <title>Apartamenty RSA Silver</title>
        <meta name="description" content="Komfortowy apartament w Rowach, blisko Słowińskiego Parku Narodowego" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Przycisk zmiany języka */}
      <div className="language-switcher">
        {language === 'pl' ? (

            <Image 
            id="lang-en" className="language-button" onClick={switchToEnglish}
            width={75}
            height={75}
            alt="usa flag"
            src={usa}
            /> 
        ) : (

            <Image 
            id="lang-en" className="language-button" onClick={switchToPolish}
            width={75}
            height={75}
            alt="usa flag"
            src={pl}
            /> 
        )}
      </div>

      {/* Główna sekcja z flexboxem */}
      <main className="main-content">
        <section className="left-content">
          <section className="text-center py-12">
            <h1>{language === 'pl' ? 'RSA Silver - Twój idealny apartament w Rowach' : 'RSA Silver - Your perfect apartment in Rowy'}</h1>
            <h2>{language === 'pl' ? 'Plażowa 5, 76-212 Rowy, Polska' : 'Plażowa 5, 76-212 Rowy, Poland'}</h2>
            <h2>{language === 'pl' ? 'Zadzwoń 509 786 989' : 'Call me  +48 509 786 989'}</h2>
            <p className="text-wrap">
              {language === 'pl' 
                ? 'Oferujemy komfortowy, ciekawie zaaranżowany i bogato wyposażony apartament położony w sąsiedztwie Słowińskiego Narodowego Parku, idealny dla rodzin, osób aktywnych i seniorów.'
                : 'We offer a comfortable, creatively arranged, and well-equipped apartment located near the Słowiński National Park, ideal for families, active people and seniors.'
              }
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center image-gallery">
              <Image src={living} width={500} height={250} alt="Main Room" className="gallery-image" />
              <Image src={bath} width={500} height={250} alt="Bath Room" className="gallery-image" />
              <Image src={kitchen} width={500} height={250} alt="Kitchen" className="gallery-image" />
              <Image src={sleeping2} width={500} height={250} alt="Sleeping Room" className="gallery-image" />
              <Image src={sleeping} width={500} height={250} alt="Sleeping Room" className="gallery-image" />
              <Image src={mapa} width={500} height={250} alt="Mapa" className="gallery-image" />
            </div>
          </section>

          {/* Atrakcje w okolicy */}
          <section className="mt-12 text-center">
            <h2>{language === 'pl' ? 'Atrakcje w okolicy' : 'Attractions in the area'}</h2>
            <p>
              {language === 'pl' 
                ? `"RSA Silver" oferuje komfortowy, ciekawie zaaranżowany i bogato wyposażony apartament położony w sąsiedztwie Słowińskiego Narodowego Parku...`
                : `"RSA Silver" offers a comfortable, creatively arranged, and well-equipped apartment located near the Słowiński National Park...`}
            </p>
          </section>

          {/* Lokalizacja */}
          <section className="mt-12 text-center">
            <h2>{language === 'pl' ? 'Lokalizacja' : 'Location'}</h2>
            <p>
              {language === 'pl' 
                ? 'Apartament RSA Silver położony jest zaledwie 100m od centrum i szerokiej, piaszczystej plaży obiekt zaopatrzony w:'
                : 'The RSA Silver apartment is located just 100 meters from the center and a wide, sandy beach. The property is equipped with:'}
            </p>
            <ul className="text-left mx-auto max-w-xl">
              <li>{language === 'pl' ? '✔ Bezpłatne WiFi' : '✔ Free WiFi'}</li>
              <li>{language === 'pl' ? '✔ Prywatny parking' : '✔ Private parking'}</li>
              <li>{language === 'pl' ? '✔ Telewizor z płaskim ekranem' : '✔ Flat-screen TV'}</li>
              <li>{language === 'pl' ? '✔ W pełni wyposażony aneks kuchenny' : '✔ Fully equipped kitchenette'}</li>
              <li>{language === 'pl' ? '✔ Łazienka z prysznicem' : '✔ Bathroom with shower'}</li>
              <li>{language === 'pl' ? '✔ Balkon z widokiem na miasto' : '✔ Balcony with city view'}</li>
            </ul>
            <p>
            {language === 'pl' 
                ? `Odległość ważnych miejsc od obiektu: Plaża dla psów Dębina-Ustka – 1,3 km, Słowiński Park Narodowy – 33 km. Najbliższe lotnisko, Lotnisko Gdańsk-Rębiechowo, znajduje się 141 km od obiektu RSA Silver.`
                : `Distance from important places: Dog Beach Dębina-Ustka – 1.3 km, Słowiński National Park – 33 km. The nearest airport, Gdańsk-Rębiechowo Airport, is located 141 km from the RSA Silver property.`}
            </p>
          </section>
        </section>
      </main>

      {/* Przycisk do rezerwacji */}
      <section className="mt-12 text-center contact">
        <a 
          id="link" 
          href="https://www.booking.com/hotel/pl/rsa-silver.pl.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button"
        >
          {language === 'pl' ? 'Skontaktuj się z nami' : 'Contact us'}
        </a>
      </section>

      {/* Mapa */}
      <section className="map-section mt-12">
        <h2 className="text-center">{language === 'pl' ? 'Lokalizacja RSA Silver' : 'RSA Silver Location'}</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.7890125976497!2d17.05339431625784!3d54.662297480268955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fead39fb295bfb%3A0x4c24d76167b7e6e5!2sPla%C5%BCowa%205%2C%2076-212%20Rowy%2C%20Polska!5e0!3m2!1spl!2spl!4v1697276269744!5m2!1spl!2spl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa lokalizacji RSA Silver"
          ></iframe>
        </div>
      </section>

      <footer className="text-center">
        <p>&copy; 2024 RSA Silver. {language === 'pl' ? 'Wszelkie prawa zastrzeżone.' : 'All rights reserved.'}</p>
      </footer>
    </div>
  );
}
