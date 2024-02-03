import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts',"mp4","vtt"],

};

export default withNextVideo(nextConfig);