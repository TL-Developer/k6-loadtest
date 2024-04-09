import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 10000,
  iterations: 100000
};

export default function () {
  http.get("http://localhost:8181/");

  // check(res, { "status was 200": (r) => r.status == 200 });

  sleep(1);
}