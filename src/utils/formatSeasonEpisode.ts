export function formatSeasonEpisode(season: number, episode: number): string {
  return (
    "S" +
    0 * (2 - season.toString().length) +
    season +
    "E" +
    0 * (2 - episode.toString().length) +
    episode
  );
}
