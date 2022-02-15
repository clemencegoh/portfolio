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
    tags: ["flutter", "android", "mobile", "flutter"],
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
    previewSrc: "minesweeper-game.gif",
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
  {
    name: "Security CTF (internal)",
    innerName: "security-ctf-internal",
    shortDescription:
      "CTF game designed as part of the final project of the module",
    description:
      "Capture the Flag game making use of various techniques to hide a protected hardcoded " +
      "'flag'. The software or website is then released to the other students in the course " +
      "as part of the final project of the module which determined our grades.",
    completionDate: "2019",
    teaserSrc: "ctf_example.gif",
    previewSrc: "ctf_example.gif",
    otherSrc: [],
    tags: ["security", "web", "python", "databases", "cryptography"],
    link: "https://github.com/clemencegoh/Security_CTF",
  },
  {
    name: "Image Captioning",
    innerName: "image-captioning-deep-learning",
    shortDescription: "Image captioning software with deep learning from SUTD",
    description:
      "Software to caption images using neural networks, using models which were trained" +
      "from scratch over a period of 3 days using AWS EC2 instances optimized for GPU tasks.",
    completionDate: "2019",
    teaserSrc: "DL_Caption_Example.gif",
    previewSrc: "DL_Caption_Example.gif",
    otherSrc: [],
    tags: ["Artificial Intelligence"],
    link: "https://github.com/clemencegoh/DL_Image_Captioning",
  },
  {
    name: "2D Action platformer game",
    innerName: "2d-action-platformer-game",
    shortDescription: "Software game made using unity",
    description:
      "2D platformer game made as part of final submission for Game Design course in SUTD." +
      "All art and music done in-house, and coded in C# for Unity." +
      "This game was later chosen to be the featured project for the course.",
    completionDate: "2019",
    teaserSrc: "Sample_Gameplay.gif",
    previewSrc: "Sample_Gameplay.gif",
    otherSrc: [],
    tags: ["games", "Unity"],
    link: "https://drive.google.com/drive/u/0/folders/1y8E12kAWRMXpOm59eSQAPltR89zmHVU9",
  },
  {
    name: "Flutter QR Code scanner",
    innerName: "flutter-qr-code-scanner",
    shortDescription: "QR Code scanner created using flutter",
    description:
      "Experimental app made using flutter as part of my attempt at learning flutter," +
      "which was still in beta at this point.",
    completionDate: "2020",
    teaserSrc: "flutter_simple_demo.gif",
    previewSrc: "flutter_simple_demo.gif",
    otherSrc: [],
    tags: ["mobile", "flutter"],
    link: "https://github.com/clemencegoh/Flutter_Wrapper",
  },
];
