const API_KEY = "42031506-26545a7af84e6a92777e1df63";
const BASE_URL = "https://pixabay.com/api/";

export function fetchImages(query, page = 1) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    page,
    per_page: 12,
  });

  const url = `${BASE_URL}?${params.toString()}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data.hits; // Возвращаем [] изображений
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    });
}
