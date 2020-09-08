# V2 of Pryv style

## Install

`npm run setup` (which handles cloning of the `gh-pages` branch into `dist` for publishing)

## Customize

Edit the content of `scss`
- `main` to load specific bootstrap components
- `_variables` & `pryv_custom.scss`

Add necessary files to `./src`

## Build 

`npm run build`

Does:

- build `pryv2.css` & `pryv2.min.css` and copy the result in `./dist`
- copy the content of `./src` in `dist`

## Publish

push the content of dist in gh-pages