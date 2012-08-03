// CAPSLOCKSCRIPT BOOTSTRAP, WE NEED SOME EVIL LOWERCASE AND CAMELCASE TO GET STARTED, BECAUSE OF INHERENT CASISM

var TOKENS = (
    'Object String toString toUpperCase toLowerCase indexOf getOwnPropertyNames readFileSync forEach ' +
    'CAPSLOCKSCRIPT'
).split(' ');

CAPSLOCKSCRIPT = function (S, EXTRA_TOKENS, EXTRA_ARGS) {
    S = S.toLowerCase();
    TOKENS.concat(EXTRA_TOKENS || []).forEach(function (T) {
        S = S.replace(new RegExp(T.toLowerCase(), 'g'), T);
    });
    return new Function([ 'require' ].concat(EXTRA_ARGS || []), S).bind(this, require);
}

module.exports.LOAD = CAPSLOCKSCRIPT(
    "RETURN FUNCTION (F, EXTRA_TOKENS, EXTRA_ARGS) {" +
    "    RETURN CAPSLOCKSCRIPT(REQUIRE('FS').READFILESYNC(F).TOSTRING(), EXTRA_TOKENS, EXTRA_ARGS);" +
    "}"
)();