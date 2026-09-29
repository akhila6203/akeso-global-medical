import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ImageOff,
  Pause,
  Play,
  X,
} from "lucide-react";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  getRelatedBlogUrl,
} from "../../data/webStoriesData";


/* =========================================================
   SETTINGS
========================================================= */

const SLIDE_DURATION = 5000;
const TIMER_INTERVAL = 50;


/* =========================================================
   STORY IMAGE
========================================================= */

function StoryImage({
  src,
  alt,
}) {
  const [
    failed,
    setFailed,
  ] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <div
        className="
          flex
          h-full
          w-full
          items-center
          justify-center
          bg-[#DCECEB]
        "
      >
        <div className="text-center">
          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-white
              text-[#C8942E]
              shadow-sm
            "
          >
            <ImageOff size={25} />
          </div>

          <p
            className="
              mt-3
              max-w-[220px]
              px-4
              text-[13px]
              font-semibold
              text-[#064B50]
            "
          >
            {alt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() =>
        setFailed(true)
      }
      className="
        h-full
        w-full
        object-cover
      "
    />
  );
}


/* =========================================================
   WEB STORY MODAL
========================================================= */

export default function WebStoryModal({
  story,
  onClose,
}) {
  const navigate = useNavigate();

  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);

  const [
    progress,
    setProgress,
  ] = useState(0);

  const [
    isPaused,
    setIsPaused,
  ] = useState(false);

  const intervalRef =
    useRef(null);

  const slides =
    story?.slides || [];

  const total =
    slides.length;


  /* =======================================================
     CLEAR TIMER
  ======================================================= */

  const clearStoryTimer =
    useCallback(() => {
      if (
        intervalRef.current
      ) {
        clearInterval(
          intervalRef.current
        );

        intervalRef.current =
          null;
      }
    }, []);


  /* =======================================================
     NEXT SLIDE

     1 -> 2 -> 3 -> 4 -> 5 -> 1
  ======================================================= */

  const goNext =
    useCallback(() => {
      if (!total) {
        return;
      }

      clearStoryTimer();

      setProgress(0);

      setCurrentIndex(
        (current) =>
          (current + 1) %
          total
      );
    }, [
      total,
      clearStoryTimer,
    ]);


  /* =======================================================
     PREVIOUS SLIDE

     1 <- 2
     First slide previous -> Last slide
  ======================================================= */

  const goPrevious =
    useCallback(() => {
      if (!total) {
        return;
      }

      clearStoryTimer();

      setProgress(0);

      setCurrentIndex(
        (current) =>
          (
            current -
            1 +
            total
          ) %
          total
      );
    }, [
      total,
      clearStoryTimer,
    ]);


  /* =======================================================
     OPEN PARTICULAR SLIDE
  ======================================================= */

  const goToSlide =
    useCallback(
      (index) => {
        if (
          index < 0 ||
          index >= total
        ) {
          return;
        }

        clearStoryTimer();

        setProgress(0);

        setCurrentIndex(
          index
        );
      },
      [
        total,
        clearStoryTimer,
      ]
    );


  /* =======================================================
     NEW STORY OPEN

     IMPORTANT:
     Every time user clicks another web story card,
     story MUST start from first slide and progress 0.
  ======================================================= */

  useEffect(() => {
    clearStoryTimer();

    setCurrentIndex(0);

    setProgress(0);

    setIsPaused(false);
  }, [
    story?.slug,
    clearStoryTimer,
  ]);


  /* =======================================================
     AUTOMATIC STORY PROGRESS

     Every slide:
     0% -> 100%

     After 5 seconds:
     automatically opens next slide.

     Last slide:
     automatically goes back to first slide.
  ======================================================= */

  useEffect(() => {
    clearStoryTimer();

    if (
      !story ||
      !total ||
      isPaused
    ) {
      return undefined;
    }

    const progressStep =
      (TIMER_INTERVAL /
        SLIDE_DURATION) *
      100;

    intervalRef.current =
      setInterval(() => {
        setProgress(
          (current) => {
            const next =
              current +
              progressStep;

            if (
              next >= 100
            ) {
              /*
                Stop current timer.

                currentIndex change will
                restart timer automatically
                through this useEffect.
              */
              clearStoryTimer();

              setCurrentIndex(
                (index) =>
                  (
                    index +
                    1
                  ) %
                  total
              );

              return 0;
            }

            return next;
          }
        );
      }, TIMER_INTERVAL);

    return () => {
      clearStoryTimer();
    };
  }, [
    story?.slug,
    total,
    currentIndex,
    isPaused,
    clearStoryTimer,
  ]);


  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    if (!story) {
      return undefined;
    }

    const oldOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        oldOverflow;
    };
  }, [story]);


  /* =======================================================
     KEYBOARD CONTROLS

     ESC         -> Close
     Right Arrow -> Next
     Left Arrow  -> Previous
     Space       -> Pause / Play
  ======================================================= */

  useEffect(() => {
    if (!story) {
      return undefined;
    }

    const handleKeyDown =
      (event) => {
        if (
          event.key ===
          "Escape"
        ) {
          clearStoryTimer();

          onClose();

          return;
        }

        if (
          event.key ===
          "ArrowRight"
        ) {
          goNext();

          return;
        }

        if (
          event.key ===
          "ArrowLeft"
        ) {
          goPrevious();

          return;
        }

        if (
          event.code ===
          "Space"
        ) {
          event.preventDefault();

          setIsPaused(
            (current) =>
              !current
          );
        }
      };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    story,
    onClose,
    goNext,
    goPrevious,
    clearStoryTimer,
  ]);


  /* =======================================================
     CLEAN TIMER WHEN COMPONENT UNMOUNTS
  ======================================================= */

  useEffect(() => {
    return () => {
      clearStoryTimer();
    };
  }, [clearStoryTimer]);


  /* =======================================================
     NO STORY
  ======================================================= */

  if (
    !story ||
    !total
  ) {
    return null;
  }


  const slide =
    slides[currentIndex];


  /* =======================================================
     RELATED BLOG

     Uses helper from webStoriesData.js

     Example:
     relatedBlogSlug:
       "healthy-heart-habits"

     opens:
     /health-library/blogs/healthy-heart-habits

     This matches App.jsx:
     /health-library/blogs/:slug
  ======================================================= */

  const handleRelatedBlog =
    () => {
      const blogUrl =
        getRelatedBlogUrl(
          story
        );

      if (!blogUrl) {
        return;
      }

      clearStoryTimer();

      /*
        Close popup first.
      */
      onClose();

      /*
        Navigate to EXISTING
        BlogDetails route.
      */
      navigate(blogUrl);
    };


  /* =======================================================
     CLOSE MODAL
  ======================================================= */

  const handleClose =
    () => {
      clearStoryTimer();

      onClose();
    };


  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        bg-[#021F22]/90

        px-3
        py-4

        backdrop-blur-[6px]

        sm:px-6
      "
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          handleClose();
        }
      }}
    >
      {/* ===================================================
          CLOSE BUTTON
      =================================================== */}

      <button
        type="button"
        onClick={handleClose}
        aria-label="Close story"
        className="
          absolute
          right-4
          top-4
          z-50

          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          bg-white
          text-[#064B50]

          shadow-lg

          transition

          hover:bg-[#C8942E]
          hover:text-white

          sm:right-6
          sm:top-6
        "
      >
        <X size={20} />
      </button>


      {/* ===================================================
          PREVIOUS BUTTON
          TABLET + DESKTOP
      =================================================== */}

      <button
        type="button"
        onClick={goPrevious}
        aria-label="Previous slide"
        className="
          absolute
          left-4
          top-1/2
          z-40

          hidden
          h-12
          w-12

          -translate-y-1/2

          items-center
          justify-center

          rounded-full

          bg-white
          text-[#064B50]

          shadow-xl

          transition

          hover:bg-[#C8942E]
          hover:text-white

          sm:flex

          lg:left-[max(30px,calc(50%-340px))]
        "
      >
        <ChevronLeft
          size={25}
        />
      </button>


      {/* ===================================================
          STORY CONTAINER
      =================================================== */}

      <div
        className="
          relative

          h-[calc(100dvh-32px)]
          w-full
          max-w-[430px]

          overflow-hidden

          rounded-[22px]

          bg-[#082F33]

          shadow-[0_30px_90px_rgba(0,0,0,0.45)]

          sm:h-[min(820px,calc(100dvh-50px))]
          sm:max-w-[470px]
        "
      >
        {/* ===============================================
            STORY IMAGE
        =============================================== */}

        <StoryImage
          src={slide.image}
          alt={slide.title}
        />


        {/* ===============================================
            TOP DARK OVERLAY
        =============================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0

            h-[150px]

            bg-gradient-to-b
            from-black/55
            to-transparent
          "
        />


        {/* ===============================================
            BOTTOM DARK OVERLAY
        =============================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0

            h-[55%]

            bg-gradient-to-t
            from-black/95
            via-black/55
            to-transparent
          "
        />


        {/* ===============================================
            PROGRESS BARS

            Previous slides = 100%
            Current slide = automatic progress
            Future slides = 0%
        =============================================== */}

        <div
          className="
            absolute
            left-3
            right-3
            top-3
            z-30

            flex
            gap-1
          "
        >
          {slides.map(
            (
              item,
              index
            ) => {
              let width =
                "0%";

              if (
                index <
                currentIndex
              ) {
                width =
                  "100%";
              }

              if (
                index ===
                currentIndex
              ) {
                width =
                  `${Math.min(
                    progress,
                    100
                  )}%`;
              }

              return (
                <button
                  key={
                    item.id ||
                    index
                  }
                  type="button"
                  onClick={() =>
                    goToSlide(
                      index
                    )
                  }
                  aria-label={`Open slide ${
                    index + 1
                  }`}
                  className="
                    relative
                    h-[3px]
                    flex-1
                    overflow-hidden
                    rounded-full
                    bg-white/35
                  "
                >
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      top-0

                      rounded-full

                      bg-white
                    "
                    style={{
                      width,
                    }}
                  />
                </button>
              );
            }
          )}
        </div>


        {/* ===============================================
            PAUSE / PLAY + BRAND
        =============================================== */}

        <div
          className="
            absolute
            right-4
            top-7
            z-30

            flex
            items-center
            gap-2
          "
        >
          {/* PAUSE / PLAY */}

          <button
            type="button"
            onClick={() =>
              setIsPaused(
                (current) =>
                  !current
              )
            }
            aria-label={
              isPaused
                ? "Play story"
                : "Pause story"
            }
            className="
              flex
              h-9
              w-9
              items-center
              justify-center

              rounded-full

              bg-black/35
              text-white

              backdrop-blur-sm

              transition

              hover:bg-[#C8942E]
            "
          >
            {isPaused ? (
              <Play
                size={16}
                fill="currentColor"
              />
            ) : (
              <Pause
                size={16}
                fill="currentColor"
              />
            )}
          </button>


          {/* BRAND */}

          <div
            className="
              rounded-xl

              bg-[#064B50]/95

              px-3
              py-2

              text-right

              shadow-lg
            "
          >
            <p
              className="
                text-[12px]
                font-bold
                leading-none
                tracking-wide
                text-white
              "
            >
              AKESO
            </p>

            <p
              className="
                mt-1
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#E6B956]
              "
            >
              Global Health
            </p>
          </div>
        </div>


        {/* ===============================================
            CONTENT
        =============================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-30

            px-6
            pb-8

            text-center

            sm:px-8
            sm:pb-9
          "
        >
          {/* COUNTER */}

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#E6B956]
            "
          >
            {currentIndex + 1}
            {" / "}
            {total}
          </p>


          {/* TITLE */}

          <h2
            className="
              mt-3

              text-[23px]
              font-semibold
              leading-[1.3]

              text-white

              sm:text-[27px]
            "
          >
            {slide.title}
          </h2>


          {/* DESCRIPTION */}

          {slide.text && (
            <p
              className="
                mx-auto
                mt-3
                max-w-[360px]

                text-[13px]
                leading-6

                text-white/85

                sm:text-[14px]
              "
            >
              {slide.text}
            </p>
          )}


          {/* =============================================
              VIEW RELATED BLOG

              IMPORTANT:
              relatedBlogSlug unte matrame
              button display avuthundi.

              null ayithe button display avvadu.
          ============================================= */}

          {story.relatedBlogSlug && (
            <button
              type="button"
              onClick={
                handleRelatedBlog
              }
              className="
                mx-auto
                mt-5

                inline-flex
                items-center
                justify-center
                gap-2

                rounded-full

                bg-white

                px-5
                py-2.5

                text-[12px]
                font-bold

                text-[#064B50]

                shadow-lg

                transition
                duration-300

                hover:bg-[#C8942E]
                hover:text-white
              "
            >
              <ExternalLink
                size={15}
              />

              View Related Blog
            </button>
          )}
        </div>


        {/* ===============================================
            MOBILE PREVIOUS
        =============================================== */}

        <button
          type="button"
          onClick={goPrevious}
          aria-label="Previous slide"
          className="
            absolute
            left-3
            top-1/2
            z-30

            flex
            h-10
            w-10

            -translate-y-1/2

            items-center
            justify-center

            rounded-full

            bg-white/95
            text-[#064B50]

            shadow-lg

            transition

            hover:bg-[#C8942E]
            hover:text-white

            sm:hidden
          "
        >
          <ChevronLeft
            size={21}
          />
        </button>


        {/* ===============================================
            MOBILE NEXT
        =============================================== */}

        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="
            absolute
            right-3
            top-1/2
            z-30

            flex
            h-10
            w-10

            -translate-y-1/2

            items-center
            justify-center

            rounded-full

            bg-white/95
            text-[#064B50]

            shadow-lg

            transition

            hover:bg-[#C8942E]
            hover:text-white

            sm:hidden
          "
        >
          <ChevronRight
            size={21}
          />
        </button>
      </div>


      {/* ===================================================
          NEXT BUTTON
          TABLET + DESKTOP
      =================================================== */}

      <button
        type="button"
        onClick={goNext}
        aria-label="Next slide"
        className="
          absolute
          right-4
          top-1/2
          z-40

          hidden
          h-12
          w-12

          -translate-y-1/2

          items-center
          justify-center

          rounded-full

          bg-white
          text-[#064B50]

          shadow-xl

          transition

          hover:bg-[#C8942E]
          hover:text-white

          sm:flex

          lg:right-[max(30px,calc(50%-340px))]
        "
      >
        <ChevronRight
          size={25}
        />
      </button>
    </div>
  );
}