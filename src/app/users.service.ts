export class UsersService {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }


  users = [
    {name: "wtf1"},
    {name: "wtf2"},
    {name: "wtf3"},
    {name: "wtf4"}
  ]
}
