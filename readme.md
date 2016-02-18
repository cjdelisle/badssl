# BadSSL

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
