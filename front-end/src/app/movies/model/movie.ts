export class Movie {
  _id: number;
  name: string;
  year: number;
  rating: number;
  description: string;
  duration: number;
  director: string;
  genre: string;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.name = obj && obj.name || "";
    this.description = obj && obj.description || "";
    this.director = obj && obj.director || "";
    this.genre = obj && obj.genre || "";
    this.year = obj && obj.year || 0;
    this.rating = obj && obj.rating || 0;
    this.duration = obj && obj.duration || 0;
  }
}