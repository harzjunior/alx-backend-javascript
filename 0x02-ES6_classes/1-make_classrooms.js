import ClassRoom from './0-classroom';

/**
 * Generates an array of {@link ClassRoom}s instances of a specified size
 * Returns an arr of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
