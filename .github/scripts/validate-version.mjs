import {readFileSync} from 'node:fs';
import semver from 'semver';

const current = JSON.parse(readFileSync(new URL('../../package.json', import.meta.url), 'utf8')).version;
const version = process.env.VERSION;

if (semver.valid(version) !== version || semver.lt(version, current)) {
  throw new Error(`Expected a valid version at least as new as ${current}: ${version}`);
}

console.log(current);
