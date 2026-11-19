// Aspire TypeScript AppHost
// For more information, see: https://aspire.dev

import { createBuilder } from './.aspire/modules/aspire.mjs';

const builder = await createBuilder();

// One Vite dev server hosts every deck; the dashboard links straight to each one.
await builder.addViteApp('slides', '.', { runScriptName: 'slides:start' })
    .withNpm({ install: false })
    .withUrlForEndpoint('http', async url => {
        url.url = '/';
        url.displayText = 'NDC sessions';
    })
    .withUrls(async context => {
        const http = context.getEndpoint('http');
        const urls = context.urls();
        await urls.addForEndpoint(http, '/map/', { displayText: 'Aspire is the map (map)' });
        await urls.addForEndpoint(http, '/coding-agent-map/', { displayText: 'Aspire is the map (coding-agent-map)' });
        await urls.addForEndpoint(http, '/agents/', { displayText: 'Use agents to build agents' });
    });

await builder.build().run();
