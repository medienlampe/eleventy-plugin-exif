# [11ty](https://www.11ty.io/) Exif plugin 

This plugin:

- 🖼️ adds an exif filter
- 🖼️ renders f-number, exposure time, focal length and ISO of your image (if available)

---

**Do you find this useful? Feel free to me a beer via [PayPal](https://paypal.me/BischoffSven)**

---

## Getting started

### Installation

Enter your project folder and run:

```bash
# npm
npm install eleventy-plugin-exif --save-dev

# yarn
yarn add eleventy-plugin-exif --dev
```

Update your project's `.eleventy.js` to enable the plugin:

```js
const exifPlugin = require('eleventy-plugin-exif');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(exifPlugin);
};
```

### Usage

In your templates, use the following syntax to extract the exif information out of your image and render them:

```html
// nunjucks/liquid
{{ 'path/to/image.jpg' | exif }}

// handlebars
{{{exif 'path/to/image.jpg' }}}
```

## Dependencies

- [jpeg-exif](https://github.com/zhso/jpeg-exif)

## Contributing

Contributions are welcome, feel free to file issues, fork and submit Pull Requests!

## Authors

- **Sven Bischoff** – [@medienlampe](https://github.com/medienlampe)

You can find also have a look at all the [beautiful people](https://github.com/medienlampe/eleventy-plugin-exif/contributors) who contributed to this project.

## License

This project is licensed under the [MIT LICENSE](LICENSE).
