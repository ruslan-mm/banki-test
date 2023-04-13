export default function numberFormat(value) {
  if (Number.isInteger(value)) return new Intl.NumberFormat().format(value);
}
