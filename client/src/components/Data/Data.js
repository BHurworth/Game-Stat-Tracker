import React from 'react'

export function Data({
  personaName,
  totalKills,
  totalDeaths,
  totalPlaytime,
  totalKnifeKills,
}) {
  console.log(personaName);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Steam Name</th>
          <th>Total Kills</th>
          <th>Total Deaths</th>
          <th>Total Playtime</th>
          <th>Total Knife Kills</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td data-label="data" id="name">
            {personaName}
          </td>
          <td data-label="data" id="total-kills">
            {totalKills}
          </td>
          <td data-label="data" id="total-deaths">
            {totalDeaths}
          </td>
          <td data-label="data" id="total-playtime">
            {totalPlaytime}
          </td>
          <td data-label="data" id="total-knife-kills">
            {totalKnifeKills}
          </td>
        </tr>
      </tbody>
    </table>
  );
}





