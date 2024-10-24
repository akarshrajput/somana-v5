import PodcastList from "../_components/podcastComponents/PodcastList";

const page = () => {
  return (
    <div className="px-2 flex flex-col gap-2">
      <PodcastList api="/api/v1/podcasts?limit=20" />
      <PodcastList api="/api/v1/podcasts?limit=20" />
    </div>
  );
};
export default page;
