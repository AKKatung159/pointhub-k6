import http from 'k6/http';
import { check, sleep } from 'k6';

const TOKEN = 'your_token';
const baseUrl = 'your_base_url/';

export let options = {
  scenarios: {
    scenario_1: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '2m', target: 50 },
        { duration: '3m', target: 100 },
        { duration: '2m', target: 0 },
      ],
      exec: 'testApp',
    },
    scenario_2: {
      executor: 'constant-vus',
      vus: 100,
      duration: '5m',
      exec: 'testMyProfile',
    },
    scenario_3: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '2m', target: 20 },
        { duration: '3m', target: 50 },
        { duration: '2m', target: 0 },
      ],
      exec: 'testMyPoints',
    },
    scenario_4: {
      executor: 'constant-arrival-rate',
      rate: 20,
      timeUnit: '1s',
      duration: '3m',
      preAllocatedVUs: 50,
      exec: 'testMyRewards',
    },
    scenario_5: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '2m', target: 50 },
        { duration: '3m', target: 100 },
        { duration: '2m', target: 0 },
      ],
      exec: 'testAttendEvent',
    },
  },
};

export function testApp() {
  let res = http.get(baseUrl + 'app', {
    headers: { 'Authorization': `Bearer ${TOKEN}` },
  });
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 800ms': (r) => r.timings.duration < 800,
  });
  sleep(1);
}

export function testMyProfile() {
  let res = http.get(baseUrl + 'app/my-profile', {
    headers: { 'Authorization': `Bearer ${TOKEN}` },
  });
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 800ms': (r) => r.timings.duration < 800,
  });
  sleep(1);
}

export function testMyPoints() {
  let res = http.get(baseUrl + 'app/my-points', {
    headers: { 'Authorization': `Bearer ${TOKEN}` },
  });
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 800ms': (r) => r.timings.duration < 800,
  });
  sleep(1);
}

export function testMyRewards() {
  let res = http.get(baseUrl + 'app/my-rewards', {
    headers: { 'Authorization': `Bearer ${TOKEN}` },
  });
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 800ms': (r) => r.timings.duration < 800,
  });
  sleep(1);
}

export function testAttendEvent() {
  let res = http.get(baseUrl + 'app/attend-event', {
    headers: { 'Authorization': `Bearer ${TOKEN}` },
  });
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 800ms': (r) => r.timings.duration < 800,
  });
  sleep(1);
}
