import React from 'react';
import './App.css';
import ActorDetails from './components/UserDetails/ActorDetails';

function App() {
  const userDetails = [
    {
      actorId:1,
      imageURL:"https://th.bing.com/th?id=OSK.ycJYZCY9-jaZ-5svx4cyBKQeZ5fRYzbFqc7GKgLHE3k&w=200&h=200&c=7&rs=1&o=6&pid=SANGAM",
      name:"Nag Aswin",
      role:"Director",
      about:"An Indian film director and screenwriter who works in Telugu cinema. He is the recipient of a National Film Award, a Nandi Award, and a Filmfare Award. After working as an assistant director to Sekhar Kammula, he made his directorial debut in 2015 with the coming-of-age film Yevade Subramanyam, which won him the Nandi Award for Best Debut Director. In 2018, Ashwin directed Mahanati, a biopic of actress Savitri. It emerged as the highest-grossing female-led South Indian film and won him the National Film Award for Best Feature Film in Telugu and the Filmfare Award for Best Director Telugu.",
    },
    {
      actorId:2,
      imageURL:"https://th.bing.com/th?id=OSK.75f26625274b8cbee895ba11aaf2e0fa&w=120&h=168&c=4&rs=1&qlt=80&o=6&pid=SANGAM",
      name:"Amitabh Bachhan",
      role:"(as Aswathama)",
      about:"An Indian actor who works in Hindi cinema. With a cinematic career spanning over five decades, he has played pivotal roles in over 200 films. Widely recognised as one of the greatest actors of all time, he is considered to be among the most accomplished and influential actors in the history of Indian cinema.[8] Bachchan is often hailed as the Shahenshah of Bollywood, Sadi Ke Mahanayak (translated as 'Greatest actor of the century' in Hindi), Star of the Millennium, or simply Big B.",
    },
    {
      actorId:3,
      imageURL:"https://th.bing.com/th?id=OSK.afff5071217c03b8ae0c2068681de68e&w=120&h=168&c=4&rs=1&qlt=80&o=6&pid=SANGAM",
      name:"kamal Hasan",
      role:"(as ka-lee)",
      about:"An Indian actor, film director, film producer, screenwriter, choreographer, playback singer, lyricist, television presenter, social activist and politician who works in Tamil cinema. Besides Tamil films, he has also appeared in some Malayalam, Hindi, Telugu, Kannada and Bengali films. Considered as one of the finest actors in Indian cinema, Haasan is also known for introducing many new film technologies and film making techniques to the Indian film industry.",
    },
    {
      actorId:4,
      imageURL:"https://th.bing.com/th?id=OSK.-3DhP07XRLlLXn5O_MIdAshkJgUvTbI28zwGg0WBFUM&w=120&h=168&c=4&rs=1&qlt=80&o=6&pid=SANGAM",
      name:"Prabhas",
      role:"(as Bhairava & Karna)",
      about:"Uppalapati Venkata Suryanarayana Prabhas Raju (born 23 October 1979), known mononymously as Prabhas, is an Indian actor who predominantly works in Telugu cinema. He is one of the highest-paid actors in Indian cinema and has been featured in Forbes India's Celebrity 100 list since 2015.Referred to in the media as the 'Rebel Star', he has appeared in over 20 films, and has received seven Filmfare Awards nominations, a Nandi Award, and a SIIMA Award.",
    },
    {
      actorId:5,
      imageURL:"https://th.bing.com/th?id=OSK.32fbf682a8e45cbdee6ee3daeb943886&w=120&h=168&c=4&rs=1&qlt=80&o=6&pid=SANGAM",
      name:"Deepika padukone",
      role:"(as Sumathi)",
      about:"An Indian actress who works predominantly in Hindi films. She is India's highest-paid actress, as of 2023,and her accolades include three Filmfare Awards. She features in listings of the nation's most popular personalities; Time named her one of the 100 most influential people in the world in 2018 and awarded her the Time100 Impact Award in 2022.",
    },
    {
      actorId:6,
      imageURL:"https://th.bing.com/th?id=OSK.3bdf74c84b9cfe092040f7d6cd406684&w=120&h=168&c=4&rs=1&qlt=80&o=6&pid=SANGAM",
      name:"Dulquer salmaan",
      role:"(as Guru)",
      about:"An Indian actor, playback singer and film producer who predominantly works in Malayalam cinema in addition to Tamil, Telugu and Hindi films. He graduated with a bachelor's degree in business management from Purdue University and worked as a business manager in Dubai before pursuing a career in acting. Dulquer is a recipient of several awards including, five Filmfare Awards South and a Kerala State Film Award.",
    },
    {
      actorId:7,
      imageURL:"https://th.bing.com/th?id=OSK.3ac0bdb3a73bff49421dadc577bae96d&w=120&h=168&c=4&rs=1&qlt=80&o=6&pid=SANGAM",
      name:"Vijay Devarkonda",
      role:"(as Arjuna)",
      about:"An Indian actor and film producer who works predominantly in Telugu films.One of the highest-paid actors of Telugu cinema, he has featured in Forbes India's Celebrity 100 list since 2018 and has received several accolades, including a Filmfare Award, a Nandi Award, and two SIIMA Award.",
    },
    {
      actorId:8,
      imageURL:"https://th.bing.com/th?id=OSK.3Lvr2wusWXLf0DTeUQjHNBcw2DV6lJpCnRGvrLjpx_M&w=120&h=168&c=4&rs=1&qlt=80&o=6&pid=SANGAM",
      name:"Disha patani",
      role:"(as Roxie)",
      about:"An Indian actress primarily working in Hindi films. Patani made her acting debut with the Telugu film Loafer (2015), and had her first Hindi film release with the biopic M.S. Dhoni: The Untold Story (2016). After appearing in the Chinese action comedy Kung Fu Yoga (2017), Patani featured in the films Baaghi 2 (2018), Bharat (2019), Malang (2020), and Kalki 2898 AD (2024). She has appeared in Forbes India's Celebrity 100 list of 2019.",
    },
    {
      actorId:9,
      imageURL:"https://th.bing.com/th?id=OSK.4rwHGkChSBxTpqjPEDO_Drw3HaHusCZoMywSS0Mp1CU&w=120&h=168&c=4&rs=1&qlt=80&o=6&pid=SANGAM",
      name:"Anna Ben",
      role:"(as Kyra)",
      about:"An Indian actress who works in Malayalam cinema. The daughter of screenwriter Benny P. Nayarambalam, she made her acting debut with Kumbalangi Nights in 2019.Anna has since starred in the dramas Helen (2019) and Kappela (2020). Anna is a recipient of two Kerala State Film Award and two SIIMA Awards.",
    }
  ]
  return (
    <div className="App">
    <h1 className="movie-name"> KALKI 2898AD cast&crew</h1>
      <ul >{userDetails.map((eachItem)=>(<ActorDetails userDetails={eachItem} />))}</ul>
    </div>
  );
}

export default App;
