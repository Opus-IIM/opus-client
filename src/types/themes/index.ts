type ButtonTheme = {
  background: string;
  text: string;
  outline: string;
};

export type Theme = {
  id: number;
  name: string;
  colors: {
    light: string;
    dark: string;
    danger: string;
    white: string;
    gray: {
      600: string;
    };
    employee: {
      primary: string;
    };
    RH: {
      primary: string;
    };
    text: {
      light: string;
      dark: string;
    };

    button: ButtonTheme;
  };
};
