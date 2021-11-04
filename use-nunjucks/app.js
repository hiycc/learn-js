const numjucks = require('nunjucks');

function createEnv(path,opts){
    var 
        autoescape = opts.autoescape === undefined?true:opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUnderfined = opts.throwOnUnderfined || false,
        env = new numjucks.Environment(
            new numjucks.FileSystemLoader('views',{
                noCache: noCache,
                watch: watch,
            }), {
                autoescape:autoescape,
                throwOnUnderfined:throwOnUnderfined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});