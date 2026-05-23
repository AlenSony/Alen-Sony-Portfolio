// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

/** Vercel sets VERCEL=1 during CI builds; use Nitro instead of the Cloudflare Worker bundle. */
const deployToVercel = process.env.VERCEL === "1";

// Cloudflare: custom server.ts wrapper. Vercel: Nitro preset emits .vercel/output for SSR.
export default defineConfig({
  cloudflare: deployToVercel ? false : undefined,
  tanstackStart: deployToVercel
    ? undefined
    : {
        server: { entry: "server" },
      },
  plugins: deployToVercel
    ? [
        nitro({
          preset: "vercel",
        }),
      ]
    : [],
});
