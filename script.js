const tracks = [
    {
      id: "adele",
      title: "Odamlar nima deydi",
      artist: "Konsta",
      img: "https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      duration: "4:15"
    },
    {
      id: "ed",
      title: "Shape of You",
      artist: "Ed Sheeran",
      img: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      duration: "5:20"
    },
    {
      id: "alec",
      title: "Let Me Down Slowly",
      artist: "Alec Benjamin",
      img: "https://i1.sndcdn.com/artworks-BryXU2tpLjx4zK1q-xMA2Hw-t500x500.jpg",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      duration: "4:10"
    },
    {
      id: "xo",
      title: "Blinding Lights",
      artist: "The Weeknd",
      img: "https://upload.wikimedia.org/wikipedia/en/0/09/The_Weeknd_-_After_Hours.png",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      duration: "3:22"
    }
  ];
  
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('playBtn');
  const selector = document.getElementById('trackSelector');
  const songTitle = document.getElementById('songTitle');
  const artist = document.getElementById('artist');
  const albumArt = document.getElementById('albumArt');
  const playlistContainer = document.getElementById('playlistContainer');
  let currentTrackIndex = 0;
  
  function loadTrack(index) {
    const track = tracks[index];
    if (!track) return;
    audio.src = track.audio;
    songTitle.textContent = track.title;
    artist.textContent = track.artist;
    albumArt.src = track.img;
    selector.value = track.id;
    playBtn.textContent = '▶️';
  }
  
  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = '⏸️';
    } else {
      audio.pause();
      playBtn.textContent = '▶️';
    }
  }
  
  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
  }
  
  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
  }
  
  selector.addEventListener('change', function () {
    const selected = tracks.findIndex(track => track.id === this.value);
    if (selected >= 0) {
      currentTrackIndex = selected;
      loadTrack(currentTrackIndex);
    }
  });
  
  tracks.forEach((track, index) => {
    const option = document.createElement("option");
    option.value = track.id;
    option.textContent = `${track.title} - ${track.artist}`;
    selector.appendChild(option);
  
    const trackDiv = document.createElement("div");
    trackDiv.className = "track";
    trackDiv.innerHTML = `
      <div class="track-info">
        <img src="${track.img}" alt="${track.artist}" />
        <div>
          <div class="track-title">${track.title}</div>
          <div class="track-artist">${track.artist}</div>
        </div>
      </div>
      <div>${track.duration}</div>
    `;
    trackDiv.onclick = () => {
      currentTrackIndex = index;
      loadTrack(currentTrackIndex);
    };
    playlistContainer.appendChild(trackDiv);
  });
  
  loadTrack(currentTrackIndex);
  