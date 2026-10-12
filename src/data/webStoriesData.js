
/* HEART STORY IMAGES */
import heartCover from "../assets/web-stories/heart/cover.jpg";
import heartSlide1 from "../assets/web-stories/heart/slide-1.jpg";
import heartSlide2 from "../assets/web-stories/heart/slide-2.jpg";
import heartSlide3 from "../assets/web-stories/heart/slide-3.jpg";
import heartSlide4 from "../assets/web-stories/heart/slide-4.jpg";
import heartSlide5 from "../assets/web-stories/heart/slide-5.jpg";

/* KNEE STORY IMAGES */
import kneeCover from "../assets/web-stories/knee/cover.jpg";
import kneeSlide1 from "../assets/web-stories/knee/slide-1.jpg";
import kneeSlide2 from "../assets/web-stories/knee/slide-2.jpg";
import kneeSlide3 from "../assets/web-stories/knee/slide-3.jpg";
import kneeSlide4 from "../assets/web-stories/knee/slide-4.jpg";
import kneeSlide5 from "../assets/web-stories/knee/slide-5.jpg";

/* DIABETES STORY IMAGES */
import diabetesCover from "../assets/web-stories/diabetes/cover.jpg";
import diabetesSlide1 from "../assets/web-stories/diabetes/slide-1.jpg";
import diabetesSlide2 from "../assets/web-stories/diabetes/slide-2.jpg";
import diabetesSlide3 from "../assets/web-stories/diabetes/slide-3.jpg";
// import diabetesSlide4 from "../assets/web-stories/diabetes/slide-4.jpg";

/* CHILD HEALTH STORY IMAGES */
import childCover from "../assets/web-stories/child-health/cover.jpg";
import childSlide1 from "../assets/web-stories/child-health/slide-1.jpg";
import childSlide2 from "../assets/web-stories/child-health/slide-2.jpg";
import childSlide3 from "../assets/web-stories/child-health/slide-3.jpg";
import childSlide4 from "../assets/web-stories/child-health/slide-4.jpg";




