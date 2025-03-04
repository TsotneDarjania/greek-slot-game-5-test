// import { Container, Graphics } from "pixi.js";
// import gsap from "gsap";
// import { Scene } from "../../entities/scene";
// import { calculatePercentage } from "../../utils/scale";
// import { CustomSprite } from "../customSprite.ts";
// import { CustomText } from "../customText.ts";
// import { FontEnums } from "../../enums/fontEnums";

// export default class LoadingBar extends Container {
//   fillWidth!: number;
//   fillHeight!: number;

//   background!: Graphics;
//   fill!: Graphics;
//   notificationBackground!: Graphics;
//   notificationContainer!: Container;

//   onaimLogo!: CustomSprite;

//   text!: CustomText;
//   notificationText!: CustomText;

//   constructor(public scene: Scene) {
//     super();

//     this.fillWidth = calculatePercentage(70, scene.width);
//     this.fillHeight = 10;

//     this.init();
//   }

//   private init() {
//     this.addBackground();
//     this.addOnAimLogo();
//     this.animateLogo();
//     this.addFill();
//     this.addText();
//     this.createNotification();
//   }

//   public openNotification(text: string) {
//     this.notificationText.text = text;
//     gsap.to(this.notificationContainer, {
//       y: this.notificationContainer.y - 140,
//       duration: 0.7,
//       ease: "back.inOut",
//     });
//   }

//   private createNotification() {
//     this.notificationContainer = new Container();
//     this.notificationContainer.x = this.scene.width / 2;
//     this.notificationContainer.y = this.scene.height + 20;

//     this.notificationBackground = new Graphics();
//     this.notificationBackground.roundRect(
//       0,
//       0,
//       calculatePercentage(80, this.scene.width),
//       80
//     );
//     this.notificationBackground.fill("#DB9050");
//     this.notificationBackground.x -= this.notificationBackground.width / 2;
//     this.notificationBackground.stroke({ color: 0x642a04, width: 2 });

//     this.notificationText = new CustomText("", 0, 39, {
//       color: "#FFFFFF",
//       fontSize: "16",
//       fontFamily: FontEnums.firagoMedium,
//       maxWidth: calculatePercentage(70, this.scene.width),
//       anchor: 0,
//       align: "center",
//     });

//     this.notificationText.zIndex = 1;
//     this.notificationContainer.addChild(this.notificationText);
//     this.notificationContainer.addChild(this.notificationBackground);

//     this.scene.add(this.notificationContainer);
//   }

//   private addText() {
//     this.text = new CustomText(
//       "Please Wait...",
//       this.scene.width / 2,
//       this.scene.height / 2 + 44,
//       {
//         color: "#ffffff",
//         fontFamily: FontEnums.firagoMedium,
//         fontSize: "14",
//       }
//     );
//     this.scene.add(this.text);
//   }

//   private addOnAimLogo() {
//     this.onaimLogo = new CustomSprite(
//       "onAimLogo",
//       this.scene.width / 2,
//       this.scene.height / 2 - 75
//     );
//     this.onaimLogo.scale = 0.89;
//     this.scene.add(this.onaimLogo);
//   }

//   private addBackground() {
//     this.background = new Graphics();
//     this.background.roundRect(0, 0, this.fillWidth, this.fillHeight);
//     this.background.fill(0x12a653);

//     this.background.x = this.scene.width / 2 - this.fillWidth / 2;
//     this.background.y = this.scene.height / 2;
//     this.scene.add(this.background);
//   }

//   addFill() {
//     this.fill = new Graphics();
//     this.fill.roundRect(0, 0, 0, this.fillHeight);
//     this.fill.fill(0x06ed6e);
//     this.fill.x = this.background.x;
//     this.fill.y = this.scene.height / 2;
//     this.scene.add(this.fill);
//   }

//   updateFill(progress: number) {
//     progress = Math.max(0, Math.min(1, progress));
//     this.fill.roundRect(0, 0, this.fillWidth * progress, this.fillHeight);
//     this.fill.fill(0x06ed6e);
//   }

//   private animateLogo(): void {
//     gsap.to(this.onaimLogo, {
//       alpha: 0.5,
//       duration: 0.5,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut",
//     });
//   }
// }
