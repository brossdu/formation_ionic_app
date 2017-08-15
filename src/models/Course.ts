import { Address } from './Location'

export interface Course {
  name: string;
  location: Address;
  sessions:Array<Period>;
}

interface Period {
  title: string;
  first: string;
  last: string;
}
