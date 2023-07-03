import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Tilt_Prism } from "next/font/google";
// import { Bodoni_Moda } from "next/font/google";
// import { Oswald } from "next/font/google";
import Man from "../man.jpg";
import ThemeButton from "@/components/ThemeButton";
import { client } from "../lib/contentful/client";
import { getAllPosts } from "@/lib/contentful/functions";
import { gsap } from "gsap";
import PostCard from "@/components/PostCard";

// import styles from "./page.module.css";
const vanillaRavioli = localFont({
  src: "../fonts/VanillaRavioli.ttf",
});
const presicav = localFont({
  src: "../fonts/PresicavRg-Bold.ttf",
});

const inter = Inter({ subsets: ["latin"] });
const tiltPrism = Tilt_Prism({ subsets: ["latin"] });
// const cinzel = Bodoni_Moda({ subsets: ["latin"] });
// const oswald = Oswald({ subsets: ["latin"] });

interface Sys {
  space: object;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: object;
  createdBy: object;
  updatedBy: object;
  version: number;
  visibility: string;
}

interface Tag {
  sys: Sys;
  name: string;
}

interface Sys {
  type: string;
  linkType?: string;
  id: string;
}

interface Metadata {
  tags: string[];
}

interface ContentNode {
  nodeType: string;
  data: any;
  content: Content[];
}

interface Content {
  nodeType: string;
  data: any;
  content: ContentNode[];
}

interface EntryFields {
  title: string;
  slug: string;
  author: Sys;
  excerpt: string;
  coverImage: Sys;
  content: {
    nodeType: string;
    data: any;
    content: ContentNode[];
  };
}

interface Entry {
  metadata: Metadata;
  sys: Sys;
  fields: EntryFields;
}

interface Includes {
  Entry: Entry[];
}

interface AssetFields {
  title: string;
  description: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  };
}

interface Asset {
  metadata: Metadata;
  sys: Sys;
  fields: AssetFields;
}

interface Response {
  sys: Sys;
  total: number;
  skip: number;
  limit: number;
  items: Entry[];
  includes: Includes;
}

export default async function Home() {
  const getPosts = await getAllPosts();
  const postItems = getPosts.items;
  // console.log(getPosts);

  return (
    <>
      <ThemeButton />
      <div className="landing-page flex justify-center align-middle">
        <h1 className="text-9xl pt-2 ">BLOG OF THE WEEK</h1>
      </div>
      {postItems.map((items: Entry) => {
        return <PostCard {...items} />;
      })}
    </>
  );
}
