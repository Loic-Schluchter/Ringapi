import type { PrismaClient } from '../../generated/prisma/client.js'

declare module 'fastify' {
    interface FastifyInstance {
        prisma: PrismaClient
    }
    interface FastifySchema{
        description?: string,
        tags?: string[],
        summary?: string;
    }
}
