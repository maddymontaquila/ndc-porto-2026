// Aspire TypeScript AppHost
// For more information, see: https://aspire.dev

import { createBuilder } from './.aspire/modules/aspire.mjs';

const builder = await createBuilder();

await builder.addViteApp('agent-session', '.', { runScriptName: 'slides:start' })
    .withNpm({ install: false })
    .withUrlForEndpoint('http', async url => {
        url.url = '/agents/';
        url.displayText = 'Agent session';
    });

await builder.build().run();