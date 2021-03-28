import {
  createSolidDataset,
  getSolidDataset,
  saveSolidDatasetAt,
} from "@inrupt/solid-client";

export const getOrCreatePlaylist = async (containerUri, fetch) => {
  const indexUrl = `${containerUri}index.ttl`;
  try {
    const playlist = await getSolidDataset(indexUrl, { fetch });
    return playlist;
  } catch (error) {
    if (error.statusCode === 404) {
      const playlist = await saveSolidDatasetAt(
        indexUrl,
        createSolidDataset(),
        {
          fetch,
        }
      );
      return playlist;
    }
  }
};
