import Head from "next/head";
import { useRouter } from "next/router";

import { getPortfolioItem, getPortfolioSlugs } from "@/lib/data";

export const getStaticPaths = async () => {
  const slugsRes = await getPortfolioSlugs();
  const slugs = slugsRes.portfolios;
  console.log(slugs);
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const portfolioItem = await getPortfolioItem(params.slug);
  return {
    props: {
      portfolioItem: portfolioItem.portfolios[0],
    },
  };
};

export default function Home({ portfolioItem }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading....</div>;
  }
  console.log(portfolioItem);
  return (
    <>
      <Head>
        <title>Awesome Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{portfolioItem.title}</h1>
    </>
  );
}
