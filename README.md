# Pryv style assets

Reference CSS, JS and media files.


## Usage

### Basic

Just refer to the published files: https://api.pryv.com/style

### Customize

Add a `package.json` dev dependency pointing to this repo, then use and override source files in your build.

## Contributing

### Setup

Install with `./dev-env/setup.sh` (which handles cloning of the `gh-pages` branch into `dist` for publishing) or `npm install`.
Build with `npm run build`, which outputs assets to `dist`.

### Do stuff

- Styles (i.e. Bootstrap variables and overrides) are in `stylus`
- Media assets are in `assets`

### Publish

**TODO: versioning.**

After building, commit and push the changes from `dist` (i.e. publishes to GitHub pages).


## License

[Revised BSD license](https://github.com/pryv/documents/blob/master/license-bsd-revised.md)
