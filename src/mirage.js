import { createServer, Model, Response } from 'miragejs';
import moment from 'moment';

function sampleArray (array) {
  return array[Math.floor(Math.random() * array.length)];
}

const DATE_FORMAT = 'YYYY-MM-DD';
const today = moment();
const eventNumbers = Array.from({ length: 50 }, (x, i) => i);
const durationValues = [0, 1, 2, 3, 4];

const FAKE_EVENTS = eventNumbers.map(number => {
  return {
    id: number,
    event_name: `Example Event #${number}`,
    organization_name: `Organization #${number}`,
    featured: number < 10,
    published: true,
    start_date: today.add(number, 'days').format(DATE_FORMAT),
    end_date: today.add(sampleArray(durationValues), 'days').format(DATE_FORMAT),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: 'python',
    language: 'en',
  }
});

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      event: Model,
    },

    seeds(server) {
      FAKE_EVENTS.forEach(eventData => {
        server.create('event', eventData);
      });
    },

    routes() {
      this.isAuthenticated = false;
      this.urlPrefix = 'http://localhost:8000';

      this.get('/api/v1/events/:id/', (schema, request) => {
        const evt = schema.events.find(parseInt(request.params.id));

        return evt.attrs;
      });

      this.get('/api/v1/events', (schema, request) => {
        if (request.queryParams.featured) {
          return {
            results: schema.events.where({ featured: true }).models,
          }
        } else {
          return {
            count: schema.events.all().models.length,
            next: null,
            previous: null,
            results: schema.events.all().models,
          }
        }
      });

      this.post('/auth/email/', () => {
        return new Response(200, { status: 'success' });
      });

      this.post('/auth/token/', (_, request) => {
        const { token } = JSON.parse(request.requestBody);
        if (token === 'FAKE_TOKEN') {
          this.isAuthenticated = true;
          return new Response(200, { status: 'success' });
        } else {
          return new Response(400, { status: 'error' });
        }
      });

      this.post('/api/v1/current_user/', () => {
        if (this.isAuthenticated) {
          return new Response(200, { email: 'test@test.com' });
        } else {
          return new Response(400, { status: 'error' });
        }
      });
    },
  });

  return server;
}
