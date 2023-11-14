import { createTheme } from "@mui/material";

export const CheckboxTheme = createTheme({
  components: {
    // Name of the component
    MuiCheckbox: {
      styleOverrides: {
        // Name of the slot
        // root: {
        //   // Some CSS
        //   color: '#10a4b9 !important',
        // },
        // indeterminate: {
        //   color: '#10a4b9 !important',
        // },
        root: ({ ownerState }) => ({
          ...(!ownerState.disabled ? {
            color: ownerState.checked ? 'var(--steelBlue) !important':  '#aaaaaa',
          }: {
            color: '#aaaaaa',
          }),
        }),
      },
    },
  },
});
