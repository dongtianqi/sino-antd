/* eslint-disable linebreak-style,no-param-reassign */
import { getUrlParams } from './utils';

// mock tableListDataSource
let tableListDataSource = [];

for (let i = 0; i < 46; i += 1) {
  tableListDataSource.push({
    mupId: `${i}`,
    mupName: '司法考试软件包',
    mupVersion: '1.1',
    mupRemark: '国家司法考试软件包',
    mupMd5: 'asdasdasdasd123123123',
    mupSize: 5000,
    mupState: '1',
    deGmtCreate: '2017-12-12 12:12:12',
    deGmtModified: '2017-12-12 12:12:12',
    mupIsDeleted: false,
  });
}
export function getUkeyProgramMockData(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const params = getUrlParams(url);
  let dataSource = [...tableListDataSource];
  // 模拟根据查询条件过滤
  if (params.sorter) {
    const s = params.sorter.split('_');
    dataSource = dataSource.sort((prev, next) => {
      if (s[1] === 'descend') {
        return next[s[0]] - prev[s[0]];
      }
      return prev[s[0]] - next[s[0]];
    });
  }
  // if (params.deExamName) {
  //   dataSource = dataSource.filter(data => data.deExamName.trim() === params.deExamName.trim());
  // }
  // if (params.deUnitId) {
  //   dataSource = dataSource.filter(data => data.deUnitId === params.deUnitId);
  // }

  let pageSize = 10;
  if (params.pageSize) {
    pageSize = params.pageSize * 1;
  }

  const result = {
    status: '1',
    msg: '成功',
    dataMain: {
      list: dataSource,
      pagination: {
        total: dataSource.length,
        pageSize,
        current: parseInt(params.current, 10) || 1,
      },
    },
  };

  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}
export function getUkeyProgramViewData(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const result = {
    status: '1',
    msg: '成功',
    dataMain: {
      machineUkeyProgramVo: {
        mupId: 'dfdfsdfwerwer234234sdfdf',
        mupName: '司法考试软件包',
        mupVersion: '1.1',
        mupRemark: '国家司法考试软件包',
        mupResourceId: 'asdasdasdasd123123123',
        mupState: 1,
        mupGmtCreate: '2017-12-12 12:12:12',
        mupGmtModified: '2017-12-12 12:12:12',
        mupIsDeleted: false,
      },
    },
  };

  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}
export function postUkeyProgramMockData(req, res, u, b) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const body = (b && b.body) || req.body;
  const { method, mupId } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'remove':
      tableListDataSource = tableListDataSource.filter(item => mupId.indexOf(item.mupId) === -1);
      break;
    case 'update':
      tableListDataSource = tableListDataSource.map(
        (item) => {
          if (item.mupId === mupId) {
            // item.deExamName = deExamName;
            // item.deExamRemark = deExamRemark;
            // item.deUnitName = deUnitName;
          }
          return item;
        }
      );
      break;
    case 'add':

      break;
    default:
      break;
  }

  const result = {
    status: '1',
    msg: '成功',
  };

  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}

export default {
  getUkeyProgramViewData,
  getUkeyProgramMockData,
  postUkeyProgramMockData,
};
