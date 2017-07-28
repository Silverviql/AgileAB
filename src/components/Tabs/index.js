import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import Table from 'components/Table';
import TableProp from 'components/Table/TableProp';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  render() {
    return (
      <div>
        <Tabs style={styles}>
          <Tab label="Таблица" value={0} >
            <Table />
          </Tab>
          <Tab label="Настройки" value={1}>
            <TableProp />
          </Tab>
        </Tabs>
      </div>
    );
  }
}