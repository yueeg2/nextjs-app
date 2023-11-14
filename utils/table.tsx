import Chip from "@/components/Chip";
import { HeadCellProps, TableCollapisbleProps } from "@/components/Table/table.d";
import { Key } from "react";
import Button from "@/components/Button";
import { Control, UseFormRegister, FieldValues } from "react-hook-form";
import { type IndicesDayValue } from "@/ui/ARBackupSetting/AutoUsed";
import SetSpecificInterval from "@/ui/ARBackupSetting/AutoUsed/SetDate/Input/SetSpecificInterval";

type TableProps = {
  // [key:string]:any; //TEST
  CustomTab?: ({ children }: any) => React.JSX.Element;
  thead: Array<HeadCellProps>;
  tbody: TRProps[]; //TODO
  placeholder?: string;
  tabbable?: boolean;
  sortable?: boolean;
  selectable?: boolean;
  selectActions?: Array<{
    action: (Set: any, state: [selected: readonly string[], setSelected: React.Dispatch<React.SetStateAction<readonly string[]>>]) => (e: any) => void,
    ActionElement: (props: { onClick: any }) => JSX.Element
    status?: 'ongoing' | 'failed' | 'available' | 'processing' | 'saving' | 'running'
  }>;
  onSelect?: (selected: readonly string[]) => void;
  collapsible?: TableCollapisbleProps[];
  pageable?: boolean;
  searchable?: boolean;
  children?: JSX.Element

};

export interface StyledTableProps extends TableProps {
  styles?: any;
  isBlue?: boolean;
  bgcolor?: any;
  inlineStyle?: any;
  overflow?: { overflowX?: string, overflowY?: string }
};

export type TRCellProps = {
  id: string,
  label: any,
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right',
  [key: string]: any
};

type TRKey = "cells" | "disabled" | string

export type TRProps = {
  [key in TRKey]: {
    [key in Key]: TRCellProps
  };
};
export type MockTHProps = {
  calories: string,
  fat: string,
  carbs: string,
  protein: string,
};


export const createHeadCells = (colsName: string[]) => {
  return Array.apply(colsName, new Array(colsName.length)).map((v, i) => ({
    id: `col-${i}`,
    label: colsName[i],
    disablePadding: false,
    numeric: false,
  }));
};
export const createMatchRowCells = (rowsData: { [key: string]: unknown }[]) => {
  return Array.apply(null, new Array(rowsData.length)).map((v, i) => ({
    id: `row-${i}`,
    label: rowsData[i]?.label,
    status: rowsData[i]?.status,
    text: rowsData[i]?.text
  }));
};

export const mockStrArr = (length: number) => Array.apply(null, new Array(length)).map((v, i) => i.toString())


export const createTR = (rowID: number, Items: Array<unknown>, align: 'center' | 'left', disabledSelect?: boolean, inputDate?: boolean): TRProps => {
  //TODO
  const TRCell: any = Object.assign({}, Items.map((item: unknown, i) => {
    return ({ id: `${i}`, label: item, align: align, rowID: rowID })
  }))
  //console.log(typeof TRCell, TRCell)

  const result: { [key in TRKey]: any } = {

    [disabledSelect ? "disabled" : "cells"]: TRCell,
  }
  return result
};

export const convertToTRCell = (
  Items: IndicesDayValue[],
  control: Control<FieldValues, any>,
  register: UseFormRegister<FieldValues>,) => { //return 3 data to table -1. index -2. indices ID -3. input element
  const TRCell: {
    id: number;
    indicesName: string;
    time: JSX.Element;
  }[] = Items.map((item: IndicesDayValue, index) => {
    index += 1;
    return {
      id: index,
      indicesName: item.name,
      time:
        <SetSpecificInterval {...{
          indicesDay: item,
          control,
          register
        }} />
    };
  });
  return TRCell;

}
export const createTH = (
  Items: Array<string>,
  align: 'center' | 'left',
  hidden?: string[]
) => {
  return Items && Items.map((item: string, i) => ({
    id: `${i}`, label: item, hidden: hidden?.includes(item) || false, align: align
  }))
};


export const MockBaseRows = [
  createTR(1, ['Frozen yoghurt', 159, 6.0, 24, 4.0], 'center'),
  createTR(2, ['Ice cream sandwich', 237, 9.0, 37, 4.3], 'center'),
  createTR(3, ['Eclair', 262, 16.0, 24, 6.0], 'center'),
  createTR(4, ['Cupcake', 305, 3.7, 67, 4.3], 'center'),
  createTR(5, ['Gingerbread', 356, 16.0, 49, 3.9], 'center'),
];

export const MockBaseTHs = createTH(['名稱', '卡路里', '脂肪', '碳水', '蛋白質'], 'center');


