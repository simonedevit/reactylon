const { types } = require('../../commitlint.config');

const ORGANIZATION = 'dvmstudios',
    PROJECT = 'webxr',
    REPOSITORY = 'reactylon';

module.exports = {
    header: '# DVM Studios - Reactylon - Changelog\n',
    types,
    //releaseCommitMessageFormat: "chore(release): {{currentTag}}",
    commitUrlFormat: `{{host}}/${ORGANIZATION}/${PROJECT}/_git/${REPOSITORY}/commit/{{hash}}`,
    compareUrlFormat: `{{host}}/${ORGANIZATION}/${PROJECT}/_git/${REPOSITORY}/branchCompare?baseVersion=GT{{previousTag}}&targetVersion=GT{{currentTag}}&_a=files`,
    issuePrefixes: ['#'],
    issueUrlFormat: `{{host}}/${ORGANIZATION}/${PROJECT}/_workitems/edit/{{id}}`,
};