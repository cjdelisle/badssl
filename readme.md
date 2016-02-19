# BadSSL

[![npm](https://img.shields.io/npm/v/badssl.svg?style=flat-square)](https://www.npmjs.com/package/badssl)&nbsp;
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)&nbsp;
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)&nbsp;

[![bitHound Overall Score](https://www.bithound.io/github/cjdelisle/badssl/badges/score.svg)](https://www.bithound.io/github/cjdelisle/badssl)
[![bitHound Dev Dependencies](https://www.bithound.io/github/cjdelisle/badssl/badges/devDependencies.svg)](https://www.bithound.io/github/cjdelisle/badssl/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/cjdelisle/badssl/badges/code.svg)](https://www.bithound.io/github/cjdelisle/badssl)

[![Code Climate](https://codeclimate.com/github/cjdelisle/badssl/badges/gpa.svg)](https://codeclimate.com/github/cjdelisle/badssl)
[![Issue Count](https://codeclimate.com/github/cjdelisle/badssl/badges/issue_count.svg)](https://codeclimate.com/github/cjdelisle/badssl)
[![Build Status](https://travis-ci.org/cjdelisle/badssl.svg?branch=master)](https://travis-ci.org/cjdelisle/badssl)


    He who would trade liberty for some temporary security, deserves neither.

All of our browsers keep upgrading and banning old/broken SSL versions (this is a good thing) but
thanks to the Internet of Things, we have SSL servers that **never** get upgraded. Some
manufacturers, in their infinite wisdom, have decided to block any HTTP, thus making their broken
insecure SSL *mandatory* for connecting to their broken devices.

This steaming pile of crap will allow you to connect to any server you want by piping the data you
send to an `openssl s_client` request which usually is able to connect to anything remotely like
SSL.

# Howto

Edit the file `proxy.js` to add the host you want to connect to `host:port` and then run it, connect
to the thing you need, make the required changes and then go take a shower.

# License

GPLv3, what did you expect?
