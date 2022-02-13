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
    name: "Minesweeper",
    innerName: "minesweeper-game",
    shortDescription: "Game created using pure html/css/js",
    description:
      "Created using vanilla html/css/js as part of an attempt to use reactJS with vanilla web stack, mostly as a POC so there's not much styling involved.",
    completionDate: "2020",
    teaserSrc: "minesweeper_preview.jpg",
    previewSrc: "minesweeper_preview.jpg",
    otherSrc: [],
    tags: ["games", "web"],
    link: "https://clemencegoh.github.io/games/minesweeper",
  },
  {
    name: "Flight Insurance DApp",
    innerName: "flight-insurance-dapp",
    shortDescription:
      "Decentralized application (web3) for flight insurance in SUTD.",
    description:
      "DApp proof of concept developed during my time at SUTD. This was back when I thought " +
      "that flask (with python) was the only way to serve files and build a server.",
    completionDate: "2018",
    teaserSrc: "simple_dapp.JPG",
    previewSrc: "simple_dapp.JPG",
    otherSrc: [],
    tags: ["web3", "web", "python"],
    link: "https://github.com/clemencegoh/SUTD_Blockchain_50.037/tree/master/dapp",
  },
  {
    name: "Whack a mole",
    innerName: "whack-a-mole-mojo",
    shortDescription: "Whack-a-mole game for mojo FPGA using Lucid",
    description:
      "Low level software component for an arcade game (whack a mole), which was built and " +
      "graded during my time in SUTD, complete with a counter.",
    completionDate: "2017",
    teaserSrc: "wam-full-preview.jpg",
    previewSrc: "wam-full-preview.jpg",
    otherSrc: [],
    tags: ["hardware", "games", "lucid"],
    link: "https://github.com/clemencegoh/MojoLucidWAM",
  },
];

// export const projectsData: projectData[] = [
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
