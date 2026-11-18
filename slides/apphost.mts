// Aspire TypeScript AppHost
// For more information, see: https://aspire.dev

import { createBuilder } from './.aspire/modules/aspire.mjs';

const builder = await createBuilder();

// One Vite dev server hosts every deck; the dashboard links straight to each one.
await builder.addViteApp('slides', '.', { runScriptName: 'slides:start' })
    .withNpm({ install: false })
    .withUrlForEndpoint('http', async url => {
        url.displayText = 'All decks';
    })
    .withUrls(async context => {
        const http = context.getEndpoint('http');
        const urls = context.urls();
        await urls.addForEndpoint(http, '/map/', { displayText: 'NDC Porto: Aspire is the map' });
        await urls.addForEndpoint(http, '/agents/', { displayText: 'Techorama: Use agents to build agents' });
    });

await builder.build().run();
