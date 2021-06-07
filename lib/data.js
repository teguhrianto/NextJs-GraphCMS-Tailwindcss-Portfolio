import { gql, GraphQLClient } from "graphql-request";
const endpoint = "https://api-ap-northeast-1.graphcms.com/v2/ckpecfr0sj5qe01xtcm4ohnjo/master";
const graphQLClient = new GraphQLClient(endpoint);

export const getPostAndPortfolio = async () => {
  const query = gql`
    {
      portfolios(first: 3, orderBy: date_DESC) {
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
      posts(first: 3, orderBy: date_DESC) {
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
  const query = gql`
    {
      portfolios(orderBy: date_DESC) {
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

export const getPost = async (slug) => {
  const query = gql`
    query getPost($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        slug
        description
        date
        tags
        content
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

  const variables = {
    slug,
  };

  return await graphQLClient.request(query, variables);
};

export const getPosts = async () => {
  const query = gql`
    {
      posts(orderBy: date_DESC) {
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
  const query = gql`
    {
      portfolios {
        slug
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getPostSlugs = async () => {
  const query = gql`
    {
      posts {
        slug
      }
    }
  `;

  return await graphQLClient.request(query);
};
