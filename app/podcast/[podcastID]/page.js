import PodcastList from "@/app/_components/podcastComponents/PodcastList";
import PodcastPage from "@/app/_components/podcastComponents/PodcastPlayer";

export async function generateMetadata({ params }) {
  const podcastTitle = params?.podcastName || "Podcast Page";

  return {
    title: `Podcast-${params.podcastID}`,
    description: `Listen to the latest episode`,
    openGraph: {
      title: ` My Podcast`,
      description: `Listen to the latest episode.`,
      url: `/podcast/${params.podcastID}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ` My Podcast`,
      description: `Listen to the latest episode.`,
    },
  };
}

const page = ({ params }) => {
  return (
    <div>
      <PodcastPage params={params} />
    </div>
  );
};
export default page;
