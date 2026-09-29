/* =========================================================
   WEB STORIES DATA
   Akeso Global Medical Services

   IMPORTANT:
   1. Every web story has its own slides.
   2. relatedBlogSlug must exactly match the slug
      available in your Blogs data.
   3. If a story has no related blog, keep:
      relatedBlogSlug: null
   4. Images should be placed inside:
      public/images/web-stories/...
========================================================= */

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

    thumbnail:
      "/images/web-stories/heart/cover.jpg",

    slides: [
      {
        id: 1,

        image:
          "/images/web-stories/heart/slide-1.jpg",

        title:
          "Healthy Heart Habits",

        text:
          "Small lifestyle choices can contribute to better cardiovascular wellbeing.",
      },

      {
        id: 2,

        image:
          "/images/web-stories/heart/slide-2.jpg",

        title:
          "Stay Active",

        text:
          "Regular physical activity can be an important part of a heart-healthy lifestyle.",
      },

      {
        id: 3,

        image:
          "/images/web-stories/heart/slide-3.jpg",

        title:
          "Choose Balanced Meals",

        text:
          "A varied and balanced diet can support overall cardiovascular health.",
      },

      {
        id: 4,

        image:
          "/images/web-stories/heart/slide-4.jpg",

        title:
          "Manage Everyday Stress",

        text:
          "Healthy ways of managing stress can support general wellbeing.",
      },

      {
        id: 5,

        image:
          "/images/web-stories/heart/slide-5.jpg",

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
      "/images/web-stories/knee/cover.jpg",

    slides: [
      {
        id: 1,

        image:
          "/images/web-stories/knee/slide-1.jpg",

        title:
          "Knee Replacement Recovery",

        text:
          "Recovery after knee replacement follows an individual care and rehabilitation plan.",
      },

      {
        id: 2,

        image:
          "/images/web-stories/knee/slide-2.jpg",

        title:
          "Follow Your Care Plan",

        text:
          "Follow the discharge and recovery instructions provided by your healthcare team.",
      },

      {
        id: 3,

        image:
          "/images/web-stories/knee/slide-3.jpg",

        title:
          "Rehabilitation",

        text:
          "Rehabilitation exercises may form an important part of recovery when recommended by the treating team.",
      },

      {
        id: 4,

        image:
          "/images/web-stories/knee/slide-4.jpg",

        title:
          "Monitor Recovery",

        text:
          "Attend scheduled follow-up appointments and discuss unexpected symptoms with your healthcare team.",
      },

      {
        id: 5,

        image:
          "/images/web-stories/knee/slide-5.jpg",

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
      "/images/web-stories/diabetes/cover.jpg",

    slides: [
      {
        id: 1,

        image:
          "/images/web-stories/diabetes/slide-1.jpg",

        title:
          "Understanding Diabetes",

        text:
          "Diabetes affects how the body regulates blood glucose.",
      },

      {
        id: 2,

        image:
          "/images/web-stories/diabetes/slide-2.jpg",

        title:
          "Blood Glucose Monitoring",

        text:
          "Some people with diabetes may need regular glucose monitoring based on their care plan.",
      },

      {
        id: 3,

        image:
          "/images/web-stories/diabetes/slide-3.jpg",

        title:
          "Healthy Eating",

        text:
          "Balanced nutrition can form part of an individual diabetes management plan.",
      },

      {
        id: 4,

        image:
          "/images/web-stories/diabetes/slide-4.jpg",

        title:
          "Stay Active",

        text:
          "Appropriate physical activity may support general health when suitable for the individual.",
      },
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

    thumbnail:
      "/images/web-stories/child-health/cover.jpg",

    slides: [
      {
        id: 1,

        image:
          "/images/web-stories/child-health/slide-1.jpg",

        title:
          "Child Health Awareness",

        text:
          "Children can experience common illnesses as they grow and develop.",
      },

      {
        id: 2,

        image:
          "/images/web-stories/child-health/slide-2.jpg",

        title:
          "Notice Changes",

        text:
          "Changes in activity, appetite, sleep or behaviour can sometimes accompany illness.",
      },

      {
        id: 3,

        image:
          "/images/web-stories/child-health/slide-3.jpg",

        title:
          "Hydration Matters",

        text:
          "Maintaining appropriate hydration can be important during many common childhood illnesses.",
      },

      {
        id: 4,

        image:
          "/images/web-stories/child-health/slide-4.jpg",

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

  /* =======================================================
     5. EVERYDAY BALANCED NUTRITION
  ======================================================= */

  {
    id: 5,

    slug:
      "balanced-nutrition",

    title:
      "Everyday Balanced Nutrition",

    description:
      "Simple ideas for building a varied and balanced everyday diet.",

    thumbnail:
      "/images/web-stories/nutrition/cover.jpg",

    slides: [
      {
        id: 1,

        image:
          "/images/web-stories/nutrition/slide-1.jpg",

        title:
          "Balanced Nutrition",

        text:
          "A varied diet can provide different nutrients needed for general health.",
      },

      {
        id: 2,

        image:
          "/images/web-stories/nutrition/slide-2.jpg",

        title:
          "Include Variety",

        text:
          "Including a variety of appropriate food groups can support balanced nutrition.",
      },

      {
        id: 3,

        image:
          "/images/web-stories/nutrition/slide-3.jpg",

        title:
          "Choose Appropriate Portions",

        text:
          "Individual nutrition needs and appropriate portions can differ between people.",
      },

      {
        id: 4,

        image:
          "/images/web-stories/nutrition/slide-4.jpg",

        title:
          "Stay Hydrated",

        text:
          "Adequate fluid intake is an important part of general health.",
      },
    ],

    /*
      Final URL:
      /health-library/blogs/balanced-nutrition-guide
    */
    relatedBlogSlug: null,
  },

  /* =======================================================
     6. KIDNEY HEALTH AWARENESS
  ======================================================= */

  {
    id: 6,

    slug:
      "kidney-health-awareness",

    title:
      "Kidney Health Awareness",

    description:
      "A simple visual introduction to supporting kidney health and recognising health concerns.",

    thumbnail:
      "/images/web-stories/kidney/cover.jpg",

    slides: [
      {
        id: 1,

        image:
          "/images/web-stories/kidney/slide-1.jpg",

        title:
          "Kidney Health",

        text:
          "The kidneys perform important functions including filtering waste from the blood.",
      },

      {
        id: 2,

        image:
          "/images/web-stories/kidney/slide-2.jpg",

        title:
          "Know Your Health",

        text:
          "Some health conditions can affect kidney health and may require regular monitoring.",
      },

      {
        id: 3,

        image:
          "/images/web-stories/kidney/slide-3.jpg",

        title:
          "Follow Medical Advice",

        text:
          "People with kidney-related concerns should follow individual advice from their healthcare team.",
      },

      {
        id: 4,

        image:
          "/images/web-stories/kidney/slide-4.jpg",

        title:
          "Health Assessments",

        text:
          "Appropriate medical assessment can help evaluate kidney function when clinically indicated.",
      },
    ],

    /*
      No related blog currently.
    */
    relatedBlogSlug: null,
  },

  /* =======================================================
     7. BLOOD PRESSURE AWARENESS
  ======================================================= */

  {
    id: 7,

    slug:
      "blood-pressure-awareness",

    title:
      "Blood Pressure Awareness",

    description:
      "Understand why blood pressure awareness and appropriate monitoring can matter.",

    thumbnail:
      "/images/web-stories/blood-pressure/cover.jpg",

    slides: [
      {
        id: 1,

        image:
          "/images/web-stories/blood-pressure/slide-1.jpg",

        title:
          "Know Your Blood Pressure",

        text:
          "Blood pressure measurement provides useful information about cardiovascular health.",
      },

      {
        id: 2,

        image:
          "/images/web-stories/blood-pressure/slide-2.jpg",

        title:
          "Regular Monitoring",

        text:
          "Monitoring may be recommended for some people based on their individual health needs.",
      },

      {
        id: 3,

        image:
          "/images/web-stories/blood-pressure/slide-3.jpg",

        title:
          "Lifestyle Matters",

        text:
          "Healthy lifestyle choices can form part of an individual blood pressure management plan.",
      },
    ],

    /*
      Final URL:
      /health-library/blogs/blood-pressure-awareness
    */
    relatedBlogSlug: null,
  },

  /* =======================================================
     8. EVERYDAY DIGESTIVE HEALTH
  ======================================================= */

  {
    id: 8,

    slug:
      "digestive-health",

    title:
      "Everyday Digestive Health",

    description:
      "General lifestyle considerations that may support digestive wellbeing.",

    thumbnail:
      "/images/web-stories/digestive/cover.jpg",

    slides: [
      {
        id: 1,

        image:
          "/images/web-stories/digestive/slide-1.jpg",

        title:
          "Digestive Health",

        text:
          "Digestive health can be influenced by diet, lifestyle and individual medical factors.",
      },

      {
        id: 2,

        image:
          "/images/web-stories/digestive/slide-2.jpg",

        title:
          "Balanced Meals",

        text:
          "A varied diet appropriate for the individual can support general digestive wellbeing.",
      },

      {
        id: 3,

        image:
          "/images/web-stories/digestive/slide-3.jpg",

        title:
          "Persistent Symptoms",

        text:
          "Persistent or severe digestive symptoms should be discussed with a healthcare professional.",
      },
    ],

    /*
      No related blog currently.
    */
   slug: "healthy-digestive-system",
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