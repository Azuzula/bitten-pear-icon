# bitten-pear-icon
Independent Lucide like icon "Bitten Pear"

Bitten pear icon component for React, designed precisely according to the Lucide icon guidelines.

## Installation

You can install this icon directly from GitHub:

```bash
npm install github:Azuzula/bitten-pear-icon
```

## Usage

### React (JSX)
```jsx
import { PearBitten } from 'bitten-pear-icon';

function App() {
  return <PearBitten size={48} color="#10b981" />;
}
```

### React + TypeScript (TSX)
```tsx
import React from 'react';
import { PearBitten, PearBittenProps } from 'bitten-pear-icon';

const CustomIcon = (props: PearBittenProps) => {
  return <PearBitten size="2rem" {...props} />;
};
```