export const MockChipRows = [
  createTR(1, [<Chip status='success' label="成功" text='成功' />, '排程', '2023/01/01    03:00 AM', 'kong-*  …', '30GB', '54321/54321'], 'left', true),
  createTR(2, [<Chip status='success' label="成功" text='成功' />, '排程', '2023/01/01    04:00 AM', 'kong-*  …', '30GB', '54321/54321'], 'left', true),
  createTR(3, [<Chip status='ongoing' label="備份中" text='備份中' />, '排程', '2023/01/02    18:00 AM', 'kong-*  …', '30GB', '54321/54321'], 'left'),
  createTR(4, [<Chip status='success' label="成功" text='成功' />, '排程', '2023/01/02    08:00 AM', 'kong-*  …', '30GB', '54321/54321'], 'left', true),
  createTR(5, [<Chip status='failed' label="失敗" text='失敗' />, '排程', '2023/01/02    08:00 AM', 'kong-*  …', '30GB', '54321/54321'], 'left'),
];
{/** 
  createTR(1, ['排程', '2023/01/01    03:00 AM', 'kong-*  …', '30GB', '54321/54321'], 'left', true),
  createTR(2, ['排程', '2023/01/01    04:00 AM', 'kong-*  …', '30GB', '54321/54321'], 'left', true),
  createTR(3, ['排程', '2023/01/02    18:00 AM', 'kong-*  …', '30GB', '54321/54321'], 'left'),
  createTR(4, ['排程', '2023/01/02    08:00 AM', 'kong-*  …', '30GB', '54321/54321'], 'left', true),
  createTR(5, ['排程', '2023/01/02    08:00 AM', 'kong-*  …', '30GB', '54321/54321'], 'left'), */}
// export const MockTLRows = [
//   createTR(1, [<TopicList text='Sadadad' />, 'foo 1', 'bar 1', 's', 's'], 'left', true),
//   createTR(2, [<TopicList text='asdfaf' />, 'foo 2', 'bar 2', 's', 's'], 'left', true),
//   createTR(3, [<TopicList text='asfagfsrgbwr' />, 'foo 3', 'bar 3', 's', 's'], 'left'),
//   createTR(4, [<TopicList text='gherhwr' />, 'foo 3', 'bar 3', 's', 's'], 'left', true),
//   createTR(5, [<TopicList text='srtw46kiliktfygh' />, 'foo 4', 'bar 4', 's', 's'], 'left'),
// ];

export const MockChipTHs = createTH(['備份狀態', '備份方式', '備份時間', 'Indices', '備份後資料量', '資料/備份筆數'], 'left');

export const MockTLTHs = createTH(['Topic Name', 'Lags', 'Offset', 'Tags'], 'left');


export const MockBackupListTHs = createTH(['導回狀態', 'Indices 名稱', 'Indices 大小', '筆數', '備份時間', '導回時間', '校驗碼檢查', ''], 'left')

export const MockBackupListTRs = [
  createTR(1, [<Chip status='success' label="完成" text='完成' />, 'auditbeat-self_monitor-2020.12.09', '36.887', '1022', '2023/04/17', '2023/04/17', '正常', <Button icon='Backup-log' tooltip='Open Backup-log' />], 'left'),
  createTR(2, [<Chip status='processing' label="導回中" text='導回中' />, 'auditbeat-self_monitor-2020.12.09', '36.887', '1022', '2023/04/17', '2023/04/17', '正常', <Button icon='Backup-log' tooltip='Open Backup-log' />], 'left'),
  createTR(3, [<Chip status='null' label="無" text='無' />, 'auditbeat-self_monitor-2020.12.09', '36.887', '1022', '2023/04/17', '2023/04/17', '正常', <Button icon='Backup-log' tooltip='Open Backup-log' />], 'left'),
  createTR(4, [<Chip status='processing' label="導回中" text='導回中' />, 'auditbeat-self_monitor-2020.12.09', '36.887', '1022', '2023/04/17', '2023/04/17', '正常', <Button icon='Backup-log' tooltip='Open Backup-log' />], 'left'),]

function descendingComparator<T extends { [key in Key]: TRCellProps }>(a: T, b: T, orderBy: keyof T) {
  // console.log('a,b', a,b)

  let targetA = a[orderBy]?.label;
  let targetB = b[orderBy]?.label;

  //if the target string value is wrapped in button, Link or a
  if (typeof b[orderBy]?.label === "object") {
    targetA = a[orderBy].label.props.children.toString();
    targetB = b[orderBy].label.props.children.toString();
  }

  if (targetB < targetA) {
    return -1;
  }
  if (targetB > targetA) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';


export function getComparator(
  order: Order,
  orderBy: Key,
): (
  a: TRCellProps,
  b: TRCellProps,
) => number {
  //console.log('order', order, 'orderBy', orderBy)
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

/**
 * handle sorting
 * @param array 
 * @param comparator 
 * @returns 
 */
export function stableSort<T extends { [key in Key]: TRCellProps }>(array: readonly T[], comparator: (a: TRCellProps, b: TRCellProps) => number) {
  try {

    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      let aTR = a[0].cells || a[0].disabled
      let bTR = b[0].cells || b[0].disabled
      // console.log(aTR[0].label, bTR[0].label)
      const order = comparator(aTR, bTR);
      //console.log('order', order)
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis

  } catch (e) {
    console.log(e)
    return []
  }



}