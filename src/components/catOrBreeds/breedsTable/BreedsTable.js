import { Table } from "reactstrap";

const BreedsTable = ({ breeds }) => {
  if (breeds.length === 0) return;

  const head = Object.keys(breeds[0]).sort();

  const checkingEmptyString = (value) => (value ? value : "-");

  return (
    <Table>
      <thead>
        <tr>
          {head.map((key, index) => (
            <th key={index}>{checkingEmptyString(key)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {breeds.map((item, index) => (
          <tr key={index}>
            <th scope="row">{checkingEmptyString(item.breed)}</th>
            <td>{checkingEmptyString(item.coat)}</td>
            <td>{checkingEmptyString(item.country)}</td>
            <td>{checkingEmptyString(item.origin)}</td>
            <td>{checkingEmptyString(item.pattern)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BreedsTable;
