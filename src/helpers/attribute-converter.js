export default function toPrimitive(attribute) {
  return attribute.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}
