// const fs = require("fs");
// const Jimp = require("jimp");
// const path = require("path");
// const buffer = Buffer.from(path.join(__dirname, "file.txt"), "base64");
// Jimp.read(buffer, (err, res) => {
//   if (err) throw new Error(err);
//   res.quality(5).write("resized.jpg");
// });
const Jimp = require("jimp");
const fs = require("fs");
// Base64 string
const data =
  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAP////////////////////////////////////////////////////////////////////////////////////8B///////////////////////////////////////////////////////////////////////////////////////AABEIAMgBLAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/ACqJCgAoAKACgAoAWgAoAKBBQAUAFABQAUAFABQAmaAEoGFABQAUgFoAWgQUAFABQAUAJQAUAFABQMKACgAoASgAoAKACgBaYBQAUAFABQAUALQAUAFAgoAKACgAoAKAEoGJQAUAJQAtAC0AFIBaBBQAUAFABQAUAJQAlAwoAKAFoAKAEoAKACgAoAKAFpgFABQAUAFAC0AFAgoAKACgAoAKACgBCaAE/wA/WgYlAwoAKBC0gFoAWgQUAFABQAlAwoAKAEoAKACgAoAKACgAoAKACgAoAKAFpgFABQAUALQAUAFAgoAKACgAoAKAEoASgYlAxKAFoAKBDqQC0CCgAoASgAoAKBhQAUAJQAUAJQAUDCgAoEFABQAUALQAUALTAKACgAoAWgAoAKBBQAUAFABQA2gYUDEoAKAEoAWkIWgBaBC0AJQAUDCmFhM0BYKACgAoAKACgBKACgYUAFIAoAKACgBaAEoAdTEFABQAUALQAUAFAgoAKACgBDQMbQMKACgBKAFoAWkIWgAoEFACUxiUAFABQAUAFAC0AFABQAlABQMKACkAUAFABQAUAFADqYgoAKAFoAKBBQAUAFABQAhoGNoGFABQAUAFAC0CFpALQISmAlAwoAKAEoGFABQAUAFABmgAoAKACgAoAKACgAoAKACkAtAC0xBQAUALQAUCCgAoAKACgBDQMbQMKAEoAWgAoAWgQtIAoEJTGFACUDCgAoAMUALigVwxQFxMUDCgBKACgAoAKAFoAKAEoAKAFpAFADqYgoAKAFoAKBBQAUAFABQAhoGNoGFABSAWgAoEFABTGFAhKBhQAUCHYoC4tIQUAFACUAFAxKAEpgJQMKACgAoAKACgYUhC0CFoAWmAUAFAC0AFAgoAKACgAoASgYlABQAUgFoAKACgBOtMBKACgYUAAoELmgLBmgAoASgAoAKBhQAUAJQAUAFABQAUAFAxaQhaBBQAtMAoAKAFoAKBBQAUAFABQAUAJSGJQAUALQAUCCgBD60xiUDCgAoAKACgAoAKACgAoAKBBQAUDCgBKACgAoGFABQIWkAtAgoAWmAUAFAC0AFAgoAKACgAoAKACkAlABQMKACgQUDDrTATFACUDCgBaBBQAUAGKACgAoAKACgAoAKAEoGFACUALQAUALSEFABQAtMAoAKAFoAKBBQAUAFABQAUAFIBKBhQAUAJTAKACgAoAKACgAoAKAFxQIOlADaBjhQDCkIKACmAUDEoAKAEoGFAC0hC0AFACUALTAKAFoAKACgQUAFABQAUAFABSASgYUAFABTASgAoAKACgAoAKACgB1AhtAxKBjhQSxaQgoGJTAKBiUAFABQAUAFIBaACgAoAKYBQAUAFAC0CCgAoAKACgAoAKQBQAlACUDFoASgBKYBQAtABQAUAAoAdSJExQUJimFxwoEFIQUAFMYlAxKACgANAAKACkAtABQIKACmMKACgBaACgQUAFABQAUAFABSAKAEoAKBhQAUAJTAKACgAoAKACgB1IkKACgBaAEoAKACmMSgYlABQAGgAoAWkAUAFAgoAKYwoAKAFoAKBBQAUAFABQAUAFIAoASgdwxQFxKACgApgFABQAtACUAAoBjqQgoELQAUAJTASgYlAwoAKACgBKQxaBC0CCgAoAKACmMKACgBaACgQUAFABQAUAFABSAKACgBKACgYUAJTAKAFoAKAEoBCUAPpCCgQtACUAFMYlAxKACgAoAKACkAtAgoAWgAoASgApjCgAoAKAFoEFABQAUAFABQAUgCgBKACgBaAEoGFACUALTEFACUDCgBaBC5oAKAEoAKACgBKBhQAUgCgBaBBQAUALQAUAFACUxhQAUALQAUCCgAoAKACgAoAKQBQAUAFABQAlAwoAKACmAUCDFABQAUAFABQAUAJQMKACgAoAKQC0AFAgoAWgAoAKACgBKYwoAKACgBaACgAoEFABQAUAFABQAtIBKAEoAWgAoAKAEpgGKAFpAFABTEJQMKBiUAFIBaAEoAKACgBaAFoEFABQAUAFABQAlMYUAFABQAtABQAUCCgAoAKACgAoAKQBQAlAC0AFABQAUwCgApAGKAEphYM0DsHNACUALSAKACgAoAKBC0AFABQAUAFABQAUAJTGFABQAUALQAUAFAgoAKACgAoAKACkAUAFABQAUAFABQAUAFABQAUAJQAUAFABQAtACUDCgQtABQAUAFABQAUAFMAoASgYUAFABQAUALQAUCCgAoAKACgAoAKQBQAUAFABQAUAFABQAUAFABQAUAFABQAUAFACUDFoEFABQAUAFABQAUAFMAoASgYUAFABQAUALQAUAFABQIKACgAoAKQBQAUAFABQAUAFABQAUAFAC0CCgAoAKACgBKBhQAUAFABQAUAFABTAKACgAoA/wD/2Q==";
// Convert base64 to buffer => <Buffer ff d8 ff db 00 43 00 ...
const buffer = Buffer.from(data, "base64");
Jimp.read(buffer, (err, res) => {
  if (err) throw new Error(err);
  res.quality(5).write("resized.jpg");
});