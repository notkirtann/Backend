import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Manually construct the path to the new location
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, './src/route/.env') });