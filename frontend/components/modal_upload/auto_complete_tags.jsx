import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';


const dataSource3 = [
  {textKey: 'Seascape', valueKey: 11},
  {textKey: 'Fish', valueKey: 12},
  {textKey: 'People', valueKey: 13},
  {textKey: 'Others', valueKey: 14},
];

const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};
/**
 * The first example has `MenuItem`s in its data source that display on data entry.
 * The second example uses an array of values as its `dataSource`, and updates on focus.
 * Both examples have filtering disabled.
 */
const AutoCompleteData = ({onNewRequest}) => {

  return (
  <div>
    <AutoComplete
      hintText="Type your Tag!"
      filter={AutoComplete.noFilter}
      dataSource={dataSource3}
      dataSourceConfig={dataSourceConfig}
      onNewRequest={onNewRequest}
    /><br />
  </div>
);
};


export default AutoCompleteData;
