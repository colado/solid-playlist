var clientID = "8a79d168a29043d292345c34a143e4f4";
var clientSecret = "ed23fc81a15c4620a3750f6e4111be3e";

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
