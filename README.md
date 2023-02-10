# Starter

Com o [Native Wind](https://www.nativewind.dev) posso utilizar estilização através de classes nos componentes.

### Styled

```tsx
import { TouchableOpacity, Text } from "react-native";
import { styled } from "nativewind";

function ButtonStyled({ ...rest }) {
  return (
    <TouchableOpacity
      className="h-14 bg-green-500 rounded-md items-center justify-center"
      {...rest}
    >
      <Text className="text-white font-bold text-lg">Hello</Text>
    </TouchableOpacity>
  );
}

export const Button = styled(ButtonStyled);

// Esse styled vai passar automaticamente as propriedades para o TouchableOpacity sem ter que criar uma tipagem manual.
```

### Styled Component

```tsx
import { TouchableOpacity, Text } from "react-native";
import { StyledComponent } from "nativewind";

export function Button({ ...rest }) {
  return (
    <StyledComponent component={TouchableOpacity} {...rest}>
      <TouchableOpacity className="h-14 bg-green-500 rounded-md items-center justify-center">
        <Text className="text-white font-bold text-lg">Hello</Text>
      </TouchableOpacity>
    </StyledComponent>
  );
}
// O StyledComponent vai passar as estilizações para o component de baixo, nesse caso o TouchableOpacity
```
