import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="h-[2000px]">demo</div>
    </HydrateClient>
  );
}
