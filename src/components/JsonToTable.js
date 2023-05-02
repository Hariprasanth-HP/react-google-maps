import "jspdf-autotable";

function JSONToTable(props) {
  const { data } = props;
  const headers = Object.keys(data[0]);

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th style={{ border: "2px solid" }} key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header, index) => (
              <td style={{ border: "2px solid" }} key={index}>
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default JSONToTable;
