import {
  specialties,
} from "../data/navigation";

import {
  getSpecialityDetails,
} from "../data/specialityDetails";


function normaliseItem(
  item,
  index,
  speciality
) {
  if (
    typeof item === "string"
  ) {
    return {
      id:
        `${speciality.slug}-${index}-${item}`,
      name: item,
      description: "",
      specialityName:
        speciality.name,
      specialitySlug:
        speciality.slug,
    };
  }

  return {
    id:
      item.id ||
      `${speciality.slug}-${index}-${item.title || item.name}`,

    ...item,

    name:
      item.name ||
      item.title,

    description:
      item.description ||
      item.text ||
      "",

    specialityName:
      speciality.name,

    specialitySlug:
      speciality.slug,
  };
}


function getAllByType(
  type
) {
  const result = [];

  specialties.forEach(
    (navigationItem) => {
      const [
        name,
        slug,
      ] = navigationItem;

      const data =
        getSpecialityDetails(
          slug,
          navigationItem
        );

      const items =
        data?.[type] || [];

      items.forEach(
        (item, index) => {
          result.push(
            normaliseItem(
              item,
              index,
              {
                name,
                slug,
              }
            )
          );
        }
      );
    }
  );

  return result;
}


export function getAllTreatments() {
  return getAllByType(
    "treatments"
  );
}


export function getAllAilments() {
  return getAllByType(
    "ailments"
  );
}