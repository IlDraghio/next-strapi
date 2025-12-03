import React from "react";

interface TableProps<T> {
  columns: { key: keyof T; label: string }[];
  data: T[];
  lastUpdate?: string;
}

export default function Table<T>({ columns, data, lastUpdate }: TableProps<T>) {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td key={String(col.key)}>
                  {row[col.key] as unknown as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot className="table-footer">
            <tr>
                <td colSpan={columns.length}>
                    {lastUpdate}
                </td>
            </tr>
        </tfoot>
      </table>
    </div>
  );
}