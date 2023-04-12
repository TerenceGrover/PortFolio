import './styles/queue.css';
import { useState } from 'react';

export default function Queue() {

  const [songVotes, setSongVotes] = useState([
    { id: 1, title: 'Song 1', votes: 200000 },
    { id: 2, title: 'Song 2', votes: 12 },
    { id: 3, title: 'Song 3', votes: 5 },
    { id: 4, title: 'Song 4', votes: 3 },
    { id: 5, title: 'Song 5', votes: 1 },
    { id: 6, title: 'Song 6', votes: 0 },
  ]);

  const handleClick = (index: number) => {
    let tempArr = [...songVotes];
    tempArr = songVotes.map((song, i) => {
      if (i === index) {
        return { ...song, votes: song.votes + 1 };
      }
      return song;
    });

    const sortedArr = [...tempArr].sort((a, b) => b.votes - a.votes)
    setSongVotes(tempArr)
    if (JSON.stringify(sortedArr) !== JSON.stringify(tempArr)) {
      // Find which two songs were swapped
      const songs = sortedArr.filter((song, i) => song.id !== tempArr[i].id);
      const song1 = songs[0];
      const song2 = songs[1];
      // Animates the two songs that were swapped
      const song1El = document.querySelector(`.song:nth-child(${tempArr.indexOf(song1) + 1})`) as HTMLElement;
      const song2El = document.querySelector(`.song:nth-child(${tempArr.indexOf(song2) + 1})`) as HTMLElement;

      const indexDifference = Math.abs(tempArr.indexOf(song1) - tempArr.indexOf(song2));
      const transformX = indexDifference * 10.3 + "vw";

      song1El.style.transform = `translateX(-${transformX})`;
      song2El.style.transform = `translateX(${transformX})`;
      song1El.classList.add('song-in-transition')
      song2El.classList.add('song-in-transition')

      setTimeout(() => {
        setSongVotes(sortedArr);
        song1El.classList.remove('song-in-transition')
        song2El.classList.remove('song-in-transition')
        song1El.style.transform = "";
        song2El.style.transform = "";
      }, 1000);
    } else {
      setSongVotes(sortedArr);
    }
  };

  return (
    <div className="spotify-queue">
      {songVotes.map((song, index) => (
        <div onClick={() => handleClick(index)} key={index} className={`song ${index === 0 ? 'playing' : ''}`} style={index !== 0 ? {
          backgroundColor: `hsl(${(song.votes / 20) * 120}, 30%, 30%)`,
        } : {}}>
          {index !== 0 ? '+' + song.votes : ''}
          {
            index === 0 && (
              <div id="song-playing">
                <img id='arrow-song' className='arrow-pssst' src="./assets/arrow.png" alt="arrow" />
                <span>This song is currently playing</span>
              </div>
            )
          }
        </div>
      ))}
      <div id="curly-queue">
        <img src='./assets/curly_bracket.png' id='curly-queue-sign' />

        <span id='curly-queue-text'>These added songs will play according to votes (try voting)</span>
      </div>
    </div>
  );
};
