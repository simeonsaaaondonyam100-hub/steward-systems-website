import type {
  DemoTableColumn,
  DemoTableRow
} from "@/modules/operavault-demo/demo-data";

type DemoTableProps = {
  columns: DemoTableColumn[];
  rows: DemoTableRow[];
};

export function DemoTable({ columns, rows }: DemoTableProps) {
  return (
    <div className="demo-table-wrap">
      <table className="demo-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row[columns[0].key]}-${index}`}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
