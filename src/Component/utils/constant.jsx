export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer"+ process.env.REACT_APP_TMDB_KEY
  },
};

export const PosterUrl = `https://image.tmdb.org/t/p/original//`;
export const BgImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg";
