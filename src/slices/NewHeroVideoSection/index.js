/**
 * @typedef {import("@prismicio/client").Content.NewHeroVideoSectionSlice} NewHeroVideoSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewHeroVideoSectionSlice>} NewHeroVideoSectionProps
 * @param {NewHeroVideoSectionProps}
 */
const NewHeroVideoSection = ({ slice }) => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
          type="video/mp4" autoplay muted loop></video>
      </div>
      <div className="video-content space-y-2 z-10">
        <h1 className="font-light text-6xl">full Hero Video</h1>
        <h3 className="font-light text-3xl">with TailwindCSS</h3>
      </div>
    </section>
  );
};

export default NewHeroVideoSection;
