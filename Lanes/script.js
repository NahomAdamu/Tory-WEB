// Switch Spotify embed on album click
document.querySelectorAll('.album').forEach(album => {
    album.addEventListener('click', function(e) {
        const spotifyId = this.getAttribute('data-spotify');
        if (spotifyId) {
            const embed = document.getElementById('spotify-embed');
            if (embed) {
                embed.src = `https://open.spotify.com/embed/album/${spotifyId}?utm_source=generator`;
            }
        }
    });
});
// Album popup toggle with outside click to close
document.querySelectorAll('.album').forEach(album => {
    const cover = album.querySelector('.album-cover');
    const popup = album.querySelector('.popup');

    cover.addEventListener('click', (e) => {
        e.stopPropagation();
        // Hide all other popups first
        document.querySelectorAll('.popup').forEach(p => {
            if(p !== popup) p.style.display = 'none';
        });
        // Toggle this popup
        popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    });
});
// Hide popup when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.popup').forEach(p => {
        p.style.display = 'none';
    });
});

  