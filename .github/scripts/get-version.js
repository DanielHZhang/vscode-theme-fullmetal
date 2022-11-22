const semver = require('semver');

module.exports = ({github, core}) => {
  const releaseTag = github.event.release.tag_name;
  const result = semver.coerce(releaseTag);

  if (!result) {
    core.error(`Could not coerce release tag ${releaseTag} into semver.`);
    process.exit(1);
  }

  core.info(`Extracted semver: ${result.version}`);
  core.setOutput('value', result.version);
};
