controller = {
  init: function() {
    document.body.addEventListener('DOMSubtreeModified', sendState);
    return true;
  },
  name: "Amazon Cloud Player",
  click: function(div) {
    fireEvent(div, 'mousedown');
    fireEvent(div, 'mouseup');
    fireEvent(div, 'mouseout');
  },
  nextSong: function() {
    var button = document.querySelector("*[playeraction='next']");
    this.click(button);
  },
  previousSong: function() {
    var button = document.querySelector("*[playeraction='previous']");
    this.click(button);
  },
  play: function() {
    var button = document.querySelector("*[playeraction='togglePlay']");
    this.click(button);
  },
  supports: {
    next:true,
    previous:true,
    playpause:true
  },
  isPlaying: function() {
    return document.querySelectorAll("#mp3Player .playing").length > 0;
  },
  getTitle: function() {
    return querySelectorText("#nowPlayingSection .title");
  },
  getAlbumArt: function() {
    var img = document.querySelector("#nowPlayingSection .albumImage");
    if (!img) return "";
	return img.src && img.src.replace('45_', '500_');
  },
  getArtist: function() {
    return querySelectorText("#nowPlayingSection .artistName span");
  },
  getState: function() {
    var state = {};
    state.playing = this.isPlaying();
    state.albumArt = this.getAlbumArt();
    state.title = this.getTitle();
    state.artist = this.getArtist();
    return state;
  }
};
