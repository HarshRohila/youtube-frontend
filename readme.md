# PipedRx

Another YouTube Frontend using [Piped API](https://docs.piped.video/docs/api-documentation/) and [RxJS](https://rxjs.dev/)

Built using [Stencil.js](https://stenciljs.com/)

## How to use?

- [Web App link](https://www.rohilaharsh.in/youtube-frontend)
- **Recommmend** - Open above link in Mobile Chrome browser, click below option which says "Add to Home Screen". This will add icon in home screen to be used like any other Mobile app.

  > This app is tested in Android only

## Features

### Free

- No ads, no tracking.
- No sign in required to use.
- Free and Open Source.

### UI

- Mobile First Design.
- Home page shows Trending videos in India.
- Search for any YouTube video and play.
- Shows video suggestions based on currently playing video.
- Shows "Dislikes" count and other video info.

### Video player

- Full Screen.
- Double tap video controls for forward, backward and pause/play.
- Playback Speed options from 0.5x to 2x
- Picture-in-picture mode.
- Loop video by default.
- Play in Background.

### Sharing Options

- Share video Link with current video time.
- If installed in Android, you can share Video from YouTube app to this app, to play video in this app.

## About Stencil.js

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
npm init stencil app
```

and run:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```
