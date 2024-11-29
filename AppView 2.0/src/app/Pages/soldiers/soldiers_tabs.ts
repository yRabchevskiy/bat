import { ITab } from "../../Models/Tabs/tabs";

export const SoldiersTabs: ITab[] = [
    { id: 'all_soldiers', label: 'Всі', url: '/soldiers/table' },
    { id: 'all_remissions', label: 'Довідки - звільнення', url: '/soldiers/remission' },
    // { id: 'hosp_soldiers', label: 'Госпіталізовані' }
];