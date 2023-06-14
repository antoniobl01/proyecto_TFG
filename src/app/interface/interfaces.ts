import { Timestamp } from "rxjs";

export interface Interfaces {
}

export interface Carousel {
  img: string;
  title: string;
  description: string;
}

export interface Product {
  id?: number;
  title: string;
  description: string;
  location: string;
  user: string;
  date: Date;
}

export interface Article {
  id?: number;
  title: string;
  description: string;
  img: string;
  user: string;
  date: string;
}



