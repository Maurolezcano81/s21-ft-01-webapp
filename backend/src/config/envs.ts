import { get } from "env-var";

process.loadEnvFile();

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PGDATABASE: get('PGDATABASE').required().asString(),
    PGUSER: get('PGUSER').required().asString(),
    PGPASSWORD: get('PGPASSWORD').required().asString(),
    PGHOST: get('PGHOST').required().asString(),
    PGPORT: get('PGPORT').required().asIntPositive(),
    JWT_SEED: get('JWT_SEED').required().asString(),
}