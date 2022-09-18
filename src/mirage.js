import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      event: Model,
    },

    seeds(server) {
      server.create('event', { event_name: 'Event 1' });
      server.create('event', { name: 'Event 2' });
    },

    routes() {
      this.namespace = 'api';

      this.get('/events', (schema) => {
        return schema.events.all()
      });
    },
  })

  return server
}