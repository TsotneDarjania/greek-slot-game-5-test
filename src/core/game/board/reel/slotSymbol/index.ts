import { SymbolStatusEvents } from "../../enums/index";
import { Spine } from "@esotericsoftware/spine-pixi-v8";
import { Container, EventEmitter, Sprite, Texture } from "pixi.js";
import gsap from "gsap";

export class SlotSymbol extends Container {
  spine!: Spine;
  eventEmitter!: EventEmitter;

  fakeImage!: Sprite;

  initSpineScaleX = 0;
  initSpineScaleY = 0;

  isWinSymbol = false;

  constructor(
    public key: string,
    posY: number,
    public displayWidth: number,
    public displayHeight: number,
    public padding: number = 0
  ) {
    super();
    this.eventEmitter = new EventEmitter();

    this.y = posY;

    this.addFakeImage();

    // @ts-ignore
    const atlasPath = key.replace(/\/([^\/]+)\.json$/, "/$1.atlas");
    this.spine = Spine.from({
      skeleton: key,
      atlas: atlasPath,
    });

    this.spine.y += this.fakeImage.y;

    // this.spine.width = calculatePercentage(70, displayWidth) - padding;
    // this.spine.height = calculatePercentage(70, displayWidth) - padding;

    // this.spine.scale = 0.8;

    this.spine.state.setAnimation(0, "Static", true);

    this.addChild(this.spine);

    this.initSpineScaleX = this.spine.scale.x;
    this.initSpineScaleY = this.spine.scale.y;
  }

  /*
    I was forced to add a fake image to 
    explicitly define the dimensions 
    due to PixiJS's flawed rule, 
    which automatically resizes the container.
  */
  addFakeImage() {
    this.fakeImage = Sprite.from(
      Texture.from(GameAssets.images.defaultWhiteImage)
    );
    this.fakeImage.anchor = 0.5;
    this.fakeImage.width = this.displayWidth;
    this.fakeImage.height = this.displayHeight;

    this.addChild(this.fakeImage);
  }

  deactive() {
    this.alpha = 0.4;
  }

  playWinAnimation() {
    if (this.isWinSymbol) return;
    gsap.to(this, {
      alpha: 1,
      duration: 1.5, // adjust the duration as needed
      ease: "power2.out",
    });

    // const glowFilter = new GlowFilter({
    //   distance: 24,
    //   innerStrength: 0, // Start from 0 for animation
    //   outerStrength: 0, // Start from 0 for animation
    //   color: "#F5BB8A",
    //   alpha: 0, // Start from 0 for animation
    // });
    // // Add the filter to the object
    // this.filters = [glowFilter];
    // // Animate the filter properties with GSAP
    // gsap.to(glowFilter, {
    //   innerStrength: 3,
    //   outerStrength: 2,
    //   alpha: 0.25,
    //   duration: 0.3,
    //   ease: "power1.in",
    // });

    this.isWinSymbol = true;
    this.alpha = 1;

    gsap.to(this.spine.scale, {
      x: this.initSpineScaleX + 0.02,
      y: this.initSpineScaleY + 0.02,
      duration: 0.7,
      ease: "bounce.out",
    });

    this.spine.state.setAnimation(0, "Win", true).listener = {
      complete: () => {
        this.eventEmitter.emit(SymbolStatusEvents.winninAnimationFinished);
      },
    };
  }
}
