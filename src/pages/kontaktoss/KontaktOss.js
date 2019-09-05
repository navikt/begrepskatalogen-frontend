import React from 'react';
import './KontaktOss.less';

function KontaktOss() {
  return (
    <div className="kontaktOss">
      <h1>Kontakt oss</h1>
      <p>Her kan du ta kontakt med oss i begrepskatalogen:))</p>

      <h2> Ressurser og kontaktpersoner </h2>

        <NavTable columnWidths={[2, 2, 1]}>
          <NavTableHead>
            <NavTableHeadCell>
              Navn
        </NavTableHeadCell>
            <NavTableHeadCell>
              Rolle
        </NavTableHeadCell>
            <NavTableHeadCell>
              e-post
        </NavTableHeadCell>
            <NavTableHeadCell>
              Tilhørighet
        </NavTableHeadCell>
          </NavTableHead>
          <NavTableBody>
            <NavTableRow key={1}>
              <NavTableCell>
                Marte Vidnes Jensen
            </NavTableCell>
              <NavTableCell>
                Ansvarlig for Begrepskatalogen i NAV
            </NavTableCell>
              <NavTableCell>
                Marte.Vidnes.Jensen@nav.no
            </NavTableCell>
              <NavTableCell>
                Ytelsesavdelingen - Seksjon informasjonsforvaltning
            </NavTableCell>
            </NavTableRow>

            <NavTableRow key={2}>
              <NavTableCell>
                Silje Emilienne Aanderud-Larsen
        </NavTableCell>
              <NavTableCell>
                Strategisk produkteier
        </NavTableCell>
              <NavTableCell>
                Silje.Emilienne.Aanderud-Larsen@nav.no
        </NavTableCell>
              <NavTableCell>
                Ytelsesavdelingen - Seksjon informasjonsforvaltning
    </NavTableCell>
            </NavTableRow>

            <NavTableRow key={3}>
              <NavTableCell>
                Ingvild Alderslyst
    </NavTableCell>
              <NavTableCell>
                Prosessdriver
    </NavTableCell>
              <NavTableCell>
                Ingvild.Marie.Alderslyst@nav.no
    </NavTableCell>
              <NavTableCell>
                NAV Registerforvaltning
</NavTableCell>
            </NavTableRow>

            <NavTableRow key={4}>
              <NavTableCell>
                Rita Johansen
</NavTableCell>
              <NavTableCell>
                Prosessdriver
</NavTableCell>
              <NavTableCell>
                Rita.Johansen@nav.no
</NavTableCell>
              <NavTableCell>
                NAV Registerforvaltning
</NavTableCell>
            </NavTableRow>

            <NavTableRow key={5}>
              <NavTableCell>
                Helle Ekern
</NavTableCell>
              <NavTableCell>
                Prosessdriver
</NavTableCell>
              <NavTableCell>
                Helle.Ekern@nav.no
</NavTableCell>
              <NavTableCell>
                NAV Registerforvaltning
</NavTableCell>
            </NavTableRow>

            <NavTableRow key={6}>
              <NavTableCell>
                Ken Ingvar Friskilæ
</NavTableCell>
              <NavTableCell>
                Prosessdriver
</NavTableCell>
              <NavTableCell>
                Ken.Ingvar.Friskile@nav.no
</NavTableCell>
              <NavTableCell>
                NAV Registerforvaltning
</NavTableCell>
            </NavTableRow>
          </NavTableBody>
        </NavTable>

  
    </div > 

  );
}

export default KontaktOss;
