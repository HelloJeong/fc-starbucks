"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var youtube_iframe_1 = __importDefault(require("youtube-iframe"));
(function () {
    youtube_iframe_1.default.load(function (YT) {
        new YT.Player("player", {
            videoId: "An6LvWQuj_8",
            playerVars: {
                autoplay: true,
                loop: true,
                playlist: "An6LvWQuj_8",
            },
            events: {
                onReady: function (event) { return event.target.mute(); },
            },
        });
    });
})();
