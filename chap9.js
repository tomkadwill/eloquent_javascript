// ex1
verify(/ca[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/p(|r)op/,
    ["pop culture", "mad props"],
    ["plop"]);

verify(/ferr[eay](|t|i)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/\b.*ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
    ["bad punctuation ."],
    ["escape the dot"]);

verify(/\w{7,}/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

verify(/\b[abcdfghijklmnopqrstuvwxyz][^e]*\b/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape"]);
