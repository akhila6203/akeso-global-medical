const API_BASE = (
  import.meta.env.VITE_API_URL || "http://localhost:5000/api"
).replace(/\/$/, "");
export async function submitEnquiry(type, formData) {
  const payload = new FormData();
  payload.append("type", type);
  for (const [key, value] of formData.entries())
    if (key !== "type") payload.append(key, value);
  let response;
  try {
    response = await fetch(`${API_BASE}/health-library/submit`, {
      method: "POST",
      body: payload,
    });
  } catch {
    throw new Error("Unable to connect to the server.");
  }
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.success)
    throw new Error(result.message || "Unable to submit form.");
  return result;
}




// export async function submitEnquiry(type, formData) {
//   const payload = new FormData();
//   payload.append("type", type);

//   for (const [key, value] of formData.entries()) {
//     if (key !== "type") {
//       payload.append(key, value);
//     }
//   }

//   let response;

//   try {
//     response = await fetch("/api/enquiry.php", {
//       method: "POST",
//       body: payload,
//     });
//   } catch {
//     throw new Error("Unable to connect to the server.");
//   }

//   const result = await response.json().catch(() => ({}));

//   if (!response.ok) {
//     throw new Error(result.message || "Unable to submit form.");
//   }

//   return result;
// }
