// export interface User {
//   id: number;
//   name: string;
// }
export class User {
    constructor(
    public id: number,
    public name: string,
    public email: string,
    public city: string,
    public state: string
  ) {}
}
