import deployingNextjs from "@/videos/deploying-next.js-to-vercel.mp4";
import Video from 'next-video';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <Video poster="deploying-next.js-to-vercel.jpg" className="max-w-4xl" src={deployingNextjs} />
    </main>
  );
}