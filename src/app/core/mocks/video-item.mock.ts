import { VideoListingItem } from "../interfaces/video-listing-item";

export const mockedVideoItems: VideoListingItem[] = [
  {
    id: 1,
    name: 'Video 1',
    season: 1,
    airstamp: '2023-06-21',
    image: 'video1.jpg',
    summary: 'Summary 1',
    genres: ['Genre 1'],
    embeddedId: 123
  },
  {
    id: 2,
    name: 'Video 2',
    season: 2,
    airstamp: '2023-06-22',
    image: 'video2.jpg',
    summary: 'Summary 2',
    genres: ['Genre 2'],
    embeddedId: 456
  }
];