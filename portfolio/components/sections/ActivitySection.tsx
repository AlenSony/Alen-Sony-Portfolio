"use client";

import { useEffect, useState } from "react";
import ActivityTerrain from "@/components/ui/activity-terrain";
import { fetchGitHubContributionsClient, type ContributionData } from "@/lib/github-contributions";

export default function ActivitySection() {
  const [contributionData, setContributionData] = useState<ContributionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadData() {
      try {
        setIsLoading(true);
        setError(null);
        
        const data = await fetchGitHubContributionsClient();
        
        if (!mounted) return;
        
        if (data) {
          setContributionData(data);
        } else {
          setError("Unable to load contribution data");
        }
      } catch (err) {
        if (!mounted) return;
        setError("Failed to fetch GitHub contributions");
        console.error("GitHub contributions fetch error:", err);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section
      id="activity"
      className="relative min-h-screen flex items-center justify-center bg-background py-20"
    >
      <div className="container mx-auto px-6 flex items-center justify-center">
        {isLoading ? (
          <div className="w-full max-w-4xl rounded-3xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 p-12 flex flex-col items-center justify-center gap-4">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-100" />
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading contributions...</p>
          </div>
        ) : error ? (
          <div className="w-full max-w-4xl rounded-3xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 p-8 flex flex-col items-center justify-center gap-4">
            <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
            <button
              onClick={() => {
                setError(null);
                setIsLoading(true);
              }}
              className="text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 underline"
            >
              Try again
            </button>
          </div>
        ) : contributionData ? (
          <a
            href="https://github.com/AlenSony"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform hover:scale-[1.01] w-full max-w-4xl"
          >
            <ActivityTerrain
              title="GitHub Contributions"
              data={contributionData.data}
              endDate={contributionData.endDate}
              className="!max-w-4xl"
            />
          </a>
        ) : null}
      </div>
    </section>
  );
}
