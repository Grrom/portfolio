export interface skill {
  [key: string]: Array<{ name: string; icon: any }>;
}

export interface contact {
  site: string;
  link: string;
  icon: any;
}

export interface project {
  name: string;
  imgSrc: string;
  link: string;
  description: string;
}
