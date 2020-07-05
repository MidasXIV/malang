// File to copy client Side javscript from build/public/js
// find corresponding source file from src/public/js


import { cp } from "shelljs";

cp("-R", "build/public/js/", "public/");