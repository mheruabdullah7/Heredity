# TODO: Fix Logout Function ES6 Module Issue

## Problem
The logout function `LogOut()` is defined in `js/db/dataSiswa.js` as an ES6 module, but HTML files are trying to call it directly with `onclick="LogOut()"` which doesn't work because ES6 module functions are not globally accessible.

## Files to Fix

### ✅ COMPLETED
- [x] `js/db/dataSiswa.js` - Added `window.LogOut = LogOut;` to export function globally
- [x] `html/pendahuluan.html` - Changed `onclick="handleLogOut()"` to `onclick="LogOut()"`
- [x] `html/evaluasi.html` - Fixed SweetAlert library to use SweetAlert2

### PENDING
- [ ] `html/materi1/materi1_sub1.html` - Check and fix logout function call  
- [ ] `html/materi1/materi1_sub2.html` - Check and fix logout function call
- [ ] `html/materi1/materi1_kuis.html` - Check and fix logout function call
- [ ] `html/materi2/materi2_sub1.html` - Check and fix logout function call
- [ ] `html/materi2/materi2_sub2.html` - Check and fix logout function call
- [ ] `html/materi2/materi2_sub3.html` - Check and fix logout function call

## Solution Approach
1. Export the `LogOut` function to the global scope from the ES6 module
2. Update all HTML files to call `LogOut()` directly instead of wrapper functions
3. Remove any unnecessary wrapper functions

## Status
- Progress: 2/9 files completed
- Next: Check and fix evaluasi.html
