import { AnimatePresence } from "framer-motion";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useStore } from "../store/store";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ posts, articles }) {
  const { modalOpen, modalType, openModal, closeModal } = useStore();
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/home");
    },
  });

  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Feed | Career Social</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          <Sidebar />
          <Feed posts={posts} />
        </div>
        <Widgets articles={articles} />
        <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={closeModal} type={modalType} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  // Default values so that props are always serialisable
  let posts = [];
  let articles = [];

  try {
    // Fetch posts from MongoDB
    const { db } = await connectToDatabase();
    const postsData = await db
      .collection("posts")
      .find()
      .sort({ timestamp: -1 })
      .toArray();

    posts = postsData.map((post) => ({
      _id: post._id.toString(),
      input: post.input ?? "",
      photoUrl: post.photoUrl ?? null,
      username: post.username ?? "",
      email: post.email ?? "",
      userImg: post.userImg ?? null,
      createdAt: post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString(),
    }));
  } catch (err) {
    console.error("Error fetching posts:", err);
  }

  // Fetch news articles only if API key is present
  if (process.env.NEWS_API_KEY) {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data.articles)) articles = data.articles;
      } else {
        console.warn("News API returned status", response.status);
      }
    } catch (err) {
      console.error("Error fetching news articles:", err);
    }
  }

  return {
    props: {
      session,
      posts,
      articles, // always an array (never undefined)
    },
  };
}
