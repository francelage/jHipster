"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const url_1 = require("url");
function url(urlString) {
    const url = url_1.parse(urlString);
    return (context) => context.engine.createSourceFromUrl(url, context)(context);
}
exports.url = url;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW5zbC9Tb3VyY2VzL2RldmtpdC8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L3NjaGVtYXRpY3Mvc3JjL3J1bGVzL3VybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7R0FNRztBQUNILDZCQUE0QjtBQUk1QixhQUFvQixTQUFpQjtJQUNuQyxNQUFNLEdBQUcsR0FBRyxXQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFN0IsTUFBTSxDQUFDLENBQUMsT0FBeUIsS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsRyxDQUFDO0FBSkQsa0JBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3VybCc7XG5pbXBvcnQgeyBTY2hlbWF0aWNDb250ZXh0LCBTb3VyY2UgfSBmcm9tICcuLi9lbmdpbmUvaW50ZXJmYWNlJztcblxuXG5leHBvcnQgZnVuY3Rpb24gdXJsKHVybFN0cmluZzogc3RyaW5nKTogU291cmNlIHtcbiAgY29uc3QgdXJsID0gcGFyc2UodXJsU3RyaW5nKTtcblxuICByZXR1cm4gKGNvbnRleHQ6IFNjaGVtYXRpY0NvbnRleHQpID0+IGNvbnRleHQuZW5naW5lLmNyZWF0ZVNvdXJjZUZyb21VcmwodXJsLCBjb250ZXh0KShjb250ZXh0KTtcbn1cbiJdfQ==