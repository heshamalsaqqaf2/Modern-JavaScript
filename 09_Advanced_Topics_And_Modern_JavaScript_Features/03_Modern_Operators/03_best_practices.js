'use strict';

// TODO: ------------------------ 1- Combine Both Operators When Needed ------------------------
// Good: Clear handling of both navigation and defaults
const title = document?.meta?.title ?? 'Untitled';

// Instead of:
const title2 = document && document.meta && document.meta.title || 'Untitled';

// TODO: ------------------------ 2- Use for Safe Property Access ------------------------
// Good: Safe access with clear intent
const firstName = user?.profile?.name?.first ?? 'Anonymous';

// Avoid: Unnecessary use when you know the object exists
const definitelyExists = obj.property ?? 'default'; // Use normal access if you're sure

// TODO: ------------------------ 3- Remember the Differences from || ------------------------
// (??) is for null/undefined only
const count = 0 ?? 5;        // 0
const count2 = 0 || 5;      // 5

const empty = "" ?? "text";  // ""
const empty2 = "" || "text"; // "text"
