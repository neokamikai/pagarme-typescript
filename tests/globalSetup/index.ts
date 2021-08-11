import { config } from 'dotenv';
import path from 'path';

module.exports = () => {
  const output = config({
    path: path.resolve(path.join(process.cwd(), '.env')),
  });
  const { error: stdout, log } = console;
  if (output.error) stdout(output.error);
  else log('env file parsed:', output.parsed);
};
