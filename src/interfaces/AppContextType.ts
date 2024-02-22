export interface AppContextType {
    selectedChip: number | undefined;
    setSelectedChip: React.Dispatch<React.SetStateAction<number | undefined>>;
}