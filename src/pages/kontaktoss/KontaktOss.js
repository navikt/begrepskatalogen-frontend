import React from 'react';
import './KontaktOss.less';

function KontaktOss() {
  return (
    <div className="kontaktOss">
      <h1>Kontakt oss</h1>
      <p>Her kan du ta kontakt med oss i begrepskatalogen:))</p>
      <p> </p>
      <h2> Ressurser og kontaktpersoner </h2>
      <p> </p>
        <table columnWidths={[2, 2, 1]}>
          <thead>
            <tr>
            <th>
              Navn
        </th>
            <th>
              Rolle
        </th>
            <th>
              e-post
        </th>
            <th>
              Tilhørighet
        </th>
          </tr>
          </thead>
          <tbody>
            <tr key={1}>
              <td>
                Marte Vidnes Jensen
            </td>
              <td>
                Ansvarlig for Begrepskatalogen i NAV
            </td>
              <td>
              <a href="mailto:Marte.Vidnes.Jensen@nav.no">Marte.Vidnes.Jensen@nav.no</a>
            </td>
              <td>
                Ytelsesavdelingen - Seksjon informasjonsforvaltning
            </td>
            </tr>

            <tr key={2}>
              <td>
                Silje Emilienne Aanderud-Larsen
        </td>
              <td>
                Strategisk produkteier
        </td>
              <td>
              <a href="mailto:Silje.Emilienne.Aanderud-Larsen@nav.no">Silje.Emilienne.Aanderud-Larsen@nav.no</a>
        </td>
              <td>
                Ytelsesavdelingen - Seksjon informasjonsforvaltning
    </td>
            </tr>

            <tr key={3}>
              <td>
                Ingvild Alderslyst
    </td>
              <td>
                Prosessdriver
    </td>
              <td>
              <a href="mailto:Ingvild.Marie.Alderslyst@nav.no">Ingvild.Marie.Alderslyst@nav.no</a>
    </td>
              <td>
                NAV Registerforvaltning
</td>
            </tr>

            <tr key={4}>
              <td>
                Rita Johansen
</td>
              <td>
                Prosessdriver
</td>
              <td>
              <a href="mailto:Rita.Johansen@nav.no">Rita.Johansen@nav.no</a>
</td>
              <td>
                NAV Registerforvaltning
</td>
            </tr>

            <tr key={5}>
              <td>
                Helle Ekern
</td>
              <td>
                Prosessdriver
</td>
              <td>
              <a href="mailto:Helle.Ekern@nav.no">Helle.Ekern@nav.no</a>
</td>
              <td>
                NAV Registerforvaltning
</td>
            </tr>

            <tr key={6}>
              <td>
                Ken Ingvar Friskilæ
</td>
              <td>
                Prosessdriver
</td>
              <td>
              <a href="mailto:Ken.Ingvar.Friskile@nav.no">Ken.Ingvar.Friskile@nav.no</a>
</td>
              <td>
                NAV Registerforvaltning
</td>
            </tr>
          </tbody>
        </table>

  
    </div > 

  );
}

export default KontaktOss;
