import { useEffect } from "react";
import { X } from "lucide-react";

export default function VideoModal({
  video,
  onClose,
}) {
  useEffect(() => {
    if (!video) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black/70
        p-4
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-[1000px]
          overflow-hidden
          rounded-[20px]
          bg-white
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-3
            top-3
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#064B50]
            shadow-lg
          "
          aria-label="Close video"
        >
          <X size={21} />
        </button>

        <div className="aspect-video bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture
            "
            allowFullScreen
          />
        </div>

        <div className="p-4 md:p-5">
          <p className="
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-[#C8942E]
          ">
            {video.category}
          </p>

          <h3 className="
            mt-1
            text-lg
            md:text-xl
            font-semibold
            text-[#263F41]
          ">
            {video.title}
          </h3>
        </div>
      </div>
    </div>
  );
}