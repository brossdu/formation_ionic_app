import { Address } from './Location'

export interface Student {
  id: number;
  gender: string;
  name: Name;
  email: string;
  picture: Picture;
  location: Address;
  nat: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
