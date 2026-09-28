import { useState } from "react";
import { ImageOff } from "lucide-react";

export default function SafeImage({
  src,
  alt,
  className = "",
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`
          flex items-center justify-center
          bg-[#EEF6F5]
          text-[#064B50]
          ${className}
        `}
      >
        <div className="text-center">
          <ImageOff
            size={34}
            className="mx-auto mb-2 opacity-60"
          />

          <span className="text-xs font-medium">
            Image coming soon
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}