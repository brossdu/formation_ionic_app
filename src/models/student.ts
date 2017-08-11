export interface Student {
  id: number;
  gender: string;
  name: Name;
  email: string;
  picture: Picture;
  location: Location;
  nat: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Location {
  street: string;
  city: string;
  state: string;
  postCode: number;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
