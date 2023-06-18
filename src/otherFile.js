"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importWorking = void 0;
// @ts-expect-error unused
var nonExisting = "This shouldn't be in dist and would throw a compile error";
exports.importWorking = "Importing and such works as expected";
