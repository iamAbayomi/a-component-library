# React Component Library

This project was built with the aim of learning how to build a react component library. 

![example workflow](https://github.com/iamAbayomi/design-system/actions/workflows/push.yml/badge.svg)



![Image](https://raw.githubusercontent.com/iamAbayomi/design-system/master/public/screenshot.png)


# Installation 
To download and install the component library
```bash
npm install spiinge-comp-lib

```

# Usage

To use the component library

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import Badge from 'spiinge-comp-lib'


function App(){
    return(
        <Badge text='successful' />
    )
}

ReactDOM.render(<App />, document.querySelector('#app'));

```
The projects contains these components 

- `Avatar` 

- `AvatarAndName`

- `Badge`

- `Button`

- `Card`

- `Checkbox`

- `Dropdown`

- `InputField`

- `Modal`

- `OverviewCard`


- `Typography`

You can view the storybok canvas and documentation on chromatic at [https://6207da00fd8970003a4b561e-ujfarttnqg.chromatic.com/](https://6207da00fd8970003a4b561e-ujfarttnqg.chromatic.com/) to see how the component look in your application.
  

## Credits


- [Storybook's Design system for developers](https://storybook.js.org/tutorials/design-systems-for-developers/)

- [Shopify Polaris Foundation](https://polaris.shopify.com/components/lists-and-tables/data-table#navigation)

## License

MIT license @ [Oladini Abayomi](https://oladiniabayomi.com)
