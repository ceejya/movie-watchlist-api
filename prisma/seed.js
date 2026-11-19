import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set. Add it to your .env file.");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

const movies = [
  {
    id: "a1000000-0000-4000-8000-000000000001",
    title: "The Last Lighthouse",
    overview: "A coastal engineer returns home to restore a lighthouse and uncovers a family secret.",
    releaseYear: 2021,
    genres: ["Drama", "Mystery"],
    runtime: 112,
    posterUrl: "https://example.com/posters/last-lighthouse.jpg",
  },
  {
    id: "a1000000-0000-4000-8000-000000000002",
    title: "Orbit Seven",
    overview: "A small repair crew races to save a stranded research station above Earth.",
    releaseYear: 2023,
    genres: ["Science Fiction", "Adventure"],
    runtime: 126,
    posterUrl: "https://example.com/posters/orbit-seven.jpg",
  },
  {
    id: "a1000000-0000-4000-8000-000000000003",
    title: "Sunday at the Market",
    overview: "Two rival food stall owners discover that their families have been sharing recipes for generations.",
    releaseYear: 2019,
    genres: ["Comedy", "Romance"],
    runtime: 98,
    posterUrl: "https://example.com/posters/sunday-market.jpg",
  },
  {
    id: "a1000000-0000-4000-8000-000000000004",
    title: "Paper Kingdom",
    overview: "A young cartographer sets out to map a city that changes shape every night.",
    releaseYear: 2022,
    genres: ["Fantasy", "Adventure"],
    runtime: 109,
    posterUrl: "https://example.com/posters/paper-kingdom.jpg",
  },
  {
    id: "a1000000-0000-4000-8000-000000000005",
    title: "Quiet Frequency",
    overview: "A late-night radio host receives calls that seem to come from the same town twenty years in the future.",
    releaseYear: 2020,
    genres: ["Thriller", "Science Fiction"],
    runtime: 104,
    posterUrl: "https://example.com/posters/quiet-frequency.jpg",
  },
  {
    id: "a1000000-0000-4000-8000-000000000006",
    title: "Red Clay Road",
    overview: "A musician travels across the country to return an old instrument to its maker.",
    releaseYear: 2018,
    genres: ["Drama", "Music"],
    runtime: 117,
    posterUrl: "https://example.com/posters/red-clay-road.jpg",
  },
  {
    id: "a1000000-0000-4000-8000-000000000007",
    title: "The Borrowed Hour",
    overview: "A clockmaker finds a way to revisit one hour from the past, but each visit changes someone else's day.",
    releaseYear: 2024,
    genres: ["Fantasy", "Drama"],
    runtime: 121,
    posterUrl: "https://example.com/posters/borrowed-hour.jpg",
  },
  {
    id: "a1000000-0000-4000-8000-000000000008",
    title: "Wildwood Rescue",
    overview: "A group of young volunteers work together to protect an animal sanctuary from a wildfire.",
    releaseYear: 2017,
    genres: ["Family", "Adventure"],
    runtime: 93,
    posterUrl: "https://example.com/posters/wildwood-rescue.jpg",
  },
  {
    id: "a1000000-0000-4000-8000-000000000009",
    title: "Glasshouse",
    overview: "A detective investigates a disappearance in a remote town where every resident keeps a different version of the truth.",
    releaseYear: 2025,
    genres: ["Crime", "Mystery"],
    runtime: 115,
    posterUrl: "https://example.com/posters/glasshouse.jpg",
  },
  {
    id: "a1000000-0000-4000-8000-000000000010",
    title: "Small Hours",
    overview: "Over one sleepless night, three neighbors find unexpected ways to help one another.",
    releaseYear: 2020,
    genres: ["Comedy", "Drama"],
    runtime: 101,
    posterUrl: "https://example.com/posters/small-hours.jpg",
  },
];

try {
  for (const movie of movies) {
    await prisma.movie.upsert({
      where: { id: movie.id },
      update: movie,
      create: movie,
    });
  }
  console.log(`Seeded ${movies.length} movies.`);
} finally {
  await prisma.$disconnect();
}


