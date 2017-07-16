// Takes table and returns objects filtered off of where function arg

export default function where(table, clause) {
  return table.filter(r => clause(r));
}
