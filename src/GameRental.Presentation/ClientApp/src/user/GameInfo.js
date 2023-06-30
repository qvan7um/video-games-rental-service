import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GameInfo.css';

function GameInfo() {
  const [gameData, setGameData] = useState(null);
  const { gameId } = useParams();
  
  const handleImgClick = (event) => {
    const thumbnailImg = document.querySelector('.thumbnail-img');
    thumbnailImg.src = event.target.src;
  }
  useEffect(() => {
    // Fetch game data for the specific game using the gameId prop
    fetch(`/api/game/${gameId}`)
      .then(response => response.json())
      .then(data => setGameData(data));
  }, [gameId]);

  if (!gameData) {
    return <p>Loading...</p>;
  }


  return (
    <div className='detail-container'>
        <div className='image-detail'>
        {gameData.media.length > 0 && (
          <img
            className='thumbnail-img'
            alt={gameData.media[0].caption}
            src={gameData.media[0].url}
          />
        )}

        {/* Display media items */}
        <ul className='detail-img-wrapper'>
          {gameData.media.map((mediaItem, index) => (
            <img
              key={index}
              onClick={handleImgClick}
              className='detail-img'
              alt={mediaItem.caption}
              src={mediaItem.url}
            />
          ))}
        </ul>
      </div>
      <div className='info-detail'>
        <h2 className='p10 info game-title-detail'>{gameData.title}</h2>
        <h5 className='p10 info game=paltform-detail'>Nền tảng: {gameData.platform}</h5>
        <h5 className='p10 info game-genre-detail'>Thể loại: {gameData.genre}</h5>
        <h5 className='p10 info game-releasedate-detail'>Ngày phát hành: {gameData.releaseDate}</h5>
        <h5 className='p10 info game-developer-detail'>Nhà phát triển: {gameData.developer}</h5>
        <h5 className='p10 info game-publisher-detail'>Nhà phát hành: {gameData.publisher}</h5>
        <button className='info-rent-btn'>Thuê</button>
      </div>
      <div className='more-detail'>
        <h3 className='description'>Mô tả</h3>
        <p className='game-description'>{gameData.description}</p>
        <h3 className='esrb'>Đánh giá ESRB: {gameData.esrbRating}</h3>
      </div>
    </div>
  );
}

export default GameInfo;