import * as React from 'react';
import { TableHeader, SelectStudent, ReceiptCode, Name, Region, Type, Payment, Receipt } from './local-styled/ApplicantsDataTableRow';
import gs from '../../global-styled';

interface Props {
  selectAll: Function;
}

const ApplicantsDataTableHeader = ({ selectAll }: Props) =>
  <TableHeader>
    <SelectStudent><gs.CheckBox onClick={() => selectAll()} /></SelectStudent>
    <ReceiptCode>접수번호</ReceiptCode>
    <Name>이름</Name>
    <Region>지역</Region>
    <Type>전형</Type>
    <Receipt>원서도착</Receipt>
    <Payment>전형료납부</Payment>
  </TableHeader>

export default ApplicantsDataTableHeader;