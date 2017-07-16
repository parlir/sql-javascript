// Takes table of objects and remaps them based on keys mapping
import rename from "../utils/rename";

export default function as(table, keys) {
  return table.map(r => rename(r, keys));
}
