import {
  specialties,
} from "../data/navigation";

import {
  getSpecialityDetails,
} from "../data/specialityDetails";

import {
  slugifyTreatment,
} from "../data/treatmentDetails";


/* =========================================
   COMMON SLUG
========================================= */

export function slugifyMedicalItem(
  value = ""
) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}


/* =========================================
   NORMALIZE ITEM
========================================= */

function normalizeItem(
  item,
  index,
  speciality,
  type
) {
  const name =
    typeof item === "string"
      ? item
      : item?.name ||
        item?.title ||
        "";

  const description =
    typeof item === "object"
      ? item?.description ||
        item?.text ||
        ""
      : "";

  const normalized = {
    id:
      typeof item === "object" &&
      item?.id
        ? item.id
        : `${speciality.slug}-${type}-${index}`,

    ...(typeof item === "object"
      ? item
      : {}),

    name,
    description,

    specialityName:
      speciality.name,

    specialitySlug:
      speciality.slug,
  };


  /* TREATMENTS */

  if (type === "treatments") {
    return {
      ...normalized,

      slug:
        typeof item === "object" &&
        item?.slug
          ? item.slug
          : slugifyTreatment(name),
    };
  }


  /* AILMENTS */

  if (type === "ailments") {
    return {
      ...normalized,

      slug:
        typeof item === "object" &&
        item?.slug
          ? item.slug
          : slugifyMedicalItem(name),
    };
  }


  return normalized;
}


/* =========================================
   GET ALL BY TYPE
========================================= */

function getAllByType(type) {
  const result = [];

  specialties.forEach(
    (navigationItem) => {
      const [
        specialityName,
        specialitySlug,
      ] = navigationItem;

      const specialityData =
        getSpecialityDetails(
          specialitySlug,
          navigationItem
        );

      const items =
        specialityData?.[type] ||
        [];

      items.forEach(
        (item, index) => {
          result.push(
            normalizeItem(
              item,
              index,
              {
                name:
                  specialityName,

                slug:
                  specialitySlug,
              },
              type
            )
          );
        }
      );
    }
  );

  return result;
}


/* =========================================
   TREATMENTS
========================================= */

export function getAllTreatments() {
  const all =
    getAllByType(
      "treatments"
    );

  const seen =
    new Set();

  return all.filter(
    (item) => {
      if (!item.name) {
        return false;
      }

      if (
        seen.has(
          item.slug
        )
      ) {
        return false;
      }

      seen.add(
        item.slug
      );

      return true;
    }
  );
}


export function getTreatmentBySlug(
  slug
) {
  if (!slug) {
    return null;
  }

  return (
    getAllTreatments().find(
      (item) =>
        item.slug === slug
    ) || null
  );
}


/* =========================================
   AILMENTS
========================================= */

export function getAllAilments() {
  const all =
    getAllByType(
      "ailments"
    );

  const seen =
    new Set();

  return all.filter(
    (item) => {
      if (!item.name) {
        return false;
      }

      if (
        seen.has(
          item.slug
        )
      ) {
        return false;
      }

      seen.add(
        item.slug
      );

      return true;
    }
  );
}


/* =========================================
   SINGLE AILMENT
========================================= */

export function getAilmentBySlug(
  slug
) {
  if (!slug) {
    return null;
  }

  return (
    getAllAilments().find(
      (item) =>
        item.slug === slug
    ) || null
  );
}