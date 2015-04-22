[![Latest Version on Packagist](http://img.shields.io/packagist/v/cliffparnitzky/tiny-mce-you-tube.svg?style=flat)](https://packagist.org/packages/cliffparnitzky/tiny-mce-you-tube)
[![Installations via composer per month](http://img.shields.io/packagist/dm/cliffparnitzky/tiny-mce-you-tube.svg?style=flat)](https://packagist.org/packages/cliffparnitzky/tiny-mce-you-tube)
[![Installations via composer total](http://img.shields.io/packagist/dt/cliffparnitzky/tiny-mce-you-tube.svg?style=flat)](https://packagist.org/packages/cliffparnitzky/tiny-mce-you-tube)

Contao Extension: TinyMceYouTube
================================

Special TinyMCE plugin to add videos from YouTube into the editor via button.

The sources of this plugin could be found [here](https://github.com/gtraxx/tinymce-plugin-youtube).

Now for TinyMCE 4.


Installation
------------

Install the extension via composer: [cliffparnitzky/tiny-mce-you-tube](https://packagist.org/packages/cliffparnitzky/tiny-mce-you-tube).

If you prefer to install it manually, download the latest release here: https://github.com/cliffparnitzky/TinyMceYouTube/releases


Tracker
-------

https://github.com/cliffparnitzky/TinyMceYouTube/issues


Compatibility
-------------

- min. Contao version: >= 3.3.0
- max. Contao version: <  3.5.0


Dependency
----------

- To load this plugin and add it to the configuration the extension [[TinyMcePluginLoader]](https://github.com/cliffparnitzky/TinyMcePluginLoader) has to be installed.


Configuration
-------------

- It's necessary to add `<iframe>` to the list of **Allowed HTML tags** (see Settings => Security Settings).


Screenshot
----------

![Screenshot](screenshot.jpg)