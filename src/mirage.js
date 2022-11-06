import { createServer, Model, Response } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      event: Model,
    },

    seeds(server) {
      server.create('event', {
        event_name: 'Event 1',
        featured: true,
        published: true,
        start_date: "2022-11-09",
        end_date: "2022-11-09",
      });
      server.create('event', {
        event_name: 'Event 2',
        featured: true,
        published: true,
        start_date: "2022-11-09",
        end_date: "2022-11-09",
      });
      server.create('event', {
        event_name: 'Event 2',
        featured: true,
        published: true,
        start_date: "2022-11-09",
        end_date: "2022-11-09",
      });
    },

    routes() {
      this.isAuthenticated = false;
      this.urlPrefix = 'http://localhost:8000';

      this.get('/api/v1/events', (schema) => {
        return {
          results: schema.events.all().models,
        };
      });
      
      this.post('/auth/email/', (schema) => {
        return new Response(200, { status: 'success' });
      });

      this.post('/auth/token/', (schema, request) => {
        const { token } = JSON.parse(request.requestBody);
        if (token === 'FAKE_TOKEN') {
          this.isAuthenticated = true;
          return new Response(200, { status: 'success' });
        } else {
          return new Response(400, { status: 'error' });
        }
      });

      this.post('/api/v1/current_user/', (schema) => {
        if (this.isAuthenticated) {
          return new Response(200, { email: 'test@test.com' });
        } else {
          return new Response(400, { status: 'error' });
        }
      });
    },
  })

  return server
}
