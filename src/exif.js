const exif = require('jpeg-exif');
const fs = require('fs');  

// Adapted from redteam-snippets:
// https://gist.github.com/redteam-snippets/3934258

const gcd = (a, b) => {
	return (b) ? gcd(b, a % b) : a;
}

const decimalToFraction = (_decimal) => {
	var top		= _decimal.toString().replace(/\d+[.]/, '');
	var bottom	= Math.pow(10, top.length);
  
  if (_decimal > 1) {
		top	= +top + Math.floor(_decimal) * bottom;
  }
  
  var x = gcd(top, bottom);
  
	return (top / x) + '/' + (bottom / x);
};

module.exports = (file, /*options*/) => {
  let result = '';
  const defaultConfig = {
    hideText: true,
    tags: ['FNumber', 'ExposureTime', 'FocalLength', 'PhotographicSensitivity']
  };

  const config = Object.assign(defaultConfig/*, options*/);
  
  let output = exif.parseSync(file);

  output = Object.assign(output, output.SubExif, output.GPSInfo);
  delete output.SubExif;
  delete output.GPSInfo;

  config.tags.forEach(value => {
    if (output[value]) {
      switch (value) {
        case 'ExposureTime':
          result += decimalToFraction(output[value][0]) + ' sec';
          break;
        case 'FNumber':
          result += 'f/' + output[value][0];
          break;
        case 'FocalLength':
          result += output[value][0] + 'mm';
          break;
        case 'PhotographicSensitivity':
          result += 'ISO ' + output[value];
          break;
        default:
          result += output[value];
          break;
      }

      result += ' ';
    }
  });

  return result;
};
