module.exports = function transform(jiraData, existingData) {
  
  const transformedData = existingData || [];
  jiraData.issues.forEach(issue => {
    
    transformedData.push({
      key: issue.key,
      term: issue.fields.summary,
      assignee: issue.fields.assignee !== null
          ? issue.fields.assignee.displayName
          : '',
      status: issue.fields.status.name,
      begrepsforklaring: issue.fields.customfield_10610,
      definisjon: issue.fields.customfield_12229,
      oppdatert: issue.fields.updated !== null ? issue.fields.updated : '',
      begrepseier: issue.fields.customfield_12712 !== null ? issue.fields.customfield_12712.value : '',
      kilde: issue.fields.customfield_12811 !== null ? issue.fields.customfield_12811 : '',
      komponenter: issue.fields.components.name !== null ? issue.fields.components.name : '',
      relasjoner: issue.fields.issuelinks,
      fagomrade: issue.fields.customfield_12711 !== null ? issue.fields.customfield_12711.value : '',
      eksempel: issue.fields.customfield_10517
    });
  });
  return transformedData;
};
