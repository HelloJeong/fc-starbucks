import youtubeIframe from "youtube-iframe";

(function () {
  youtubeIframe.load((YT) => {
    new YT.Player("player", {
      videoId: "An6LvWQuj_8",
      playerVars: {
        autoplay: true,
        loop: true,
        playlist: "An6LvWQuj_8",
      },
      events: {
        onReady: (event: any) => event.target.mute(),
      },
    });
  });
})();
