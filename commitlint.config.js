const scopes = ['general', 'components', 'reconciler', 'jsx-elements'];

const types = [
    { type: 'build', section: 'Build' },
    { type: 'ci', section: 'Continuous integration' },
    { type: 'chore', section: 'Chore' },
    { type: 'docs', section: 'Documentation' },
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'perf', section: 'Performance' },
    { type: 'refactor', section: 'Refactor' },
    { type: 'revert', section: 'Revert' },
    { type: 'style', section: 'Styles' },
    { type: 'test', section: 'Test' },
    // custom types:
    { type: 'improv', section: 'Improvements' },
];

const config = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 100],
        'type-enum': [2, 'always', types.map(({ type }) => type)],
        'scope-empty': [2, 'never'],
        'scope-enum': [2, 'always', scopes],
    },
};


module.exports = config;
module.exports.types = types;
