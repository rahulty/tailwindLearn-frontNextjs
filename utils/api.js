// import { useState } from "react";

const baseUrl = "http://localhost:1337/";

export async function get(route) {
  //   const [s, ss] = useState('loading');
  return await (await fetch(`${baseUrl}${route}`)).json();
}
