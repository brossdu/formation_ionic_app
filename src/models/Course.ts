export interface Course {
  name: string;
  location: Location;
  sessions:Array<Period>;
}

interface Period {
  title: string;
  first: string;
  last: string;
}
