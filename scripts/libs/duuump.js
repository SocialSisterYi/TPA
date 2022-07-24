const Module = require('module');
const oldCompile = Module.prototype._compile;
Module.prototype._compile = function (content, filename) {
    if (filename.endsWith('atom.js'))
        content = content
            .replace(
                /-+BEGIN PUBLIC KEY-+.+-+END PUBLIC KEY-+/s,
                `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuU4tzPrpJpsuWFWBgMak
IkSjBXzOel0jbd0g1vb4JMcQfkOEzJOWFZQNujFZp9vhGCG86LNGTzRmvWmZYkbF
+a5AVmobIZgUxYbK3y4YR2uWaW8YSUhPP8p3/jMmaoTHTakXx4Fiz5OyliETulPD
1TqaMWPyfHKNpetzEuu1w4is8UuYULYnmgur9sxtq5qaK2V2tFgUVfb1XIxdya4n
TTmqIjCaVcj6Q6HRbNWOKHV0jPJqPrauab0FtTjBO9/0NYGBoCgwf1BM/RTvuGUo
qA0p9BEJuUNAVCRndhbM1FoC025ZEWN52OZyI0LMZBKc1+7NlcKVyQh9WvR0D59e
sQIDAQAB
-----END PUBLIC KEY-----`
            )
            .replace(
                /https:\/\/store\.ty\u0070ora\.io|https:\/\/dian\.ty\u0070ora\.com\.cn|https:\/\/ty\u0070ora\.com\.cn\/store\//g,
                ''
            )
            .replace(
                /\$\{[^}]+}\/releases\/(dev_)?windows_/g,
                'taozhiyu.github.io/TyProAction/config/releases/$1windows_'
            )
            .replace(/ty\u0070ora-update-["+\w.-]+-"/g, 'Typro-Update-V"');
    return oldCompile.call(this, content, filename);
};
// process.argv.length = 1;
require('./main.node');
