// index.ts
import { Article } from "./state"; // adjust if your file name/path differs

const article = new Article();

console.log("1) Draft: edit");
article.edit("My first draft");

console.log("2) Draft: sendBack (should error)");
try {
    article.sendBack("Not possible yet");
} catch (e) {
    console.log("Error:", e instanceof Error ? e.message : e);
}

console.log("3) Draft -> Review: submit");
article.submit();

console.log("4) Review: edit (should error)");
try {
    article.edit("Trying to edit while under review");
} catch (e) {
    console.log("Error:", e instanceof Error ? e.message : e);
}

console.log("5) Review -> Draft: sendBack");
article.sendBack("Needs more work");

console.log("6) Draft: edit again");
article.edit("Revised draft");

console.log("7) Draft -> Review: submit");
article.submit();

console.log("8) Review -> Published: submit (should log approval)");
article.submit();

console.log("9) Published: edit (should log warning)");
article.edit("Attempting to change published content");

console.log("10) Published: submit (should error)");
try {
    article.submit();
} catch (e) {
    console.log("Error:", e instanceof Error ? e.message : e);
}

console.log("11) Published -> Review: sendBack (unpublish)");
article.sendBack("Unpublishing for corrections");
