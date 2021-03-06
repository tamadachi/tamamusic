// Example Album
 var albumPicasso = {
     title: 'The Warrior',
     artist: 'Marauder',
     label: 'Maelstrom',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Heavy Swing', duration: '4:26' },
         { title: 'Skull Sunder', duration: '3:14' },
         { title: 'Berserk', duration: '5:01' },
         { title: 'Overpower', duration: '3:21'},
         { title: 'Tomahawk', duration: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Astrologian',
     artist: 'Arcanist',
     label: 'Maelstrom',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Helios', duration: '1:01' },
         { title: 'Draw', duration: '5:01' },
         { title: 'Diurnal Sect', duration: '3:21'},
         { title: 'Royal Road', duration: '3:14' },
         { title: 'Time Dilation', duration: '2:15'}
     ]
 };

var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      +  '<td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };

var setCurrentAlbum = function(album) {
     // #1
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };
 

var findParentByClassName = function(element, targetClass) {
    if (element) {
        var currentParent = element.parentElement;
        while (currentParent.className !== targetClass && currentParent.className !== null) {
            currentParent = currentParent.parentElement;
        }
        return currentParent;
    }
};

var getSongItem = function(element) {
    switch (element.className) {
        case 'album-song-button':
        case 'ion-play':
            
        case 'ion-pause':
            return findParentByClassName(element, 'song-item-number');
        case 'album-view-song-item':
            return element.querySelector('.song-item-number');
        case 'song-item-title':
        case 'song-item-duration':
            return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
        case 'song-item-number':
            return element;
        default:
            return;
    }  
};


var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');
 // Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';


 // Store state of playing songs. We set it to null so that no song is identified as playing until we click one. To register the click that will eventually change the value of currentlyPlayingSong, add an event listener for the click event in the same for loop we created for the mouseleave event:
 var currentlyPlayingSong = null;

 window.onload = function() {
     setCurrentAlbum(albumPicasso);

     songListContainer.addEventListener('mouseover', function(event) {
          // Only target individual song rows during event delegation
         if (event.target.parentElement.className === 'album-view-song-item') {
             // Change the content from the number to the play button's HTML
              event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
         }
     });

     for (var i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {
             // Revert the content back to the number
             // Selects first child element, which is the song-item-number element
             this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
    });
          songRows[i].addEventListener('click', function(event) {
             // Event handler call
         });
     }   
     
 }