/**
 * Code based on
 * create-react-app registerServiceWorker.js
 */

/* eslint-disable */
const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),
    SERVICE_WORKER_PATH = 'sw';

export default function register() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in window.navigator) {
        const publicUrl = new URL(SERVICE_WORKER_PATH, window.location);
        if (publicUrl.origin !== window.location.origin) {
            console.warn('origin different');
            return;
        }
        
        window.addEventListener('load', () => {
            const swUrl = `${SERVICE_WORKER_PATH}/service-worker.js`;
            if (isLocalhost) {
                checkValidServiceWorker(swUrl);
            } else {
                registerValidSW(swUrl);
            }
        });
    }
}

function registerValidSW(swUrl) {
    window.navigator
        .serviceWorker
        .register(swUrl)
        .then(registration => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (window.navigator.serviceWorker.controller) {
                            console.info('New content is available; please refresh.');
                        } else {
                            console.info('Content is cached for offline use.');
                        }
                    }
                };
            };
        })
        .catch(error => {
            console.error('Error during service worker registration:', error);
        });
}

function checkValidServiceWorker(swUrl) {
    window.fetch(swUrl).then(response => {
        if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
            window.navigator
                .serviceWorker
                .ready
                .then(registration => {
                    registration
                        .unregister()
                        .then(() => {
                            window
                                .location
                                .reload();
                        });
                });
        } else {
            registerValidSW(swUrl);
        }
    }).catch(() => {
        console.log('No internet connection found. App is running in offline mode.');
    });
}

export function unregister() {
    if ('serviceWorker' in window.navigator) {
        window.navigator
            .serviceWorker
            .ready
            .then(registration => {
                registration.unregister();
            });
    }
}
