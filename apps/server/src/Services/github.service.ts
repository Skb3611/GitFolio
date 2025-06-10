import { format, parseISO, startOfYear, endOfYear, getYear } from 'date-fns';

const BASE_URL = "https://api.github.com"
const GRAPHQL_URL = "https://api.github.com/graphql"

import { Repo } from "@workspace/db";
export const getUserDetails = async (token:string,username?:string)=>{
    try {
        const res = await fetch(`${BASE_URL}/user`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        const data = await res.json();
        // console.log("User Data",data)
        
        return {
            username:data.login,
            bio:data.bio,
            location:data.location,
            website:data.blog,
            githubLink:data.html_url,
            followers:data.followers,
            following:data.following,
            created_at:data.created_at,
            updated_at:data.updated_at,
        }
    } catch (error) {
        console.log(error)
        return false
    }
}
export const getUserRepos = async (token:string,username?:string):Promise<Repo[]|false>=>{
    try{
        const res = await fetch(`${BASE_URL}/user/repos`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        const data = await res.json();
        // console.log("User Repos",data)
        let repos:Promise<Repo[]> = Promise.all(data.map(async(repo:any)=>{
            return{
                name:repo.name,
                description:repo.description,
                topics:repo.topics,
                languages: await getLanguages(token,repo.languages_url),
                stars:repo.stargazers_count,
                forks:repo.forks_count,
                deployments:await getDeployments(token,repo.deployments_url),
                repoLink:repo.html_url,
                liveLink:repo.homepage,
                // full_name:repo.full_name,
                created_at:repo.created_at,
                updated_at:repo.updated_at,
                pushed_at:repo.pushed_at,
            }
        }))
        // console.log("Repos",repos)
        return repos
    }catch(e){
        // console.log(e)
        return false
    }
}
const getLanguages =async (token:string,url:string):Promise<{}|false> => {
  try{
        const res = await fetch(url,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        const lang:{} = await res.json()
        return lang
  }catch(e){
    console.log(e)
    return false
  }
}

const getDeployments = async (token:string,url:string):Promise<number | false> => {
  try{
        const res = await fetch(url,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        const deployments:[] = await res.json()
        return deployments.length || 0
  }catch(e){
    console.log(e)
    return false
  }
}

async function makeGraphQLQuery(token: string, query: string, variables: any): Promise<any> {
    try {
        const response = await fetch(GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'User-Agent': 'YourGitHubProfileViewerApp/1.0' // It's good practice to provide a User-Agent
            },
            body: JSON.stringify({ query, variables })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("GraphQL HTTP error:", response.status, response.statusText, JSON.stringify(errorData, null, 2));
            throw new Error(`GitHub GraphQL API HTTP error: ${response.status} - ${JSON.stringify(errorData.errors || errorData)}`);
        }

        const result = await response.json();
        // Check for GraphQL errors returned in the response body
        if (result.errors) {
            console.error("GraphQL errors in response:", JSON.stringify(result.errors, null, 2));
            throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
        }
        return result.data;

    } catch (error) {
        console.error("Error during GraphQL query execution:", error);
        throw error;
    }
}

export const getAllUserContributionsGraph = async (token: string, username: string,createdAt:string): Promise<any[]> => {
    try {
        const firstContributionYear = getYear(parseISO(createdAt));
        const currentYear = getYear(new Date());

        const allContributions: any[] = [];

        // 2. Iterate through each year from creation to the current year
        for (let year = firstContributionYear; year <= currentYear; year++) {
            // Define the start and end dates for the current year
            const yearStart = startOfYear(new Date(year, 0, 1)); // January 1st of the year
            const yearEnd = endOfYear(new Date(year, 0, 1));     // December 31st of the year

            // Format dates to ISO 8601 string for GraphQL variables
            const fromDate = format(yearStart, "yyyy-MM-dd'T'HH:mm:ssXXX");
            const toDate = format(yearEnd, "yyyy-MM-dd'T'HH:mm:ssXXX");

            // GraphQL query to get contribution calendar data for a specific year
            const contributionsQuery = `
                query UserContributions($username: String!, $from: DateTime, $to: DateTime) {
                    user(login: $username) {
                        contributionsCollection(from: $from, to: $to) {
                            contributionCalendar {
                                totalContributions
                                weeks {
                                    contributionDays {
                                        color
                                        contributionCount
                                        date
                                        weekday
                                    }
                                    firstDay
                                }
                                # You can add more fields from ContributionCalendar here if needed,
                                # such as totalCommitContributions, totalIssueContributions, etc.
                            }
                            # You can also fetch other annual summary data directly within this collection
                            # e.g., totalPullRequestContributions, totalPullRequestReviewContributions
                        }
                    }
                }
            `;

            console.log(`Fetching contributions for ${year}... (from: ${fromDate}, to: ${toDate})`);
            
            // Execute the GraphQL query for the current year
            const yearContributionsData = await makeGraphQLQuery(token, contributionsQuery, {
                username: username,
                from: fromDate,
                to: toDate
            });

            // If data is successfully retrieved, add it to our aggregate array
            if (yearContributionsData?.user?.contributionsCollection?.contributionCalendar) {
                allContributions.push({
                    year: year,
                    data: yearContributionsData.user.contributionsCollection.contributionCalendar
                });
            } else {
                console.warn(`No contribution data found for ${year} or unexpected structure.`);
            }
        }

        console.log(`Successfully fetched contributions for ${allContributions.length} years.`);
        return allContributions;

    } catch (error) {
        console.error("Failed to fetch all user contributions graph data:", error);
        throw error; // Re-throw the error for the calling context to handle
    }
};