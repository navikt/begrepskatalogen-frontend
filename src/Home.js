import React, { Component } from 'react';
import Table from './components/table/Table';

import FilterField from './components/FilterSelectField/FilterField';
import SortField from './components/SortSelectField/SortField';


export class Home extends Component {
    render() {
        return (
            <div>

                <h1>homepage</h1>
                <FilterField/><SortField/>
                <Table/>
                

            </div>
        );
    }
}

export default Home;
