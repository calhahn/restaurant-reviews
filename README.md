# Restaurant Reviews

This is a demo for a restaurant reviews website built for educational purposes.

Contents:

* [About](#about)
* [Usage](#usage)
* [Dependencies](#dependencies)
* [Resources](#resources)

## About

This is the development code for a restaurant reviews website. The data for the
restaurants and reviews is provided in the `restaurants.json` file.

The three main goals of this project are:

1.  Accessibility: Include standard accessibility features and be accessible for
    screen reader use.

2.  Responsive design: Be mobile-ready and responsive on different sized
    displays.

3.  Offline functionality: Use a service worker to cache the static site assets
    and begin the process of creating a seamless offline user experience.

This repository uses [leafletjs](https://leafletjs.com/) with
[Mapbox](https://www.mapbox.com/). You need to replace
`<your MAPBOX API KEY HERE>` with a token from Mapbox. Mapbox is free to use
within limits, and does not require any payment information.

## Usage

1.  In this folder, start up a simple HTTP server to serve up the site files on
    your local computer. Here is one way to do this with Python:

    *   In a terminal, check the version of Python you have with `python -V`. If
        you have Python 2.x, spin up the server with
        `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is
        already in use). For Python 3.x, you can use
        `python3 -m http.server 8000`. If you don't have Python installed,
        navigate to [Python's website](https://www.python.org/) to download and
        install the software.

    *   Note: For Windows systems, Python 3.x is installed as `python` by
        default. To start a Python 3.x server, you can simply enter
        `python -m http.server 8000`.

2.  With your server running, visit the site: `http://localhost:8000`, and look
    around for a bit to see what the current experience looks like.

## Dependencies

* [Mapbox](https://www.mapbox.com/)
* [Leafletjs](https://leafletjs.com/)
* [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans)

## Resources

* [Offline cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook)
* [How to do an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review)

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript
specification for compatibility with modern web browsers and future-proofing
JavaScript code. As much as possible, try to maintain use of ES6 in any
additional JavaScript you write.
