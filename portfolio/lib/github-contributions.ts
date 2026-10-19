/**
 * GitHub Contributions API client
 * Fetches contribution data from github-contributions-api.jogruber.de
 */

export interface GitHubContribution {
  date: string;
  count: number;
  level: number;
}

export interface GitHubContributionsResponse {
  total: {
    lastYear: number;
  };
  contributions: GitHubContribution[];
}

export interface ContributionData {
  data: number[];
  endDate: string;
  total: number;
}

const GITHUB_USERNAME = "AlenSony";
const API_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

// Cache for 1 hour
const CACHE_DURATION = 60 * 60 * 1000;
let cachedData: ContributionData | null = null;
let cacheTimestamp = 0;

/**
 * Fetches GitHub contribution data for AlenSony
 * Returns daily contribution counts sorted oldest-first
 */
export async function fetchGitHubContributions(): Promise<ContributionData> {
  // Return cached data if still valid
  if (cachedData && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return cachedData;
  }

  try {
    const response = await fetch(API_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour in Next.js
    });

    if (!response.ok) {
      throw new Error(`GitHub Contributions API error: ${response.status}`);
    }

    const data: GitHubContributionsResponse = await response.json();

    // Extract daily counts (API returns them oldest-first already)
    const dailyCounts = data.contributions.map((c) => c.count);

    // Get the last date
    const lastContribution = data.contributions[data.contributions.length - 1];
    const endDate = lastContribution?.date || new Date().toISOString().split("T")[0];

    const result: ContributionData = {
      data: dailyCounts,
      endDate,
      total: data.total.lastYear,
    };

    // Update cache
    cachedData = result;
    cacheTimestamp = Date.now();

    return result;
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    throw error;
  }
}

/**
 * Client-side fetch with error handling
 */
export async function fetchGitHubContributionsClient(): Promise<ContributionData | null> {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      console.error(`GitHub Contributions API error: ${response.status}`);
      return null;
    }

    const data: GitHubContributionsResponse = await response.json();
    const dailyCounts = data.contributions.map((c) => c.count);
    const lastContribution = data.contributions[data.contributions.length - 1];
    const endDate = lastContribution?.date || new Date().toISOString().split("T")[0];

    return {
      data: dailyCounts,
      endDate,
      total: data.total.lastYear,
    };
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    return null;
  }
}
