import React from 'react';
import { Input } from 'nav-frontend-skjema';
import './SearchBar.less';

//import { Field, reduxForm } from "redux-form";
import {connect} from 'react-redux';
import { updateSearch } from '../../redux/actions/SearchAction';


class SearchBar extends React.Component{

    constructor(props){
    super(props);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch (event){
        console.log("Event value", event.currentTarget.value);
        //updateSearch(event.currentTarget.value);
        this.props.dispatch(updateSearch(event.target.value));
    }

    render(){
        return(
            <div className="inputwrapper" >
                <Input
                    label={' '} 
                    placeholder={"Søk etter en term"}
                    bredde={"XXL"} 
                    className="inputfelt" 
                    id="inputfelt1" 
                    onChange={this.onUpdateSearch}
                />    
                <div className="fglass">
                    <input  
                        type="submit" 
                        type ="image"
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMwIDMwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiMwMDY3QzUiIGQ9Ik0yOS40NzUsMjYuMDk3TDE4LjgxNywxNS40NGMyLjQyMy0zLjk2NSwxLjgxOS05LjE2LTEuNDg4LTEyLjQ2NkMxNS40MTIsMS4wNTYsMTIuODYzLDAsMTAuMTUyLDANCglDNy40NCwwLDQuODkxLDEuMDU2LDIuOTc0LDIuOTc0QzEuMDU2LDQuODkyLDAsNy40NDEsMCwxMC4xNTJjMCwyLjcxMiwxLjA1Niw1LjI2MSwyLjk3NCw3LjE3OA0KCWMxLjkxNiwxLjkxNyw0LjQ2MywyLjk3Miw3LjE3NSwyLjk3MmMxLjg3OSwwLDMuNy0wLjUxMyw1LjI5Mi0xLjQ4NWwxMC42NTYsMTAuNjU5QzI2LjQzNSwyOS44MTMsMjYuOTA0LDMwLDI3LjQxOCwzMA0KCWMwLjY0MywwLDEuMjk4LTAuMjg2LDEuNzk3LTAuNzg2YzAuNDQxLTAuNDQxLDAuNzE2LTEsMC43NzQtMS41NzVDMzAuMDQ5LDI3LjAzNiwyOS44NjYsMjYuNDg5LDI5LjQ3NSwyNi4wOTd6IE0xNy40OTMsMTAuMTUyDQoJYzAsMS45NjUtMC43NjIsMy44MDktMi4xNDgsNS4xOTRjLTEuMzg1LDEuMzg1LTMuMjMsMi4xNDgtNS4xOTQsMi4xNDhjLTEuOTY1LDAtMy44MDktMC43NjMtNS4xOTQtMi4xNDgNCgljLTEuMzg1LTEuMzg1LTIuMTQ4LTMuMjI5LTIuMTQ3LTUuMTk0YzAtMS45NjUsMC43NjItMy44MDksMi4xNDgtNS4xOTRjMS4zODYtMS4zODUsMy4yMjktMi4xNDgsNS4xOTQtMi4xNDgNCgljMS45NjMsMCwzLjgwOSwwLjc2Myw1LjE5MywyLjE0OEMxNi43MzEsNi4zNDMsMTcuNDkzLDguMTg3LDE3LjQ5MywxMC4xNTJ6Ii8+DQo8L3N2Zz4NCg=="
                    />
                </div>                   
            </div>
        );
    }
}

/** handleSubmit = event =>{
    event.preventDefault();
    this.props.search();
    this.props.page();
}*/

const mapStateToProps = (state, props) => {
    console.log(props);
    return {
        search: state.search,
    }
};

const mapActionsToProps = {
    onUpdateSearch: updateSearch
}

export default connect(mapStateToProps)(SearchBar);