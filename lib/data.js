import { gql, GraphQLClient } from "graphql-request";
export const getPostAndPortfolio = async () => {
  const endpoint = "https://api-ap-northeast-1.graphcms.com/v2/ckpecfr0sj5qe01xtcm4ohnjo/master";

  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    {
      portfolios {
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
      }
      posts {
        title
        slug
        description
        date
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getPortfolioItems = async () => {
  const endpoint = "https://api-ap-northeast-1.graphcms.com/v2/ckpecfr0sj5qe01xtcm4ohnjo/master";

  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    {
      portfolios {
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getPortfolioItem = async (slug) => {
  const endpoint = "https://api-ap-northeast-1.graphcms.com/v2/ckpecfr0sj5qe01xtcm4ohnjo/master";

  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    query getPortfolios($slug: String!) {
      portfolios(where: { slug: $slug }) {
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
        content
      }
    }
  `;

  const variables = {
    slug,
  };

  return await graphQLClient.request(query, variables);
};

export const getPosts = async () => {
  const endpoint = "https://api-ap-northeast-1.graphcms.com/v2/ckpecfr0sj5qe01xtcm4ohnjo/master";

  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    {
      posts {
        title
        slug
        description
        date
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getPortfolioSlugs = async () => {
  const endpoint = "https://api-ap-northeast-1.graphcms.com/v2/ckpecfr0sj5qe01xtcm4ohnjo/master";

  const graphQLClient = new GraphQLClient(endpoint);
  const query = gql`
    {
      portfolios {
        slug
      }
    }
  `;

  return await graphQLClient.request(query);
};
