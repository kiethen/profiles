/*
@supported 8FFA6E55 60ED4873
*/
var body = $response.body;
body = '\/*\n@supported 8FFA6E55 60ED4873\n*\/\n' + body;

$done(body);
