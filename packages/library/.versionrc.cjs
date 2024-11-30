const { types } = require('../../commitlint.config');

const OWNER = 'simonedevit';
const REPOSITORY = 'reactylon';

module.exports = {
    header: '# Reactylon - Changelog\n',
    types,
    commitUrlFormat: `https://github.com/${OWNER}/${REPOSITORY}/commit/{{hash}}`,
    compareUrlFormat: `https://github.com/${OWNER}/${REPOSITORY}/compare/{{previousTag}}...{{currentTag}}`,
    issuePrefixes: ['#'],
    issueUrlFormat: `https://github.com/${OWNER}/${REPOSITORY}/issues/{{id}}`,
};