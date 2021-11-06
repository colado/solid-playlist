var clientID = "8a79d168a29043d292345c34a143e4f4";
var clientSecret = "ed23fc81a15c4620a3750f6e4111be3e";
const spotifyBaseUrl = "https://api.spotify.com/v1";

export const getSpotifyAccessToken = async () => {
  const body = new URLSearchParams();
  body.append("grant_type", "client_credentials");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
    },
    body,
    redirect: "follow",
  };

  let res = await fetch(
    "https://accounts.spotify.com/api/token",
    requestOptions
  );
  res = await res.json();
  return res.access_token;
};

export const searchSpotifyItem = async (token, params) => {
  let url = new URL(`${spotifyBaseUrl}/search`);
  url.searchParams.set("q", params);
  url.searchParams.set("type", "track,artist,album");

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  let res = await fetch(url, requestOptions);
  res = await res.json();

  return res;
};
