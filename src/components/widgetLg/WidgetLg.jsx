import './widgetLg.css';

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.mos.cms.futurecdn.net/3JCaEkiSwWKAwgLMjpChF3-1024-80.jpg.webp"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ritesh Kumar</span>
          </td>
          <td className="widgetLgDate">21 May 2022</td>
          <td className="widgetLgAmount">₹599.00</td>
          <td className="widgetStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.mos.cms.futurecdn.net/3JCaEkiSwWKAwgLMjpChF3-1024-80.jpg.webp"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Rishikesh Kumar</span>
          </td>
          <td className="widgetLgDate">21 May 2022</td>
          <td className="widgetLgAmount">₹599.00</td>
          <td className="widgetStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.mos.cms.futurecdn.net/3JCaEkiSwWKAwgLMjpChF3-1024-80.jpg.webp"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Rishikesh Kumar</span>
          </td>
          <td className="widgetLgDate">21 May 2022</td>
          <td className="widgetLgAmount">₹599.00</td>
          <td className="widgetStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.mos.cms.futurecdn.net/3JCaEkiSwWKAwgLMjpChF3-1024-80.jpg.webp"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Rishikesh Kumar</span>
          </td>
          <td className="widgetLgDate">21 May 2022</td>
          <td className="widgetLgAmount">₹599.00</td>
          <td className="widgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
