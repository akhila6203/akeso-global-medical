import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Video,
  ClipboardPlus,
} from "lucide-react";
import { Link } from "react-router-dom";

import KnowledgeSlider from "./KnowledgeSlider";
import VideoModal from "./VideoModal";

import {
  blogData,
  videoData,
  caseStudyData,
} from "../../data/knowledgeCenterData";

const tabs = [
  {
    key: "blogs",
    label: "Blogs",
    icon: BookOpen,
  },
  {
    key: "videos",
    label: "Videos",
    icon: Video,
  },
  {
    key: "case-studies",
    label: "Case Studies",
    icon: ClipboardPlus,
  },
];

export default function KnowledgeCenterSection() {
  const [activeTab, setActiveTab] =
    useState("blogs");

  const [selectedVideo, setSelectedVideo] =
    useState(null);

  const getItems = () => {
    if (activeTab === "videos") {
      return videoData;
    }

    if (activeTab === "case-studies") {
      return caseStudyData;
    }

    return blogData;
  };

  const viewAllPath =
    activeTab === "blogs"
      ? "/health-library/blogs"
      : activeTab === "videos"
      ? "/health-library/videos"
      : "/health-library/case-studies";

  return (
    <>
      <section className="
        bg-[#FAF8F2]
        py-14
        md:py-16
        lg:py-20
      ">
        <div className="
          mx-auto
          max-w-[1450px]
          px-4
          sm:px-6
          lg:px-8
        ">
          <div className="text-center">
            <span className="
              text-[13px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#C8942E]
            ">
              Learn • Understand • Decide
            </span>

            <h2 className="
              mt-2
              text-[28px]
              md:text-[36px]
              lg:text-[42px]
              font-bold
              text-[#263F41]
            ">
              Knowledge Center
            </h2>

            <p className="
              mx-auto
              mt-3
              max-w-[720px]
              text-[15px]
              md:text-[16px]
              leading-7
              text-[#667576]
            ">
              Explore educational articles,
              healthcare videos and selected
              case-study resources.
            </p>
          </div>

          {/* TABS */}
          <div className="
            mt-7
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          ">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active =
                activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() =>
                    setActiveTab(tab.key)
                  }
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    transition
                    ${
                      active
                        ? `
                          border-[#064B50]
                          bg-[#064B50]
                          text-white
                          shadow-md
                        `
                        : `
                          border-[#BFD4D2]
                          bg-white
                          text-[#263F41]
                          hover:border-[#C8942E]
                          hover:text-[#064B50]
                        `
                    }
                  `}
                >
                  <Icon size={16} />

                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* SLIDER */}
          <div className="mt-9 md:mt-11">
            <KnowledgeSlider
              items={getItems()}
              type={activeTab}
              onPlay={setSelectedVideo}
            />
          </div>

          {/* VIEW ALL */}
          <div className="
            mt-9
            flex
            justify-center
          ">
            <Link
              to={viewAllPath}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#064B50]
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                shadow-md
                transition
                hover:bg-[#043F43]
              "
            >
              View All{" "}
              {activeTab === "blogs"
                ? "Blogs"
                : activeTab === "videos"
                ? "Videos"
                : "Case Studies"}

              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <VideoModal
        video={selectedVideo}
        onClose={() =>
          setSelectedVideo(null)
        }
      />
    </>
  );
}