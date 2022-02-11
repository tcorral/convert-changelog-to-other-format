import parseChangelog from 'changelog-parser';
import { renderFile } from 'pug';

async function getChangelog(changelogPath: string) {
    const changelog = await parseChangelog(changelogPath);

    return changelog;
}

async function getFormattedChangelog(changelogPath: string, templatePath: string) {
    const changelog = await getChangelog(changelogPath);
    return renderFile(templatePath, { changelog });
}

export {
    getFormattedChangelog,
    getChangelog,
};
