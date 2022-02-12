export type projectData = {
  name: string;
  innerName: string; // internal link for routing

  shortDescription: string;
  description: string;

  completionDate?: string;

  teaserSrc: string; // teaser image
  previewSrc: string; // main preview image
  otherSrc: string[]; // other images for showcasing the project

  tags: string[]; // tech stack used
  link: string; // external link
};

export const projectsData: projectData[] = [
  {
    name: "Invento",
    innerName: "flutter-invento",
    shortDescription: "Inventory management mobile app created using flutter",
    description:
      "Mobile app created with flutter as part of my attempt to learn flutter as a framework. UI design is done by my (now) wife.",
    completionDate: "2020",
    teaserSrc: "invento_preview.jpg",
    previewSrc: "invento_preview.jpg",
    otherSrc: [],
    tags: ["flutter", "android", "mobile"],
    link: "https://drive.google.com/drive/folders/1jzt3V-25clzJxqFInngAlKl9sOM0YLxy?usp=sharing",
  },
  {
    name: "Invento2",
    innerName: "flutter-invento2",
    shortDescription: "Inventory management mobile app created using flutter",
    description:
      "Mobile app created with flutter as part of my attempt to learn flutter as a framework. UI design is done by my (now) wife.",
    completionDate: "2020",
    teaserSrc: "invento_preview.jpg",
    previewSrc: "invento_preview.jpg",
    otherSrc: [],
    tags: ["desktop", "mobile", "software"],
    link: "https://drive.google.com/drive/folders/1jzt3V-25clzJxqFInngAlKl9sOM0YLxy?usp=sharing",
  },
];

// export const projectsData: projectData[] = [
//   {
//     description: "Invento - inventory management mobile app",
//     tags: ["software"],
//     link: "https://drive.google.com/drive/folders/1jzt3V-25clzJxqFInngAlKl9sOM0YLxy?usp=sharing",
//     src: "invento_preview.jpg",
//     name: "Invento",
//     innerName: "flutter-invento",
//   },
//   {
//     description: "Minesweeper game",
//     tags: ["website"],
//     link: "https://clemencegoh.github.io/games/minesweeper",
//     src: "minesweeper_preview.jpg",
//     name: "Minesweeper game",
//     innerName: "minesweeper-game",
//   },
//   {
//     description: "Flight Insurance Ethereum Dapp",
//     tags: ["website", "school"],
//     link: "https://github.com/clemencegoh/SUTD_Blockchain_50.037/tree/master/dapp",
//     src: "/img/simple_dapp.JPG",
//     name: "Ethereum Blockchain Dapp",
//     innerName: "flight-insurance-dapp",
//   },
//   {
//     description: "Whack-a-mole game for mojo FPGA",
//     tags: ["school", "software"],
//     link: "https://github.com/clemencegoh/MojoLucidWAM",
//     src: "/img/coding_no_preview.jpg",
//     name: "Lucid Mojo Project",
//     innerName: "whack-a-mole-mojo",
//   },
//   {
//     description: "Security Capture The Flag",
//     tags: ["school", "website"],
//     link: "https://github.com/clemencegoh/Security_CTF",
//     src: "/img/ctf_example.gif",
//     name: "Security CTF Project from SUTD",
//     innerName: "sutd-ctf",
//   },
//   {
//     description: "Deep Learning Image Captioning",
//     tags: ["school", "software"],
//     link: "https://github.com/clemencegoh/DL_Image_Captioning",
//     src: "/img/DL_Caption_Example.gif",
//     name: "Image Captioning deep learning project in SUTD",
//     innerName: "sutd-image-captioning",
//   },
//   {
//     description: "2D Action Platformer Game",
//     tags: ["school"],
//     link: "https://drive.google.com/drive/u/0/folders/1y8E12kAWRMXpOm59eSQAPltR89zmHVU9",
//     src: "/img/Sample_Gameplay.gif",
//     name: "Game Design project from SUTD, featured project",
//     innerName: "sutd-action-platformer-game",
//   },
//   {
//     description: "Flutter QR Code scanner",
//     tags: ["software"],
//     link: "https://github.com/clemencegoh/Flutter_Wrapper",
//     src: "/img/flutter_simple_demo.gif",
//     name: "Meant to be a flutter app for experimenting, currently functioning as a QR code scanner",
//     innerName: "flutter-qr-scanner",
//   },
// ];
