export interface IEquipmentHistoryItem {
  _id?: string;
  date: Date;
  name_of_received: string; // хто отримав
  name_of_published: string; // хто видав
  count: number; // кількість
  description: string;
}

export interface IActualPresenceInfo {
  _id?: string;
  count: number; // кількість
  price: number; // вартість
}

export interface IAccountingInfo {
  _id?: string;
  count: number; // кількість
  actual_price: number; // первісна ціна, така сама як і IActualPresenceInfo price
  depreciation_amount: number; // сума зносу
  ballance_price: number; // балансова вартість = actual_price - depreciation_amount;
}

export interface IEquipmentItemInfo {
  _id?: string;
  name: string; // назва одиниці
  serial_number: string; // серійний номер
  passport_number: string; // номер паспорту
  created_date: Date; // дата виготовлення
  unit_count: number; // кількість
  unit_of_measurement: string; // одиниця виміру
  actual_presence_info: IActualPresenceInfo; // фактична наявність
  accounting_info: IAccountingInfo; // бухгалтерський облік
  description: string;
}
export interface IEquipment {
  _id?: string;
  data_name: string; // назва
  data_number: string; // номер накладної
  receiving_date: Date; // дата отримання
  name_of_received: string; // хто отримав
  organization_name: string; // організація яка передала
  items: IEquipmentItemInfo[];
  history: IEquipmentHistoryItem[];
  description: string;
}

export interface IEquipmentPostData {
  data_name: string; // назва
  data_number: string; // номер накладної
  receiving_date: Date; // дата отримання
  name_of_received: string; // хто отримав
  organization_name: string; // організація яка передала
  items: IEquipmentItemInfo[];
  history: IEquipmentHistoryItem[];
  description: string;
}
