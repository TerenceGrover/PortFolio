import './styles/queue.css';

export default function Queue() {

  const songVotes= [
    { id: 1, title: 'Song 1', votes: 20 },
    { id: 2, title: 'Song 2', votes: 12 },
    { id: 3, title: 'Song 3', votes: 5 },
    { id: 4, title: 'Song 4', votes: 3 },
    { id: 5, title: 'Song 5', votes: 1 },
    { id: 6, title: 'Song 6', votes: 0 },
  ];

  return (
    <div className="spotify-queue">
      {songVotes.map((song, index) => (
        <div key={song.id} className={`song ${index === 0 ? 'playing' : ''}`}>
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

        <span id='curly-queue-text'>The added songs are ranked by users' votes</span>
      </div>
    </div>
  );
};
