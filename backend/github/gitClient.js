const { ApolloClient, InMemoryCache, HttpLink, gql } = require('@apollo/client/core');
const fetch = require('cross-fetch');
require('dotenv').config();

const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://api.github.com/graphql",
        fetch,
        headers: {
            authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
    }),
    cache: new InMemoryCache(),
});

const PINNED_REPOS_QUERY = gql`
    query($username: String!){
        user(login: $username) {
            pinnedItems(first: 6, types: REPOSITORY) {
                edges {
                    node {
                        ... on Repository {
                            name
                            description
                            url
                            stargazerCount
                            forkCount
                            isFork
                            owner {
                                login
                                url
                            }
                            viewerPermission   # ADMIN, WRITE, READ, NONE
                            viewerHasStarred,
                            repositoryTopics(first: 5) {
                                edges {
                                    node {
                                        topic {
                                            name
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

async function getPinnedRepos() {
    const response = await client.query({
        query: PINNED_REPOS_QUERY,
        variables: { username:process.env.GITHUB_USER_NAME },
    });

    // Map repos + contribution status
    return response.data.user.pinnedItems.edges.map((edge) => {
        const repo = edge.node;

        // Derive contribution status
        let contributionStatus = "External";
        if (repo.owner.login === "sarweshwaran-rs") {
            contributionStatus = "Owned";
        } else if (repo.viewerPermission && repo.viewerPermission !== "NONE") {
            contributionStatus = "Contributed";
        }

        // Extract topic names into a flat array
        const topics = repo.repositoryTopics.edges.map(
            (topicEdge) => topicEdge.node.topic.name
        );

        return {
            name: repo.name,
            description: repo.description,
            url: repo.url,
            stars: repo.stargazerCount,
            forks: repo.forkCount,
            isFork: repo.isFork,
            owner: repo.owner.login,
            ownerUrl: repo.owner.url,
            viewerPermission: repo.viewerPermission,
            viewerHasStarred: repo.viewerHasStarred,
            contributionStatus,
            topics
        };
    });
}

module.exports = { getPinnedRepos };
