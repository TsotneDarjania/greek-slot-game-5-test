import {
  convertAssets,
  extractAssetProperties,
  LoadConfigType,
} from "./loadConfig";

export const assets: LoadConfigType = {
  video: {
    background: {
      src: "../assets/videos/background.webm",
      data: { loop: true },
    },
  },
  images: {
    background: {
      src: "../assets/images/background.png",
      data: {
        scaleMode: "linear",
        autoGenerateMipMaps: true,
      },
    },
    onAimLogo: {
      src: "../assets/images/onaim-logo.png",
      data: {
        scaleMode: "linear",
        autoGenerateMipMaps: true,
      },
    },
    defaultWhiteImage: {
      src: "../assets/images/default-white-image.png",
      data: {
        scaleMode: "linear",
        autoGenerateMipMaps: true,
      },
    },
  },
  animations: {
    line: {
      json: {
        src: "../assets/animations/line/skeleton.json",
        data: {
          scaleMode: "linear",
          autoGenerateMipMaps: true,
        },
      },
      skeleton: {
        src: "../assets/animations/line/skeleton.atlas",
        data: {
          scaleMode: "linear",
          autoGenerateMipMaps: true,
        },
      },
    },
    symbols: {
      wine: {
        json: {
          src: "../assets/animations/wine/gvino.json",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
        skeleton: {
          src: "../assets/animations/wine/gvino.atlas",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
      },
      crown: {
        json: {
          src: "../assets/animations/crown/gvirgvini.json",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
        skeleton: {
          src: "../assets/animations/crown/gvirgvini.atlas",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
      },
      coin: {
        json: {
          src: "../assets/animations/coin/coini.json",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
        skeleton: {
          src: "../assets/animations/coin/coini.atlas",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
      },
      ring_4: {
        json: {
          src: "../assets/animations/ring-4/Bechedi.json",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
        skeleton: {
          src: "../assets/animations/ring-4/Bechedi.atlas",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
      },
      ring_3: {
        json: {
          src: "../assets/animations/ring-3/Bechedi.json",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
        skeleton: {
          src: "../assets/animations/ring-3/Bechedi.atlas",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
      },
      ring_2: {
        json: {
          src: "../assets/animations/ring-2/Bechedi.json",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
        skeleton: {
          src: "../assets/animations/ring-2/Bechedi.atlas",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
      },
      ring_1: {
        json: {
          src: "../assets/animations/ring-1/Bechedi.json",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
        skeleton: {
          src: "../assets/animations/ring-1/Bechedi.atlas",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
      },
      arpa: {
        json: {
          src: "../assets/animations/arpa/arpa.json",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
        skeleton: {
          src: "../assets/animations/arpa/arpa.atlas",
          data: {
            scaleMode: "nearest",
            // autoGenerateMipMaps: true,
          },
        },
      },
    },
  },
};

export const gameAssets = extractAssetProperties(assets);

globalThis.LoadConfig = assets;
globalThis.GameAssets = convertAssets(assets);
