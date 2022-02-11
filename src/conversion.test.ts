import { readFileSync } from 'fs';
import { join } from 'path';
import { getChangelog, getFormattedChangelog} from './index';
const fixturesPath = join(__dirname, '..', 'fixtures');
const changelogPath = join(fixturesPath, 'CHANGELOG.md');
const expectedPath = join(fixturesPath, 'expected.txt');
const expectedFormattedPath = join(fixturesPath, 'expectedFormatted.txt');

test('test expected and generated are exactly the same output', async() => {
    const output = await getChangelog(changelogPath);
    const expected = readFileSync(expectedPath, 'utf-8');
    expect(expected).toEqual(JSON.stringify(output));
});

test('test expected formatted output ang generated are exactly the same output', async() => {
    const output = await getFormattedChangelog(changelogPath, join(fixturesPath, 'template.pug'));
    const expected = readFileSync(expectedFormattedPath, 'utf-8');
    expect(expected).toEqual(output);
});