const api = {
  getProducts: async (page) =>
    // page used as a parameter for the API, by default we get 10 products fetched from api that I have setup in backend.

    await fetch(`${process.env.REACT_APP_API_URL}/products?page=${page}`),
  getReports: async (accessToken) =>
    await fetch(`${process.env.REACT_APP_API_URL}/reports`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }),
};

export default api;
