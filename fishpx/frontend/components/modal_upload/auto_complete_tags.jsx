import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';


const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};
/**
 * The first example has `MenuItem`s in its data source that display on data entry.
 * The second example uses an array of values as its `dataSource`, and updates on focus.
 * Both examples have filtering disabled.
 */
const AutoCompleteData = ({onNewRequest, tagData}) => {

  return (
  <div>
    <AutoComplete
      hintText="Please select a category"
      filter={AutoComplete.noFilter}
      dataSource={tagData}
      dataSourceConfig={dataSourceConfig}
      onNewRequest={onNewRequest}
    /><br />
  </div>
);
};


export default AutoCompleteData;
