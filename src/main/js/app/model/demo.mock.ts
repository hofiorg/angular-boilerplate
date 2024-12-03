import {Demo, DemoFilter} from './demo.model';

export const demoFilterMock : DemoFilter = {
  eingangVon: '20241224',
  eingangBis: '20241230',
  system: 'ABC',
  nachrichtentyp: 'BCD',
  nummer1: '12345678',
  nummer2: '23456789',
};

export const demoListMock : Demo[] = [{
  name: 'Name 1',
  gender: 'Gender 1',
  company: 'Company 1'
}];
