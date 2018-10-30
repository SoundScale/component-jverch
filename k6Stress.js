import http from 'k6/http';
import { sleep } from 'k6';

export default function() {
  for (let i = 0; i < 10; i += 1) {
    http.get(`http://localhost:3001/api/comments/${Math.floor(Math.random() * 10000000)}`);
  }
  sleep(0.1);
};
