import { photosets } from '../utils/photosets';

export const getAllWorkIds = () =>
  photosets.map((photoset) => ({
    params: {
      id: photoset.id,
    },
  }));
