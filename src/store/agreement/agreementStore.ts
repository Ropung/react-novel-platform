import create from "zustand";

interface 선택약관인터페이스 {
  마케팅: boolean;
}

interface AgreementStoreState {
  optionalAgreements: 선택약관인터페이스;
  setOptionalAgreements: (optionalAgreements: 선택약관인터페이스) => void;
}

const useAgreementStore = create<AgreementStoreState>((set) => ({
  optionalAgreements: { 마케팅: false },
  setOptionalAgreements: (optionalAgreements) =>
    set((state) => {
      return { optionalAgreements };
    }),
}));

export default useAgreementStore;