export const webStories = [
  /* =======================================================
     1. HEALTHY HEART HABITS
  ======================================================= */

  {
    id: 1,

    slug: "understanding-heart-health",

    title: "Healthy Heart Habits",

    description:
      "Simple everyday habits that can support better heart health and overall wellbeing.",

      thumbnail: heartCover,

    slides: [
      {
        id: 1,

        image:
          heartSlide1,

        title:
          "Healthy Heart Habits",

        text:
          "Small lifestyle choices can contribute to better cardiovascular wellbeing.",
      },

      {
        id: 2,

        image:
          heartSlide2,

        title:
          "Stay Active",

        text:
          "Regular physical activity can be an important part of a heart-healthy lifestyle.",
      },

      {
        id: 3,

        image:
          heartSlide3,

        title:
          "Choose Balanced Meals",

        text:
          "A varied and balanced diet can support overall cardiovascular health.",
      },

      {
        id: 4,

        image:
          heartSlide4,

        title:
          "Manage Everyday Stress",

        text:
          "Healthy ways of managing stress can support general wellbeing.",
      },

      {
        id: 5,

        image:
          heartSlide5,

        title:
          "Regular Health Checks",

        text:
          "Routine health assessments can help identify health concerns that may need medical attention.",
      },
    ],

    /*
      This must match the blog slug.

      Final URL:
      /health-library/blogs/healthy-heart-habits
    */
    relatedBlogSlug:
      "healthy-heart-habits",
  },

  /* =======================================================
     2. KNEE REPLACEMENT RECOVERY
  ======================================================= */

  {
    id: 2,

    slug:
      "knee-replacement-recovery",

    title:
      "Knee Replacement Recovery Tips",

    description:
      "A simple visual guide to general recovery and rehabilitation considerations after knee replacement.",

    thumbnail:
      kneeCover,

    slides: [
      {
        id: 1,

        image: kneeSlide1,

        title:
          "Knee Replacement Recovery",

        text:
          "Recovery after knee replacement follows an individual care and rehabilitation plan.",
      },

      {
        id: 2,

        image:
          kneeSlide2,

        title:
          "Follow Your Care Plan",

        text:
          "Follow the discharge and recovery instructions provided by your healthcare team.",
      },

      {
        id: 3,

        image:
          kneeSlide3,

        title:
          "Rehabilitation",

        text:
          "Rehabilitation exercises may form an important part of recovery when recommended by the treating team.",
      },

      {
        id: 4,

        image:
          kneeSlide4,

        title:
          "Monitor Recovery",

        text:
          "Attend scheduled follow-up appointments and discuss unexpected symptoms with your healthcare team.",
      },

      {
        id: 5,

        image:
          kneeSlide5,

        title:
          "Gradual Return",

        text:
          "The timing of returning to routine activities depends on individual recovery and medical advice.",
      },
    ],

    /*
      Final URL:
      /health-library/blogs/knee-replacement-recovery-tips
    */
    relatedBlogSlug:
      "managing-knee-pain",
  },

  /* =======================================================
     3. UNDERSTANDING DIABETES
  ======================================================= */

  {
    id: 3,

    slug:
      "understanding-diabetes",

    title:
      "Understanding Diabetes",

    description:
      "A short visual introduction to diabetes, monitoring and everyday health management.",

    thumbnail:
      diabetesCover,

    slides: [
      {
        id: 1,

        image:
          diabetesSlide1,

        title:
          "Understanding Diabetes",

        text:
          "Diabetes affects how the body regulates blood glucose.",
      },

      {
        id: 2,

        image:
          diabetesSlide2,

        title:
          "Blood Glucose Monitoring",

        text:
          "Some people with diabetes may need regular glucose monitoring based on their care plan.",
      },

      {
        id: 3,

        image:
          diabetesSlide3,

        title:
          "Healthy Eating",

        text:
          "Balanced nutrition can form part of an individual diabetes management plan.",
      },

      // {
      //   id: 4,

      //   image:
      //     diabetesSlide4,

      //   title:
      //     "Stay Active",

      //   text:
      //     "Appropriate physical activity may support general health when suitable for the individual.",
      // },
    ],

    /*
      Final URL:
      /health-library/blogs/understanding-diabetes
    */
    relatedBlogSlug:
     "understanding-diabetes-care",
  },

  /* =======================================================
     4. CHILD HEALTH AWARENESS
  ======================================================= */

  {
    id: 4,

    slug:
      "child-health-awareness",

    title:
      "Child Health Awareness",

    description:
      "General information to help parents stay attentive to changes in a child's health.",

   thumbnail: childCover,

    slides: [
      {
        id: 1,

        image: childSlide1,

        title:
          "Child Health Awareness",

        text:
          "Children can experience common illnesses as they grow and develop.",
      },

      {
        id: 2,

        image: childSlide2,

        title:
          "Notice Changes",

        text:
          "Changes in activity, appetite, sleep or behaviour can sometimes accompany illness.",
      },

      {
        id: 3,

        image: childSlide3,

        title:
          "Hydration Matters",

        text:
          "Maintaining appropriate hydration can be important during many common childhood illnesses.",
      },

      {
        id: 4,

        image: childSlide4,

        title:
          "Seek Medical Advice",

        text:
          "Seek professional medical advice when symptoms are severe, persistent or concerning.",
      },
    ],

    /*
      No related blog currently.

      Because this is null:
      "View Related Blog" button should NOT display.
    */
    relatedBlogSlug: null,
  },
 
];


/* =========================================================
   GET SINGLE WEB STORY BY SLUG
========================================================= */

export function getWebStoryBySlug(slug) {
  return (
    webStories.find(
      (story) =>
        story.slug === slug
    ) || null
  );
}


/* =========================================================
   CHECK WHETHER STORY HAS RELATED BLOG
========================================================= */

export function hasRelatedBlog(story) {
  return Boolean(
    story?.relatedBlogSlug
  );
}


/* =========================================================
   GET RELATED BLOG URL

   IMPORTANT:
   Your App.jsx route is:

   /health-library/blogs/:slug

   So this helper returns the correct URL.
========================================================= */

export function getRelatedBlogUrl(story) {
  if (!story?.relatedBlogSlug) {
    return null;
  }

  return `/health-library/blogs/${story.relatedBlogSlug}`;
}