import React from 'react';
import Fuse from 'fuse.js';
import { numOfApprovedTerms, numOfNotApprovedTerms, numOfUtkastTerms, numOfAvvistTerms } from '../../redux/actions/SearchAction';
import { termKey } from '../../redux/actions/AppActions';
import {connect } from 'react-redux';

function listToShow() {
    function searchResult() {
        var options = {
            shouldSort: true,
            findAllMatches: true,
            threshold: 0.2,
            //score: true,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [ {
                name: "term",
                //weight: 0.9
            }, { 
                mame: "definisjon",
                //weight: 0.8 
            },
                "begrepseier",
                "kilde",
            ]
        };
        var fuse = new Fuse(this.props.items, options);
        const resultTable = fuse.search(this.props.search);
        console.log("restable", resultTable);
        return resultTable;
    }

    function godkjenteBegreper(list) {
        const allTerms = list
        var options = {
            shouldSort: true, 
            findAllMatches: true,
            threshold:0, 
            location: 0,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [ 
                "status"
            ]
        }
        var fuse = new Fuse(allTerms, options);
        const approvedList = fuse.search("Godkjent begrep");
        this.props.dispatch(numOfApprovedTerms( approvedList.length ));
        return approvedList;
    }

    //start utkastdel
    function utkastBegreper(list){
        const allTerms = list
        var options={
            shouldSort: true,
            findAllMatches: true,
            threshold: 0,
            keys:[
                "status"
            ]
        }
        var fuse = new Fuse(allTerms, options);
        const utkastList = fuse.search("Utkast");
        this.props.dispatch(numOfUtkastTerms(utkastList.length))
        return utkastList;
    }
    //slutt utkastdel

    //start avvistdel
    function avvistBegreper(list){
        const allTerms = list
        var options={
            shouldSort: true,
            findAllMatches: true,
            threshold: 0,
            keys:[
                "status"
            ]
        }
        var fuse = new Fuse(allTerms, options);
        const avvistList = fuse.search("Avvist");
        this.props.dispatch(numOfAvvistTerms(avvistList.length))
        return avvistList;
    }
    //slutt avvistdel

    function ToShow(list) {
        if ( this.props.hideNotApproved ) {
            return this.godkjenteBegreper(list);
        }
        //start utkastdel
        if( this.props.hideNotUtkast){
            return this.utkastBegreper(this.props.items);
        }
        //slutt utkastdel

        //start avvistdel
        if(this.props.hideNotAvvist){
            return this.avvistBegreper(this.props.items);
        }
        //slutt avvistdel

        //const list = ((this.props.search == "" || this.props.seeAllTerms) ? this.props.items : this.searchResult())
        return list;
    }
}

export default listToShow;