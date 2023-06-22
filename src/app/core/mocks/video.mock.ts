import { VideoApi } from "../interfaces/video";

export const mockVideo: VideoApi = {
  id: 1,
  url: 'https://example.com',
  name: 'Video Name',
  type: 'Movie',
  language: 'English',
  genres: ['Genre 1', 'Genre 2'],
  status: 'Released',
  runtime: null,
  averageRuntime: 120,
  premiered: '2021-01-01',
  ended: null,
  officialSite: 'https://official-site.com',
  schedule: { time: '20:00', days: ['Monday'] },
  rating: { average: 8.5 },
  weight: 80,
  network: null,
  webChannel: { id: 1, name: 'Web Channel', country: null, officialSite: 'https://web-channel.com' },
  dvdCountry: null,
  externals: { tvrage: null, thetvdb: 123, imdb: 'tt1234567' },
  image: { medium: 'https://example.com/medium.jpg', original: 'https://example.com/original.jpg' },
  summary: 'Video summary',
  updated: 1624233600,
  _links: { self: { href: 'https://example.com/video/1' }, previousepisode: { href: 'https://example.com/episode/123' } }
};