import { ITab } from "../../Models/Tabs/tabs";

export const SoldiersTabs: ITab[] = [
    { id: 'all_soldiers', label: 'Всі', url: '/soldiers/table' },
    { id: 'all_remissions', label: 'Амб. довідки', url: '/soldiers/remission' },
    { id: 'all_hospitalization', label: 'Госпіталізації', url: '/soldiers/hospitalization' },
    { id: 'all_vlc_', label: 'ВЛК', url: '/soldiers/vlk' }
];