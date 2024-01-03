import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        /* When using the HTML5 History API, the index.html page will likely
            have to be served in place of any 404 responses.
        */
        historyApiFallback: true,
        // Enable webpack's Hot Module Replacement feature
        hot: true,
        client: {
            overlay: false,
        },
    };
}
