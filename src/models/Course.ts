export interface Course {
  name: string;
  location: CourseLocation;
  sessions:Array<Period>;
}

interface Period {
  title: string;
  first: string;
  last: string;
}

interface CourseLocation {
  street: string;
  city: string;
	stateß: string;
  postcode: number;
  lng: number;
  lat: number; 
}
