import supertest from 'supertest';

import { server } from '../server/Server';


export const testServer = supertest(server);