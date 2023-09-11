export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined;
      CreateCategory: {
        modal: boolean;
        task:TaskProps
      };
      Home: undefined;

      Options: {
        isChecked: boolean;
        modal: boolean;
      };
    }
  }
}
